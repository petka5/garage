package org.petka.garage.persistence.entities;

import java.util.Date;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.index.Indexed;
import org.springframework.data.mongodb.core.mapping.DBRef;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.format.annotation.DateTimeFormat.ISO;

@Document(collection = "users")
public class User {

    @Id
    private String id;
    @Indexed(unique = true)
    private String email;
    private String password;
    @DBRef
    private Country country;
    @DBRef
    private Language language;
    @DateTimeFormat(iso = ISO.DATE_TIME)
    private Date createdDate;
    @DateTimeFormat(iso = ISO.DATE_TIME)
    private Date lastModifiedDate;
    @DateTimeFormat(iso = ISO.DATE_TIME)
    private Date lastLoginDate;

    public User() {

    }

    private User(Builder builder) {
        super();
        this.email = builder.email;
        this.password = builder.password;
        this.createdDate = new Date();
        this.country = builder.country;
        this.language = builder.language;
    }

    public static Builder getBuilder() {
        return new Builder();
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public Country getCountry() {
        return country;
    }

    public void setCountry(Country country) {
        this.country = country;
    }

    public Language getLanguage() {
        return language;
    }

    public void setLanguage(Language language) {
        this.language = language;
    }

    public Date getCreatedDate() {
        return createdDate;
    }

    public void setCreatedDate(Date createdDate) {
        this.createdDate = createdDate;
    }

    public Date getLastModifiedDate() {
        return lastModifiedDate;
    }

    public void setLastModifiedDate(Date lastModifiedDate) {
        this.lastModifiedDate = lastModifiedDate;
    }

    public Date getLastLoginDate() {
        return lastLoginDate;
    }

    public void setLastLoginDate(Date lastLoginDate) {
        this.lastLoginDate = lastLoginDate;
    }

    public static class Builder {

        private String email;
        private String password;
        private Country country;
        private Language language;

        private Builder() {
        }

        public Builder email(String email) {
            this.email = email;
            return this;
        }

        public Builder password(String password) {
            this.password = password;
            return this;
        }

        public Builder country(Country country) {
            this.country = country;
            return this;
        }

        public Builder language(Language language) {
            this.language = language;
            return this;
        }

        public User build() {
            User build = new User(this);
            return build;
        }
    }

}
