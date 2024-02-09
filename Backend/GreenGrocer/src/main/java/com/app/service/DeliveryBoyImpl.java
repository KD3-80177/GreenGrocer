package com.app.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.app.dao.DeliveryBoyDao;
import com.app.dao.SellerDao;
import com.app.dto.DeliveryBoyDTO;
import com.app.entities.DeliveryBoy;
import com.app.entities.Seller;

@Service
@Transactional
public class DeliveryBoyImpl implements DeliveryBoyInterface {

	@Autowired
	private DeliveryBoyDao deliveryBoyDao;
	
	@Autowired
	private SellerDao sellerDao;
	
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

	@Override
	public String updateDeliveryBoy(DeliveryBoyDTO deliveryBoyDto) {
		DeliveryBoy dBoy=new DeliveryBoy();
		Seller seller=sellerDao.findById(deliveryBoyDto.getSellerId()).orElseThrow();
		dBoy.setAadhar(deliveryBoyDto.getAadhar());
		dBoy.setAddress(deliveryBoyDto.getAddress());
		dBoy.setCity(deliveryBoyDto.getCity());
		dBoy.setDelId(deliveryBoyDto.getDelId());
		dBoy.setSeller(seller);
		dBoy.setEmail(deliveryBoyDto.getEmail());
		dBoy.setFullName(deliveryBoyDto.getFullName());
		dBoy.setMobile(deliveryBoyDto.getMobile());
		dBoy.setPassword(deliveryBoyDto.getPassword());
		dBoy.setSalary(deliveryBoyDto.getSalary());
		dBoy.setState(deliveryBoyDto.getState());
		dBoy.setDelId(deliveryBoyDto.getDelId());
		dBoy.setPincode(deliveryBoyDto.getPincode());
		deliveryBoyDao.save(dBoy);
		if(dBoy!=null)
		{
			return "Data updated";
		}
		return "Unable to update";
	}

	@Override
	public String deleteDeliveryBoy(Long id) {
		DeliveryBoy dboy=deliveryBoyDao.findById(id).orElseThrow();
		if(dboy!=null)
		{
			deliveryBoyDao.deleteById(id);
			return "User deleted";
		}
		
		return "User not found";
	}
}
