package com.srgec.freelancemarketplace.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.srgec.freelancemarketplace.models.Review;
import com.srgec.freelancemarketplace.repository.ReviewRepository;

@Service

public class ReviewService {

    @Autowired

    private ReviewRepository reviewRepository;

    public List<Review> getAllReviews() {

        return reviewRepository.findAll();

    }

    public Review addReview(
            Review review) {

        return reviewRepository.save(review);

    }

}