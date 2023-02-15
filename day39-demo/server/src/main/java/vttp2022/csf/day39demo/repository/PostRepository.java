package vttp2022.csf.day39demo.repository;

import java.util.List;
import java.util.Optional;

import java.util.Optional;

import org.bson.Document;
import org.bson.types.ObjectId;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.data.mongodb.core.query.Criteria;
import org.springframework.data.mongodb.core.query.Query;
import org.springframework.stereotype.Repository;

import vttp2022.csf.day39demo.models.Post;


@Repository
public class PostRepository {

	@Autowired
	private MongoTemplate template;

	public ObjectId insertPost(Post post) {
		Document insertedDoc = template.insert(post.toDocument(), "post");
		return insertedDoc.getObjectId("_id");
	}

	public Optional<Post> getPost(String postId) {
		Criteria criteria = Criteria.where("postId").is(postId);
		Query query = Query.query(criteria);
		Document result = template.findOne(query, Document.class, "post");
		if (null == result)
			return Optional.empty();

		return Optional.of(Post.create(result));
	}

    public List<Post> findPostById(int userId){
        
        Criteria c = Criteria.where("userId").is(userId);

        Query q = Query.query(c);

       return template.find(q, Document.class, "post")
            .stream()
            .map(v  -> {
                return Post.create(v);
            })
            .toList();
    }

    
}
