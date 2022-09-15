package com.example.demo.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.model.Contact;
import com.example.demo.model.User;
import com.example.demo.repository.ContactRepository;
import com.example.demo.repository.UserRepository;

@Service
public class ContactServiceImpl implements ContactService {
    @Autowired
    private ContactRepository contactRepository;

    @Autowired
    private UserRepository userRepository;

    @Override
    public Contact addContact(Contact contact,Long userId) {
        User user = userRepository.findById(userId).get();
        contact.setUser(user);
        return contactRepository.save(contact);
    }
    
}
