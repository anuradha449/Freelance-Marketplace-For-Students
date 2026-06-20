package com.srgec.freelancemarketplace.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.srgec.freelancemarketplace.models.Bid;
import com.srgec.freelancemarketplace.repository.BidRepository;

@Service
public class BidService {

    @Autowired
    private BidRepository bidRepository;

    public List<Bid> getAllBids() {
        return bidRepository.findAll();
    }

    public Bid addBid(Bid bid) {
        return bidRepository.save(bid);
    }

    // ✅ NEW METHOD: Update Bid Status
    public Bid updateBidStatus(Integer bidId, String newStatus) {
        Optional<Bid> optionalBid = bidRepository.findById(bidId);
        if (optionalBid.isPresent()) {
            Bid bid = optionalBid.get();
            bid.setStatus(newStatus);
            return bidRepository.save(bid);
        }
        return null;
    }
}