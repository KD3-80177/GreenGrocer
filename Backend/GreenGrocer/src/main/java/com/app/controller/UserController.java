package com.app.controller;

import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.app.entities.User;
import com.app.service.UserInterface;

@RestController
@RequestMapping("/user")
@CrossOrigin(origins = "*", allowedHeaders = "*")
public class UserController {
	
	@Autowired
	private UserInterface register;
	
	@GetMapping("/getUser/{id}")
	public User getUserInfo(@PathVariable Long id)
	{
		return register.getUserInfo(id);
	}
	
	@PostMapping("/login")
	public User getUserByEmail(@RequestBody User user)
	{
		return register.findUserByEmail(user);
	}
	
	@PostMapping("/newUser")
	public String addUser(@RequestBody User user) {
		return register.addUser(user);
	}
	
	
}
