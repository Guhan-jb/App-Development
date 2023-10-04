package com.sportproducts.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.sportproducts.model.Products;

public interface ProductsRepository extends JpaRepository<Products,Integer> {

}
