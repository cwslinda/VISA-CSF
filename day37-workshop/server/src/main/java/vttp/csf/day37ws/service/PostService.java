package vttp.csf.day37ws.service;

import java.io.IOException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import vttp.csf.day37ws.repository.PostRepo;

@Service
public class PostService {

    @Autowired 
    private PostRepo postRepo;

    public boolean postToFeed(String postId, String comments, MultipartFile pic ) throws IOException{
        
        return postRepo.postToFeed(postId, comments, pic);
    }
    
}
