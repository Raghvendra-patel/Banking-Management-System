import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Nav = () => {
  return (
    <>
      <header className={`flex w-full items-center bg-slate-800 text-white dark:bg-dark`}>
        <div className="container">
          <div className="relative -mx-4 flex items-center justify-between">
            <div className="w-60 max-w-full px-4">
              <Link to="/" className="block w-full py-5">
                <img
                  src="C:\Users\Lenovo\Downloads\Bank.jpg"
                  alt="logo"
                  className="dark:hidden"
                />
                Banking Management
              </Link>
            </div>
            <div className="flex w-full items-center justify-between px-4">
              <div>
                      <Link to="/" className="nav-link" activeClassName="active">Home</Link>
              </div>
              <div className="hidden justify-between pr-16 sm:flex lg:pr-0">
                <Link to="/login" className="px-7 py-3 text-base font-medium text-dark hover:text-primary dark:text-white">Log in</Link>
                <Link to="/create" className="px-7 py-3 text-base font-medium text-dark hover:text-primary dark:text-white">Create New Account</Link>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Nav;
