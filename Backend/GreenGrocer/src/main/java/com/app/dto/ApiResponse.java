package com.app.dto;

import java.time.LocalDateTime;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class ApiResponse {
	private LocalDateTime timeStamp;
	private String message;
	public ApiResponse(String msg) {
		// TODO Auto-generated constructor stub
		this.timeStamp = LocalDateTime.now();
		this.message = msg;
	}
}
