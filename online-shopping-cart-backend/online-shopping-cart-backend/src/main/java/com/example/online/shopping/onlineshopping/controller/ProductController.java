package com.example.online.shopping.onlineshopping.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.example.online.shopping.onlineshopping.entity.Customer;
import com.example.online.shopping.onlineshopping.entity.Product;
import com.example.online.shopping.onlineshopping.service.CustomerService;
import com.example.online.shopping.onlineshopping.service.ProductService;

import java.util.List;

@RestController
@RequestMapping("/v1/product")
public class ProductController {


    @Autowired
    private ProductService productService;

    @GetMapping("/list")
    public ResponseEntity<List<Product>> getList(@RequestParam("page") int page, @RequestParam("count") int count){
        return ResponseEntity.ok(productService.list(page, count));
    }

}
