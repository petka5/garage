package org.petka.garage.persistence.repositories;

import org.petka.garage.persistence.entities.Language;
import org.springframework.data.repository.reactive.ReactiveCrudRepository;

import reactor.core.publisher.Flux;
import reactor.core.publisher.Mono;

//https://springframework.guru/spring-data-mongodb-with-reactive-mongodb/
public interface LanguageRepositoryReactive extends ReactiveCrudRepository<Language, String> {

    public Mono<Void> delete(Language language);

    public Flux<Language> findAll();

    public Mono<Language> findById(String id);

    public Mono<Language> findByName(String name);

    public Mono<Language> findByLang(String lang);

    public Mono<Language> save(Language language);
}
