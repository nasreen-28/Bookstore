package com.example.demo.model;

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
@Table(name = "cart_details")
public class Cart {
  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  private Long id;

  /*
   * @Column(name = "created_date")
   * private Date createdDate;
   */
  @ManyToOne
  @JoinColumn(name = "book", referencedColumnName = "bookId")
  private Book book;

  @ManyToOne
  @JoinColumn(name = "user", referencedColumnName = "userid")
  private User user;

  private int quantity;
}
