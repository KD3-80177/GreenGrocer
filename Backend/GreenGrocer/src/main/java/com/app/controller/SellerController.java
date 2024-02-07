package com.app.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.app.entities.Seller;
import com.app.service.SellerInterface;

@RestController
@RequestMapping("/seller")
@CrossOrigin(origins="*",allowedHeaders = "*")
public class SellerController {

	@Autowired
	private SellerInterface sellerService;
	
	@PostMapping("/newSeller")
	public String addSeller(@RequestBody Seller newSeller)
	{
		return sellerService.addNewSeller(newSeller);
	}
	
	@PostMapping("/login")
	public Seller getSellerByEmail(@RequestBody Seller findSeller)
	{
		return sellerService.findSellerByEmail(findSeller);
	}
}
