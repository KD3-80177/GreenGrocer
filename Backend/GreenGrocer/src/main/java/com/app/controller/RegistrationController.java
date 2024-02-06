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
<<<<<<< HEAD
@RequestMapping("/Registration")
@CrossOrigin
=======
<<<<<<< HEAD
@RequestMapping("/Registration")
@CrossOrigin("http://localhost:3000")
=======
<<<<<<< HEAD
@RequestMapping("/registration")
@CrossOrigin(origins = "http://localhost:3000")
=======
@RequestMapping("/Registration")
@CrossOrigin
>>>>>>> 8e4cce9479983da347addaedb3ba65e396c2b3d2
>>>>>>> 7479d3292a2e6efb0a6a7f4291fe3cf3b42df130
>>>>>>> 6d6bfc199de7571f17583a56ea63263648480d35
public class RegistrationController {
	
	@Autowired
	private RegisterInterface register;
	
<<<<<<< HEAD
=======
<<<<<<< HEAD
	@PostMapping("/newUser")
=======
<<<<<<< HEAD
	
>>>>>>> 6d6bfc199de7571f17583a56ea63263648480d35
	@GetMapping("/getUser/{id}")
	public UserRegistration getUserInfo(@PathVariable Long id)
	{
		return register.getUserInfo(id);
	}
	
	@PostMapping("/newUser")
<<<<<<< HEAD
=======
>>>>>>> 8e4cce9479983da347addaedb3ba65e396c2b3d2
>>>>>>> 7479d3292a2e6efb0a6a7f4291fe3cf3b42df130
>>>>>>> 6d6bfc199de7571f17583a56ea63263648480d35
	public String addUser(@RequestBody UserRegistration user) {
		return register.addUser(user);
	}
}
