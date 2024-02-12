package com.app.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.app.entities.AssignedOrderDto;
import com.app.dto.ApiResponse;
import com.app.dto.SellerDTO;
import com.app.entities.Product;
import com.app.entities.Seller;
import com.app.service.SellerInterface;

@RestController
@RequestMapping("/seller")
@CrossOrigin(origins="*",allowedHeaders = "*")
public class SellerController {

	@Autowired
	private SellerInterface sellerService;
	
	@PostMapping("/newSeller")
	public ResponseEntity<Seller> addSeller(@RequestBody Seller newSeller)
	{
		Seller sel = sellerService.addNewSeller(newSeller);
		return new ResponseEntity<>(sel,HttpStatus.CREATED);
	}
	
	@GetMapping("/{id}")
	public ResponseEntity<Seller> getSellerById(@PathVariable Long id)
	{
		return ResponseEntity.ok(sellerService.findSellerById(id));
	}
	
	@PostMapping("/login")
	public ApiResponse getSellerByEmail(@RequestBody Seller findSeller)
	{
		ApiResponse api = sellerService.findSellerByEmail(findSeller);
		if(api.getSuccess()) {
			return new ApiResponse("Login Succesfull",true);
		}else {
			return new ApiResponse("Login failed",false);
		}
	}
	
	@PostMapping("/addProduct/{sid}")
	public String addProduct(@PathVariable Long sid,@RequestBody Product product)
	{
		return sellerService.addNewProduct(sid,product);
	}
	
	@PostMapping("/assignSeller/{did}")
	public String assignSeller(@PathVariable Long did, @RequestBody AssignedOrderDto assignedOrderDto){
		return sellerService.assignSeller(did,assignedOrderDto);
	}
	@PutMapping("/updateSeller/{sid}")
	public String updateSeller(@PathVariable Long sid,@RequestBody SellerDTO seller)
	{
		return sellerService.updateSeller(sid,seller);
	}
}
