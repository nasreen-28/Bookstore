package com.example.demo.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.example.demo.model.Cart;
import com.example.demo.model.User;

@Repository
public interface CartRepository extends JpaRepository<Cart, Long> {
    List<Cart> findAllByUser(User user);
   // Cart getByBook(Book book);
    Cart getAllByUser(User user);

    @Query(value = "select c from Cart c where c.user.userid=?1")
    List<Cart> getCartByUser(Long id);

    @Query(value = "SELECT c FROM Cart c WHERE c.book.bookId=?1 AND c.user.userid=?2")
    Cart getByBookAndUser(Long bookId,Long userId);

}
