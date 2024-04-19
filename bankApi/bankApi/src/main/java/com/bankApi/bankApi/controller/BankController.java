package com.bankApi.bankApi.controller;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.bankApi.bankApi.Dao.BankRepo;
import com.bankApi.bankApi.models.Account;
import com.bankApi.bankApi.models.DepositRequest;
import com.fasterxml.jackson.databind.util.JSONPObject;

@RestController
public class BankController
{
	@Autowired
	BankRepo ban;
	@PostMapping("/saveAccount")
	public String get(@RequestBody Account account)
	{
	    System.out.print(account);
	    ban.save(account);
		return "done";
	}
	@GetMapping("/login")
	public boolean authenticate(@RequestParam Long accountNo, @RequestParam String password) {
        // Find account by accountNo
		System.out.println(accountNo+" "+password);
        Account account = ban.findByAccountNo(accountNo);
        // Check if account exists and password matches
        return account != null && account.getPassword().equals(password);
    }
	@GetMapping("/accountDetails")
    public Account getAccountDetails(@RequestParam Long accountNo) {
        return ban.findByAccountNo(accountNo);
    }
    
    @GetMapping("/checkBalance")
    public int checkBalance(@RequestParam Long accountNo) {
        // Logic to check balance
    	System.out.println(accountNo);
        Account ac=ban.findByAccountNo(accountNo);
        int mon=ac.getInitialDeposit();
        return mon;
    }
    @PostMapping("/deposit")
    public String depositMoney(@RequestBody DepositRequest request) {
        try {
            int amount = request.getAmount();
            // Add logic to deposit money here
            // Example logic: Update account balance
            // accountService.depositMoney(amount);
            System.out.println(amount);
            Account ac=ban.findByAccountNo(request.getAccountNo());
            ac.setInitialDeposit(ac.getInitialDeposit()+amount);
            ban.save(ac);
            return "Deposit successful";
        } catch (Exception e) {
            e.printStackTrace();
            return "Error depositing money";
        }
    }
    @PostMapping("/withdraw")
    public String withdrawMoney(@RequestBody DepositRequest request) {
        try {
            int amount = request.getAmount();
            // Add logic to deposit money here
            // Example logic: Update account balance
            // accountService.depositMoney(amount);
            System.out.println(amount);
            Account ac=ban.findByAccountNo(request.getAccountNo());
            ac.setInitialDeposit(ac.getInitialDeposit()-amount);
            ban.save(ac);
            return "withdraw successful";
        } catch (Exception e) {
            e.printStackTrace();
            return "Error depositing money";
        }
    }
}
