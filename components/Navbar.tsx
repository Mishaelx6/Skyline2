"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

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

      {/* links */}
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

      {/* auth buttons */}
      <div className="flex items-center space-x-4">
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
    </nav>
  );
}