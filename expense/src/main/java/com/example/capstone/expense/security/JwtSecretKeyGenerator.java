package com.example.capstone.expense.security;

import java.security.SecureRandom;
import java.util.Base64;

public class JwtSecretKeyGenerator {

    private static final int SECRET_KEY_LENGTH = 64; // Length of the secret key in bytes

    public static String generateSecretKey() {
        // Generate a random byte array
        byte[] secretBytes = new byte[SECRET_KEY_LENGTH];
        SecureRandom secureRandom = new SecureRandom();
        secureRandom.nextBytes(secretBytes);

        // Encode the byte array as a Base64 string
        return Base64.getEncoder().encodeToString(secretBytes);
    }
}
