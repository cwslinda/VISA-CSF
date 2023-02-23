package vttp.csf.csfre.repository;

import org.bson.Document;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.stereotype.Repository;

import vttp.csf.csfre.models.Item;

@Repository
public class MongoRepo {
    

    @Autowired
    private MongoTemplate template;


    public void insertItem(Item item){
         Document toInsert = item.toDocument();

         template.insert(toInsert, "postings");
    }
    
}
