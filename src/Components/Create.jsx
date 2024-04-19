import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios'; 

const Create = () => {
  const navigate = useNavigate();
  const [account, setAccount] = useState({
    firstName: "",
    lastName: "",
    email: "",
    address: "",
    city: "",
    state: "",
    zipCode: "",
    aadhar: "",
    phoneNumber: "",
    occupation: "",
    initialDeposit: 0,
    accountNo:"",
    password:"",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setAccount({ ...account, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('http://localhost:8080/saveAccount', account);
      console.log(res.data);
      setAccount({
        firstName: "",
        lastName: "",
        email: "",
        address: "",
        city: "",
        state: "",
        zipCode: "",
        aadhar: "",
        phoneNumber: "",
        initialDeposit: 0,
        accountNo:"",
        password:"",
      });
      const queryParams = new URLSearchParams(account).toString();
      navigate(`/done?${queryParams}`);
    } catch (error) {
      console.error('Error submitting form:', error);
      // Handle error (e.g., show error message to the user)
    }
  };

  return (
    <div className="max-w-lg mx-auto mt-10 p-6 bg-white dark:bg-gray-800 rounded-md shadow-md">
      <h2 className="text-2xl font-semibold text-gray-800 dark:text-white text-center">Create Account</h2>
      <form onSubmit={handleSubmit} className="mt-6">
        {/* Input fields */}
        <div className="grid grid-cols-1 gap-6">
          <div>
            <label htmlFor="firstName" className="text-gray-700 dark:text-gray-200">First Name:</label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              value={account.firstName}
              onChange={handleInputChange}
              className="mt-1 p-2 block w-full rounded-md border-gray-300 dark:border-gray-600 shadow-sm focus:border-primary focus:ring focus:ring-primary focus:ring-opacity-50"
            />
          </div>
          <div>
            <label htmlFor="lastName" className="text-gray-700 dark:text-gray-200">Last Name:</label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              value={account.lastName}
              onChange={handleInputChange}
              className="mt-1 p-2 block w-full rounded-md border-gray-300 dark:border-gray-600 shadow-sm focus:border-primary focus:ring focus:ring-primary focus:ring-opacity-50"
            />
          </div>
          <div>
            <label htmlFor="email" className="text-gray-700 dark:text-gray-200">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={account.email}
              onChange={handleInputChange}
              className="mt-1 p-2 block w-full rounded-md border-gray-300 dark:border-gray-600 shadow-sm focus:border-primary focus:ring focus:ring-primary focus:ring-opacity-50"
            />
          </div>
          <div>
            <label htmlFor="address" className="text-gray-700 dark:text-gray-200">Address:</label>
            <input
              type="text"
              id="address"
              name="address"
              value={account.address}
              onChange={handleInputChange}
              className="mt-1 p-2 block w-full rounded-md border-gray-300 dark:border-gray-600 shadow-sm focus:border-primary focus:ring focus:ring-primary focus:ring-opacity-50"
            />
          </div>
          <div>
            <label htmlFor="city" className="text-gray-700 dark:text-gray-200">City:</label>
            <input
              type="text"
              id="city"
              name="city"
              value={account.city}
              onChange={handleInputChange}
              className="mt-1 p-2 block w-full rounded-md border-gray-300 dark:border-gray-600 shadow-sm focus:border-primary focus:ring focus:ring-primary focus:ring-opacity-50"
            />
          </div>
          <div>
            <label htmlFor="state" className="text-gray-700 dark:text-gray-200">State:</label>
            <input
              type="text"
              id="state"
              name="state"
              value={account.state}
              onChange={handleInputChange}
              className="mt-1 p-2 block w-full rounded-md border-gray-300 dark:border-gray-600 shadow-sm focus:border-primary focus:ring focus:ring-primary focus:ring-opacity-50"
            />
          </div>
          <div>
            <label htmlFor="zipCode" className="text-gray-700 dark:text-gray-200">Zip Code:</label>
            <input
              type="text"
              id="zipCode"
              name="zipCode"
              value={account.zipCode}
              onChange={handleInputChange}
              className="mt-1 p-2 block w-full rounded-md border-gray-300 dark:border-gray-600 shadow-sm focus:border-primary focus:ring focus:ring-primary focus:ring-opacity-50"
            />
          </div>
          <div>
            <label htmlFor="aadhar" className="text-gray-700 dark:text-gray-200">Aadhar Number:</label>
            <input
              type="text"
              id="aadhar"
              name="aadhar"
              value={account.aadhar}
              onChange={handleInputChange}
              className="mt-1 p-2 block w-full rounded-md border-gray-300 dark:border-gray-600 shadow-sm focus:border-primary focus:ring focus:ring-primary focus:ring-opacity-50"
            />
          </div>
          <div>
            <label htmlFor="phoneNumber" className="text-gray-700 dark:text-gray-200">Phone Number:</label>
            <input
              type="text"
              id="phoneNumber"
              name="phoneNumber"
              value={account.phoneNumber}
              onChange={handleInputChange}
              className="mt-1 p-2 block w-full rounded-md border-gray-300 dark:border-gray-600 shadow-sm focus:border-primary focus:ring focus:ring-primary focus:ring-opacity-50"
            />
          </div>
          <div>
            <label htmlFor="occupation" className="text-gray-700 dark:text-gray-200">Occupation:</label>
            <input
              type="text"
              id="occupation"
              name="occupation"
              value={account.occupation}
              onChange={handleInputChange}
              className="mt-1 p-2 block w-full rounded-md border-gray-300 dark:border-gray-600 shadow-sm focus:border-primary focus:ring focus:ring-primary focus:ring-opacity-50"
            />
          </div>
          <div>
            <label htmlFor="initialDeposit" className="text-gray-700 dark:text-gray-200">Initial Deposit:</label>
            <input
              type="number"
              id="initialDeposit"
              name="initialDeposit"
              value={account.initialDeposit}
              onChange={handleInputChange}
              className="mt-1 p-2 block w-full rounded-md border-gray-300 dark:border-gray-600 shadow-sm focus:border-primary focus:ring focus:ring-primary focus:ring-opacity-50"
            />
          </div>
          <div>
            <label htmlFor="accountNo" className="text-gray-700 dark:text-gray-200">Account number:</label>
            <input
              type="text"
              id="accountNo"
              name="accountNo"
              value={account.accountNo}
              onChange={handleInputChange}
              className="mt-1 p-2 block w-full rounded-md border-gray-300 dark:border-gray-600 shadow-sm focus:border-primary focus:ring focus:ring-primary focus:ring-opacity-50"
            />
          </div>
          <div>
            <label htmlFor="password" className="text-gray-700 dark:text-gray-200">Password:</label>
            <input
              type="password"
              id="password"
              name="password"
              value={account.password}
              onChange={handleInputChange}
              className="mt-1 p-2 block w-full rounded-md border-gray-300 dark:border-gray-600 shadow-sm focus:border-primary focus:ring focus:ring-primary focus:ring-opacity-50"
            />
          </div>
        </div>
        {/* Submit button */}
        <div className="mt-4">
          <button
            type="submit"
            className="bg-slate-900 y-2 px-4 bg-primary text-white rounded-md shadow-md hover:bg-primary-dark focus:outline-none focus:ring focus:ring-primary focus:ring-opacity-50"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default Create;
