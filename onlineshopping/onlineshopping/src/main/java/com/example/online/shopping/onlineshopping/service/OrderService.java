package com.example.online.shopping.onlineshopping.service;

import org.springframework.stereotype.Service;

import com.example.online.shopping.onlineshopping.dto.OrderDto;
import com.example.online.shopping.onlineshopping.entity.Order;

import java.util.List;

@Service
public interface OrderService {
    List<Order> list(int page, int count);

    Boolean makeOrder(OrderDto orderDto);
}
