package com.example.demo.service;

import java.util.LinkedList;
import java.util.List;

import javax.swing.text.View;

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
public class OrderServiceImpl implements OrderService{

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
        //System.out.println(orderRequest.toString());
        Order order=new Order();
        order.setAmount(orderRequest.getAmount());
        List<Cart> cartItems=new LinkedList<Cart>();
        User user=userRepository.findById(orderRequest.getUserId()).get();
        //int i=0;
        for (CartItem cart : orderRequest.getCartItem()) {
           Book book = bookRepository.findById(cart.getBookId()).get(); 
           Cart temp=new Cart();
          Cart item=cartRepository.getByBookAndUser(cart.getBookId(), user.getUserid());
           cartRepository.delete(item);
           temp.setBook(book);
           temp.setQuantity(cart.getQuantity());
           temp.setUser(user);
           temp.setOrderStatus("Placed");
           System.out.println(temp.toString());
           //temp.setId(item.getId());
           //cartRepository.delete(temp);
           
           cartItems.add(temp);
         
        }
       
        order.setUser(userRepository.getByUserid(orderRequest.getUserId()));
        //findById(orderRequest.getUserId()).get());
        order.setAddress(addressRepository.findAddressByUser(orderRequest.getUserId()));
       // findByUser(userRepository.findById(orderRequest.getUserId()).get()));
       // User user=order.
       order.setCartItem(cartItems);
       //System.out.println(order.toString());
      
       
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

   @Override
   public List<ViewOrder> viewOrders(Long userId) {
      List<Order> orders= orderRepository.getOrderByUser(userId);
      List<ViewOrder> responseItem=new LinkedList<>();
      for (Order order : orders) {
            ViewOrder item = new ViewOrder();
            item.setAddress(order.getAddress().getCity());
            item.setAmount(order.getAmount());
            item.setCreatedDate(order.getCreatedDate());
            item.setOrderId(order.getOrderId());
            List<CartItem> cartItems=new LinkedList<>();
            for (Cart citem : order.getCartItem()) {
               CartItem cartItem=new CartItem();
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
