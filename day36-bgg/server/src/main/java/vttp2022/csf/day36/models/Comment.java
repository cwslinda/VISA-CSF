package vttp2022.csf.day36.models;

import org.bson.Document;

import jakarta.json.Json;
import jakarta.json.JsonObject;

public class Comment {
    private String user;
    private int rating;
    private String text;
    private String cId;

    public String getUser() { return user; }
    public void setUser(String user) { this.user = user;}
    
    public int getRating() { return rating; }
    public void setRating(int rating) { this.rating = rating;}
    
    public String getText() { return text; }
    public void setText(String text) { this.text = text;}
    
    public String getcId() { return cId; }
    public void setcId(String cId) { this.cId = cId;}
    


    public JsonObject toJson(){
        return Json.createObjectBuilder()
            .add("comment", cId)
            .add("user", user)
            .add("text", text)
            .add("rating", rating)
            .build();
    }

    public static Comment create(Document doc){
        Comment c = new Comment();
        c.setcId(doc.getString("c_id"));
        c.setUser(doc.getString("user"));
        c.setRating(doc.getInteger("rating"));
        c.setText(doc.getString("c_text"));
        return c;
        }
    }

