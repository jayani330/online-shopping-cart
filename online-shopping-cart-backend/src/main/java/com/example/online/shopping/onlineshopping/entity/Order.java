package com.example.online.shopping.onlineshopping.entity;



import javax.persistence.*;


@Entity
@Table(name="orders")
public class Order {
    @Id
    @GeneratedValue(generator = "generator")
    @Column(name = "id")
    private Long orderId;

    @ManyToOne
    @JoinColumn(name = "product_id")
    private Product product;

    @ManyToOne
    @JoinColumn(name = "customer_id")
    private Customer customer;

    @Column(name = "qty")
    private Long qty;
    
    
    

	public Order(Product product, Customer customer, Long qty) {
		super();
		this.product = product;
		this.customer = customer;
		this.qty = qty;
	}

	public Order() {
		// TODO Auto-generated constructor stub
	}

	public Long getOrderId() {
		return orderId;
	}

	public void setOrderId(Long orderId) {
		this.orderId = orderId;
	}

	public Product getProduct() {
		return product;
	}

	public void setProduct(Product product) {
		this.product = product;
	}

	public Customer getCustomer() {
		return customer;
	}

	public void setCustomer(Customer customer) {
		this.customer = customer;
	}

	public Long getQty() {
		return qty;
	}

	public void setQty(Long qty) {
		this.qty = qty;
	}
    
    
    

}
