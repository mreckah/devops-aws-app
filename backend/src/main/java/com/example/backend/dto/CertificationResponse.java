package com.example.backend.dto;

import lombok.Data;

import java.time.LocalDateTime;

@Data
public class CertificationResponse {
    private Long id;
    private String name;
    private String description;
    private double cost;
    private LocalDateTime expirationDate;
    private LocalDateTime registrationDate;
    private String status;
}
