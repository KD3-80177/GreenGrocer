package com.app.service;

import com.app.entities.Seller;

public interface SellerInterface {

	String addNewSeller(Seller seller);
	
	Seller findSellerByEmail(Seller findSeller);
}
