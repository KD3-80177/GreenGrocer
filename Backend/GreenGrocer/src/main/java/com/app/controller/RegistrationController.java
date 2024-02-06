package com.app.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.app.entities.UserRegistration;
import com.app.service.RegisterInterface;

@RestController
@RequestMapping("/user")
@CrossOrigin("http://localhost:3000")
public class RegistrationController {
	
	@Autowired
	private RegisterInterface register;
	
	@GetMapping("/getUser/{id}")
	public UserRegistration getUserInfo(@PathVariable Long id)
	{
		return register.getUserInfo(id);
	}
	
	@GetMapping("/login/{email}/{password}")
	public UserRegistration getUserByEmail(@PathVariable String email, String password)
	{
		return register.findUserByEmail(email,password);
	}
	
	@PostMapping("/newUser")
	public String addUser(@RequestBody UserRegistration user) {
		return register.addUser(user);
	}
}
