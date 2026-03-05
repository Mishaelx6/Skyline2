"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 0);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-20 flex items-center justify-between p-6 transition-colors duration-300 ${
        scrolled ? "bg-white shadow-md" : "bg-transparent"
      }`}
    >
      {/* logo */}
      <Link
        href="/"
        className={`text-2xl font-bold ${scrolled ? "text-gray-800" : "text-white"}`}
      >
        Skilline
      </Link>

      {/* desktop links */}
      <ul
        className={`hidden md:flex space-x-8 ${
          scrolled ? "text-gray-800" : "text-white"
        }`}
      >
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/careers">Careers</Link>
        </li>
        <li>
          <Link href="/blog">Blog</Link>
        </li>
        <li>
          <Link href="/about">About Us</Link>
        </li>
      </ul>

      {/* mobile hamburger */}
      <button
        className={`md:hidden focus:outline-none ${scrolled ? "text-gray-800" : "text-white"}`}
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle navigation"
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          {isOpen ? (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          ) : (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          )}
        </svg>
      </button>

      {/* auth buttons */}
      <div className="hidden md:flex items-center space-x-4">
        <Link
          href="/login"
          className={`rounded-full border px-4 py-2 transition ${
            scrolled ?
              "border-gray-800 text-gray-800 hover:bg-gray-100" :
              "border-white text-white hover:bg-white hover:text-gray-800"
          }`}
        >
          Login
        </Link>
        <Link
          href="/signup"
          className="rounded-full bg-orange-500 px-4 py-2 text-white hover:bg-orange-600 transition"
        >
          Sign Up
        </Link>
      </div>

      {/* mobile menu overlay */}
      {isOpen && (
        <>
          {/* backdrop to close menu when tapping outside */}
          <div
            className="fixed inset-0 bg-black bg-opacity-25 md:hidden"
            onClick={() => setIsOpen(false)}
          />
          <div className="absolute top-full left-0 w-full bg-white shadow-md md:hidden">
            <ul className="flex flex-col p-4 space-y-4 text-gray-800">
            <li>
              <Link href="/" onClick={() => setIsOpen(false)}>
                Home
              </Link>
            </li>
            <li>
              <Link href="/careers" onClick={() => setIsOpen(false)}>
                Careers
              </Link>
            </li>
            <li>
              <Link href="/blog" onClick={() => setIsOpen(false)}>
                Blog
              </Link>
            </li>
            <li>
              <Link href="/about" onClick={() => setIsOpen(false)}>
                About Us
              </Link>
            </li>
            <li className="flex flex-col space-y-2">
              <Link
                href="/login"
                className="rounded-full border px-4 py-2 text-gray-800 border-gray-800"
                onClick={() => setIsOpen(false)}
              >
                Login
              </Link>
              <Link
                href="/signup"
                className="rounded-full bg-orange-500 px-4 py-2 text-white"
                onClick={() => setIsOpen(false)}
              >
                Sign Up
              </Link>
            </li>
          </ul>
          </div>
        </>
      )}
    </nav>
  );
}