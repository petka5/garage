package org.petka.garage.services;

import java.util.Date;
import java.util.List;
import java.util.Optional;

import org.petka.garage.dto.UserDto;
import org.petka.garage.persistence.entities.Country;
import org.petka.garage.persistence.entities.Language;
import org.petka.garage.persistence.entities.User;
import org.petka.garage.persistence.entities.UserRegistration;
import org.petka.garage.persistence.repositories.CountryRepository;
import org.petka.garage.persistence.repositories.LanguageRepository;
import org.petka.garage.persistence.repositories.UserRegistrationRepository;
import org.petka.garage.persistence.repositories.UserRepository;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

@Service
public class SignUpActivationServiceImpl implements SignUpActivationService {

    private static final Logger logger = LoggerFactory.getLogger(SignUpActivationServiceImpl.class);

    @Autowired
    private UserRegistrationRepository userRegistrationRepository;
    @Autowired
    private CountryRepository countryRepository;
    @Autowired
    private LanguageRepository languageRepository;
    @Autowired
    private UserRepository userRepository;
    @Autowired
    private BCryptPasswordEncoder bCryptPasswordEncoder;

    @Override
    public UserDto create(UserDto userDto) {

        Optional<Language> language = languageRepository.findByLang(userDto.getLanguage());
        Optional<Country> country = countryRepository.findByIso(userDto.getCountry());

        UserRegistration user = UserRegistration.getBuilder().email(userDto.getEmail()).password(bCryptPasswordEncoder.encode(userDto.getPassword()))
                .language(language.get()).country(country.get()).build();

        UserDto newUserDto = convertToDTO(userRegistrationRepository.save(user));
        logger.info("Registering user {}", newUserDto);
        return newUserDto;

    }

    @Override
    public UserDto activate(String id) {
        UserRegistration registration = userRegistrationRepository.findById(id);
        if (registration != null) {
            User user = convertToUser(registration);
            userRepository.save(user);
            userRegistrationRepository.delete(registration);
            logger.info("Activating user {}", user);
            return convertToDTO(registration);
        }

        return null;
    }

    @Override
    public UserDto findById(String id) {
        // TODO Auto-generated method stub
        return null;
    }

    @Override
    public UserDto delete(String id) {
        // TODO Auto-generated method stub
        return null;
    }

    @Override
    public List<UserDto> findAll() {
        // TODO Auto-generated method stub
        return null;
    }

    private User convertToUser(UserRegistration userRegistration) {
        User user = new User();
        user.setEmail(userRegistration.getEmail());
        user.setPassword(userRegistration.getPassword());
        user.setLanguage(userRegistration.getLanguage());
        user.setCountry(userRegistration.getCountry());
        user.setCreatedDate(new Date());

        return user;
    }

    private UserDto convertToDTO(UserRegistration user) {
        UserDto userDto = new UserDto();
        userDto.setEmail(user.getEmail());
        userDto.setPassword(user.getPassword());
        userDto.setId(user.getId());
        userDto.setLanguage(user.getLanguage().getLang());
        userDto.setCountry(user.getCountry().getIso());

        return userDto;
    }
}
