package com.example.demo.model;

import java.util.Date;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.JoinTable;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;
import javax.persistence.Table;

import org.hibernate.annotations.CreationTimestamp;


import lombok.Data;

@Entity
@Data
@Table(name = "order_details")
public class Order {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long orderId;

    @ManyToOne
    @JoinColumn(name = "user", referencedColumnName = "userid")
    private User user;

    @OneToMany(cascade = CascadeType.ALL)
 //   @JoinColumn(name = "order_id", referencedColumnName = "id")
    @JoinTable(name = "cart_order", joinColumns = @JoinColumn(name = "orderId"), inverseJoinColumns = @JoinColumn(name = "id"))

    private List<Cart> cartItem;

    private Double amount;

    @OneToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "address_id", referencedColumnName = "id")
    private Address address;

    @Column(name = "created_date")
    @CreationTimestamp
    private Date createdDate;

    public Order(Long id, User user, List<Cart> cartItem, Double amount, Address address, Date createdDate) {
        this.orderId = id;
        this.user = user;
        this.cartItem = cartItem;
        this.amount = amount;
        this.address = address;
        this.createdDate = createdDate;
    }

    public Long getId() {
        return orderId;
    }

    public void setId(Long id) {
        this.orderId = id;
    }

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }

    public List<Cart> getCartItem() {
        return cartItem;
    }

    public void setCartItem(List<Cart> cartItem) {
        this.cartItem = cartItem;
    }

    public Double getAmount() {
        return amount;
    }

    public void setAmount(Double amount) {
        this.amount = amount;
    }

    public Address getAddress() {
        return address;
    }

    public void setAddress(Address address) {
        this.address = address;
    }

    public Date getCreatedDate() {
        return createdDate;
    }

    public void setCreatedDate(Date createdDate) {
        this.createdDate = createdDate;
    }

    public Order() {
    }

    

}

