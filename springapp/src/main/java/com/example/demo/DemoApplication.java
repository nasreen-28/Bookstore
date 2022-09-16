package com.example.demo;

import javax.annotation.PostConstruct;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import com.example.demo.model.ERole;
import com.example.demo.model.Role;
import com.example.demo.repository.RoleRepository;

@SpringBootApplication
public class DemoApplication {

	@Autowired
	RoleRepository roleRepository;
	public static void main(String[] args) {
		SpringApplication.run(DemoApplication.class, args);
	}

	@PostConstruct
	public void addRoles()
	{
		Role role1=new Role();
		role1.setId(1);
		role1.setName(ERole.ROLE_USER);
		roleRepository.save(role1);
		Role role2=new Role();
		role2.setId(2);
		role2.setName(ERole.ROLE_ADMIN);
		roleRepository.save(role2);

	}
	

}
