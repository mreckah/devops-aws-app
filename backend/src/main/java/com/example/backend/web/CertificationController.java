package com.example.backend.web;

import com.example.backend.dto.CertificationRequest;
import com.example.backend.dto.CertificationResponse;
import com.example.backend.service.CertificationService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/certifications")
@RequiredArgsConstructor
public class CertificationController {

    private final CertificationService certificationService;

    @PostMapping
    public CertificationResponse create(@RequestBody CertificationRequest request) {
        return certificationService.createCertification(request);
    }

    @GetMapping
    public List<CertificationResponse> findAll() {
        return certificationService.getAllCertifications();
    }

    @GetMapping("/{id}")
    public CertificationResponse findById(@PathVariable Long id) {
        return certificationService.getCertificationById(id);
    }

    @DeleteMapping("/{id}")
    public void delete(@PathVariable Long id) {
        certificationService.deleteCertification(id);
    }
}
