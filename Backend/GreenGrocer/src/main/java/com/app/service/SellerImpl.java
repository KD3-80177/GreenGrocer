package com.app.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.app.dao.AssignedOrderDao;
import com.app.dao.OrderDao;
import com.app.dao.ProductDao;
import com.app.dao.SellerDao;
import com.app.dao.UserDao;
import com.app.entities.AssigndOrders;
import com.app.entities.AssignedOrderDto;
import com.app.entities.Orders;
import com.app.entities.Product;
import com.app.entities.Seller;
import com.app.entities.User;

@Service
@Transactional
public class SellerImpl implements SellerInterface{

	@Autowired
	private SellerDao sellerDao;
	
	@Autowired
	private ProductDao productDao;
	
	@Autowired
	private AssignedOrderDao assignedOrderDao;
	
	@Autowired
	private UserDao userDao;
	
	@Autowired
	private OrderDao orderDao;
	
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
	public String assignSeller(Long did, AssignedOrderDto assignedOrderDto) {
		Long uid=assignedOrderDto.getUid();
		User user=userDao.findById(uid).orElseThrow();
		AssigndOrders assignedOrder=new AssigndOrders();
		assignedOrder.setFullName(user.getFullName());
		assignedOrder.setCity(user.getCity());
		assignedOrder.setMobile(user.getMobileNo());
		assignedOrder.setAddress(user.getAddress());
		assignedOrder.setOid(assignedOrderDto.getOid());
		assignedOrder.setDelId(did);
		assignedOrderDao.save(assignedOrder);
		return "Delivery Assigned Successfully";
	}
	
}
