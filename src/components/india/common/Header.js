'use client';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

const Header = ({ bgcolor }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 0);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 transition-all duration-500 backdrop-blur-lg ${
        scrolled
          ? 'bg-white/80 shadow-glass'
          : 'bg-gradient-to-b from-secondary/80 via-secondary/50 to-transparent'
      }`}
      style={{ zIndex: 50 }}
    >
      <div className="absolute inset-0 bg-repeat bg-dots-pattern opacity-5"></div>
      <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-accent/5 to-tertiary/5"></div>

      <nav className="container relative mx-auto">
        <div className="flex items-center justify-between h-20 px-4 md:px-8">
          {/* Logo */}
          <Link href="/" className="relative group">
            <div className="absolute inset-0 transition-opacity duration-300 scale-110 opacity-0 blur-sm bg-gradient-to-r from-primary via-accent to-tertiary group-hover:opacity-50"></div>
            <Image
              src={
                scrolled
                  ? '/assets/images/india/common/logo.png'
                  : '/assets/images/india/common/logo-white.png'
              }
              width={160}
              height={45}
              alt="Indian Visa Services"
              className="relative w-40 transition-all duration-500 group-hover:scale-105"
            />
          </Link>

          {/* Desktop Menu */}
          <div className="items-center hidden space-x-12 md:flex">
            <Link href="/">
              <span
                className={`text-sm font-medium transition-all duration-300 hover:text-accent relative
                before:absolute before:-bottom-1 before:left-0 before:w-0 hover:before:w-full before:h-0.5
                before:bg-gradient-to-r before:from-accent before:to-tertiary before:transition-all before:duration-300
                after:absolute after:-bottom-1 after:left-0 after:w-0 hover:after:w-full after:h-0.5
                after:bg-gradient-to-r after:from-tertiary after:to-accent after:transition-all after:duration-500
                after:translate-y-1 hover:after:translate-y-0 ${
                  scrolled ? 'text-secondary' : 'text-white'
                }`}
              >
                Home
              </span>
            </Link>
            <Link href="#">
              <span
                className={`text-sm font-medium transition-all duration-300 hover:text-accent relative
                before:absolute before:-bottom-1 before:left-0 before:w-0 hover:before:w-full before:h-0.5
                before:bg-gradient-to-r before:from-accent before:to-tertiary before:transition-all before:duration-300
                after:absolute after:-bottom-1 after:left-0 after:w-0 hover:after:w-full after:h-0.5
                after:bg-gradient-to-r after:from-tertiary after:to-accent after:transition-all after:duration-500
                after:translate-y-1 hover:after:translate-y-0 ${
                  scrolled ? 'text-secondary' : 'text-white'
                }`}
              >
                Contact Us
              </span>
            </Link>
            <Link href="/visa/step-one">
              <span
                className="relative px-6 py-2.5 text-sm font-semibold text-white transition-all duration-500 rounded-lg
                before:absolute before:inset-0 before:rounded-lg before:bg-gradient-to-r before:from-primary before:to-tertiary before:transition-all before:duration-300
                after:absolute after:inset-0 after:rounded-lg after:bg-gradient-to-r after:from-accent after:to-primary after:opacity-0 after:transition-all after:duration-300
                hover:before:opacity-0 hover:after:opacity-100 overflow-hidden group"
              >
                <span className="relative z-10 inline-flex items-center">
                  Apply for e-Visa
                  <svg
                    className="w-4 h-4 ml-2 transition-transform duration-300 transform group-hover:translate-x-1"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 7l5 5m0 0l-5 5m5-5H6"
                    />
                  </svg>
                </span>
              </span>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="p-2 md:hidden focus:outline-none group"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            <div className="relative">
              <div className="absolute inset-0 transition-opacity duration-300 rotate-45 opacity-0 blur-sm bg-gradient-to-r from-primary to-accent group-hover:opacity-50"></div>
              {isOpen ? (
                <FaTimes
                  className={`w-6 h-6 transition-colors duration-300 relative ${
                    scrolled ? 'text-secondary' : 'text-white'
                  }`}
                />
              ) : (
                <FaBars
                  className={`w-6 h-6 transition-colors duration-300 relative ${
                    scrolled ? 'text-secondary' : 'text-white'
                  }`}
                />
              )}
            </div>
          </button>
        </div>

        {/* Mobile Dropdown Menu */}
        <div
          className={`
          absolute top-full left-0 right-0 bg-white/90 backdrop-blur-lg shadow-glass transition-all duration-500 md:hidden
          ${
            isOpen
              ? 'opacity-100 visible translate-y-0'
              : 'opacity-0 invisible -translate-y-4'
          }
        `}
        >
          <div className="divide-y divide-gray-100/20">
            <Link href="/" onClick={() => setIsOpen(false)}>
              <div className="px-8 py-4 transition-all duration-300 hover:bg-gradient-to-r hover:from-primary/10 hover:to-tertiary/10">
                <span className="text-secondary">Home</span>
              </div>
            </Link>
            <Link href="#" onClick={() => setIsOpen(false)}>
              <div className="px-8 py-4 transition-all duration-300 hover:bg-gradient-to-r hover:from-primary/10 hover:to-tertiary/10">
                <span className="text-secondary">Contact Us</span>
              </div>
            </Link>
            <Link href="/visa/step-one" onClick={() => setIsOpen(false)}>
              <div className="px-8 py-4 transition-all duration-300 bg-gradient-to-r from-primary/5 to-tertiary/5 hover:from-primary/10 hover:to-tertiary/10">
                <span className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-primary to-tertiary">
                  Apply for e-Visa
                </span>
              </div>
            </Link>
          </div>
        </div>
      </nav>

      {bgcolor && scrolled && (
        <div className="h-px bg-gradient-to-r from-primary/20 via-accent/20 to-tertiary/20" />
      )}
    </header>
  );
};

export default Header;
