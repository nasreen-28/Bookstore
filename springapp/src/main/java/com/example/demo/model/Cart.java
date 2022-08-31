package com.example.demo.model;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

import lombok.Data;

@Data
@Entity 
@Table(name="cart_details")

public class Cart {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;
    private Integer quantity;
    private Double price;
   /*  @ManyToOne
   private Book book;*/
   @ManyToOne(cascade = CascadeType.DETACH)
   @JoinColumn(name = "book", referencedColumnName = "bookId")
   private Book book;

}
