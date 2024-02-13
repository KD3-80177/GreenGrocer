package com.app.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.app.custome_exception.ResourceNotFoundException;
import com.app.dao.AdminDao;
import com.app.dao.DeliveryBoyDao;
import com.app.dao.SellerDao;
import com.app.dao.UserDao;
import com.app.entities.Admin;
import com.app.entities.DeliveryBoy;
import com.app.entities.Seller;
import com.app.entities.User;

@Service
@Transactional
public class AdminImpl implements AdminInterface{
	@Autowired
	private AdminDao adminDao;
	
	@Autowired
	private SellerDao sellerDao;
	
	@Autowired
	private UserDao userDao;
	
	@Autowired
	private DeliveryBoyDao deliveryBoyDao;

	@Override
	public Admin getAdminById(Long id) {
		Admin admin=adminDao.findById(id).orElseThrow(()->new ResourceNotFoundException("Admin", "Id", id));
		return admin;
	}

	@Override
	public List<Admin> getAllAdmin() {
		// TODO Auto-generated method stub
		List<Admin> admin = adminDao.findAll();
		return admin;
	}

	
	@Override
	public String addNewAdmin(Admin admin) {
		if(admin!=null)
		{
			adminDao.save(admin);
			return "Admin added successfully!!!";
		}
		
		return "FAILED!!!";
	}

	@Override
	public List<Seller> findAllSeller() {
		List <Seller> list=sellerDao.findAll();
		return list;
	}

	@Override
	public List<User> findAllUser() {
		List<User> list=userDao.findAll();
		return list;
	}

	@Override
	public List<DeliveryBoy> findAllDeliveryBoy() {
		List<DeliveryBoy> list=deliveryBoyDao.findAll();
		return list;
	}
	
	
	
}
