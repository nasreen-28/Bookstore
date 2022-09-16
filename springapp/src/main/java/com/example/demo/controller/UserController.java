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

import com.example.demo.model.Address;
import com.example.demo.model.Book;
import com.example.demo.model.Cart;
import com.example.demo.model.Contact;
import com.example.demo.model.Order;
import com.example.demo.payload.request.CartRequest;
import com.example.demo.payload.request.OrderRequest;
import com.example.demo.payload.response.CartResponse;
import com.example.demo.payload.response.ViewOrder;
import com.example.demo.service.AddressService;
import com.example.demo.service.BookService;
import com.example.demo.service.CartService;
import com.example.demo.service.ContactService;
import com.example.demo.service.OrderService;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/user")
public class UserController {
    @Autowired
    private BookService bookService;

    @Autowired
    private CartService cartService;

    @Autowired
    private ContactService contactService;

    @Autowired
    private AddressService addressService;

    @Autowired
    private OrderService orderService;

    @GetMapping("/viewBooks")
    public List<Book> viewBooks() {
        return bookService.viewBooks();
    }

    @PostMapping("/addToCart")
    public Cart addToCart(@RequestBody CartRequest cart) {
        System.out.println(cart);
        return cartService.addToCart(cart);
        // return null;
    }

    @GetMapping("/getUserCart/{id}")
    public List<CartResponse> getUserCart(@PathVariable Long id) {
        // Long userId = Long.parseLong(id);
        // System.out.println(userId);
        return cartService.getUserCart(id);
    }

    @DeleteMapping("/deleteCartItem/{bookId}/{userId}")
    public void deleteCartItem(@PathVariable Long bookId, @PathVariable Long userId) {
        // Long userId2 = Long.parseLong(userId);
        cartService.deleteCartItem(bookId, userId);
    }

    @PostMapping("/addContact/{userId}")
    public Contact addContact(@RequestBody Contact contact, @PathVariable Long userId) {
        return contactService.addContact(contact, userId);
    }

    @GetMapping("/getContact/{userId}")
    public Contact getContact(@PathVariable Long userId) {
        return contactService.getContactByUser(userId);

    }

    @PostMapping("/addAddress/{userId}")
    public Address addAddress(@RequestBody Address address, @PathVariable Long userId) {
        return addressService.addAddress(address, userId);
    }

    @GetMapping("/getAddress/{userId}")
    public Address getAddress(@PathVariable Long userId) {
        return addressService.getAddressByUser(userId);

    }

    @PostMapping("/placeOrder")
    public Order placeOrder(@RequestBody OrderRequest orderRequest) {
        return orderService.placeOrder(orderRequest);
    }

    @GetMapping("/viewOrders/{userId}")
    public List<ViewOrder> viewOrders(@PathVariable Long userId) {
        return orderService.viewOrders(userId);
    }
}
