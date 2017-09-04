package org.petka.garage.services;

import java.io.UnsupportedEncodingException;
import java.security.MessageDigest;
import java.security.NoSuchAlgorithmException;
import java.util.List;
import java.util.Optional;

import org.petka.garage.config.Constants;
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

    @Override
    public UserDto create(UserDto userDto) {

        Optional<Language> language = languageRepository.findByLang(userDto.getLanguage());
        Optional<Country> country = countryRepository.findByIso(userDto.getCountry());

        User user = User.getBuilder().email(userDto.getEmail()).password(sha256WithSalt(userDto.getPassword())).language(language.get())
                .country(country.get()).build();
        return convertToDTO(userRepository.save(user));
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
        Optional<User> user = userRepository.findOne(id);
        return convertToDTO(user.get());
    }

    @Override
    public UserDto update(UserDto userDto) {
        return null;
    }

    private UserDto convertToDTO(User user) {
        UserDto userDto = new UserDto();
        userDto.setEmail(user.getEmail());
        userDto.setPassword(user.getPassword());
        userDto.setId(user.getId());
        userDto.setLanguage(user.getLanguage().getLang());
        userDto.setCountry(user.getCountry().getIso());

        return userDto;
    }

    private String sha256WithSalt(String msg) {
        try {
            msg = Constants.APP_SALT + msg;
            MessageDigest digest = MessageDigest.getInstance("SHA-256");
            byte[] hash = digest.digest(msg.getBytes("UTF-8"));
            StringBuffer hexString = new StringBuffer();

            for (int i = 0; i < hash.length; i++) {
                String hex = Integer.toHexString(0xff & hash[i]);
                if (hex.length() == 1)
                    hexString.append('0');
                hexString.append(hex);
            }

            return hexString.toString();
        } catch (NoSuchAlgorithmException | UnsupportedEncodingException e) {
            logger.error(e.getMessage());
        }

        return null;

    }
}
