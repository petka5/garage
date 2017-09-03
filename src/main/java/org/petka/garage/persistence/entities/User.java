package org.petka.garage.persistence.entities;

import org.springframework.data.annotation.Id;

public class User {

    @Id
    private String id;
    private String email;
    private String password;

    public User() {

    }

    private User(Builder builder) {
        super();
        this.email = builder.email;
        this.password = builder.password;
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

    public static class Builder {

        private String email;

        private String password;

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

        public User build() {
            User build = new User(this);
            return build;
        }
    }
}
