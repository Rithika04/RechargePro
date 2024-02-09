package com.example.mobilerecharge.controller;

import com.example.mobilerecharge.model.RegistrationForm;
import com.example.mobilerecharge.service.RegistrationFormService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/registration")
public class RegistrationFormController {
    @Autowired
    private final RegistrationFormService registrationFormService;

 
    public RegistrationFormController(RegistrationFormService registrationFormService) {
        this.registrationFormService = registrationFormService;
    }

    @PostMapping("/register")
    public void registerUser(@RequestBody RegistrationForm registrationForm) {
        registrationFormService.registerUser(registrationForm);
    }
}
