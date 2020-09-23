package com.example.online.shopping.onlineshopping.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class CustomerController {
    
    @GetMapping("/abc")
    public String getList(){
        return "abc";
    }
}
