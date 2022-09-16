package com.example.demo.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.example.demo.model.Contact;

@Repository
public interface ContactRepository extends JpaRepository<Contact, Long> {
    @Query(value = "select u from Contact u where u.user.userid=?1")
    Contact findContactByUser(Long userId);
}
