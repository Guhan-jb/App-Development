package com.sportproducts.Controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RestController;

import com.sportproducts.Service.ProductService;
import com.sportproducts.model.Products;

import io.swagger.v3.oas.annotations.tags.Tag;

@RestController
public class ProductsController {
	@Autowired
	private ProductService productService;
	@PostMapping("/addProduct")
	public String saveProduct(Products product)
	{
		return productService.addProducts(product);
	}
	@Tag(name="Get all products", description="")
	@GetMapping("/")
	public List<Products> getallProducts()
	{
		return productService.getAllProducts();
	}
	@PutMapping("/editProduct")
	public String editProduct(Products product)
	{
		return productService.editProducts(product);
	}
	@DeleteMapping("/delete")
	public String deleteProduct(int id)
	{
		return productService.deleteProducts(id);
	}
}
