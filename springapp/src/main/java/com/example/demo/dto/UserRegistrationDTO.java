package com.example.demo.dto;

public class UserRegistrationDTO {
    private String name;
	private String mobileNumber;
	private String password;
	private String emailId;
	private String role;
    public UserRegistrationDTO(String name, String mobileNumber, String password, String emailId, String role) {
        this.name = name;
        this.mobileNumber = mobileNumber;
        this.password = password;
        this.emailId = emailId;
        this.role = role;
    }
    public String getName() {
        return name;
    }
    public void setName(String name) {
        this.name = name;
    }
    public String getMobileNumber() {
        return mobileNumber;
    }
    public void setMobileNumber(String mobileNumber) {
        this.mobileNumber = mobileNumber;
    }
    public String getPassword() {
        return password;
    }
    public void setPassword(String password) {
        this.password = password;
    }
    public String getEmailId() {
        return emailId;
    }
    public void setEmailId(String emailId) {
        this.emailId = emailId;
    }
    public String getRole() {
        return role;
    }
    public void setRole(String role) {
        this.role = role;
    }

    
}
