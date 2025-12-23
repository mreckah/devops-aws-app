package com.example.backend.dto;

import lombok.Data;

import java.time.LocalDateTime;

@Data
public class CertificationRequest {
    private String name;
    private String description;
    private double cost;
    private LocalDateTime expirationDate;
}
