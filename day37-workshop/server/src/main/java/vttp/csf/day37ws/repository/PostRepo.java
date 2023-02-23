package vttp.csf.day37ws.repository;

import java.io.IOException;
import java.io.InputStream;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;
import org.springframework.web.multipart.MultipartFile;


import static vttp.csf.day37ws.repository.Queries.*;

@Repository
public class PostRepo {


    @Autowired
    private JdbcTemplate template;

    public boolean postToFeed(String postId, String comments, MultipartFile file ) throws IOException{
        
        InputStream is = file.getInputStream();
        int updated = template.update(SQL_POST_TO_FEEDS, postId, comments, is);

        System.out.println("updated");

        return updated > 0;

    }


    
}
