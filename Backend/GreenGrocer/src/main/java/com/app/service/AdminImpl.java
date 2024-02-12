package com.app.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.app.custome_exception.ResourceNotFoundException;
import com.app.dao.AdminDao;
import com.app.entities.Admin;

@Service
@Transactional
public class AdminImpl implements AdminInterface{
	@Autowired
	private AdminDao adminDao;

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
	
}
