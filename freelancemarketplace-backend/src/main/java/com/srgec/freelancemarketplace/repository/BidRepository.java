package com.srgec.freelancemarketplace.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.srgec.freelancemarketplace.models.Bid;

public interface BidRepository
        extends JpaRepository<Bid, Integer> {

}