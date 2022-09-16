package com.example.demo.service;

import java.util.LinkedList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.model.Book;
import com.example.demo.model.Cart;
import com.example.demo.model.Order;
import com.example.demo.model.User;
import com.example.demo.payload.request.CartItem;
import com.example.demo.payload.request.OrderRequest;
import com.example.demo.payload.response.ViewOrder;
import com.example.demo.repository.AddressRepository;
import com.example.demo.repository.BookRepository;
import com.example.demo.repository.CartRepository;
import com.example.demo.repository.OrderRepository;
import com.example.demo.repository.UserRepository;

@Service
public class OrderServiceImpl implements OrderService {

   @Autowired
   OrderRepository orderRepository;

   @Autowired
   UserRepository userRepository;

   @Autowired
   BookRepository bookRepository;

   @Autowired
   AddressRepository addressRepository;

   @Autowired
   CartRepository cartRepository;

   @Override
   public Order placeOrder(OrderRequest orderRequest) {
      Order order = new Order();
      order.setAmount(orderRequest.getAmount());
      List<Cart> cartItems = new LinkedList<Cart>();
      User user = userRepository.findById(orderRequest.getUserId()).get();
      for (CartItem cart : orderRequest.getCartItem()) {
         Book book = bookRepository.findById(cart.getBookId()).get();
         Cart temp = new Cart();
         Cart item = cartRepository.getByBookAndUser(cart.getBookId(), user.getUserid());
         cartRepository.delete(item);
         temp.setBook(book);
         temp.setQuantity(cart.getQuantity());
         temp.setUser(user);
         temp.setPrice(cart.getBookPrice());
         temp.setOrderStatus("Placed");
         System.out.println(temp.toString());
         cartItems.add(temp);
      }

      order.setUser(userRepository.getByUserid(orderRequest.getUserId()));
      order.setAddress(addressRepository.findAddressByUser(orderRequest.getUserId()));
      order.setCartItem(cartItems);
      return orderRepository.save(order);

   }

   @Override
   public List<ViewOrder> viewOrders(Long userId) {
      List<Order> orders = orderRepository.getOrderByUser(userId);
      List<ViewOrder> responseItem = new LinkedList<>();
      for (Order order : orders) {
         ViewOrder item = new ViewOrder();
         item.setAddress(order.getAddress().getCity());
         item.setAmount(order.getAmount());
         item.setCreatedDate(order.getCreatedDate());
         item.setOrderId(order.getOrderId());
         item.setUserId(userId);
         item.setUserName(userRepository.getByUserid(userId).getName());
         List<CartItem> cartItems = new LinkedList<>();
         for (Cart citem : order.getCartItem()) {
            CartItem cartItem = new CartItem();
            cartItem.setBookId(citem.getBook().getBookId());
            cartItem.setBookImageUrl(citem.getBook().getBookImageUrl());
            cartItem.setBookPrice(citem.getBook().getBookPrice());
            cartItem.setBookTitle(citem.getBook().getBookTitle());
            cartItem.setQuantity(citem.getQuantity());
            cartItems.add(cartItem);

         }
         item.setCartItem(cartItems);
         responseItem.add(item);

      }
      return responseItem;
   }

   @Override
   public List<ViewOrder> viewAllOrders() {
      List<Order> orders = orderRepository.findAll();
      List<ViewOrder> responseItem = new LinkedList<>();
      for (Order order : orders) {
         ViewOrder item = new ViewOrder();
         item.setAddress(order.getAddress().getCity());
         item.setAmount(order.getAmount());
         item.setCreatedDate(order.getCreatedDate());
         item.setOrderId(order.getOrderId());
         item.setUserId(order.getUser().getUserid());
         item.setUserName(userRepository.getByUserid(order.getUser().getUserid()).getName());
         List<CartItem> cartItems = new LinkedList<>();
         for (Cart citem : order.getCartItem()) {
            CartItem cartItem = new CartItem();
            cartItem.setBookId(citem.getBook().getBookId());
            cartItem.setBookImageUrl(citem.getBook().getBookImageUrl());
            cartItem.setBookPrice(citem.getBook().getBookPrice());
            cartItem.setBookTitle(citem.getBook().getBookTitle());
            cartItem.setQuantity(citem.getQuantity());
            cartItems.add(cartItem);

         }
         item.setCartItem(cartItems);
         responseItem.add(item);

      }
      return responseItem;
   }

}
