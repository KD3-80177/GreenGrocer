package com.app.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.app.dao.BucketDao;
import com.app.dao.ProductDao;
import com.app.dto.BucketDTO;
import com.app.entities.Bucket;
import com.app.entities.Product;

@Service
@Transactional
public class BucketImpl implements BucketInterface{
	
	@Autowired
	private ProductDao prodDao;
	
	@Autowired
	private BucketDao bucketDao;

	@Override
	public String addToBucket(BucketDTO bucket) {
		// TODO Auto-generated method stub
		Product prod = prodDao.findById(bucket.getPid()).orElseThrow();
		Bucket b = new Bucket();
		b.setProduct(prod);
		b.setQuantity(bucket.getQuantity());
		double bill = bucket.getQuantity() * prod.getPrice();
		b.setBill(bill);
		bucketDao.save(b);
		return null;
	}
	
	

}
