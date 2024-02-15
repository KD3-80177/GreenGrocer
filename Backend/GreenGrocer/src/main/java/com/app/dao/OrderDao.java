package com.app.dao;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.app.entities.Orders;

public interface OrderDao extends JpaRepository<Orders, Long> {
	List<Orders> findBySellerSid(Long sid);
	List<Orders> findByOid(Long oid);
}
