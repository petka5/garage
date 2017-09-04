package org.petka.garage.persistence.repositories;

import java.util.List;
import java.util.Optional;

import org.petka.garage.persistence.entities.Country;
import org.springframework.data.repository.Repository;

public interface CountryRepository extends Repository<Country, String> {

    public void delete(Country country);

    public List<Country> findAll();

    public Optional<Country> findOne(String id);

    public Optional<Country> findByName(String name);

    public Optional<Country> findByIso(String iso);

    public Country save(Country country);
}
