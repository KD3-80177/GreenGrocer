package com.app.service;

import com.app.entities.AssignedOrderDto;
import com.app.entities.Orders;

import java.util.List;

import org.springframework.http.ResponseEntity;

import com.app.dto.ApiResponse;
import com.app.dto.SellerDTO;
import com.app.entities.Product;
import com.app.entities.Seller;

public interface SellerInterface {

	Seller addNewSeller(Seller seller);
	Seller findSellerById(Long id);
	ApiResponse findSellerByEmail(Seller findSeller);
	String addNewProduct(Long sid,Product product);
	String assignSeller(Long did, AssignedOrderDto assignedOrderDto);
	String updateSeller(Long sid, SellerDTO seller);
	List<Orders> findSellerOrders(Long sid);
}
