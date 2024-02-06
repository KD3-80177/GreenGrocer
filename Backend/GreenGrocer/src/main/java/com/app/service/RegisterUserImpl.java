package com.app.service;

import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.app.dao.RegisterUserDao;
import com.app.entities.UserRegistration;

@Service
@Transactional
public class RegisterUserImpl implements RegisterInterface{
	
	@Autowired
	private RegisterUserDao registerDao;

	@Override
	public String addUser(UserRegistration user) {
		// TODO Auto-generated method stub
		registerDao.save(user);
		return "user added succesfully";
	}

	@Override
	public UserRegistration getUserInfo(Long id) {
		// TODO Auto-generated method stub
		UserRegistration user=registerDao.findById(id).orElseThrow();
		return user;
	}

	@Override
	public UserRegistration findUserByEmail(String email,String password) {
		UserRegistration user=registerDao.findUserRegistrationByEmail(email);
		if(user!=null)
		{
			if(user.getPassword() == password)
			{
				return user;
			}
		}
		return null;
	}

}
