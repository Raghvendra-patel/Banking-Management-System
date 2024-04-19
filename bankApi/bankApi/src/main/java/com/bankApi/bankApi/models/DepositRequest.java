package com.bankApi.bankApi.models;

public class DepositRequest {
    private Long accountNo;
    private int amount;

    // Constructor
    public DepositRequest(Long accountNo, int amount) {
        this.accountNo = accountNo;
        this.amount = amount;
    }

    // Getters and setters
    public Long getAccountNo() {
        return accountNo;
    }

    public void setAccountNo(Long accountNo) {
        this.accountNo = accountNo;
    }

    public int getAmount() {
        return amount;
    }

    public void setAmount(int amount) {
        this.amount = amount;
    }
}

