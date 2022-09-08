package com.example.demo.service;

import org.springframework.http.ResponseEntity;
import org.springframework.security.core.userdetails.UserDetailsService;

import com.example.demo.model.User;
import com.example.demo.payload.request.SignUpRequest;
import com.example.demo.payload.response.MessageResponse;

public interface UserService extends UserDetailsService {
    ResponseEntity<?> authenticateUser(User loginRequest);

    ResponseEntity<MessageResponse> registerUser(SignUpRequest signUpRequest);

}
