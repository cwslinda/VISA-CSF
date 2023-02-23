package vttp.csf.csfre.controller;

import java.util.Optional;
import java.util.UUID;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestPart;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.multipart.MultipartFile;

import jakarta.json.Json;
import jakarta.json.JsonObject;
import vttp.csf.csfre.models.Item;
import vttp.csf.csfre.repository.MongoRepo;
import vttp.csf.csfre.repository.RedisRepo;
import vttp.csf.csfre.service.AmazonS3Service;

@Controller
@RequestMapping("/api")
public class ItemController {

    @Autowired
    private AmazonS3Service s3Service;

    @Autowired
    private RedisRepo redisRepo;


    @Autowired
    private MongoRepo mongoRepo;


    @PostMapping(path = "/posting", consumes=MediaType.MULTIPART_FORM_DATA_VALUE, 
                                    produces=MediaType.APPLICATION_JSON_VALUE)
    @ResponseBody
    @CrossOrigin()
    public ResponseEntity<String> postItems(@RequestPart("name") String name, @RequestPart("email") String email,
                                            @RequestPart("phone") String phone, @RequestPart("title") String title,
                                            @RequestPart("description") String description, @RequestPart("image") MultipartFile image){
       

    if(!(phone.length() == 8)) phone = "";

    // unique posting id

    String key = UUID.randomUUID().toString().substring(0,8);

    Item item = new Item(key, name, email, phone, title, description);

    String imageUrl = "";

    try {
        imageUrl = s3Service.upload(image, title, key,  item.getPostingDate());
    } catch (Exception e) {
        e.printStackTrace();
    }

    System.out.println(imageUrl);

    item.setImageUrl(imageUrl);

    // save item to redis 
    JsonObject itemJson = item.toJson();
    redisRepo.setKey(item.getPostingId(), itemJson);

    return ResponseEntity.ok(itemJson.toString());
    }
    


    @PutMapping(path = "/posting/{postingId}", consumes=MediaType.APPLICATION_JSON_VALUE, 
                                                produces=MediaType.APPLICATION_JSON_VALUE)
    @ResponseBody
    @CrossOrigin()
    public ResponseEntity<String> confirmItem(@PathVariable String postingId){

        Optional<Item> opt = redisRepo.getItems(postingId);

        if(opt.isEmpty()){
            return ResponseEntity.status(404)
                    .body(Json.createObjectBuilder()
                        .add("message", "Posting Id %s not found".formatted(postingId))
                        .build()
                        .toString());
        }

        redisRepo.deletePosting(postingId);


        mongoRepo.insertItem(opt.get());

        return ResponseEntity.status(200)
                    .body(Json.createObjectBuilder()
                        .add("message", "Accepted %s".formatted(postingId))
                        .build()
                        .toString());





    }
}
