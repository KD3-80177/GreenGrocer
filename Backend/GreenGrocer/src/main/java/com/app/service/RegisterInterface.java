package com.app.service;

import com.app.entities.UserRegistration;

public interface RegisterInterface {
	String addUser(UserRegistration user);

	UserRegistration getUserInfo(Long id);

	UserRegistration findUserByEmail(String email, String password);
}
