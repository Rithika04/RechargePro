package com.example.mobilerecharge.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.Data;
import lombok.NoArgsConstructor;
@Data
@NoArgsConstructor
@Entity
public class RechargePlansPage {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String name;
    private double amount;
    private String validity;
    private String data;
    public RechargePlansPage(Long id, String name, double amount, String validity, String data) {
        this.id = id;
        this.name = name;
        this.amount = amount;
        this.validity = validity;
        this.data = data;
    }

    
}
