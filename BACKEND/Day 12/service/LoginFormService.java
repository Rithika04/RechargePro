package com.example.mobilerecharge.service;

import com.example.mobilerecharge.model.LoginForm;
import com.example.mobilerecharge.repository.LoginFormRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class LoginFormService {

    @Autowired
    private LoginFormRepository loginFormRepository;

    public List<LoginForm> getAllLoginForm() {
        return loginFormRepository.findAll();
    }

    public LoginForm getLoginFormByUsername(String username) {
        Optional<LoginForm> optionalLoginPage = loginFormRepository.findById(username);
        return optionalLoginPage.orElse(null);
    }

    public LoginForm createLoginForm(LoginForm loginForm) {
        return loginFormRepository.save(loginForm);
    }

    public LoginForm updateLoginForm(String username, LoginForm newLoginForm) {
        Optional<LoginForm> optionalLoginForm = loginFormRepository.findById(username);
        if (optionalLoginForm.isPresent()) {
            LoginForm existingLoginForm = optionalLoginForm.get();
            existingLoginForm.setPassword(newLoginForm.getPassword());
            return loginFormRepository.save(existingLoginForm);
        }
        return null;
    }

    public void deleteLoginForm(String username) {
        loginFormRepository.deleteById(username);
    }
}
