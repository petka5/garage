package org.petka.garage.persistence.repositories;

import java.util.List;

import org.petka.garage.persistence.entities.UserRegistration;
import org.springframework.data.repository.Repository;

public interface UserRegistrationRepository extends Repository<UserRegistration, String> {

    public void delete(UserRegistration user);

    public List<UserRegistration> findAll();

    public UserRegistration findById(String id);

    public UserRegistration save(UserRegistration user);

    public UserRegistration findByEmailAndPassword(String email, String password);

    public UserRegistration findByEmail(String email);

}
