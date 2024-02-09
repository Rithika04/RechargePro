package com.example.mobilerecharge.repository;

import com.example.mobilerecharge.model.UserPaymentPage;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserPaymentPageRepository extends JpaRepository<UserPaymentPage, Long> {
    // You can add custom query methods if needed
}
