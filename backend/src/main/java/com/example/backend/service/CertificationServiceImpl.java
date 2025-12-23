package com.example.backend.service;

import com.example.backend.dto.CertificationRequest;
import com.example.backend.dto.CertificationResponse;
import com.example.backend.entities.Certification;
import com.example.backend.mapper.CertificationMapper;
import com.example.backend.repository.CertificationRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class CertificationServiceImpl implements CertificationService {

    private final CertificationRepository certificationRepository;
    private final CertificationMapper certificationMapper;

    @Override
    public CertificationResponse createCertification(CertificationRequest request) {
        Certification certification = certificationMapper.toEntity(request);
        Certification saved = certificationRepository.save(certification);
        return certificationMapper.toResponse(saved);
    }

    @Override
    public List<CertificationResponse> getAllCertifications() {
        return certificationRepository.findAll()
                .stream()
                .map(certificationMapper::toResponse)
                .collect(Collectors.toList());
    }

    @Override
    public CertificationResponse getCertificationById(Long id) {
        Certification certification = certificationRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Certification not found"));
        return certificationMapper.toResponse(certification);
    }

    @Override
    public void deleteCertification(Long id) {
        certificationRepository.deleteById(id);
    }
}
