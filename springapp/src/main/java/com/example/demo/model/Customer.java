package com.example.demo.model;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToOne;
import javax.persistence.Table;

import lombok.Data;

@Entity
@Table(name = "customer")
@Data
public class Customer {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long customerId;
    private String firstName;
    private String lastName;
    private String emailId;
    private String mobileNumber;
    private String houseNo;
    private String streetName;
    private String areaName;
    private String city;
    private String state;
    private String pincode;
    @OneToOne(cascade = CascadeType.DETACH)
    @JoinColumn(name = "user",referencedColumnName = "userid")
    private User user;

    
}
