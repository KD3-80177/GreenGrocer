package com.app.service;

import java.util.List;

import com.app.dto.ApiResponse;
import com.app.entities.User;

public interface UserInterface {
	User addUser(User user);

	User getUserInfo(Long id);

	ApiResponse findUserByEmail(User user);

	User updateUser(User user);

	void delUser(Long userId);

	List<User> getAllUsers();

	Object forgotPassword(String email);
}
