package com.app.service;

import java.util.List;

import com.app.entities.Product;

public interface ProductInterface {

	List<Product> getAllProducts();

	List<Product> getProdByName(String name);

}
