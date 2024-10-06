package com.main.DoIt;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.ComponentScan;

@SpringBootApplication
@ComponentScan(basePackages = "com.main")
public class DoItApplication {
    public static void main(String[] args) {
        SpringApplication.run(DoItApplication.class, args);
    }
}
