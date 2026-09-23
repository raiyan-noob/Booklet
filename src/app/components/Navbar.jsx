'use client';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';

const Navbar = () => {
  const [theme, setTheme] = useState(() => {
    if (typeof window === 'undefined') {
      return 'light';
    }

    return localStorage.getItem('booklet-theme') || 'light';
  });

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
  }, [theme]);

  const toggleTheme = () => {
    const nextTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(nextTheme);
    localStorage.setItem('booklet-theme', nextTheme);
    document.documentElement.dataset.theme = nextTheme;
  };

    return (

<div className="navbar bg-base-100/95 backdrop-blur-md shadow-sm px-4 lg:px-8 sticky top-0 z-50">
  {/* Logo / Brand */}
  <div className="navbar-start">
    <div className="dropdown">
      <div
        tabIndex={0}
        role="button"
        className="btn btn-ghost btn-circle lg:hidden"
      >
        <svg
          aria-label="Menu"
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h8m-8 6h16"
          />
        </svg>
      </div>

      <ul
        tabIndex={-1}
        className="menu menu-sm dropdown-content bg-base-100 rounded-2xl z-50 mt-3 w-56 p-3 shadow-xl border border-base-200"
      >
        <li>
          <Link href="/" className="rounded-xl font-medium">
            Home
          </Link>
        </li>

        <li>
          <Link href="../components/listedPage" className="rounded-xl font-medium">
            Listed Books
          </Link>
        </li>

        <li>
          <Link href="../components/readBooks" className="rounded-xl font-medium">
            Pages to Read
          </Link>
        </li>
      </ul>
    </div>

    <Link
      href="/"
      className="btn btn-ghost text-2xl font-bold tracking-tight hover:bg-transparent"
    >
      <span className="text-success">Book</span>let
    </Link>
  </div>

  {/* Desktop Navigation */}
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal gap-2">
      <li>
        <Link
          href="/"
          className="rounded-xl px-4 font-medium hover:bg-success/10 hover:text-success"
        >
          Home
        </Link>
      </li>

      <li>
        <Link
         href="../components/listedPage"
          className="rounded-xl px-4 font-medium hover:bg-success/10 hover:text-success"
        >
          Listed Books
        </Link>
      </li>

      <li>
        <Link
          href="../components/readBooks"
          className="rounded-xl px-4 font-medium hover:bg-success/10 hover:text-success"
        >
          Pages to Read
        </Link>
      </li>
    </ul>
  </div>

  {/* Theme Toggle */}
  <div className="navbar-end">
    <label className="swap swap-rotate rounded-full border border-base-300 bg-base-200 p-2 shadow-sm" title="Toggle dark mode">
      <input
        type="checkbox"
        checked={theme === 'dark'}
        onChange={toggleTheme}
        aria-label="Toggle dark mode"
      />
      <span className="swap-off text-lg" aria-hidden="true">☀</span>
      <span className="swap-on text-lg" aria-hidden="true">☾</span>
    </label>
  </div>
</div>


    );
};

export default Navbar;