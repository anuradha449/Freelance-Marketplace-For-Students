package com.srgec.freelancemarketplace.service;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.srgec.freelancemarketplace.dto.LoginDto;
import com.srgec.freelancemarketplace.dto.RegisterDto;
import com.srgec.freelancemarketplace.models.User;
import com.srgec.freelancemarketplace.repository.UserRepository;

@Service

public class AuthService {

    @Autowired
    private UserRepository userRepository;

    // Register

    public String register(RegisterDto dto) {

        Optional<User> existingUser = userRepository
                .findByEmail(dto.getEmail());

        if (existingUser.isPresent()) {

            return "Email Already Exists";

        }

        User user = new User();

        user.setName(dto.getName());

        user.setEmail(dto.getEmail());

        user.setPassword(dto.getPassword());

        user.setSkills(dto.getSkills());

        user.setRole(dto.getRole());

        userRepository.save(user);

        return "Registration Successful";

    }

    // Login

    public String login(LoginDto dto) {

        Optional<User> user = userRepository
                .findByEmail(dto.getEmail());

        if (user.isPresent()) {

            if (user.get()
                    .getPassword()
                    .equals(dto.getPassword())) {

                return "Login Successful";

            }

        }

        return "Invalid Email or Password";

    }

}