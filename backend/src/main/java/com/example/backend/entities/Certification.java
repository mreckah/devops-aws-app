package com.example.backend.entities;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
@Table(name = "certifications")
public class Certification {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String name;
    private String description;
    private double cost;

    @Column(name = "expiration_date")
    private LocalDateTime expirationDate;

    @Column(name = "registration_date")
    private LocalDateTime registrationDate;

    private String status;

    @PrePersist
    public void prePersist() {
        this.registrationDate = LocalDateTime.now();
        this.status = "Identification";
    }
}
