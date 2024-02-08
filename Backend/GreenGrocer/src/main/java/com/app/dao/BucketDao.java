package com.app.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import com.app.entities.Bucket;

public interface BucketDao extends JpaRepository<Bucket, Long> {

}