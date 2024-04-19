package com.bankApi.bankApi.Dao;

import org.springframework.data.jpa.repository.JpaRepository;

import com.bankApi.bankApi.models.Account;

public interface BankRepo extends JpaRepository<Account, Long> {
    Account findByAccountNoAndPassword(Long accountNo, String password);

	Account findByAccountNo(Long accountNo);
}
