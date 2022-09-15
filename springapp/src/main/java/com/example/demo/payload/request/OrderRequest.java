package com.example.demo.payload.request;

import java.util.List;

import lombok.Data;

@Data
public class OrderRequest {
    private Long userId;
    private List<CartItem> cartItem;
    private Double amount;
    public Long getUserId() {
        return userId;
    }
    public void setUserId(Long userId) {
        this.userId = userId;
    }
   
    public Double getAmount() {
        return amount;
    }
    public void setAmount(Double amount) {
        this.amount = amount;
    }
    public OrderRequest() {
    }
   
   
   
  

    
}
