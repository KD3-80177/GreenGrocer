package com.app.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
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
	public ResponseEntity<Admin> findAdmin(@PathVariable Long id)
	{
		return ResponseEntity.ok(adminInterfaceService.getAdminById(id));
	}
	
<<<<<<< HEAD
	@PostMapping("/addAdmin")
	public String addAdmin(@RequestBody Admin admin)
	{
		return adminInterfaceService.addNewAdmin(admin);
	}
=======
	@GetMapping
	public ResponseEntity<List<Admin>> getAll(){
		return ResponseEntity.ok(adminInterfaceService.getAllAdmin());
	}
	
	
	
>>>>>>> cdfd1fe20e913aaaff723e592d1738073af47b9d
}
