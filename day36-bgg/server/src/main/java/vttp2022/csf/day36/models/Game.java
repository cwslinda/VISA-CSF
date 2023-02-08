package vttp2022.csf.day36.models;

import org.bson.Document;

import jakarta.json.Json;
import jakarta.json.JsonObject;

public class Game {
    private Integer gameId;
    private String name;
    
    
    public Integer getGameId() { return gameId; }
    public void setGameId(Integer gameId) { this.gameId = gameId;}


    public String getName() { return name; }
    public void setName(String name) { this.name = name;}


    public JsonObject toJson(){
        return Json.createObjectBuilder()
            .add("gameId", gameId)
            .add("name", name)
            .build();
    }


    public static Game create(Document d){
        Game g = new Game();
        g.setGameId(d.getInteger("gid"));
        g.setName(d.getString("name"));
        return g;
    }

    
}
