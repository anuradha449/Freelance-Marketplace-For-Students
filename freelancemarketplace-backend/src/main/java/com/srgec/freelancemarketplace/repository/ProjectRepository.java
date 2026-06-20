package com.srgec.freelancemarketplace.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.srgec.freelancemarketplace.models.Project;

public interface ProjectRepository
        extends JpaRepository<Project, Integer> {

}