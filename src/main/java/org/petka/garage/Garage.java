package org.petka.garage;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.data.rest.RepositoryRestMvcAutoConfiguration;
import org.springframework.context.annotation.Bean;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

@SpringBootApplication(exclude = RepositoryRestMvcAutoConfiguration.class)
public class Garage {

    private static final Logger logger = LoggerFactory.getLogger(Garage.class);
    // https://auth0.com/blog/implementing-jwt-authentication-on-spring-boot/
    // https://auth0.com/blog/securing-spring-boot-with-jwts/
    public static void main(String[] args) {
        logger.info("Starting ....");
        SpringApplication.run(Garage.class, args);
    }
    
    @Bean
    public BCryptPasswordEncoder bCryptPasswordEncoder() {
        return new BCryptPasswordEncoder();
    }
}
