package com.example.demo.service;

import java.util.List;

import com.example.demo.model.Cart;

public interface CartService {
    Cart addToCart(Cart cart);

    Cart editCartItem(Cart cart, Long id);

    void deleteCartItem(Long id);

    List<Cart> viewCart();
}
