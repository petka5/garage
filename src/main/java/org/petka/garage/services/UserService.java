package org.petka.garage.services;

import java.util.List;

import org.petka.garage.dto.UserDto;

public interface UserService {

    public UserDto create(UserDto userDto);

    public UserDto delete(String id);

    public List<UserDto> findAll();

    public UserDto findById(String id);

    public UserDto findByEmail(String email);

    public UserDto findByEmailAndEnabledTrue(String email);

    public UserDto update(UserDto userDto);

    public UserDto findByEmailAndPassword(String email, String password);
}
