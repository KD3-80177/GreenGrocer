package com.app.dao;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.app.entities.AssignedOrderDto;
import com.app.entities.Orders;

public interface OrderDao extends JpaRepository<Orders, Long> {
	List<Orders> findBySellerSid(Long sid);
	List<Orders> findByOid(Long oid);
	
	@Query("select DISTINCT(o.oid),o.uid  from Orders o where o.s_id = ?1")
	List<AssignedOrderDto> getUniqOrders(Long sid);
}
