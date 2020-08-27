package com.example.online.shopping.onlineshopping.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.online.shopping.onlineshopping.entity.Customer;
import com.example.online.shopping.onlineshopping.repository.CustomerRepository;

@Service
public class CustomerServiceImpl implements CustomerService {

    @Autowired
    private CustomerRepository customerRepository;

    @Override
    public Customer get(Long customerId) {
        return customerRepository.getOne(customerId);
    }
}
