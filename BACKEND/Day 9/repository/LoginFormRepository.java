package com.example.mobilerecharge.repository;

import com.example.mobilerecharge.model.LoginForm;
import org.springframework.data.jpa.repository.JpaRepository;

public interface LoginFormRepository extends JpaRepository<LoginForm, String> {
    // You can add custom queries or methods if needed
}

