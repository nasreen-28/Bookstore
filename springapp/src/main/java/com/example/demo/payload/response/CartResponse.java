package com.example.demo.payload.response;

import lombok.Data;

@Data
public class CartResponse {
    private Long bookId;
    private String bookTitle;
    private String bookImageUrl;
    private Double bookPrice;
    private int quantity;

}
