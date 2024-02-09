package com.example.mobilerecharge.repository;

import com.example.mobilerecharge.model.RegistrationForm;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface RegistrationFormRepository extends JpaRepository<RegistrationForm, String> {
    // You can add custom query methods if needed
}
