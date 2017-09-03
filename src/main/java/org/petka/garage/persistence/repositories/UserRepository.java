package org.petka.garage.persistence.repositories;

import java.util.List;
import java.util.Optional;

import org.petka.garage.persistence.entities.User;
import org.springframework.data.repository.Repository;

public interface UserRepository extends Repository<User, String> {

    void delete(User user);

    List<User> findAll();

    Optional<User> findOne(String id);

    User save(User user);

}
