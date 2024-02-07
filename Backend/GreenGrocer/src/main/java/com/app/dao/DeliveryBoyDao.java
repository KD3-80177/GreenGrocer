package com.app.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import com.app.entities.DeliveryBoy;
import com.app.entities.User;

public interface DeliveryBoyDao extends JpaRepository<DeliveryBoy, Long> {
	public DeliveryBoy findDeliveryBoyByEmail(String email);
}
