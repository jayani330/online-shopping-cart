package com.example.online.shopping.onlineshopping.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.online.shopping.onlineshopping.entity.Customer;

@Repository
public interface CustomerRepository extends JpaRepository<Customer, Long> {

}
