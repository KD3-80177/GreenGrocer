package com.app.entities;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Table;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@Table(name = "User")
public class UserRegistration extends BaseEntity{
	@Column(length = 50, nullable = false)
	private String fullName;
	@Column(length = 50, unique = true, nullable = false)
	private String email;
	@Column(length = 10, unique = true, nullable = false)
	private String mobileNo;
	@Column(length = 8, nullable = false)
	private String password;
	@Column(length = 100,nullable = false)
	private String address;
	@Column(length = 6, nullable = false)
	private String pinCode;
	@Column(length = 20, nullable = false)
	private String city;
	@Column(length = 20, nullable = false)
	private String state;
	
	public UserRegistration(String email, String password) {
		super();
		this.email = email;
		this.password = password;
	}
	
	
	
	
}
