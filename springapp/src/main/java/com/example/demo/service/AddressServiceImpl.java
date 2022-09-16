package com.example.demo.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.model.Address;
import com.example.demo.model.User;
import com.example.demo.repository.AddressRepository;
import com.example.demo.repository.UserRepository;

@Service
public class AddressServiceImpl implements AddressService {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private AddressRepository addressRepository;

    @Override
    public Address addAddress(Address address, Long userId) {
        User user = userRepository.findById(userId).get();
        address.setUser(user);
        return addressRepository.save(address);
    }

    @Override
    public Address getAddressByUser(Long userId) {
        return addressRepository.findAddressByUser(userId);
    }

}
