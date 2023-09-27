package com.sportproducts.Service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.sportproducts.model.Products;
import com.sportproducts.repository.ProductsRepository;

@Service
public class ProductService {
	@Autowired
	private ProductsRepository productRepo;
	public String addProducts(Products product)
	{
		productRepo.save(product);
		return "Successfull";
	}
	public List<Products> getAllProducts()
	{
		return productRepo.findAll();	
	}
	public Optional<Products> getProductbyId(int id)
	{
		return productRepo.findById(id);
	}
	public String editProducts(Products product)
	{
		productRepo.save(product);
		return "Successfull";
	}
	public String deleteProducts(int id)
	{
		productRepo.deleteById(id);
		return "Successfull";
	}
}

