package vttp2022.csf.day36.repository;

import java.util.List;

import org.bson.Document;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.data.mongodb.core.query.Criteria;
import org.springframework.data.mongodb.core.query.Query;
import org.springframework.stereotype.Repository;

import vttp2022.csf.day36.models.Comment;

@Repository
public class CommentRepo {
    
    @Autowired
    private MongoTemplate template;

    //look for comments based on gid
    //db.comments.findOne({gid:1})
    public List<Comment> findCommentById(int gameId){
        
        Criteria c = Criteria.where("gid").is(gameId);

        Query q = Query.query(c);

       return template.find(q, Document.class, "comments")
            .stream()
            .map(v  -> {
                return Comment.create(v);
            })
            .toList();
    }
    
}
