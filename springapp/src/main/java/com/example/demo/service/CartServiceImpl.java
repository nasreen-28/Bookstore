package com.example.demo.service;

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
public class CartServiceImpl implements CartService {

  @Autowired
  BookRepository bookRepository;

  @Autowired
  UserRepository userRepository;

  @Autowired
  CartRepository cartRepository;

  @Override
  public Cart addToCart(CartRequest cart) {
    Cart cartItem = new Cart();
    User user = userRepository.getByUserid(Long.parseLong(cart.getUserId()));
    // findById(Long.parseLong(cart.getUserId())).get();
    Book book = bookRepository.getByBookId(Long.parseLong(cart.getBookId()));
    // findById(Long.parseLong(cart.getBookId())).get();
    Long bookId = book.getBookId();
    List<Cart> userCart = cartRepository.findAllByUser(user);
    // List<Book>
    for (Cart cart2 : userCart) {
      Long bookId1 = cart2.getBook().getBookId();
      if (bookId == bookId1) {
        cart2.setQuantity(cart2.getQuantity() + cart.getQuantity());
        return cartRepository.save(cart2);
      }
    }
    cartItem.setBook(book);
    cartItem.setUser(user);
    cartItem.setQuantity(cart.getQuantity());
    return cartRepository.save(cartItem);

  }

  @Override
  public List<CartResponse> getUserCart(Long userId) {
    List<Cart> cartItems = cartRepository.getCartByUser(userId);
    List<CartResponse> userCart = new LinkedList<>();
    for (Cart cart : cartItems) {
      CartResponse cartResponse = new CartResponse();
      cartResponse.setBookId(cart.getBook().getBookId());
      cartResponse.setBookImageUrl(cart.getBook().getBookImageUrl());
      cartResponse.setBookPrice(cart.getBook().getBookPrice());
      cartResponse.setBookTitle(cart.getBook().getBookTitle());
      cartResponse.setQuantity(cart.getQuantity());
      userCart.add(cartResponse);
    }
    return userCart;
  }

  @Override
  public void deleteCartItem(Long bookId, Long userId) {
    Cart deleteItem = new Cart();
    deleteItem = cartRepository.getByBookAndUser(bookId, userId);
    cartRepository.delete(deleteItem);

  }

}
