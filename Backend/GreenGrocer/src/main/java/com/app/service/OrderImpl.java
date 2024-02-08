package com.app.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.app.dao.DeliveryBoyDao;
import com.app.dao.OrderDao;
import com.app.dao.ProductDao;
import com.app.entities.DeliveryBoy;
import com.app.entities.Orders;
import com.app.entities.Product;

@Service
@Transactional
public class OrderImpl implements OrderInterface {

	@Autowired
	private OrderDao orderDao;
	@Autowired
	private ProductDao prodDao;
	
	
	@Override
	public Orders getOrderById(Long id) {
		// TODO Auto-generated method stub
		Orders order = orderDao.findById(id).orElseThrow();
		if(order!=null)
		{
			return order;
		}
		return null;
	}
	
	@Override
	public String addNewOrder(Long userId, Orders order)
	{	
		orderDao.save(order);
		return "Order Placed!!!!!";
	}
}
