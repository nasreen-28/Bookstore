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
@Data
@Table(name = "user_address")
public class Address {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
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
