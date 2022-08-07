package com.example.demo.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.model.User;
import com.example.demo.service.Userservice;

@CrossOrigin(origins = "*")
@RestController
public class AuthController {
    @Autowired
    private Userservice userservice;

    @PostMapping("/signup")
    public String register(@RequestBody User user) {
        return userservice.registerUser(user);

    }
}
