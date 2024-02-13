package com.app.controller;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.app.dto.ApiResponse;
import com.app.entities.User;
import com.app.service.UserInterface;

@RestController
@RequestMapping("/user")
@CrossOrigin(origins = "*", allowedHeaders = "*")
public class UserController {
	
	@Autowired
	private UserInterface register;
	
	@GetMapping
	public ResponseEntity<List<User>> getAllUsers(){
		return ResponseEntity.ok(register.getAllUsers());
	}
	
	@GetMapping("/getUser/{id}")
	public ResponseEntity<User> getUserInfo(@PathVariable Long id)
	{
		return ResponseEntity.ok(register.getUserInfo(id));
	}
	
	@PostMapping("/login")
	public ApiResponse getUserByEmail(@RequestBody User user)
	{
		ApiResponse api = register.findUserByEmail(user);
		if(api.getSuccess()) {
			return new ApiResponse("Login Succesfull",true);
		}else {
			return new ApiResponse("Login failed",false);
		}
	}
	
	@PostMapping("/newUser")
	public ResponseEntity<User> addUser(@RequestBody User user) {
		User createdUser = register.addUser(user);
		return new ResponseEntity<>(createdUser,HttpStatus.CREATED);
	}
	
	@PutMapping("/updateUser")
	public ResponseEntity<User> updateUser(@RequestBody User user) {
		User u = register.updateUser(user);
		return ResponseEntity.ok(u);
	}
	
	@DeleteMapping("/{userId}")
	public ResponseEntity<ApiResponse> deleteUser(@PathVariable Long userId) {
		register.delUser(userId);
		return new ResponseEntity(new ApiResponse("User Deleted Succesfully",true),HttpStatus.OK);
	}
	
	@PutMapping("/forgot-password")
	public ResponseEntity<String> forgotPassword(@RequestParam String email)
	{
		return new ResponseEntity<>(register.forgotPassword(email),HttpStatus.OK);
	}
}
