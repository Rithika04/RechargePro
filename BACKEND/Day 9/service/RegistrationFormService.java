package com.example.mobilerecharge.service;

import com.example.mobilerecharge.model.RegistrationForm;
import com.example.mobilerecharge.repository.RegistrationFormRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class RegistrationFormService {
    @Autowired
    private final RegistrationFormRepository registrationFormRepository;

    
    public RegistrationFormService(RegistrationFormRepository registrationFormRepository) {
        this.registrationFormRepository = registrationFormRepository;
    }

    public void registerUser(RegistrationForm registrationForm) {
        registrationFormRepository.save(registrationForm);
    }
}
