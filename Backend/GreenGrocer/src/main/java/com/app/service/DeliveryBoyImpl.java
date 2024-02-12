package com.app.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.app.custome_exception.ResourceNotFoundException;
import com.app.dao.DeliveryBoyDao;
import com.app.dao.SellerDao;
import com.app.dto.ApiResponse;
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
	public ApiResponse findDeliveryBoyByEmail(DeliveryBoy deliveryBoy) {
		DeliveryBoy tempDeliveryBoy=deliveryBoyDao.findDeliveryBoyByEmail(deliveryBoy.getEmail());
		if(tempDeliveryBoy.getPassword().equals(deliveryBoy.getPassword()))
			{
				return new ApiResponse("Login Succesfull",true);
			}
		return new ApiResponse("Invalid Username or password",false);
	}

	@Override
	public DeliveryBoy findById(Long id) {
		DeliveryBoy tempDeliveryBoy=deliveryBoyDao.findById(id).orElseThrow(()->new ResourceNotFoundException("Delivery Boy", "Id", id));
		return tempDeliveryBoy;
	}

	@Override
	public DeliveryBoy addDeliveryBoy(DeliveryBoy deliveryBoy, Long sId) {
		String message="Sorry we are unable to process we can't add right now";
		Seller sel = sellerDao.findById(sId).orElseThrow(()->new ResourceNotFoundException("Seller", "Id", sId));
		deliveryBoy.setSeller(sel);
		DeliveryBoy del = deliveryBoyDao.save(deliveryBoy);
		return del;
	}

	@Override
	public DeliveryBoy updateDeliveryBoy(DeliveryBoyDTO deliveryBoyDto) {
		DeliveryBoy dBoy=new DeliveryBoy();
		Seller seller=sellerDao.findById(deliveryBoyDto.getSellerId()).orElseThrow(()->new ResourceNotFoundException("Delivery Boy", "id", deliveryBoyDto.getDelId()));
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
		DeliveryBoy del = deliveryBoyDao.save(dBoy);
		
		return del;
	}

	@Override
	public void deleteDeliveryBoy(Long id) {
		DeliveryBoy dboy=deliveryBoyDao.findById(id).orElseThrow(()->new ResourceNotFoundException("Delivery Boy", "id", id));
		deliveryBoyDao.deleteById(id);
	}
}
