package com.example.demo.payload.response;

public class CartResponse {
    private Long bookId;
    private String bookTitle;
    private String bookImageUrl;
    private Double bookPrice;
    private int quantity;
    public Long getBookId() {
        return bookId;
    }
    public void setBookId(Long bookId) {
        this.bookId = bookId;
    }
    public String getBookTitle() {
        return bookTitle;
    }
    public void setBookTitle(String bookTitle) {
        this.bookTitle = bookTitle;
    }
    public String getBookImageUrl() {
        return bookImageUrl;
    }
    public void setBookImageUrl(String bookImageUrl) {
        this.bookImageUrl = bookImageUrl;
    }
    public Double getBookPrice() {
        return bookPrice;
    }
    public void setBookPrice(Double bookPrice) {
        this.bookPrice = bookPrice;
    }
    public int getQuantity() {
        return quantity;
    }
    public void setQuantity(int quantity) {
        this.quantity = quantity;
    }
    public CartResponse(Long bookId, String bookTitle, String bookImageUrl, Double bookPrice, int quantity) {
        this.bookId = bookId;
        this.bookTitle = bookTitle;
        this.bookImageUrl = bookImageUrl;
        this.bookPrice = bookPrice;
        this.quantity = quantity;
    }
    public CartResponse() {
    }
    @Override
    public String toString() {
        return "CartResponse [bookId=" + bookId + ", bookImageUrl=" + bookImageUrl + ", bookPrice=" + bookPrice
                + ", bookTitle=" + bookTitle + ", quantity=" + quantity + "]";
    }

    
}
