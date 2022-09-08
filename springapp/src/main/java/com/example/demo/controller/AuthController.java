package com.example.demo.controller;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.model.User;
import com.example.demo.payload.request.SignUpRequest;
import com.example.demo.payload.response.MessageResponse;
import com.example.demo.service.UserServiceImpl;

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController

public class AuthController {

  @Autowired
  UserServiceImpl userService;

  // adding login data
  @PostMapping("/signin")
  public ResponseEntity<?> authenticateUser(@Valid @RequestBody User loginRequest) {

    return userService.authenticateUser(loginRequest);
  }

  // adding signup data
  @PostMapping("/signup")
  public ResponseEntity<MessageResponse> registerUser(@Valid @RequestBody SignUpRequest signUpRequest
      ) {
    return userService.registerUser(signUpRequest);
  }

}