package com.app.service;

import com.app.entities.Admin;

public interface AdminInterface {

	Admin findAdmin(Long id);

	String addNewAdmin(Admin admin);

}
