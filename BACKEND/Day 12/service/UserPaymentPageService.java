package com.example.mobilerecharge.service;

import com.example.mobilerecharge.model.UserPaymentPage;
import com.example.mobilerecharge.repository.UserPaymentPageRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class UserPaymentPageService {

    @Autowired
    private UserPaymentPageRepository userPaymentPageRepository;

    public List<UserPaymentPage> getAllUserPayments() {
        return userPaymentPageRepository.findAll();
    }

    public Optional<UserPaymentPage> getUserPaymentById(Long id) {
        return userPaymentPageRepository.findById(id);
    }

    public UserPaymentPage saveUserPayment(UserPaymentPage userPaymentPage) {
        return userPaymentPageRepository.save(userPaymentPage);
    }

    public void deleteUserPayment(Long id) {
        userPaymentPageRepository.deleteById(id);
    }
}
