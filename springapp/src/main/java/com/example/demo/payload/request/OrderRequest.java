package com.example.demo.payload.request;

import java.util.List;

import lombok.Data;

@Data
public class OrderRequest {
    private Long userId;
    private List<CartItem> cartItem;
    private Double amount;

}
