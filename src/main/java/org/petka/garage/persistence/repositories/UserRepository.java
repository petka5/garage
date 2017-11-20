package org.petka.garage.persistence.repositories;

import java.util.List;
import java.util.Optional;

import org.petka.garage.persistence.entities.User;
import org.springframework.data.repository.Repository;

public interface UserRepository extends Repository<User, String> {

    public Optional<User> findById(String id);

    public User save(User user);

    public User findByEmailAndEnabledTrue(String email);

    public void delete(User user);

    public List<User> findAll();

    public User findByEmailAndPassword(String email, String password);

    public User findByEmail(String email);

}
