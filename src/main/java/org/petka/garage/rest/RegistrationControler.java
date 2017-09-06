package org.petka.garage.rest;

import java.io.IOException;

import javax.servlet.http.HttpServletResponse;
import javax.validation.Valid;

import org.petka.garage.dto.UserDto;
import org.petka.garage.services.SignUpActivationService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class RegistrationControler {

    private static final Logger logger = LoggerFactory.getLogger(RegistrationControler.class);

    @Autowired
    private SignUpActivationService signUpActivationService;

    @RequestMapping(value = "/sign-up", method = RequestMethod.POST)
    public UserDto signup(@RequestBody @Valid UserDto userDto) {
        logger.info("Registering user {}", userDto);
        UserDto createdUser = signUpActivationService.create(userDto);
        return createdUser;
    }

    @RequestMapping(value = "/activation/{id}", method = RequestMethod.GET)
    public UserDto activation(@PathVariable("id") String id, HttpServletResponse http) throws IOException {
        logger.info("Activating user with id {}", id);
        UserDto userDto = signUpActivationService.activate(id);
        if (userDto != null) {
            logger.info("User {} has been activated.", userDto.getEmail());
            http.sendRedirect("/");
        }
        return userDto;
    }
}
