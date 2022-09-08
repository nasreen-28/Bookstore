package com.example.demo.payload.request;

import java.util.List;
import java.util.Set;

import javax.validation.constraints.Email;
import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.Pattern;
import javax.validation.constraints.Size;

public class SignUpRequest {
    
  @NotEmpty
  @Size(min = 3, max = 20, message = "name must have atleast 3 characters")
  private String name;

  @NotEmpty
  @Email
  private String emailId;

  @NotEmpty
  @Pattern(regexp = "^(?=.*[0-9])"
      + "(?=.*[a-z])(?=.*[A-Z])"
      + "(?=.*[@#$%^&+=])"
      + "(?=\\S+$).{8,20}$", message = "password should have atleast one lower and upper case alphabet , one digit , one special character,doesn’t contain any white space")
  @Size(min = 8, max = 20, message = "password should have atleast 8 characters")
  private String password;



  @NotEmpty
  @Pattern(regexp = "(0/91)?[6-9][0-9]{9}", message = "Mobile number  is invalid")
  @Size(min = 10, max = 10)
  private String mobileNumber;

 // private List<String> role;
 private String role;

  public String getMobileNumber() {
    return mobileNumber;
  }

  public void setMobileNumber(String mobileNumber) {
    this.mobileNumber = mobileNumber;
  }

  public String getName() {
    return name;
  }

  public void setName(String name) {
    this.name = name;
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

  public String getRole() {
    return role;
  }

  public void setRole(String role) {
    this.role = role;
  }

 /*  public List<String> getRole() {
    return this.role;
  }

  public void setRole(List<String> role) {
    this.role = role;
  }*/
}
