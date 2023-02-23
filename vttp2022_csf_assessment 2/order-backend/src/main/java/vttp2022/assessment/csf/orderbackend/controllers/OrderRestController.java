package vttp2022.assessment.csf.orderbackend.controllers;

import java.util.LinkedList;
import java.util.List;

import org.apache.catalina.connector.Response;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import jakarta.json.Json;
import jakarta.json.JsonArrayBuilder;
import jakarta.json.JsonObject;
import vttp2022.assessment.csf.orderbackend.models.Order;
import vttp2022.assessment.csf.orderbackend.models.OrderSummary;
import vttp2022.assessment.csf.orderbackend.services.OrderService;

@Controller
@RequestMapping("/api")
public class OrderRestController {

    @Autowired
    private OrderService orderService;


    @PostMapping(path = "/order", consumes=MediaType.APPLICATION_JSON_VALUE, produces=MediaType.APPLICATION_JSON_VALUE)
    @ResponseBody
    @CrossOrigin()
    public ResponseEntity<String> createOrder(@RequestBody Order order){

        try {
            orderService.createOrder(order);
        } catch (Exception e) {
            System.out.println("error message " + e.getMessage());
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(e.getMessage());
        }

        return ResponseEntity.ok(Json.createObjectBuilder().add("successful", true).build().toString());
        
    }


    @GetMapping(path = "/order/{email}/all", consumes=MediaType.APPLICATION_JSON_VALUE, produces=MediaType.APPLICATION_JSON_VALUE)
    @ResponseBody
    @CrossOrigin()
    public ResponseEntity<String> getOrders(@PathVariable String email){

        List<OrderSummary> summaries = new LinkedList<>();

        try {
            summaries = orderService.getOrdersByEmail(email);
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(e.getMessage());
        }

        if(summaries.size() == 0){
            System.out.println("no summaries");
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(Json.createObjectBuilder()
            .add("count", summaries.size()).build().toString());
        }

        JsonArrayBuilder arrBuilder = Json.createArrayBuilder();
        for(OrderSummary os : summaries){
            arrBuilder.add(os.toJSON());
        }
        JsonObject json = Json.createObjectBuilder()
                            .add("count", summaries.size())
                            .add("orderSummaries", arrBuilder.build())
                            .build();
                            
        return ResponseEntity.ok(json.toString());
        }

        
    }

    


