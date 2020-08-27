package com.example.online.shopping.onlineshopping.entity;

import javax.persistence.*;


@Entity
@Table(name="customers")
public class Customer {
    @Id
    @GeneratedValue(generator = "generator")
    @Column(name = "id")
    private Long customerId;

    @Column(name = "user_name")
    private String user_name;

    @Column(name = "full_name")
    private Long full_name;

    @Column(name = "phone_number")
    private String phone_number;

    
    
	public Customer(String user_name, Long full_name, String phone_number) {
		super();
		this.user_name = user_name;
		this.full_name = full_name;
		this.phone_number = phone_number;
	}

	public Long getCustomerId() {
		return customerId;
	}

	public void setCustomerId(Long customerId) {
		this.customerId = customerId;
	}

	public String getUser_name() {
		return user_name;
	}

	public void setUser_name(String user_name) {
		this.user_name = user_name;
	}

	public Long getFull_name() {
		return full_name;
	}

	public void setFull_name(Long full_name) {
		this.full_name = full_name;
	}

	public String getPhone_number() {
		return phone_number;
	}

	public void setPhone_number(String phone_number) {
		this.phone_number = phone_number;
	}

    
}
