package vttp2022.csf.day37demo.service;

import java.io.IOException;
import java.util.Date;
import java.util.HashMap;
import java.util.Map;
import java.util.UUID;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import com.amazonaws.services.s3.AmazonS3;
import com.amazonaws.services.s3.model.CannedAccessControlList;
import com.amazonaws.services.s3.model.ObjectMetadata;
import com.amazonaws.services.s3.model.PutObjectRequest;

@Service
public class S3Service {
    

    @Autowired
    private AmazonS3 s3Client;


    public String upload(MultipartFile file) throws IOException{
        Map<String, String> userData = new HashMap<>();
        userData.put("name", "fred");
        userData.put("uploadTime", (new Date().toString()));
        userData.put("originalFilename", file.getOriginalFilename());


        ObjectMetadata metadata = new ObjectMetadata();
        metadata.setContentLength(file.getSize());
        metadata.setContentType(file.getContentType());
        metadata.setUserMetadata(userData);

        String key = UUID.randomUUID().toString().substring(0,8);
        System.out.println("key >>> " + "myobject/%s".formatted(key));

        PutObjectRequest putReq = new PutObjectRequest(
                    "cws", 
                    "myobject/%s".formatted(key), 
                    file.getInputStream(), 
                    metadata);
        

        // only if you want public access
        putReq.withCannedAcl(CannedAccessControlList.PublicRead);
        
        s3Client.putObject(putReq);

        return key;
    }
    
        
}

