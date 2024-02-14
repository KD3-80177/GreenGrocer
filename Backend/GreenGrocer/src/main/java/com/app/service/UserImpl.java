package com.app.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.app.custome_exception.ResourceNotFoundException;
import com.app.dao.UserDao;
import com.app.dto.ApiResponse;
import com.app.entities.User;

@Service
@Transactional
public class UserImpl implements UserInterface{
	
	@Autowired
	private PasswordEncoder passwordEncoder;
	
	@Autowired
	private UserDao registerDao;

	@Override
	public User addUser(User user) {
		// TODO Auto-generated method stub
		user.setPassword(passwordEncoder.encode(user.getPassword()));
		User u = registerDao.save(user);
		return u;
	}

	@Override
	public User getUserInfo(Long id) {
		// TODO Auto-generated method stub
		User user=registerDao.findById(id).orElseThrow(()-> new ResourceNotFoundException("User", "Id", id));
		return user;
	}

	@Override
	public ApiResponse findUserByEmail(User u) {
		String email = u.getEmail();
		User user=registerDao.findUserByEmail(email);
		if(user!=null)
		{
			if(user.getPassword().equals(u.getPassword()))
			{
				return new ApiResponse("User Login Succesfull",true);
			}
		}
		return new ApiResponse("User Login is unsuccesfull",false);
	}

	@Override
	public User updateUser(User user) {
		// TODO Auto-generated method stub
		User u = registerDao.findById(user.getUid()).orElseThrow(()-> new ResourceNotFoundException("User", "Id", user.getUid()));
		u.setFullName(user.getFullName());
		u.setAddress(user.getAddress());
		u.setCity(user.getCity());
		u.setEmail(user.getEmail());
		u.setMobileNo(user.getMobileNo());
		u.setPassword(user.getPassword());
		u.setPinCode(user.getPinCode());
		u.setState(user.getState());
		User u1 = registerDao.save(u);
		return u1;
	}

	@Override
	public void delUser(Long userId) {
		// TODO Auto-generated method stub
		User user = registerDao.findById(userId).orElseThrow(()-> new ResourceNotFoundException("User", "Id", userId));
		registerDao.delete(user);
	}

	@Override
	public List<User> getAllUsers() {
		// TODO Auto-generated method stub
		List<User> user = registerDao.findAll();
		return user;
	}
	
	@Override
	public Object forgotPassword(String email) {
		User user=registerDao.findUserByEmail(email);
		if(user!=null)
		{
			return new ApiResponse("User Login Succesfull",true);
			
		}
		return new ApiResponse("User Login is unsuccesfull",false);
		
	}

}
