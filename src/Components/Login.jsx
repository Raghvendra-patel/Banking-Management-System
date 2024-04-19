import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const [accountNo, setAccountNo] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.get(`http://localhost:8080/login?accountNo=${accountNo}&&password=${password}`);
            if (response.data) {
                console.log('Login successful!');
                navigate(`/welcome?accountNo=${accountNo}`);
            } else {
                setError('Invalid account number or password');
            }
        } catch (error) {
            console.error('Error:', error);
            setError('An error occurred. Please try again later.');
        }
    };

    return (
        <>
            <section className="bg-gray-1  dark:bg-dark ">
                <div className="container mx-auto">
                    <div className="-mx-4 flex flex-wrap">
                        <div className="w-full px-4">
                            <div className="relative mx-auto max-w-[525px] overflow-hidden rounded-lg bg-white px-10 py-16 text-center dark:bg-dark-2 sm:px-12 md:px-[60px]">
                                <h1 className='text-fuchsia-950'>Login</h1>
                                <form onSubmit={handleSubmit}>
                                    <div className="mb-6">
                                        <input
                                            type="text"
                                            name="accountNo"
                                            placeholder="Account No"
                                            className="w-full border-b border-primary px-5 py-3 text-base font-medium text-dark focus:outline-none focus:border-primary dark:text-white dark:border-dark-3 dark:bg-dark-3"
                                            value={accountNo}
                                            onChange={(e) => setAccountNo(e.target.value)}
                                            required
                                        />
                                    </div>
                                    <div className="mb-10">
                                        <input
                                            type="password"
                                            name="password"
                                            placeholder="Password"
                                            className="w-full border-b border-primary px-5 py-3 text-base font-medium text-dark focus:outline-none focus:border-primary dark:text-white dark:border-dark-3 dark:bg-dark-3"
                                            value={password}
                                            onChange={(e) => setPassword(e.target.value)}
                                            required
                                        />
                                    </div>
                                    {error && <div className="mb-6 text-red-500">{error}</div>}
                                    <div className="mb-10">
                                        <button
                                            type="submit"
                                            className="w-full cursor-pointer rounded-md border border-primary bg-primary px-5 py-3 text-base font-medium text-black transition hover:bg-opacity-90"
                                        >
                                            Sign In
                                        </button>
                                    </div>
                                </form>
                                <p className="text-base text-body-color dark:text-dark-6">
                                    <span className="pr-0.5">Not a member yet?</span>
                                    <a
                                        href="/create"
                                        className="text-primary hover:underline"
                                    >
                                        Sign Up
                                    </a>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Login;
