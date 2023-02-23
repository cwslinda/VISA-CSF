package vttp.csf.csfre.service;

import java.io.IOException;
import java.util.HashMap;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import com.amazonaws.services.s3.AmazonS3;
import com.amazonaws.services.s3.model.CannedAccessControlList;
import com.amazonaws.services.s3.model.ObjectMetadata;
import com.amazonaws.services.s3.model.PutObjectRequest;

@Service
public class AmazonS3Service {

    @Autowired
    private AmazonS3 s3Client;

    @Value("${spaces.bucket}")
	private String spacesBucket;

	@Value("${spaces.endpoint.url}")
	private String spacesEndpointUrl;


    public String upload(MultipartFile file, String title, String key, String date) throws IOException{
        

        Map<String, String> userData = new HashMap<>();
        userData.put("title", title);
        userData.put("date", date);
        userData.put("original", file.getOriginalFilename());


        ObjectMetadata metadata = new ObjectMetadata();
        metadata.setContentType(file.getContentType());
        metadata.setContentLength(file.getSize());


       
        PutObjectRequest putReq = new PutObjectRequest(spacesBucket, 
                                                        "items/%s".formatted(key), 
                                                        file.getInputStream(), 
                                                        metadata);

       putReq =  putReq.withCannedAcl(CannedAccessControlList.PublicRead);

       s3Client.putObject(putReq);

       return "https://cws.sgp1.digitaloceanspaces.com/items%2F" + key;




       
    }
    
}
