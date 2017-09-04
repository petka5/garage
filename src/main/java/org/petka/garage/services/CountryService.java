package org.petka.garage.services;

import java.util.List;

import org.petka.garage.dto.CountryDto;

public interface CountryService {

    public CountryDto create(CountryDto countryDto);

    public CountryDto delete(String id);

    public List<CountryDto> findAll();

    public CountryDto findById(String id);

    public CountryDto findByName(String name);

    public CountryDto findByIso(String iso);

    public CountryDto update(CountryDto countryDto);

}
