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

import com.srgec.freelancemarketplace.models.User;
import com.srgec.freelancemarketplace.service.UserService;

@RestController

@RequestMapping("/users")

@CrossOrigin("*")

public class UserController {

    @Autowired
    private UserService userService;

    // Get all users

    @GetMapping

    public List<User> getAllUsers() {

        return userService.getAllUsers();

    }

    // Get user by id

    @GetMapping("/{id}")

    public User getUserById(@PathVariable Integer id) {

        return userService.getUserById(id);

    }

    // Add user

    @PostMapping

    public User addUser(@RequestBody User user) {

        return userService.addUser(user);

    }

    // Update user

    @PutMapping("/{id}")

    public User updateUser(@PathVariable Integer id,
            @RequestBody User user) {

        return userService.updateUser(id, user);

    }

    // Delete user

    @DeleteMapping("/{id}")

    public String deleteUser(@PathVariable Integer id) {

        return userService.deleteUser(id);

    }

}