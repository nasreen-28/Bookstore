package com.example.demo.service;

import com.example.demo.model.Address;

public interface AddressService {
    Address addAddress(Address address, Long userId);

    Address getAddressByUser(Long userId);
}
