package org.petka.garage.persistence.repositories;

import java.util.List;
import java.util.Optional;

import org.petka.garage.persistence.entities.User;
import org.springframework.data.repository.Repository;

public interface UserRepository extends Repository<User, String> {

    public void delete(User user);

    public List<User> findAll();

    public Optional<User> findOne(String id);

    public User save(User user);

}
