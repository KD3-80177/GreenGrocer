package com.app.service;

import com.app.entities.Orders;
import com.app.entities.Product;

public interface OrderInterface {

	Orders getOrderById(Long id);

	String addNewOrder(Long userId,Orders order);


}
