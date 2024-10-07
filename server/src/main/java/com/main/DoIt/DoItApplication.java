package com.main.DoIt;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.data.mongodb.repository.config.EnableMongoRepositories;

@SpringBootApplication
@ComponentScan(basePackages = "com.main")
@EnableMongoRepositories(basePackages = "com.main.taskmanager.repository")  // Explicitly tell Spring Boot where to find repositories
public class DoItApplication {
    public static void main(String[] args) {
        SpringApplication.run(DoItApplication.class, args);
    }
}
