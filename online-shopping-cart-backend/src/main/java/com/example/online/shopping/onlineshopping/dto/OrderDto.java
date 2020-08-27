package com.example.online.shopping.onlineshopping.dto;

import javax.persistence.Entity;

@Entity
public class OrderDto {
    private Long customerId;
    private Long productId;
    private Long qty;
    
    
    
    
    
    
	public OrderDto(Long customerId, Long productId, Long qty) {
		super();
		this.customerId = customerId;
		this.productId = productId;
		this.qty = qty;
	}
	public Long getCustomerId() {
		return customerId;
	}
	public void setCustomerId(Long customerId) {
		this.customerId = customerId;
	}
	public Long getProductId() {
		return productId;
	}
	public void setProductId(Long productId) {
		this.productId = productId;
	}
	public Long getQty() {
		return qty;
	}
	public void setQty(Long qty) {
		this.qty = qty;
	}
    
    
    
    
}
