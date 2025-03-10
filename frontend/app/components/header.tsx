"use client";

import { useEffect, useState } from 'react';
import { Sun, Moon, Menu, X, ShoppingCart } from 'lucide-react';
import { useTheme } from 'next-themes';
import Image from 'next/image';
import Logo from '../../assets/header-logo.png';

export default function Header() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const navItems = [
    { href: "#Home", label: "Home" },
    { href: "#About", label: "About" },
    { href: "#Services", label: "Services" },
    { href: "#Contact", label: "Contact" },
  ];

  return (
    <header className="fixed top-0 flex flex-row w-full z-1 justify-between items-center px-6 md:px-10 py-4 shadow-sm">
      <a href="#" className="text-lg font-semibold">
        <Image src={Logo} className="w-24" alt="header logo" />
      </a>
      <nav className="hidden md:block">
        <ul className="flex space-x-6 text-sm font-medium">
          {navItems.map((item) => (
            <li key={item.href}>
              <a href={item.href} className="hover:text-gray-500">
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
      <div className="flex items-center gap-2">
        <a href="/cart" className="p-2 rounded-full bg-gray-200 dark:bg-gray-800">
          <ShoppingCart size={20} className={theme === "light" ? "text-gray-800" : "text-white"} />
        </a>
        <button
          onClick={() => setIsMenuOpen((prev) => !prev)}
          className="md:hidden p-2 rounded-full bg-gray-200 dark:bg-gray-800"
        >
          {isMenuOpen ? (
            <X size={20} className={theme === "light" ? "text-gray-800" : "text-white"} />
          ) : (
            <Menu size={20} className={theme === "light" ? "text-gray-800" : "text-white"} />
          )}
        </button>
      </div>
      {isMenuOpen && (
        <nav className="absolute top-full left-0 w-full bg-white dark:bg-gray-900 border-t border-gray-300 dark:border-gray-700 md:hidden">
          <ul className="flex flex-col space-y-4 p-4 text-base font-medium text-gray-800 dark:text-gray-100">
            {navItems.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="block w-full hover:text-gray-500"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}