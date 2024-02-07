package com.app.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.app.dao.DeliveryBoyDao;
import com.app.entities.DeliveryBoy;

@Service
@Transactional
public class DeliveryBoyImpl implements DeliveryBoyInterface {

	@Autowired
	private DeliveryBoyDao deliveryBoyDao;
	
	@Override
	public DeliveryBoy findDeliveryBoyByEmail(DeliveryBoy deliveryBoy) {
		DeliveryBoy tempDeliveryBoy=deliveryBoyDao.findDeliveryBoyByEmail(deliveryBoy.getEmail());
		if(tempDeliveryBoy!=null)
		{
			if(tempDeliveryBoy.getPassword().equals(deliveryBoy.getPassword()))
			{
				return tempDeliveryBoy;
			}
		}
		return null;
	}

	@Override
	public DeliveryBoy findById(Long id) {
		DeliveryBoy tempDeliveryBoy=deliveryBoyDao.findById(id).orElseThrow();
		if(tempDeliveryBoy!=null)
		{
			return tempDeliveryBoy;
		}
		return null;
	}

	@Override
	public String addDeliveryBoy(DeliveryBoy deliveryBoy) {
		String message="Sorry we are unable to process we can't add right now";
		deliveryBoyDao.save(deliveryBoy);
		message="Welcome to GG family";
		return message;
	}
}
