package org.petka.garage.rest;

import javax.validation.Valid;

import org.petka.garage.dto.UserDto;
import org.petka.garage.services.UserService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/user")
public class UserController {

    private static final Logger logger = LoggerFactory.getLogger(UserController.class);

    @Autowired
    private UserService userService;

    @RequestMapping(method = RequestMethod.POST)
    @ResponseStatus(HttpStatus.CREATED)
    UserDto create(@RequestBody @Valid UserDto userDto) {
        logger.info("Creating user {}", userDto);
        return userService.create(userDto);
    }

    @RequestMapping(value = "{id}", method = RequestMethod.GET)
    UserDto findById(@PathVariable("id") String id) {
        logger.info("Finding user with id {}", id);
        return userService.findById(id);
    }
}
