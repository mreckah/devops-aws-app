package com.example.backend.service;

import com.example.backend.dto.CertificationRequest;
import com.example.backend.dto.CertificationResponse;

import java.util.List;

public interface CertificationService {

    CertificationResponse createCertification(CertificationRequest request);

    List<CertificationResponse> getAllCertifications();

    CertificationResponse getCertificationById(Long id);

    void deleteCertification(Long id);
}
