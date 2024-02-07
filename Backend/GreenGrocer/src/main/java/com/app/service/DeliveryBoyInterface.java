package com.app.service;


import com.app.entities.DeliveryBoy;

public interface DeliveryBoyInterface {

	DeliveryBoy findDeliveryBoyByEmail(DeliveryBoy deliveryBoy);

	DeliveryBoy findById(Long id);

	String addDeliveryBoy(DeliveryBoy deliveryBoy);

}
