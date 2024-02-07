package com.app.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.app.dao.ProductDao;
import com.app.entities.Product;

@Service
@Transactional
public class ProductImpl implements ProductInterface{
	
	@Autowired
	private ProductDao prod;

	@Override
	public List<Product> getAllProducts() {
		// TODO Auto-generated method stub
		List<Product> prodList = prod.findAll();
		return prodList;
	}

	@Override
	public List<Product> getProdByName(String name) {
		// TODO Auto-generated method stub
		List<Product> prodList = prod.findByPname(name);
		return prodList;
	}

}
