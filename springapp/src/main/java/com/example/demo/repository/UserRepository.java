package com.example.demo.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.demo.model.User;

@Repository
public interface UserRepository extends JpaRepository<User, Long> {

  Optional<User> findByEmailId(String emailId);

  User findByEmailIdIgnoreCase(String emailId);

  Boolean existsByEmailId(String email);

  Boolean existsByName(String name);

  User getByUserid(Long id);
}
