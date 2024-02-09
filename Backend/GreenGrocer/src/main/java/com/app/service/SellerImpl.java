package com.app.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.app.dao.DeliveryBoyDao;
import com.app.dao.ProductDao;
import com.app.dao.SellerDao;
import com.app.dto.SellerDTO;
import com.app.entities.DeliveryBoy;
import com.app.entities.Product;
import com.app.entities.Seller;

@Service
@Transactional
public class SellerImpl implements SellerInterface{

	@Autowired
	private SellerDao sellerDao;
	
	@Autowired
	private ProductDao productDao;
	
	@Autowired
	private DeliveryBoyDao dbDao;
	
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
	
	@Override
	public String addNewProduct(Long sid,Product product) {
		Seller seller = sellerDao.findById(sid).orElseThrow();
		
		product.setSeller(seller);
		productDao.save(product);
		String msg = "Product Added Successfully!!!!!";
		return msg;
	}
	
	@Override
	public String updateSeller( Long sid,SellerDTO seller) {
		
		Seller s =sellerDao.findById(sid).orElseThrow();
		
		s.setAddress(seller.getAddress());
		s.setCity(seller.getCity());
		s.setEmail(seller.getEmail());
		s.setFullName(seller.getFullName());
		s.setMobileNo(seller.getMobileNo());
		s.setPassword(seller.getPassword());
		s.setPinCode(seller.getPinCode());
		s.setState(seller.getState());
		
		sellerDao.save(s);
		return "Seller Updated";
	}
	
}
