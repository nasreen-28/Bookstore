package com.example.demo.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.demo.model.Cart;
import com.example.demo.model.User;
import com.example.demo.payload.response.CartResponse;

@Repository
public interface CartRepository extends JpaRepository<Cart,Long>{
    List<Cart> findAllByUser(User user);
}
