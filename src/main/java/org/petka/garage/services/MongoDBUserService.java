package org.petka.garage.services;

import java.util.List;
import java.util.Optional;

import org.petka.garage.dto.UserDto;
import org.petka.garage.persistence.entities.User;
import org.petka.garage.persistence.repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class MongoDBUserService implements UserService {

    @Autowired
    private UserRepository userRepository;

    @Override
    public UserDto create(UserDto userDto) {
        User user = User.getBuilder().email(userDto.getEmail()).password(userDto.getPassword()).build();
        return convertToDTO(userRepository.save(user));
    }

    @Override
    public UserDto delete(String id) {
        // TODO Auto-generated method stub
        return null;
    }

    @Override
    public List<UserDto> findAll() {
        // TODO Auto-generated method stub
        return null;
    }

    @Override
    public UserDto findById(String id) {
        Optional<User> user = userRepository.findOne(id);
        return convertToDTO(user.get());
    }

    @Override
    public UserDto update(UserDto todo) {
        // TODO Auto-generated method stub
        return null;
    }

    private UserDto convertToDTO(User user) {
        UserDto userDto = new UserDto();
        userDto.setEmail(user.getEmail());
        userDto.setPassword(user.getPassword());
        userDto.setId(user.getId());

        return userDto;
    }
}
