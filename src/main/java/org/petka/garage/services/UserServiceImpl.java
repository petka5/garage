package org.petka.garage.services;

import java.util.List;
import java.util.Optional;

import org.petka.garage.dto.UserDto;
import org.petka.garage.persistence.entities.Country;
import org.petka.garage.persistence.entities.Language;
import org.petka.garage.persistence.entities.User;
import org.petka.garage.persistence.repositories.CountryRepository;
import org.petka.garage.persistence.repositories.LanguageRepository;
import org.petka.garage.persistence.repositories.UserRepository;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

@Service
public class UserServiceImpl implements UserService {

    private static final Logger logger = LoggerFactory.getLogger(UserServiceImpl.class);

    @Autowired
    private UserRepository userRepository;
    @Autowired
    private CountryRepository countryRepository;
    @Autowired
    private LanguageRepository languageRepository;
    @Autowired
    private BCryptPasswordEncoder bCryptPasswordEncoder;

    @Override
    public UserDto create(UserDto userDto) {

        Optional<Language> language = languageRepository.findByLang(userDto.getLanguage());
        Optional<Country> country = countryRepository.findByIso(userDto.getCountry());

        User user = User.getBuilder().email(userDto.getEmail()).password(bCryptPasswordEncoder.encode(userDto.getPassword())).language(language.get())
                .country(country.get()).build();
        logger.info("Creating user {}", user);
        return convertToDTO(userRepository.save(user));
    }

    public UserDto findByEmailAndPassword(String email, String password) {
        User user = userRepository.findByEmailAndPassword(email, password);
        if (user != null) {
            return convertToDTO(user);
        }
        return null;
    }

    @Override
    public UserDto findByEmail(String email) {
        User user = userRepository.findByEmail(email);
        return convertToDTO(user);
    }

    @Override
    public UserDto findByEmailAndEnabledTrue(String email) {
        User user = userRepository.findByEmailAndEnabledTrue(email);
        return convertToDTO(user);
    }

    @Override
    public UserDto delete(String id) {
        return null;
    }

    @Override
    public List<UserDto> findAll() {
        return null;
    }

    @Override
    public UserDto findById(String id) {
        Optional<User> user = userRepository.findById(id);
        return convertToDTO(user.get());
    }

    @Override
    public UserDto update(UserDto userDto) {
        return null;
    }

    private UserDto convertToDTO(User user) {
        if (user != null) {
            UserDto userDto = new UserDto();
            userDto.setEmail(user.getEmail());
            userDto.setPassword(user.getPassword());
            userDto.setId(user.getId());
            userDto.setLanguage(user.getLanguage().getLang());
            userDto.setCountry(user.getCountry().getIso());
            userDto.setCreatedDate(user.getCreatedDate());
            userDto.setLastLoginDate(user.getLastLoginDate());
            userDto.setLastModifiedDate(user.getLastModifiedDate());

            return userDto;
        }
        return null;
    }

}
