package com.example.online.shopping.onlineshopping.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.stereotype.Service;

import com.example.online.shopping.onlineshopping.dto.OrderDto;
import com.example.online.shopping.onlineshopping.entity.Customer;
import com.example.online.shopping.onlineshopping.entity.Order;
import com.example.online.shopping.onlineshopping.entity.Product;
import com.example.online.shopping.onlineshopping.repository.OrderRepository;

import java.util.List;

@Service
public class OrderServiceImpl implements OrderService {

    @Autowired
    private OrderRepository orderRepository;

    @Autowired
    private ProductService productService;

    @Autowired
    private CustomerService customerService;

    @Override
    public List<Order> list(int page, int count) {
        Page<Order> orderPage =  orderRepository.findAll(PageRequest.of(page, count));
        return orderPage.getContent();
    }

    @Override
    public Boolean makeOrder(OrderDto orderDto) {

        Product product = productService.get(orderDto.getProductId());

        Customer customer = customerService.get(orderDto.getCustomerId());

        if (product.getQty() < (product.getQty()- orderDto.getQty())){
            //todo : exceed qty
            return false;
        }

        Order order = new Order();
        order.setCustomer(customer);
        order.setProduct(product);
        order.setQty(orderDto.getQty());
        orderRepository.save(order);
        return true;
    }
}
