package com.srgec.freelancemarketplace.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.srgec.freelancemarketplace.models.Project;
import com.srgec.freelancemarketplace.repository.ProjectRepository;

@Service
public class ProjectService {

    @Autowired
    private ProjectRepository projectRepository;

    public List<Project> getAllProjects() {

        return projectRepository.findAll();

    }

    public Project getProjectById(Integer id) {

        return projectRepository.findById(id).orElse(null);

    }

    public Project addProject(Project project) {

        return projectRepository.save(project);

    }

    public Project updateProject(Integer id,
            Project project) {

        Project existingProject = projectRepository.findById(id)
                .orElse(null);

        if (existingProject != null) {

            existingProject.setTitle(
                    project.getTitle());

            existingProject.setDescription(
                    project.getDescription());

            existingProject.setBudget(
                    project.getBudget());

            existingProject.setStatus(
                    project.getStatus());

            existingProject.setPostedBy(
                    project.getPostedBy());

            return projectRepository
                    .save(existingProject);

        }

        return null;

    }

    public String deleteProject(Integer id) {

        projectRepository.deleteById(id);

        return "Project Deleted Successfully";

    }

}