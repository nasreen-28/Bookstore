package com.example.demo.service;

import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.stereotype.Service;

import com.example.demo.dto.UserRegistrationDTO;
import com.example.demo.model.User;

@Service
public interface UserService extends UserDetailsService {
    public User registerUser(UserRegistrationDTO userRegistrationDTO);
}
