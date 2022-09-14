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
import com.example.demo.repository.AddressRepository;
import com.example.demo.repository.BookRepository;
import com.example.demo.repository.OrderRepository;
import com.example.demo.repository.UserRepository;

@Service
public class OrderServiceImpl implements OrderService{

    @Autowired
    OrderRepository orderRepository;

    @Autowired
    UserRepository userRepository;

    @Autowired
    BookRepository bookRepository;

    @Autowired
    AddressRepository addressRepository;

    @Override
    public Order placeOrder(OrderRequest orderRequest) {
       // System.out.println(orderRequest.toString());
        Order order=new Order();
        order.setAmount(orderRequest.getAmount());
        List<Cart> cartItems=new LinkedList<Cart>();
        User user=userRepository.findById(orderRequest.getUserId()).get();
        //int i=0;
        for (CartItem cart : orderRequest.getCartItem()) {
           Book book = bookRepository.findById(cart.getBookId()).get(); 
           Cart temp=new Cart();
           temp.setBook(book);
           temp.setQuantity(cart.getQuantity());
           temp.setUser(user);
         
        }
       
        order.setUser(userRepository.getByUserid(orderRequest.getUserId()));
        //findById(orderRequest.getUserId()).get());
        order.setAddress(addressRepository.findAddressByUser(orderRequest.getUserId()));
       // findByUser(userRepository.findById(orderRequest.getUserId()).get()));
       // User user=order.
       order.setCartItem(cartItems);
       System.out.println(order.toString());
      
       
    return orderRepository.save(order);  
    //return null; 
 /*   Order order = purchase.getOrder();

    // generate tracking number
   // String orderTrackingNumber = generateOrderTrackingNumber();
    //order.setOrderTrackingNumber(orderTrackingNumber);

    // populate order with orderItems
    List<OrderItem> orderItems = purchase.getOrderItems();
    orderItems.forEach(item -> order.add(item));

    // populate order with shippingAddress and billingAddress
   // order.setBillingAddress(purchase.getBillingAddress());
    order.setShippingAddress(purchase.getShippingAddress());

    // populate customer with order
    User customer = purchase.getUser();
    customer.add(order);

    // save to the database
     userRepository.save(customer);

    // return a response
    return null; */
    }
    
}
