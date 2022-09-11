package com.example.demo.service;

import java.util.List;

import com.example.demo.model.Cart;
import com.example.demo.model.User;
import com.example.demo.payload.request.CartRequest;
import com.example.demo.payload.response.CartResponse;


public interface CartService {
    Cart addToCart(CartRequest cart);

    List<CartResponse>  getUserCart(Long userId);
}
