
package com.example.mobilerecharge.model;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Entity
@NoArgsConstructor

public class RegistrationForm {

    @Id
    private String username;
    private String email;
    private String password;
    public RegistrationForm(String username, String email, String password) {
        this.username = username;
        this.email = email;
        this.password = password;
    }

   
}
