package com.example.demo.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.dto.UserRegistrationDTO;
import com.example.demo.model.User;
import com.example.demo.service.UserService;

@CrossOrigin(origins = "*")
@RestController
public class AuthController {
    @Autowired
    private UserService userService;

    @PostMapping("/signup")
    public User register(@RequestBody UserRegistrationDTO userRegistrationDTO) {
        return userService.registerUser(userRegistrationDTO);

    }
}
