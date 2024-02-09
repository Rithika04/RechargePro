package com.example.mobilerecharge.controller;

import com.example.mobilerecharge.model.UserPaymentPage;
import com.example.mobilerecharge.service.UserPaymentPageService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/user-payments")
public class UserPaymentPageController {

    @Autowired
    private UserPaymentPageService userPaymentPageService;

    @GetMapping
    public ResponseEntity<List<UserPaymentPage>> getAllUserPayments() {
        List<UserPaymentPage> userPayments = userPaymentPageService.getAllUserPayments();
        return ResponseEntity.ok(userPayments);
    }

    @GetMapping("/{id}")
    public ResponseEntity<UserPaymentPage> getUserPaymentById(@PathVariable Long id) {
        return userPaymentPageService.getUserPaymentById(id)
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }

    @PostMapping
    public ResponseEntity<UserPaymentPage> createUserPayment(@RequestBody UserPaymentPage userPaymentPage) {
        UserPaymentPage createdUserPayment = userPaymentPageService.saveUserPayment(userPaymentPage);
        return ResponseEntity.ok(createdUserPayment);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteUserPayment(@PathVariable Long id) {
        userPaymentPageService.deleteUserPayment(id);
        return ResponseEntity.noContent().build();
    }
}
