package vttp.csf.day37ws.models;

public class Post {
    private String postId;
    private String comments;
    private Byte[] picture;
    
    public String getPostId() { return postId;}
    public void setPostId(String postId) { this.postId = postId;}
    
    public String getComments() {return comments;}
    public void setComments(String comments) { this.comments = comments;}

    public Byte[] getPicture() {return picture;}
    public void setPicture(Byte[] picture) { this.picture = picture;}
    
}
