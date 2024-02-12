package com.app.service;


import com.app.dto.ApiResponse;
import com.app.dto.DeliveryBoyDTO;
import com.app.entities.DeliveryBoy;

public interface DeliveryBoyInterface {

	ApiResponse findDeliveryBoyByEmail(DeliveryBoy deliveryBoy);

	DeliveryBoy findById(Long id);

	DeliveryBoy addDeliveryBoy(DeliveryBoy deliveryBoy, Long sellerId);

	DeliveryBoy updateDeliveryBoy(DeliveryBoyDTO deliveryBoyDto);

	void deleteDeliveryBoy(Long id);

}
