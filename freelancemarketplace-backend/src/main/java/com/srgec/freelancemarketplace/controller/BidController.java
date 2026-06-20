package com.srgec.freelancemarketplace.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping; // ✅ Added this
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.srgec.freelancemarketplace.models.Bid;
import com.srgec.freelancemarketplace.service.BidService;

@RestController
@RequestMapping("/bids")
@CrossOrigin("*")
public class BidController {

    @Autowired
    private BidService bidService;

    @GetMapping
    public List<Bid> getAllBids() {
        return bidService.getAllBids();
    }

    @PostMapping
    public Bid addBid(@RequestBody Bid bid) {
        return bidService.addBid(bid);
    }

    // ✅ NEW API: Update a Bid Status (e.g., mark as Completed)
    // ✅ NEW: Client can mark a bid as completed by just using the Freelancer ID
    @PutMapping("/complete/{freelancerId}")
    public String completeBidForFreelancer(@PathVariable Integer freelancerId) {
        // Find all bids
        List<Bid> allBids = bidService.getAllBids();

        // Find the first Pending bid made by this freelancer
        Bid targetBid = allBids.stream()
                .filter(bid -> bid.getUser().getId().equals(freelancerId) &&
                        "Pending".equalsIgnoreCase(bid.getStatus()))
                .findFirst()
                .orElse(null);

        if (targetBid != null) {
            targetBid.setStatus("Completed");
            bidService.addBid(targetBid); // Save the update
            return "Bid marked as Completed for Freelancer ID: " + freelancerId;
        } else {
            return "No pending bid found for Freelancer ID: " + freelancerId;
        }
    }
}