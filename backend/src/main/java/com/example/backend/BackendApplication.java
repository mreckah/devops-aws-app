package com.example.backend;

import com.example.backend.entities.Certification;
import com.example.backend.repository.CertificationRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

import java.time.LocalDateTime;

@SpringBootApplication
@RequiredArgsConstructor
public class BackendApplication {

    public static void main(String[] args) {
        SpringApplication.run(BackendApplication.class, args);
    }

    private final CertificationRepository certificationRepository;

    @Bean
    CommandLineRunner initData() {
        return args -> {
            if (certificationRepository.count() == 0) {
                Certification c1 = new Certification();
                c1.setName("AWS Certified Solutions Architect");
                c1.setDescription("Cloud computing certification");
                c1.setCost(150.0);
                c1.setExpirationDate(LocalDateTime.now().plusYears(3));

                Certification c2 = new Certification();
                c2.setName("Java SE Programmer");
                c2.setDescription("Java programming certification");
                c2.setCost(200.0);
                c2.setExpirationDate(LocalDateTime.now().plusYears(2));

                certificationRepository.save(c1);
                certificationRepository.save(c2);
            }
        };
    }
}
