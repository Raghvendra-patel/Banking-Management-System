import React from 'react';
import Nav from './Nav';
import Footer from './Footer';

const DoneComponent = () => {
  // Extract account details from URL parameters
  const urlSearchParams = new URLSearchParams(window.location.search);
  const account = Object.fromEntries(urlSearchParams.entries());

  return (
    <>
    <Nav />
    <div className="max-w-lg mx-auto mt-10 p-6 bg-white dark:bg-gray-800 rounded-md shadow-md">
      <h2 className="text-2xl font-semibold text-gray-800 dark:text-white text-center">Account Created Successfully</h2>
      <p className="mt-4">Here are your account details:</p>
      <ul className="mt-4">
        {Object.entries(account).map(([key, value]) => (
          <li key={key} className="flex items-center py-2">
            <strong className="mr-2">{key}:</strong> {value}
          </li>
        ))}
      </ul>
    </div>
    <Footer />
    </>
  );
};

export default DoneComponent;
