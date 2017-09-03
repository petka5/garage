package org.petka.garage;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication()
public class Garage {

    private static final Logger logger = LoggerFactory.getLogger(Garage.class);

    public static void main(String[] args) {
        logger.info("Starting ....");
        SpringApplication.run(Garage.class, args);
    }
}
