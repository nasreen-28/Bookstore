package com.example.demo.service;

import java.util.Arrays;
import java.util.LinkedList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.model.Book;
import com.example.demo.model.Cart;
import com.example.demo.model.User;
import com.example.demo.payload.request.CartRequest;
import com.example.demo.payload.response.CartResponse;
import com.example.demo.repository.BookRepository;
import com.example.demo.repository.CartRepository;
import com.example.demo.repository.UserRepository;

@Service
public class CartServiceImpl implements CartService{

    @Autowired
    BookRepository bookRepository;

    @Autowired
    UserRepository userRepository;

    @Autowired
    CartRepository cartRepository;

    @Override
    public Cart addToCart(CartRequest cart) {
        Cart cartItem=new Cart();
        
       User user=userRepository.findById(Long.parseLong(cart.getUserId())).get();
        Book book=bookRepository.findById(Long.parseLong(cart.getBookId())).get();
        cartItem.setBook(book);
        cartItem.setUser(user);
        cartItem.setQuantity(cart.getQuantity());
        return cartRepository.save(cartItem);
    }

    @Override
    public List<CartResponse> getUserCart(Long userId) {
      User user=userRepository.findById(userId).get();
      //System.out.println(cartRepository.findAllByUser(user));
      List<Cart> cartItems=cartRepository.findAllByUser(user);
     // List<Integer> list=new Arrays<Integer>();
      List<CartResponse> userCart = new LinkedList<>();
    for (Cart cart : cartItems) {
      CartResponse cartResponse=new CartResponse();
      cartResponse.setBookId(cart.getBook().getBookId());
      cartResponse.setBookImageUrl(cart.getBook().getBookImageUrl());
      cartResponse.setBookPrice(cart.getBook().getBookPrice());
      cartResponse.setBookTitle(cart.getBook().getBookTitle());
      cartResponse.setQuantity(cart.getQuantity());
      userCart.add(cartResponse);
    // System.out.println(cartResponse.toString());
    }
    return userCart;
    }
    
}
