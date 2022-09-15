package com.example.demo.service;

import java.util.List;

import com.example.demo.model.Order;
import com.example.demo.payload.request.OrderRequest;
import com.example.demo.payload.response.ViewOrder;

public interface OrderService {
    Order placeOrder(OrderRequest orderRequest);

    List<ViewOrder> viewOrders(Long userId);

   // Purchase placeOrder(Purchase purchase);
}
