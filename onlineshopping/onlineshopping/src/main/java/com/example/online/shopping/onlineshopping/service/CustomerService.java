package com.example.online.shopping.onlineshopping.service;

import lombok.Setter;
import org.springframework.stereotype.Service;

import com.example.online.shopping.onlineshopping.entity.Customer;

@Service
public interface CustomerService {
    Customer get(Long customerId);
}
