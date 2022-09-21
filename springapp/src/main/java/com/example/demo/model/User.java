package com.example.demo.model;


import java.util.HashSet;
import java.util.Set;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.JoinTable;
import javax.persistence.ManyToMany;
import javax.persistence.Table;
import javax.persistence.UniqueConstraint;

import lombok.Data;

@Data
@Entity
@Table(name = "users", uniqueConstraints = {
    @UniqueConstraint(columnNames = "emailId")
// @UniqueConstraint(columnNames = "username"),
})
public class User {
  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  private Long userid;

  @Column(name = "username", nullable = false)

  private String name;

  private String emailId;

  private String password;

  private String mobileNumber;

  @ManyToMany(fetch = FetchType.LAZY)
  @JoinTable(name = "user_roles", joinColumns = @JoinColumn(name = "user_id"), inverseJoinColumns = @JoinColumn(name = "role_id"))
  private Set<Role> roles = new HashSet<>();

  public User() {
  }

  public User(String name, String emailId, String password, String mobileNumber) {
    this.name = name;
    this.emailId = emailId;
    this.password = password;
    this.mobileNumber = mobileNumber;
  }

  public User(Long userid, String name, String emailId, String password, String mobileNumber) {
    this.userid = userid;
    this.name = name;
    this.emailId = emailId;
    this.password = password;
    this.mobileNumber = mobileNumber;
  }

  public String getMobileNumber() {
    return mobileNumber;
  }

  public void setMobileNumber(String mobileNumber) {
    this.mobileNumber = mobileNumber;
  }

  public String getName() {
    return name;
  }

  public void setName(String username) {
    this.name = username;
  }

  public String getEmailId() {
    return emailId;
  }

  public void setEmailId(String email) {
    this.emailId = email;
  }

  public String getPassword() {
    return password;
  }

  public void setPassword(String password) {
    this.password = password;
  }

  public Set<Role> getRoles() {
    return roles;
  }

  public void setRoles(Set<Role> roles) {
    this.roles = roles;
  }

  public Long getUserid() {
    return userid;
  }

  public void setUserid(Long userid) {
    this.userid = userid;
  }
}
