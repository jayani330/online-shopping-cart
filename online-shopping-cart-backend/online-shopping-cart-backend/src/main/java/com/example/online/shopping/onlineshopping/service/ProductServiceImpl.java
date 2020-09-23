package com.example.online.shopping.onlineshopping.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.stereotype.Service;

import com.example.online.shopping.onlineshopping.entity.Product;
import com.example.online.shopping.onlineshopping.repository.ProductRepository;

import java.util.List;

@Service
public class ProductServiceImpl implements ProductService {

    @Autowired
    private ProductRepository productRepository;

    @Override
    public List<Product> list(int page, int count) {
        Page<Product> productPage =  productRepository.findAll(PageRequest.of(page, count));
        return productPage.getContent();
    }

    @Override
    public Product get(Long productId) {
        return productRepository.getOne(productId);
    }
}
