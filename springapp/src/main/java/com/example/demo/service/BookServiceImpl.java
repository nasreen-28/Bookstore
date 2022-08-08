package com.example.demo.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.model.Book;
import com.example.demo.repository.BookRepository;

@Service
public class BookServiceImpl implements BookService{
    @Autowired
    private BookRepository bookRepository;

    @Override
    public Book addBook(Book book) {
        return bookRepository.save(book);
    }

    @Override
    public Book updateBook(Book book,Long id) {
        Book oldBook=bookRepository.getById(id);
        oldBook.setBookTitle(book.getBookTitle());
        oldBook.setBookDesc(book.getBookDesc());
        oldBook.setBookImageUrl(book.getBookImageUrl());
        oldBook.setISBNNumber(book.getISBNNumber());
        oldBook.setBookGenre(book.getBookGenre());
        oldBook.setBookPrice(book.getBookPrice());
        return bookRepository.save(oldBook);
    }

    @Override
    public List<Book> viewBooks() {
        return bookRepository.findAll();
    }

    @Override
    public void deleteBook(Long id) {
        bookRepository.deleteById(id);
        
    }

    @Override
    public Book getBookById(Long bookId) {
        Book book=bookRepository.findById(bookId).get();
        return book;
    }
    
}
