package com.example.online.shopping.onlineshopping.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.example.online.shopping.onlineshopping.dto.OrderDto;
import com.example.online.shopping.onlineshopping.entity.Order;
import com.example.online.shopping.onlineshopping.entity.Product;
import com.example.online.shopping.onlineshopping.service.OrderService;
import com.example.online.shopping.onlineshopping.service.ProductService;

import java.util.List;

@RestController
@RequestMapping("/v1/orders")
public class OrderController {

    @Autowired
    private OrderService orderService;

    @GetMapping("/list")
    public ResponseEntity<List<Order>> getList(@RequestParam("page") int page, @RequestParam("count") int count){
        return ResponseEntity.ok(orderService.list(page, count));
    }

    @PostMapping("/make")
    public ResponseEntity<Boolean> make(@RequestBody OrderDto orderDto){
        return ResponseEntity.ok(orderService.makeOrder(orderDto));
    }



}
