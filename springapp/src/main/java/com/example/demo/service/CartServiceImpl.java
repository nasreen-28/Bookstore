package com.example.demo.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.model.Book;
import com.example.demo.model.Cart;
import com.example.demo.repository.BookRepository;
import com.example.demo.repository.CartRepository;

@Service
public class CartServiceImpl implements CartService {
    @Autowired
    private CartRepository cartRepository;

    @Autowired
    private BookRepository bookRepository;

    @Override
    public Cart addToCart(Cart cart) {
        Book book= bookRepository.findById(cart.getBook().getBookId()).get();
        cart.setBook(book);
        return cartRepository.save(cart);
    }

    @Override
    public Cart editCartItem(Cart cart, Long id) {
        // Cart oldItem = cartRepository.findById(id).get();
        

        return null;
    }

    @Override
    public void deleteCartItem(Long id) {
        cartRepository.deleteById(id);

    }

    @Override
    public List<Cart> viewCart() {
        return cartRepository.findAll();
    }

}
