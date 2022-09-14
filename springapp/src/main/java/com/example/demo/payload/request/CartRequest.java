package com.example.demo.payload.request;

import lombok.Data;

@Data
public class CartRequest {
    private String bookId;
    private String userId;
    private int quantity;

    public String getBookId() {
        return bookId;
    }

    public void setBookId(String bookId) {
        this.bookId = bookId;
    }

    public String getUserId() {
        return userId;
    }

    public void setUserId(String userId) {
        this.userId = userId;
    }

    public int getQuantity() {
        return quantity;
    }

    public void setQuantity(int quantity) {
        this.quantity = quantity;
    }

    public CartRequest(String bookId, String userId, int quantity) {
        this.bookId = bookId;
        this.userId = userId;
        this.quantity = quantity;
    }

    public CartRequest() {
    }

}
