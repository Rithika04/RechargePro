package com.example.mobilerecharge.controller;

import com.example.mobilerecharge.model.AdminLoginForm;
import com.example.mobilerecharge.service.AdminLoginFormService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/admin-login")
public class AdminLoginFormController {
    @Autowired
    
    private final AdminLoginFormService adminLoginFormService;

   
    public AdminLoginFormController(AdminLoginFormService adminLoginFormService) {
        this.adminLoginFormService = adminLoginFormService;
    }

    @PostMapping("/submit")
    public void submitAdminLoginForm(@RequestBody AdminLoginForm adminLoginForm) {
        adminLoginFormService.submitAdminLoginForm(adminLoginForm);
    }

    @GetMapping("/{username}")
    public AdminLoginForm getAdminLoginFormByUsername(@PathVariable String username) {
        return adminLoginFormService.getAdminLoginFormByUsername(username);
    }
}
