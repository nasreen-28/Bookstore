package com.example.demo.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.example.demo.model.Book;

@Service
public interface BookService {
    Book addBook(Book book);

    Book updateBook(Book book, Long id);

    List<Book> viewBooks();

    void deleteBook(Long id);

    Book getBookById(Long bookId);
}
