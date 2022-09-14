package com.example.demo.service;

import com.example.demo.model.Order;
import com.example.demo.payload.request.OrderRequest;

public interface OrderService {
    Order placeOrder(OrderRequest orderRequest);

   // Purchase placeOrder(Purchase purchase);
}
