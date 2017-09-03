package org.petka.garage.services;

import java.util.List;

import org.petka.garage.dto.UserDto;

public interface UserService {
    
    UserDto create(UserDto todo);

    UserDto delete(String id);

    List<UserDto> findAll();

    UserDto findById(String id);

    UserDto update(UserDto todo);
}
