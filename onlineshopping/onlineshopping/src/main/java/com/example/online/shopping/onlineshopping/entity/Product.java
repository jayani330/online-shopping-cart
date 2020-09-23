package com.example.online.shopping.onlineshopping.entity;



import javax.persistence.*;


@Entity
@Table(name="product")
public class Product {
    @Id
    @GeneratedValue(generator = "generator")
    @Column(name = "id")
    private Long productId;

    @Column(name = "description")
    private String description;

    @Column(name = "price")
    private Long price;

    @Column(name = "brand")
    private String brand;

    @Column(name = "qty")
    private Long qty;
    
    
    

	

	public Product(String description, Long price, String brand, Long qty) {
		super();
		this.description = description;
		this.price = price;
		this.brand = brand;
		this.qty = qty;
	}

	public Long getProductId() {
		return productId;
	}

	public void setProductId(Long productId) {
		this.productId = productId;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public Long getPrice() {
		return price;
	}

	public void setPrice(Long price) {
		this.price = price;
	}

	public String getBrand() {
		return brand;
	}

	public void setBrand(String brand) {
		this.brand = brand;
	}

	public Long getQty() {
		return qty;
	}

	public void setQty(Long qty) {
		this.qty = qty;
	}
    
    
    
    
    

}
