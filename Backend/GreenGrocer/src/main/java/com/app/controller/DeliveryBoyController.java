package com.app.controller;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.app.dto.ApiResponse;
import com.app.dto.DeliveryBoyDTO;
import com.app.entities.DeliveryBoy;
import com.app.service.DeliveryBoyInterface;

@RestController
@RequestMapping("/deliveryboy")
@CrossOrigin(origins = "*", allowedHeaders = "*")
public class DeliveryBoyController {
	
	@Autowired
	private DeliveryBoyInterface deliveryBoyService;
	
	@GetMapping("/{id}")
	public ResponseEntity<DeliveryBoy> findById(@PathVariable Long id)
	{
		return ResponseEntity.ok(deliveryBoyService.findById(id));
	}
	
	@PostMapping("/login")
	public ApiResponse findDeliveryBoyByEmail(@RequestBody DeliveryBoy deliveryBoy)
	{
		ApiResponse api = deliveryBoyService.findDeliveryBoyByEmail(deliveryBoy);
		if(api.getSuccess()) {
			return new ApiResponse("Login Suucesfull",true);
		}else {
			return new ApiResponse("Login failed",false);
		}
	}
	
	@PostMapping("/addDeliveryboy")
	public ResponseEntity<DeliveryBoy> addDeliveryBoy(@RequestBody DeliveryBoy deliveryBoy)
	{
		DeliveryBoy del = deliveryBoyService.addDeliveryBoy(deliveryBoy);
		return new ResponseEntity<>(del,HttpStatus.CREATED);
	}
	
	@PostMapping("/update")
	public ApiResponse updateDeliveryBoy(@RequestBody DeliveryBoyDTO deliveryBoyDto)
	{
		DeliveryBoy del = deliveryBoyService.updateDeliveryBoy(deliveryBoyDto);
		if(del != null) {
			return new ApiResponse("Delivery Boy details updated succesfully",true);
		}else {
			return new ApiResponse("Delivery Boy details are not updated succesfully",false);
		}
	}
	
	@DeleteMapping("/delete/{id}")
	public ResponseEntity<ApiResponse> deleteDeliveryBoy(@PathVariable Long id)
	{
		deliveryBoyService.deleteDeliveryBoy(id);
		return new ResponseEntity(new ApiResponse("Delivery Boy account deleted succesfully",true),HttpStatus.OK);
	}
}
