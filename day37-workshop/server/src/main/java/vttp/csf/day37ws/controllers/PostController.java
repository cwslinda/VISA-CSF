package vttp.csf.day37ws.controllers;

import java.util.UUID;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestPart;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.multipart.MultipartFile;

import jakarta.json.Json;
import vttp.csf.day37ws.service.PostService;

@Controller
@RequestMapping(path = "/api")
public class PostController {


    @Autowired 
    private PostService svc;

    @PostMapping(path = "/post", consumes=MediaType.MULTIPART_FORM_DATA_VALUE,
    produces=MediaType.APPLICATION_JSON_VALUE)
    @ResponseBody
    public ResponseEntity<String> postToFeeds(@RequestPart("comments") String comments, @RequestPart("picture") MultipartFile picture ){
        

        String postId = UUID.randomUUID().toString().substring(0, 8);
        
        try {
            svc.postToFeed(postId, comments, picture);
        } catch (Exception e) {
            e.printStackTrace();
            return ResponseEntity.status(500).body(Json.createObjectBuilder().add("e", e.getMessage()).toString());
        }
        
        return ResponseEntity.status(200).body(Json.createObjectBuilder().
            add("postId", postId).build().toString());
    }
    

    


    
}
