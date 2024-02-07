package com.app.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import com.app.entities.User;

public interface DeliveyBoyDao extends JpaRepository<User, Long> {

}
