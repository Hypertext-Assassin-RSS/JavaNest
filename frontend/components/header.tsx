"use client";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Sun, Moon, Menu, X } from "lucide-react";
import Logo from '../assets/header-logo.png'
import Image from "next/image";

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
    <header className={`fixed top-0 flex flex-row w-full z-1 justify-between items-center px-6 md:px-10 py-4 shadow-sm
    
    `}>
      <a href="#" className="text-lg font-semibold w-24">
        <Image src={Logo} alt="header logo"/>
      </a>
      <nav className="hidden md:block">
        <ul className="flex space-x-6 text-sm font-medium">
          {navItems.map((item) => (
            <li key={item.href}>
              <a href={item.href} className="hover:text-gray-500 text-white">
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
      <div className="flex items-center">
        {/* <button
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          className="p-2 rounded-full bg-gray-200 dark:bg-gray-800 mr-2"
        >
          {theme === "dark" ? (
            <Sun size={20} className="text-gray-900 lg:text-gray-100" />
          ) : (
            <Moon size={20} className="text-gray-800 lg:text-gray-100" />
          )}
        </button> */}
        <button
          onClick={() => setIsMenuOpen((prev) => !prev)}
          className="md:hidden p-2 rounded-full bg-gray-200 dark:bg-gray-800"
        >
          {isMenuOpen ? (
            <X size={20} className={theme === "light" ? "text-gray-800" : "text-white"} />
          ) : (
            <Menu size={20} className={theme === "light" ? "text-gray-800" : "text-gray-900"} />
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