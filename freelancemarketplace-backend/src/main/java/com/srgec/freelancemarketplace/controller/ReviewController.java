package com.srgec.freelancemarketplace.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.srgec.freelancemarketplace.models.Review;
import com.srgec.freelancemarketplace.models.User;
import com.srgec.freelancemarketplace.service.ReviewService;
import com.srgec.freelancemarketplace.service.UserService; // ✅ Add this import

@RestController
@RequestMapping("/reviews")
@CrossOrigin("*")
public class ReviewController {

    @Autowired
    private ReviewService reviewService;

    @Autowired
    private UserService userService; // ✅ Inject UserService

    @GetMapping
    public List<Review> getAllReviews() {
        return reviewService.getAllReviews();
    }

    @PostMapping
    public Review addReview(@RequestBody Review review) {
        // ✅ FIX: Make sure the user actually exists in the DB
        if (review.getUser() != null && review.getUser().getId() != null) {
            User existingUser = userService.getUserById(review.getUser().getId());
            review.setUser(existingUser); // Set the full user object
        }
        return reviewService.addReview(review);
    }
}