package com.app.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.app.dto.OrdersDTO;
import com.app.entities.Orders;
import com.app.entities.Product;
import com.app.service.OrderInterface;

@RestController
@RequestMapping("/orders")
@CrossOrigin(origins = "*",allowedHeaders = "*")
public class OrderController {

	@Autowired
	private OrderInterface orderService;
	
	@GetMapping("/{id}")
	public Orders getOrder(@PathVariable Long id)
	{
		return orderService.getOrderById(id);
	}
	
	@PostMapping("/addOrder/{userId}")
	public String addOrder(@PathVariable Long userId,@RequestBody Orders order)
	{
		System.out.println(userId);
		System.out.println(order.getQuantity());
		return orderService.addNewOrder(userId,order);
	}
	
	@PostMapping("/addOrder")
	public String addOrderByDto(@RequestBody OrdersDTO orderDto) {
		return orderService.addOrderDto(orderDto);
	}
	
	@PostMapping("/listOrder")
	public String addOrderList(@RequestBody List<OrdersDTO> orders) {
		return orderService.addOrderList(orders);
	}
	
	@DeleteMapping("/deleteOrder/{oid}")
	public String deleteOrder(@PathVariable Long oid)
	{
		return orderService.deleteOrderById(oid);
	}
}
