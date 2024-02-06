package com.app.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import com.app.entities.UserRegistration;

public interface RegisterUserDao extends JpaRepository<UserRegistration, Long> {
	
}
