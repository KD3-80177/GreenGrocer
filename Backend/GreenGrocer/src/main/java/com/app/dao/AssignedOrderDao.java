package com.app.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import com.app.entities.AssigndOrders;

public interface AssignedOrderDao extends JpaRepository<AssigndOrders, Long>{

}
