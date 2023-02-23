package vttp.csf.csfre.models;

import java.util.Date;

import org.bson.Document;

import jakarta.json.Json;
import jakarta.json.JsonObject;


public class Item {

    private String postingId;
    private String postingDate = new Date().toString();
    private String name;
    private String email;
    private String phone;
    private String title;
    private String description;
    private String imageUrl;

    public Item() {}


    public Item(String id, String name, String email, 
                String phone, String title, String description) {
        this.postingId = id;
        this.name = name;
        this.email = email;
        this.phone = phone;
        this.title = title;
        this.description = description;
    }

    public String getPostingId() { return postingId; }
    public void setPostingId(String postingId) { this.postingId = postingId; }
    
    public String getPostingDate() { return postingDate; }
    public void setPostingDate(String postingDate) { this.postingDate = postingDate; }
    
    public String getName() { return name; }
    public void setName(String name) { this.name = name; }
    
    public String getEmail() { return email; }
    public void setEmail(String email) { this.email = email; }
    
    public String getPhone() { return phone; }
    public void setPhone(String phone) { this.phone = phone; }
    
    public String getTitle() { return title; }
    public void setTitle(String title) { this.title = title; }
    
    public String getDescription() { return description; }
    public void setDescription(String description) { this.description = description; }
    
    public String getImageUrl() { return imageUrl; }
    public void setImageUrl(String imageUrl) { this.imageUrl = imageUrl; }


    public static Item create(JsonObject jsonObject){
        Item item = new Item();
        item.setPostingId(jsonObject.getString("postingId"));
        item.setPostingDate(jsonObject.getString("postingDate"));
        item.setName(jsonObject.getString("name"));
        item.setEmail(jsonObject.getString("email"));
        item.setPhone(jsonObject.getString("phone") == null ? "" : jsonObject.getString("phone"));
        item.setTitle(jsonObject.getString("title"));
        item.setDescription(jsonObject.getString("description"));
        item.setImageUrl(jsonObject.getString("image"));

        return item;
       
    }

    public JsonObject toJson(){
        return Json.createObjectBuilder()
                .add("postingId", getPostingId())
                .add("postingDate", getPostingDate())
                .add("name", getName())
                .add("email", getEmail())
                .add("phone", getPhone())
                .add("title", getTitle())
                .add("description", getDescription())
                .add("image", getImageUrl())
                .build();
    }
    
    public Document toDocument(){
        Document d = new Document();

        d.append("posting_id", getPostingId());
        d.append("posting_date", getPostingDate());
        d.append("name", getName());
        d.append("email", getEmail());
        d.append("phone", getPhone() == null ? "" : getPhone());
        d.append("title", getTitle());
        d.append("description", getDescription());
        d.append("image", getImageUrl());

        return d;


    }
    
}
