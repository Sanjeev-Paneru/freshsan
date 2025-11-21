"use client";

import Image from "next/image";
import Link from "next/link";
import { FiMenu, FiX } from "react-icons/fi";
import { useState, useEffect } from "react";
import logo from "@/assets/logo/logo (2).png";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [open]);
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, []);

  return (
    <header className="w-full bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 flex justify-between items-center">
        {/* LEFT SIDE → LOGO */}
        <Link href="/" className="flex items-center relative z-50">
          <Image
            src={logo}
            alt="FRESHSAN Logo"
            width={120}
            height={60}
            className="h-20 w-auto"
            priority
          />
        </Link>
        <nav className="hidden md:flex gap-8 text-gray-700 font-medium justify-center items-center">
          <Link
            href="/"
            className="hover:text-primary transition-colors duration-200 relative group"
          >
            Home
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-200 group-hover:w-full" />
          </Link>
          <Link
            href="/products"
            className="hover:text-primary transition-colors duration-200 relative group"
          >
            Products
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-200 group-hover:w-full" />
          </Link>
          <Link
            href="/about"
            className="hover:text-primary transition-colors duration-200 relative group"
          >
            About
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-200 group-hover:w-full" />
          </Link>
          <Link
            href="/contact"
            className="hover:text-primary transition-colors duration-200 relative group"
          >
            Contact
            <span className="absolute -bottom-1 left-0 w-0.5 bg-primary transition-all duration-200 group-hover:w-full" />
          </Link>
        </nav>

        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-primary cursor-pointer relative z-50 p-2 hover:bg-gray-100 rounded-lg transition-colors duration-200"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          {open ? <FiX size={28} /> : <FiMenu size={28} />}
        </button>
        {open && (
          <div
            className="fixed inset-0 bg-black/50 backdrop-blur-sm md:hidden z-30 animate-fadeIn"
            onClick={() => setOpen(false)}
            aria-hidden="true"
          />
        )}
        <div
          className={`fixed top-0 right-0 bg-white shadow-2xl w-64 h-screen p-6 md:hidden z-40 transform transition-transform duration-300 ease-in-out ${
            open ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <nav className="flex flex-col gap-6 items-center mt-20 w-full">
            <Link
              href="/"
              onClick={() => setOpen(false)}
              className="text-gray-700 font-medium hover:text-primary transition-colors duration-200 py-2 border-b border-gray-100"
            >
              Home
            </Link>
            <Link
              href="/products"
              onClick={() => setOpen(false)}
              className="text-gray-700 font-medium hover:text-primary transition-colors duration-200 py-2 border-b border-gray-100"
            >
              Products
            </Link>
            <Link
              href="/about"
              onClick={() => setOpen(false)}
              className="text-gray-700 font-medium hover:text-primary transition-colors duration-200 py-2 border-b border-gray-100"
            >
              About
            </Link>
            <Link
              href="/contact"
              onClick={() => setOpen(false)}
              className="text-gray-700 font-medium hover:text-primary transition-colors duration-200 py-2 border-b border-gray-100"
            >
              Contact
            </Link>
          </nav>
        </div>
      </div>

      <style jsx global>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
        .animate-fadeIn {
          animation: fadeIn 0.2s ease-in-out;
        }
      `}</style>
    </header>
  );
}
