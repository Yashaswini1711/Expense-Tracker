package com.example.capstone.expense.security;
 
import java.security.MessageDigest;
import java.security.NoSuchAlgorithmException;
import java.util.Base64;
 
public class PasswordHashing {
 
    public static String hashPassword(String password) {
        try {
            // Create MessageDigest instance for SHA-256
            MessageDigest md = MessageDigest.getInstance("SHA-256");
           
            // Add password bytes to digest
            md.update(password.getBytes());
           
            // Get the hash's bytes
            byte[] bytes = md.digest();
           
            // Convert byte array to base64 representation
            return Base64.getEncoder().encodeToString(bytes);
        } catch (NoSuchAlgorithmException e) {
            e.printStackTrace();
            return null;
        }
    }
    public static boolean verifyPassword(String inputPassword, String storedHash) {
        // Hash the input password
        String hashedInputPassword = hashPassword(inputPassword);
 
        // Compare the hashed input password with the stored hash
        return hashedInputPassword.equals(storedHash);
    }
}
 