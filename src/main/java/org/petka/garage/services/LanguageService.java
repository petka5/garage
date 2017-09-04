package org.petka.garage.services;

import java.util.List;

import org.petka.garage.dto.LanguageDto;

public interface LanguageService {

    public LanguageDto create(LanguageDto languageDto);

    public LanguageDto delete(String id);

    public List<LanguageDto> findAll();

    public LanguageDto findById(String id);

    public LanguageDto findByName(String name);

    public LanguageDto findByLang(String lang);

    public LanguageDto update(LanguageDto languageDto);

}
