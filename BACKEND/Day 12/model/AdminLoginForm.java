package com.example.mobilerecharge.model;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Entity
@NoArgsConstructor

public class AdminLoginForm {

    @Id
    private String username;
    private String password;
    public AdminLoginForm(String username, String password) {
        this.username = username;
        this.password = password;
    }


   
}
