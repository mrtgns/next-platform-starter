"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-gray-800 text-gray-300 shadow-md">
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        {/* Logo */}
        <Link href="/">
          <div className="relative w-[80px] h-[80px]">
            <Image
              src="/Logo.png"
              alt="Online Otizm Danışma Logo"
              layout="fill"
              objectFit="contain"
              className="cursor-pointer"
            />
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-6">
          <Link href="/about">
            <span className="text-gray-300 hover:text-blue-400 font-semibold text-lg transition-colors duration-200 ease-in-out cursor-pointer">
              Hakkımızda
            </span>
          </Link>
          <Link href="/services">
            <span className="text-gray-300 hover:text-blue-400 font-semibold text-lg transition-colors duration-200 ease-in-out cursor-pointer">
              Hizmetlerimiz
            </span>
          </Link>
          <Link href="/contact">
            <span className="text-gray-300 hover:text-blue-400 font-semibold text-lg transition-colors duration-200 ease-in-out cursor-pointer">
              İletişim
            </span>
          </Link>
        </nav>

        {/* Mobile Menu Icon */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-gray-300 focus:outline-none"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="currentColor"
            className="w-8 h-8"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <nav className="md:hidden bg-gray-800 text-gray-300 space-y-4 py-4 px-6">
          <Link href="/about">
            <span className="block text-gray-300 hover:text-blue-400 font-semibold text-lg transition-colors duration-200 ease-in-out cursor-pointer">
              Hakkımızda
            </span>
          </Link>
          <Link href="/services">
            <span className="block text-gray-300 hover:text-blue-400 font-semibold text-lg transition-colors duration-200 ease-in-out cursor-pointer">
              Hizmetlerimiz
            </span>
          </Link>
          <Link href="/contact">
            <span className="block text-gray-300 hover:text-blue-400 font-semibold text-lg transition-colors duration-200 ease-in-out cursor-pointer">
              İletişim
            </span>
          </Link>
        </nav>
      )}
    </header>
  );
}