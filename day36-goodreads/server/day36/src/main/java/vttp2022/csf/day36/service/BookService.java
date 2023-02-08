package vttp2022.csf.day36.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import vttp2022.csf.day36.models.Book;
import vttp2022.csf.day36.repository.BookRepository;

@Service
public class BookService {

    @Autowired
    private BookRepository bookRepo;


    public List<Book> getBooks(){
        return bookRepo.getBooks();
    }

    public Optional<Book> getBookById(String bookId){
        return bookRepo.getBookById(bookId);
    }
    
}
