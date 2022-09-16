package com.example.demo.payload.request;

import lombok.Data;

@Data
public class CartRequest {
    private String bookId;
    private String userId;
    private int quantity;

}
