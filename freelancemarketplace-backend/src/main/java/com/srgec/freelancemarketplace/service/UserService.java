package com.srgec.freelancemarketplace.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.srgec.freelancemarketplace.exception.ResourceNotFoundException;
import com.srgec.freelancemarketplace.models.User;
import com.srgec.freelancemarketplace.repository.UserRepository;

@Service
public class UserService {

    @Autowired
    private UserRepository userRepository;

    // Get all users
    public List<User> getAllUsers() {
        return userRepository.findAll();

    }

    // Get user by id
   public User getUserById(Integer id){

    return userRepository
            .findById(id)
            .orElseThrow(() ->
                    new ResourceNotFoundException(
                            "User not found with id : " + id));

}

    // Add user
    public User addUser(User user) {

        return userRepository.save(user);

    }

    // Update user
    public User updateUser(Integer id, User user) {

        User existingUser = userRepository.findById(id).orElse(null);

        if (existingUser != null) {

            existingUser.setName(user.getName());

            existingUser.setEmail(user.getEmail());

            existingUser.setPassword(user.getPassword());

            existingUser.setSkills(user.getSkills());

            existingUser.setRole(user.getRole());

            return userRepository.save(existingUser);

        }

        return null;

    }

    // Delete user
    public String deleteUser(Integer id) {

        userRepository.deleteById(id);

        return "User Deleted Successfully";

    }

}