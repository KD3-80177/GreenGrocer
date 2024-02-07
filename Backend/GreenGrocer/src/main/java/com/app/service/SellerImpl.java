package com.app.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.app.dao.SellerDao;
import com.app.entities.Seller;

@Service
@Transactional
public class SellerImpl implements SellerInterface{

	@Autowired
	private SellerDao sellerDao;
	
	
	
	@Override
	public String addNewSeller(Seller seller) {
		sellerDao.save(seller);
		return "Seller Added Successfully";
	}
	
	@Override
	public Seller findSellerById(Long id) {
		Seller tempSeller = sellerDao.findById(id).orElseThrow();
		return tempSeller;
	}
	
	@Override
	public Seller findSellerByEmail(Seller findSeller) {
		String email = findSeller.getEmail();
		String password =  findSeller.getPassword();
		
		Seller seller = sellerDao.findSellerByEmail(email);
		
		if(seller!=null)
		{
			if(seller.getPassword()==password)
			{
				return seller;
			}
		}
		return seller;
	}
	
}
