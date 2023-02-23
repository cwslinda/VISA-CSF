package vttp2022.assessment.csf.orderbackend.repositories;

import java.util.LinkedList;
import java.util.List;

import org.bson.Document;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.data.mongodb.core.query.Criteria;
import org.springframework.data.mongodb.core.query.Query;
import org.springframework.stereotype.Repository;

import vttp2022.assessment.csf.orderbackend.models.Order;

@Repository
public class PizzaRepo {


    @Autowired
    private MongoTemplate template;


    public void createOrder(Order order){
        Document toInsert = order.toDocument();

        template.insert(toInsert, "orders");
    }

    public List<Order> getOrders(String email){
        
        List<Document> results = template.find(Query.query(Criteria.where("email").is(email)), 
                                                    Document.class, "orders");
    
        List<Order> orders = new LinkedList<>();
        for(Document d: results){
            Order o = Order.create(d);
            orders.add(o);
        }

        return orders;

    }
    
}
