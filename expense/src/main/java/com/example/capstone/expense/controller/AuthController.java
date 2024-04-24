package com.example.capstone.expense.controller;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.Collection;
import java.util.Optional;


// import org.apache.el.stream.Optional;

import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.capstone.expense.model.Expense;
import com.example.capstone.expense.model.User;
import com.example.capstone.expense.repository.ExpenseRepository;
import com.example.capstone.expense.repository.UserRepository;

@RestController
@RequestMapping("/api")
public class AuthController {
    
    private final UserRepository userRepository;
    private final ExpenseRepository expenseRepository;

    public AuthController(UserRepository userRepository, ExpenseRepository expenseRepository) {
        this.userRepository = userRepository;
        this.expenseRepository = expenseRepository;
    }

    // Admin login endpoint
    @PostMapping("/admin/login")
        public ResponseEntity<String> adminLogin(@RequestBody User adminLogin) {
        // Check if the credentials match the admin email and password
        if ("admin@email.com".equals(adminLogin.getEmail()) && "admin".equals(adminLogin.getPassword())) {
            return ResponseEntity.ok("Admin login successful");
        } else {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Invalid admin credentials");
        }
    }

    // Retrieve all users
    @GetMapping("/admin/users") 
    Collection<User> getAllUsers() {
        return userRepository.findAll();
    }
    
    //Retrieve expenses by date range
    @GetMapping("/admin/expensesByDateRange")
    Collection<Expense> getExpensesByDateRange(@RequestParam @DateTimeFormat(iso = DateTimeFormat.ISO.DATE_TIME) LocalDateTime startDate,
                                            @RequestParam @DateTimeFormat(iso = DateTimeFormat.ISO.DATE_TIME) LocalDateTime endDate) {
        return expenseRepository.findByExpenseDateBetween(startDate, endDate);
    }

    @GetMapping("/admin/expensesByDate")
    public Collection<Expense> getExpensesByDate(
        @RequestParam @DateTimeFormat(iso = DateTimeFormat.ISO.DATE_TIME) LocalDateTime expense_date) {
            
        // Query expenses for the given date
        return expenseRepository.findByExpenseDate(expense_date);
    }
  

@DeleteMapping("/admin/users/{userId}")
ResponseEntity<String> deleteUserById(@PathVariable Long userId) {
    // Find the user by ID
    Optional<User> optionalUser = userRepository.findById(userId);
    if (optionalUser.isPresent()) {
        // Delete the user
        userRepository.delete(optionalUser.get());
        return ResponseEntity.ok("User deleted successfully");
    } else {
        return ResponseEntity.notFound().build();
    }
}


}
