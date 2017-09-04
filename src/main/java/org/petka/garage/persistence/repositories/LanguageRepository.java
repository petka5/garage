package org.petka.garage.persistence.repositories;

import java.util.List;
import java.util.Optional;

import org.petka.garage.persistence.entities.Language;
import org.springframework.data.repository.Repository;

public interface LanguageRepository extends Repository<Language, String> {

    public void delete(Language language);

    public List<Language> findAll();

    public Optional<Language> findOne(String id);

    public Optional<Language> findByName(String name);

    public Optional<Language> findByLang(String lang);

    public Language save(Language language);
}
