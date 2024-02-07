package com.app.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.app.entities.Product;
import com.app.service.ProductInterface;

@RestController
@CrossOrigin
@RequestMapping("/products")
public class ProductController {
	@Autowired
	private ProductInterface prod;
	
	@GetMapping
	public List<Product> getAllProducts(){
		return prod.getAllProducts();
	}
	
	@GetMapping("/{name}")
	public List<Product> getProductByName(@PathVariable String name){
		return prod.getProdByName(name);
	}
}
