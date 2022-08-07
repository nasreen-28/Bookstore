package com.example.demo.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.model.User;
import com.example.demo.repository.UserRepository;

@Service
public class UserServiceImpl implements Userservice {
    @Autowired
    UserRepository userRepository;


    @Override
    public String registerUser(User user) {
        userRepository.save(user);
        return "success";
    }
}
