package com.app.service;

import java.util.List;

import com.app.entities.Admin;

public interface AdminInterface {

	Admin getAdminById(Long id);

	List<Admin> getAllAdmin();

	String addNewAdmin(Admin admin);

}
