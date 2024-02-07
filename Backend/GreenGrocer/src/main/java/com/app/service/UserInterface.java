package com.app.service;

import com.app.entities.User;

public interface UserInterface {
	String addUser(User user);

	User getUserInfo(Long id);

	User findUserByEmail(User user);
}
