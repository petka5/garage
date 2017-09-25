package org.petka.garage.services;

import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;

import org.petka.garage.dto.LanguageDto;
import org.petka.garage.persistence.entities.Language;
import org.petka.garage.persistence.repositories.LanguageRepository;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class LanguageServiceImpl implements LanguageService {

    private static final Logger logger = LoggerFactory.getLogger(LanguageServiceImpl.class);

    @Autowired
    private LanguageRepository languageRepository;

    @Override
    public LanguageDto create(LanguageDto languageDto) {
        // TODO Auto-generated method stub
        return null;
    }

    @Override
    public LanguageDto delete(String id) {
        // TODO Auto-generated method stub
        return null;
    }

    @Override
    public List<LanguageDto> findAll() {
        logger.debug("Finding all languages.");
        List<Language> languages = languageRepository.findAll();
        return convertToDto(languages);
    }

    @Override
    public LanguageDto findById(String id) {
        // TODO Auto-generated method stub
        return null;
    }

    @Override
    public LanguageDto findByName(String name) {
        // TODO Auto-generated method stub
        return null;
    }

    @Override
    public LanguageDto findByLang(String lang) {
        // TODO Auto-generated method stub
        return null;
    }

    @Override
    public LanguageDto update(LanguageDto languageDto) {
        // TODO Auto-generated method stub
        return null;
    }

    private List<LanguageDto> convertToDto(List<Language> languages) {
        List<LanguageDto> languageDtos = new ArrayList<>();
        if (languages != null && !languages.isEmpty()) {
            for (Iterator<Language> it = languages.iterator(); it.hasNext();) {
                languageDtos.add(convertToDto(it.next()));
            }
        }
        return languageDtos;
    }

    private LanguageDto convertToDto(Language language) {
        LanguageDto languageDto = new LanguageDto();
        languageDto.setId(language.getId());
        languageDto.setLang(language.getLang());
        languageDto.setName(language.getName());
        return languageDto;
    }
}
