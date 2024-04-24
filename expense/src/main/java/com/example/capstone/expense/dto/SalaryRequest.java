package com.example.capstone.expense.dto;

import java.math.BigDecimal;

public class SalaryRequest {
    private String email;
    private BigDecimal amount;

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public BigDecimal getAmount() {
        return amount;
    }

    public void setAmount(BigDecimal amount) {
        this.amount = amount;
    }
}

