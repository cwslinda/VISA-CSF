package vttp2022.csf.day36.controllers;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import jakarta.json.Json;
import jakarta.json.JsonArrayBuilder;
import vttp2022.csf.day36.models.Book;
import vttp2022.csf.day36.service.BookService;

@Controller
@RequestMapping(path =  "/api")
public class BookController {
    
    @Autowired
    private BookService bookSvc;
    
    @GetMapping(path = "/books")
    @ResponseBody
    public ResponseEntity<String> getBooks(){
        JsonArrayBuilder arrBuilder = Json.createArrayBuilder();
        bookSvc.getBooks().stream()
            .forEach(v -> {
                arrBuilder.add(v.toBookSummary());
        });
        
        return ResponseEntity.ok(arrBuilder.build().toString());
    }


    @GetMapping(path = "/book/{bookId}")
    @ResponseBody
    public ResponseEntity<String> getBookById(@PathVariable String bookId){
        Optional<Book> opt = bookSvc.getBookById(bookId);
        if(opt.isEmpty())
            return ResponseEntity
                .status(404)
                .body(
                    Json.createObjectBuilder()
                    .add("message:", "cannot find book".formatted(bookId))
                    .build().toString()
                );
        
            return ResponseEntity.status(200).body(opt.get().toBook().toString());

    }}
