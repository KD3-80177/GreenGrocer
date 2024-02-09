package com.app.service;

import java.util.List;

import com.app.dto.OrdersDTO;
import com.app.entities.Orders;
import com.app.entities.Product;

public interface OrderInterface {

	Orders getOrderById(Long id);

	String addNewOrder(Long userId,Orders order);

	String addOrderDto(OrdersDTO orderDto);

	String addOrderList(List<OrdersDTO> orders);

	String deleteOrderById(Long oid);


}
