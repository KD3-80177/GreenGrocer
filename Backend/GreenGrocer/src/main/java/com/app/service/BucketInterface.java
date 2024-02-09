package com.app.service;

import java.util.List;

import com.app.dto.BucketDTO;
import com.app.entities.Bucket;

public interface BucketInterface {
	String addToBucket(BucketDTO bucket);

	List<Bucket> getBucket();

	String deleteMyBucket(Long id);	
}
