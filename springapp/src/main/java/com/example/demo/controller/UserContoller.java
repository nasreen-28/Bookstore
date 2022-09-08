package com.example.demo.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.model.Book;
import com.example.demo.model.Customer;
import com.example.demo.service.BookService;
import com.example.demo.service.CustomerService;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/user")
public class UserContoller {
    @Autowired
    private BookService bookService;

    @Autowired
    private CustomerService customerService;

   
    @GetMapping("/viewBooks")
    public List<Book> viewBooks() {
        return bookService.viewBooks();
    }

    @PostMapping("/addCustomer")
    public Customer addCustomer(@RequestBody Customer customer) {
        return customerService.addCustomer(customer);
    }

  
}
