package com.sportproducts.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
@Entity
@Table(name = "products")
public class Products {
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private int pid;
	private String productName;
	private float productPrice;
	private String description;
	private String productImage;
	private String productFeedback;
	public Products(int pid, String productName, float productPrice, String description, String productImage,
			String productFeedback) {
		super();
		this.pid = pid;
		this.productName = productName;
		this.productPrice = productPrice;
		this.description = description;
		this.productImage = productImage;
		this.productFeedback = productFeedback;
	}
	public Products() {
	
	}
	public int getPid() {
		return pid;
	}
	public void setPid(int pid) {
		this.pid = pid;
	}
	public String getProductName() {
		return productName;
	}
	public void setProductName(String productName) {
		this.productName = productName;
	}
	public float getProductPrice() {
		return productPrice;
	}
	public void setProductPrice(float productPrice) {
		this.productPrice = productPrice;
	}
	public String getDescription() {
		return description;
	}
	public void setDescription(String description) {
		this.description = description;
	}
	public String getProductImage() {
		return productImage;
	}
	public void setProductImage(String productImage) {
		this.productImage = productImage;
	}
	public String getProductFeedback() {
		return productFeedback;
	}
	public void setProductFeedback(String productFeedback) {
		this.productFeedback = productFeedback;
	}
	
	
}
