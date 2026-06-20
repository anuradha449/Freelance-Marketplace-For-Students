package com.srgec.freelancemarketplace.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.srgec.freelancemarketplace.dto.LoginDto;
import com.srgec.freelancemarketplace.dto.RegisterDto;
import com.srgec.freelancemarketplace.service.AuthService;

@RestController

@RequestMapping("/auth")

@CrossOrigin("*")

public class AuthController {

    @Autowired

    private AuthService authService;

    @PostMapping("/register")

    public String register(

            @RequestBody RegisterDto dto) {

        return authService.register(dto);

    }

    @PostMapping("/login")

    public String login(

            @RequestBody LoginDto dto) {

        return authService.login(dto);

    }

}