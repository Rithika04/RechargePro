package com.example.mobilerecharge.repository;

import com.example.mobilerecharge.model.AdminLoginForm;
import org.springframework.data.jpa.repository.JpaRepository;

public interface AdminLoginFormRepository extends JpaRepository<AdminLoginForm, String> {
    AdminLoginForm findByUsername(String username);
}
