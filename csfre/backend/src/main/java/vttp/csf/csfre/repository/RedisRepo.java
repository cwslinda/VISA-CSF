package vttp.csf.csfre.repository;

import java.io.ByteArrayInputStream;
import java.io.InputStream;
import java.time.Duration;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.data.redis.core.RedisTemplate;
import org.springframework.data.redis.core.ValueOperations;
import org.springframework.stereotype.Repository;

import jakarta.json.Json;
import jakarta.json.JsonObject;
import jakarta.json.JsonReader;

import vttp.csf.csfre.models.Item;

@Repository
public class RedisRepo {


	@Autowired 
    @Qualifier("itemcache")
	private RedisTemplate<String, String> template;


    public void setKey(String postingId, JsonObject obj){
        ValueOperations<String, String> ops = template.opsForValue();

        ops.set(postingId, obj.toString(), Duration.ofSeconds(900));
    }

    public Optional<Item> getItems(String id){
     System.out.println("id " + id);
     
     ValueOperations<String, String> ops = template.opsForValue();
     
     String value = ops.get(id);
     System.out.println("value >>> " + value);

     if(null == value){
        return Optional.empty();
     }

     Item item = new Item();
     try (InputStream is = new ByteArrayInputStream(value.getBytes())) {
        JsonReader r = Json.createReader(is);
        item = Item.create(r.readObject());
        System.out.println(item);
        return Optional.of(item);
        
     } catch (Exception e) {
        e.printStackTrace();
        return Optional.empty();

     }
    }

    public void deletePosting(String id) {
        template.delete(id);
    }
}
