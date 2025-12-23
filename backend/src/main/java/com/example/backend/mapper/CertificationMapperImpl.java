package com.example.backend.mapper;

import com.example.backend.dto.CertificationRequest;
import com.example.backend.dto.CertificationResponse;
import com.example.backend.entities.Certification;
import org.springframework.stereotype.Component;

@Component
public class CertificationMapperImpl implements CertificationMapper {

    @Override
    public Certification toEntity(CertificationRequest request) {
        if (request == null)
            return null;

        Certification certification = new Certification();
        certification.setName(request.getName());
        certification.setDescription(request.getDescription());
        certification.setCost(request.getCost());
        certification.setExpirationDate(request.getExpirationDate());
        return certification;
    }

    @Override
    public CertificationResponse toResponse(Certification certification) {
        if (certification == null)
            return null;

        CertificationResponse response = new CertificationResponse();
        response.setId(certification.getId());
        response.setName(certification.getName());
        response.setDescription(certification.getDescription());
        response.setCost(certification.getCost());
        response.setExpirationDate(certification.getExpirationDate());
        response.setRegistrationDate(certification.getRegistrationDate());
        response.setStatus(certification.getStatus());
        return response;
    }
}
