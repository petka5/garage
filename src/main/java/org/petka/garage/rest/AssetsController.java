package org.petka.garage.rest;

import java.util.List;

import org.petka.garage.dto.LanguageDto;
import org.petka.garage.services.LanguageService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class AssetsController {

    private static final Logger logger = LoggerFactory.getLogger(AssetsController.class);

    @Autowired
    private LanguageService languageService;

    @RequestMapping(value = "/languages", method = RequestMethod.GET)
    public List<LanguageDto> languages() {
        logger.info("Getting languages");
        return languageService.findAll();
    }
}
