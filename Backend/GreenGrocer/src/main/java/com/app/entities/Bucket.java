package com.app.entities;

import java.time.LocalDate;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToOne;
import javax.persistence.Table;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Table(name="bucket")
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class Bucket {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long bid;
	
	@Column(name = "quantity", nullable = false)
	private int quantity;
	
	@OneToOne(cascade = CascadeType.ALL)
	@JoinColumn(name="pid",nullable = false)
	private Product product;
	
	@Column(name = "bill", nullable = false)
	private double bill;
	
	
	
}
