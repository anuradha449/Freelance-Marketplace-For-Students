package com.srgec.freelancemarketplace.models;

import java.util.List;

import com.fasterxml.jackson.annotation.JsonIgnore; // ✅ Import this

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Project {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    private String title;
    private String description;
    private Double budget;
    private String status;
    private String postedBy;

    @OneToMany(mappedBy = "project")
    @JsonIgnore // ✅ THIS IS THE FIX! It stops infinite loops/broken JSON.
    private List<Bid> bids;
}