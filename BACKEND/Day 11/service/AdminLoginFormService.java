package com.example.mobilerecharge.service;

import com.example.mobilerecharge.model.AdminLoginForm;
import com.example.mobilerecharge.repository.AdminLoginFormRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class AdminLoginFormService {
    @Autowired
    private final AdminLoginFormRepository adminLoginFormRepository;

   
    public AdminLoginFormService(AdminLoginFormRepository adminLoginFormRepository) {
        this.adminLoginFormRepository = adminLoginFormRepository;
    }

    public void submitAdminLoginForm(AdminLoginForm adminLoginForm) {
        adminLoginFormRepository.save(adminLoginForm);
    }

    public AdminLoginForm getAdminLoginFormByUsername(String username) {
        return adminLoginFormRepository.findByUsername(username);
    }
}
