package com.example.mobilerecharge.controller;

import com.example.mobilerecharge.model.LoginForm;
import com.example.mobilerecharge.service.LoginFormService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/login")
public class LoginFormController {

    @Autowired
    private LoginFormService loginFormService;

    @GetMapping
    public List<LoginForm> getAllLoginForm() {
        return loginFormService.getAllLoginForm();
    }

    @GetMapping("/{username}")
    public LoginForm getLoginPageByUsername(@PathVariable String username) {
        return loginFormService.getLoginFormByUsername(username);
    }

    @PostMapping("")
    public LoginForm createLoginForm(@RequestBody LoginForm loginForm) {
        return loginFormService.createLoginForm(loginForm);
    }

    @PutMapping("/{username}")
    public LoginForm updateLoginForm(@PathVariable String username, @RequestBody LoginForm loginForm) {
        return loginFormService.updateLoginForm(username, loginForm);
    }

    @DeleteMapping("/{username}")
    public void deleteLoginForm(@PathVariable String username) {
        loginFormService.deleteLoginForm(username);
    }
}