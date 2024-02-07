package com.app.controller;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.app.entities.DeliveryBoy;
import com.app.service.DeliveryBoyInterface;

@RestController
@RequestMapping("/deliveryboy")
@CrossOrigin(origins = "*", allowedHeaders = "*")
public class DeliveryBoyController {
	
	@Autowired
	private DeliveryBoyInterface deliveryBoyService;
	
	@GetMapping("/{id}")
	public DeliveryBoy findById(@PathVariable Long id)
	{
		return deliveryBoyService.findById(id);
	}
	
	@PostMapping("/login")
	public DeliveryBoy findDeliveryBoyByEmail(@RequestBody DeliveryBoy deliveryBoy)
	{
		return deliveryBoyService.findDeliveryBoyByEmail(deliveryBoy);
	}
	
	@PostMapping("/addDeliveryboy")
	public String addDeliveryBoy(@RequestBody DeliveryBoy deliveryBoy)
	{
		return deliveryBoyService.addDeliveryBoy(deliveryBoy);
	}
}
