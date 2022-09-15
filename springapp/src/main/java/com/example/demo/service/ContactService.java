package com.example.demo.service;

import com.example.demo.model.Contact;

public interface ContactService {
    Contact addContact(Contact contact,Long userId);
}
