package org.petka.garage.rest;

import java.util.List;

import org.petka.garage.dto.LanguageDto;
import org.petka.garage.persistence.entities.Language;
import org.petka.garage.persistence.repositories.LanguageRepositoryReactive;
import org.petka.garage.services.LanguageService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import reactor.core.publisher.Flux;

@RestController
public class AssetsController {

    private static final Logger logger = LoggerFactory.getLogger(AssetsController.class);

    @Autowired
    private LanguageService languageService;

    @Autowired
    private LanguageRepositoryReactive langReactive;

    @RequestMapping(value = "/languages", method = RequestMethod.GET)
    public List<LanguageDto> languages() {
        logger.info("Getting languages");
        return languageService.findAll();
    }

    @RequestMapping(value = "/languagesReactive", method = RequestMethod.GET)
    public Flux<Language> languagesReactive() {
        logger.info("Getting languages Reactive");
        return langReactive.findAll();
    }
}
