package com.app.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.app.entities.DeliveryBoy;
import com.app.entities.User;

public interface DeliveryBoyDao extends JpaRepository<DeliveryBoy, Long> {
	public DeliveryBoy findDeliveryBoyByEmail(String email);
	
	@Query("select count(*) from DeliveryBoy d")
	public Long getDCount();
}
