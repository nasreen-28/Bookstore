package com.example.demo.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.model.Book;
import com.example.demo.service.BookService;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/user")
public class UserContoller {
    @Autowired
    private BookService bookService;
    

    @GetMapping("/viewBooks")
    public List<Book> viewBooks()
    {
        return bookService.viewBooks();
    }
}
