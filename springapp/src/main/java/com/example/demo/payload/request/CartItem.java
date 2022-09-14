package com.example.demo.payload.request;

import lombok.Data;

@Data
public class CartItem {
    private Long bookId;
    private String bookImageUrl;
    private Double bookPrice;
    private String bookTitle;
    private int quantity;
}
