package com.app.service;

import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.app.dao.UserDao;
import com.app.entities.User;

@Service
@Transactional
public class UserImpl implements UserInterface{
	
	@Autowired
	private UserDao registerDao;

	@Override
	public String addUser(User user) {
		// TODO Auto-generated method stub
		registerDao.save(user);
		return "user added succesfully";
	}

	@Override
	public User getUserInfo(Long id) {
		// TODO Auto-generated method stub
		User user=registerDao.findById(id).orElseThrow();
		return user;
	}

	@Override
	public User findUserByEmail(User u) {
		String email = u.getEmail();
		String password = u.getPassword();
		User user=registerDao.findUserRegistrationByEmail(email);
		if(user!=null)
		{
			if(user.getPassword()==password)
			{
				return user;
			}
		}
		return user;
	}

	@Override
	public String updateUser(User user) {
		// TODO Auto-generated method stub
		User u = registerDao.findById(user.getUid()).orElseThrow();
		u.setFullName(user.getFullName());
		u.setAddress(user.getAddress());
		u.setCity(user.getCity());
		u.setEmail(user.getEmail());
		u.setMobileNo(user.getMobileNo());
		u.setPassword(user.getPassword());
		u.setPinCode(user.getPinCode());
		u.setState(user.getState());
		registerDao.save(u);
		return "User Updated Succesfully";
	}

	@Override
	public String delUser(Long userId) {
		// TODO Auto-generated method stub
		registerDao.deleteById(userId);
		return "User Deleted Succesfully";
	}

}
