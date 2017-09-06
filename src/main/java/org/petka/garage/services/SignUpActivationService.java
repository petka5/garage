package org.petka.garage.services;

import java.util.List;

import org.petka.garage.dto.UserDto;

public interface SignUpActivationService {

    public UserDto create(UserDto userDto);

    public UserDto findById(String id);

    public UserDto activate(String id);

    public UserDto delete(String id);

    public List<UserDto> findAll();
}
