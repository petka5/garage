package org.petka.garage.config.security;

public final class SecurityConstants {

    private SecurityConstants() {
    }

    public static final String SECRET = "S$cr$TMainT@nanceTokenKEy";
    public static final long EXPIRATION_TIME = 864_000_000; // 10 days
    public static final String COOKIE_AUTH_NAME = "Authorization";
}
