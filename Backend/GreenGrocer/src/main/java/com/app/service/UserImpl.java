package com.app.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.app.custome_exception.ResourceNotFoundException;
import com.app.dao.UserDao;
import com.app.dto.ApiResponse;
import com.app.dto.UserDto;
import com.app.entities.User;

@Service
@Transactional
public class UserImpl implements UserInterface{
	
	@Autowired
	private UserDao registerDao;
	
	@Autowired
	private JavaMailSender javaMailSender;

	@Override
	public User addUser(User user) {
		// TODO Auto-generated method stub
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
	public String addNewUser(UserDto userDto) {
		User user=new User();
		user.setAddress(userDto.getAddress());
		user.setCity(userDto.getCity());
		user.setEmail(userDto.getEmail());
		user.setFullName(userDto.getFullName());
		user.setMobileNo(userDto.getMobileNo());
		user.setPassword(userDto.getPassword());
		user.setOtp("654123");
		user.setStatus(false);
		user.setPinCode(userDto.getPinCode());
		user.setState(userDto.getState());
		registerDao.save(user);
		
		SimpleMailMessage simpleMsg=new SimpleMailMessage();
		simpleMsg.setTo(user.getEmail());
		simpleMsg.setSubject("Otp verify");
		simpleMsg.setText(user.getOtp());
		
		javaMailSender.send(simpleMsg);
		
		
		return "Email sent";
	}

}
