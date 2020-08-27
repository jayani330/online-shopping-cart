package com.example.online.shopping.onlineshopping.service;

import org.springframework.stereotype.Service;

import com.example.online.shopping.onlineshopping.entity.Product;

import java.util.List;

@Service
public interface ProductService {
    List<Product> list(int page, int count);

    Product get(Long productId);
}
