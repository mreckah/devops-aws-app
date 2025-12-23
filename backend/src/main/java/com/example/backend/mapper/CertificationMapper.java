package com.example.backend.mapper;

import com.example.backend.dto.CertificationRequest;
import com.example.backend.dto.CertificationResponse;
import com.example.backend.entities.Certification;

public interface CertificationMapper {
    Certification toEntity(CertificationRequest request);

    CertificationResponse toResponse(Certification certification);
}
