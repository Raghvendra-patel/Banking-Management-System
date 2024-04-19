import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate, useLocation } from 'react-router-dom';

const Welcome = () => {
    const [accountDetails, setAccountDetails] = useState(null);
    const navigate = useNavigate();
    const location = useLocation();
    const [showBalance, setshowBalance] = useState(false);
    const [showWithdraw, setshowWithdraw] = useState(false);
    const [showDeposit, setshowDeposit] = useState(false);
    const [money, setMoney] = useState(0);
    const [balance, setBalance] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            const params = new URLSearchParams(location.search);
            const accountNo = params.get('accountNo');
            if (accountNo) {
                try {
                    const response = await axios.get(`http://localhost:8080/accountDetails?accountNo=${accountNo}`);
                    setAccountDetails(response.data);
                } catch (error) {
                    console.error('Error fetching account details:', error);
                }
            }
        };
        fetchData();
    }, [location.search]); 

    
    const handleCheckBalance = async () => {
        setshowBalance(true);
        try {
            const response = await axios.get(`http://localhost:8080/checkBalance?accountNo=${accountDetails.accountNo}`);
            setBalance(response.data);
        } catch (error) {
            console.error('Error checking balance:', error);
        }
    };

    useEffect(() => {
      handleCheckBalance();
    }, []);

    const handleDeposit = () => {
        setshowDeposit(true);
        setshowWithdraw(false);
    };
    const handleWithdraw=()=>{
        setshowWithdraw(true)
        setshowDeposit(false);
    }

    const handleSubmitDeposit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:8080/deposit', {
                accountNo: accountDetails.accountNo,
                amount: money
            });
            console.log('Deposit successful:', response.data);
            alert("Money has been deposited successfully.");
            const responses = await axios.get(`http://localhost:8080/checkBalance?accountNo=${accountDetails.accountNo}`);
            setBalance(responses.data);
            setMoney(0);
        } catch (error) {
            console.error('Error depositing money:', error);
        }
    };
    
    const handlesubmitWithdraw = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:8080/withdraw', {
                accountNo: accountDetails.accountNo,
                amount: money
            });
            console.log('Withdraw successful:', response.data);
            alert("Money has been withdrawn successfully.");
            const responses = await axios.get(`http://localhost:8080/checkBalance?accountNo=${accountDetails.accountNo}`);
            setBalance(responses.data);
            setMoney(0);
        } catch (error) {
            console.error('Error withdrawing money:', error);
        }
    };

    const handleLogout = () => {
        // Navigate to the "/" URL
        navigate("/");
    };

    return (
        <>
        <div className="max-w-lg mx-auto mt-10 p-6 bg-white dark:bg-gray-800 rounded-md shadow-md">
            <h2 className="text-2xl font-semibold text-gray-800 dark:text-white text-center">Welcome, {accountDetails?.firstName}</h2>
            <p>Account No: {accountDetails?.accountNo}</p>
            <p>Email: {accountDetails?.email}</p>
            <p>Address: {accountDetails?.address}</p>
            <div className="flex justify-center mt-4 space-x-4">
                <button onClick={handleWithdraw} className="block mx-auto mt-4 bg-slate-900 text-white px-4 py-2 rounded-md hover:bg-green-600 focus:outline-none focus:ring focus:ring-red-300 focus:ring-opacity-50">Withdraw Money</button>
                <button onClick={handleCheckBalance} className="block mx-auto mt-4 bg-slate-900 text-white px-4 py-2 rounded-md hover:bg-green-600 focus:outline-none focus:ring focus:ring-red-300 focus:ring-opacity-50">Check Balance</button>
                <button onClick={handleDeposit} className="block mx-auto mt-4 bg-slate-900 text-white px-4 py-2 rounded-md hover:bg-green-600 focus:outline-none focus:ring focus:ring-red-300 focus:ring-opacity-50">Deposit Money</button>
            </div>
            <button onClick={handleLogout} className="block mx-auto mt-4 bg-red-500 text-white px-4 py-2 rounded-md hover:bg-green-600 focus:outline-none focus:ring focus:ring-red-300 focus:ring-opacity-50">Logout</button> {/* Logout button */}
            {showBalance && <div className="mt-4">Your account balance is {balance}.</div>}
            {showDeposit && (
                <div className="mt-4">
                    <form onSubmit={handleSubmitDeposit}>
                        Enter money to deposit : 
                        <input 
                            type='number' 
                            name='money' 
                            value={money} 
                            onChange={(e) => setMoney(e.target.value)}
                            className="mt-1 p-2 block w-full rounded-md border-gray-300 dark:border-gray-600 shadow-sm focus:border-primary focus:ring focus:ring-primary focus:ring-opacity-50"
                        />
                        <button type='submit' className="mt-4 bg-slate-900 text-white px-4 py-2 rounded-md hover:bg-green-600 focus:outline-none focus:ring focus:ring-green-300 focus:ring-opacity-50">Deposit</button>
                    </form>
                </div>
            )}
            {showWithdraw && (
                <div className="mt-4">
                    <form onSubmit={handlesubmitWithdraw}>
                        Enter money to withdraw : 
                        <input 
                            type='number' 
                            name='money' 
                            value={money} 
                            onChange={(e) => setMoney(e.target.value)}
                            className="mt-1 p-2 block w-full rounded-md border-gray-300 dark:border-gray-600 shadow-sm focus:border-primary focus:ring focus:ring-primary focus:ring-opacity-50"
                        />
                        <button type='submit' className="mt-4 bg-slate-900 text-white px-4 py-2 rounded-md hover:bg-red-600 focus:outline-none focus:ring focus:ring-red-300 focus:ring-opacity-50">Withdraw</button>
                    </form>
                </div>
            )}
        </div>
        </>
    );
};

export default Welcome;
