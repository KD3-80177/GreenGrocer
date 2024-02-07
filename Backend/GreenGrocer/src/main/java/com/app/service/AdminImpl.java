package com.app.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.app.dao.AdminDao;
import com.app.entities.Admin;

@Service
@Transactional
public class AdminImpl implements AdminInterface{
	@Autowired
	private AdminDao adminDao;

	@Override
	public Admin findAdmin(Long id) {
		Admin admin=adminDao.findById(id).orElseThrow();
		if(admin!=null)
			return admin;
		return null;
	}
	
	
}
