package com.app.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.app.entities.Admin;
import com.app.service.AdminInterface;

@RestController
@RequestMapping("/admin")
@CrossOrigin(origins = "*",allowedHeaders = "*")
public class AdminController {
	
	@Autowired
	private AdminInterface adminInterfaceService;
	
	@GetMapping("/{id}")
	public Admin findAdmin(@PathVariable Long id)
	{
		return adminInterfaceService.findAdmin(id);
	}
}
