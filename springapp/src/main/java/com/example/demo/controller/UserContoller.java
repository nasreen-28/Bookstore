package com.example.demo.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.model.Book;
import com.example.demo.model.Cart;
import com.example.demo.model.Customer;
import com.example.demo.payload.request.CartRequest;
import com.example.demo.payload.response.CartResponse;
import com.example.demo.service.BookService;
import com.example.demo.service.CartService;
import com.example.demo.service.CustomerService;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/user")
public class UserContoller {
    @Autowired
    private BookService bookService;

    @Autowired
    private CustomerService customerService;

    @Autowired
    private CartService cartService;

   
    @GetMapping("/viewBooks")
    public List<Book> viewBooks() {
        return bookService.viewBooks();
    }

    @PostMapping("/addCustomer")
    public Customer addCustomer(@RequestBody Customer customer) {
        return customerService.addCustomer(customer);
    }

    @PostMapping("/addToCart")
    public Cart addToCart(@RequestBody CartRequest cart){
        System.out.println(cart);
        return cartService.addToCart(cart);
      //return null;
    }


    @GetMapping("/getUserCart/{id}")
    public List<CartResponse> getUserCart(@PathVariable String id){
        Long userId = Long.parseLong(id);
        System.out.println(userId);
        return cartService.getUserCart(userId);
    }
  
}
