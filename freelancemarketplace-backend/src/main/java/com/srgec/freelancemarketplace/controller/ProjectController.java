package com.srgec.freelancemarketplace.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.srgec.freelancemarketplace.models.Project;
import com.srgec.freelancemarketplace.service.ProjectService;

@RestController

@RequestMapping("/projects")

@CrossOrigin("*")

public class ProjectController {

    @Autowired

    private ProjectService projectService;

    @GetMapping

    public List<Project> getAllProjects() {

        return projectService.getAllProjects();

    }

    @GetMapping("/{id}")

    public Project getProjectById(
            @PathVariable Integer id) {

        return projectService.getProjectById(id);

    }

    @PostMapping

    public Project addProject(
            @RequestBody Project project) {

        return projectService.addProject(project);

    }

    @PutMapping("/{id}")

    public Project updateProject(
            @PathVariable Integer id,

            @RequestBody Project project) {

        return projectService
                .updateProject(id, project);

    }

    @DeleteMapping("/{id}")

    public String deleteProject(
            @PathVariable Integer id) {

        return projectService
                .deleteProject(id);

    }

}