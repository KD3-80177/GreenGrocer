package com.app.config;

import java.util.Properties;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.JavaMailSenderImpl;

@Configuration
public class EmailAppConfig {

	@Value("${spring.mail.host}")
	private String mailHost;
	@Value("${spring.mail.port}")
	private String mailPort;
	@Value("${spring.mail.username}")
	private String mailUsername;
	@Value("${spring.mail.password}")
	private String mailPassword;
	
	@Bean
	public JavaMailSender getJavaMailSender()
	{
<<<<<<< HEAD
		JavaMailSenderImpl javaMailSender=new JavaMailSenderImpl();
=======
		JavaMailSenderImpl javaMailSender = new JavaMailSenderImpl();
>>>>>>> 882778326f16d9744311712a4dcd15cfe63e793c
		javaMailSender.setHost(mailHost);
		javaMailSender.setPort(Integer.parseInt(mailPort));
		javaMailSender.setUsername(mailUsername);
		javaMailSender.setPassword(mailPassword);
<<<<<<< HEAD
		
		Properties props=javaMailSender.getJavaMailProperties();
		props.put("mail.smtp.starttls.enable", "true");
		return javaMailSender;
	}
	
=======

		Properties props = javaMailSender.getJavaMailProperties();
		props.put("mail.smtp.starttls.enable", "true");
		return javaMailSender;
	}
>>>>>>> 882778326f16d9744311712a4dcd15cfe63e793c
}