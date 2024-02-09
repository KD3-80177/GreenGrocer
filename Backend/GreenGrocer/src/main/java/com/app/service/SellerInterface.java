package com.app.service;

import com.app.entities.AssignedOrderDto;
import com.app.entities.Product;
import com.app.entities.Seller;

public interface SellerInterface {

	String addNewSeller(Seller seller);
	Seller findSellerById(Long id);
	Seller findSellerByEmail(Seller findSeller);
	String addNewProduct(Long sid,Product product);
	String assignSeller(Long did, AssignedOrderDto assignedOrderDto);
}
