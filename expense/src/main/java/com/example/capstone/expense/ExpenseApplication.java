package com.example.capstone.expense;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

// import com.example.capstone.expense.security.JwtSecretKeyGenerator;

@SpringBootApplication
public class ExpenseApplication {

	public static void main(String[] args) {
		// String secretKey = JwtSecretKeyGenerator.generateSecretKey();
		// System.out.println("Generated Secret Key: " + secretKey);

		SpringApplication.run(ExpenseApplication.class, args);	
	}

}
