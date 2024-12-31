import React from 'react';
import { IoIosMail } from 'react-icons/io';
import { FaFacebookF, FaInstagram, FaLinkedin } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import Link from 'next/link';
import Image from 'next/image';

const Footer = () => {
  const socialLinks = [
    {
      id: 1,
      icon: <FaFacebookF className="w-4 h-4" />,
      href: '#',
      label: 'Facebook',
    },
    {
      id: 2,
      icon: <FaInstagram className="w-4 h-4" />,
      href: '#',
      label: 'Instagram',
    },
    {
      id: 3,
      icon: <FaLinkedin className="w-4 h-4" />,
      href: '#',
      label: 'LinkedIn',
    },
    {
      id: 4,
      icon: <FaXTwitter className="w-4 h-4" />,
      href: '#',
      label: 'Twitter',
    },
  ];

  return (
    <footer className="relative overflow-hidden bg-secondary">
      {/* Background Decorations */}
      <div className="absolute inset-0 bg-repeat bg-mesh-pattern opacity-5"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-accent/5"></div>

      {/* Top Border */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary via-accent to-tertiary"></div>

      {/* Content */}
      <div className="relative">
        <div className="container px-4 pt-20 pb-8 mx-auto md:px-8">
          <div className="grid gap-12 md:grid-cols-12">
            {/* Logo and Contact Section */}
            <div className="md:col-span-4">
              <Link
                href="/"
                className="block mb-8 transition-transform duration-300 hover:scale-105"
              >
                <div className="relative">
                  <div className="absolute inset-0 transition-opacity duration-300 scale-110 opacity-0 blur-md bg-gradient-to-r from-primary via-accent to-tertiary group-hover:opacity-30"></div>
                  <Image
                    src="/assets/images/india/common/logo-white.png"
                    width={240}
                    height={140}
                    alt="Indian Visa Services"
                    className="relative w-48"
                  />
                </div>
              </Link>
              <div className="space-y-6">
                <Link
                  href="mailto:support@indianvisaservices.com"
                  className="flex items-center group"
                >
                  <span className="flex items-center justify-center w-12 h-12 mr-4 transition-all duration-300 rounded-xl bg-white/5 backdrop-blur-sm group-hover:bg-gradient-to-r group-hover:from-primary group-hover:to-tertiary group-hover:scale-110">
                    <IoIosMail className="w-6 h-6 text-white" />
                  </span>
                  <span className="text-sm text-gray-300 transition-all duration-300 group-hover:text-white">
                    support@indianvisaservices.com
                  </span>
                </Link>
              </div>
              <div className="flex mt-8 space-x-4">
                {socialLinks.map(link => (
                  <Link
                    key={link.id}
                    href={link.href}
                    aria-label={link.label}
                    className="flex items-center justify-center w-12 h-12 transition-all duration-300 rounded-xl bg-white/5 backdrop-blur-sm hover:bg-gradient-to-r hover:from-primary hover:to-tertiary hover:scale-110 group"
                  >
                    <span className="text-gray-300 transition-colors duration-300 group-hover:text-white">
                      {link.icon}
                    </span>
                  </Link>
                ))}
              </div>
            </div>

            {/* Quick Links Section */}
            <div className="md:col-span-3">
              <h3 className="mb-8 text-lg font-semibold text-white">
                <span className="relative inline-block">
                  Quick Links
                  <span className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-primary to-transparent"></span>
                </span>
              </h3>
              <ul className="space-y-4">
                {[
                  'Home',
                  'About Us',
                  'Apply e-Visa',
                  'Track Application',
                  'Contact Us',
                ].map(item => (
                  <li key={item}>
                    <Link
                      href="/"
                      className="inline-block text-sm text-gray-300 transition-all duration-300 hover:text-white hover:translate-x-2 group"
                    >
                      <span className="relative">
                        {item}
                        <span className="absolute bottom-0 left-0 w-0 h-px transition-all duration-300 bg-gradient-to-r from-primary to-accent group-hover:w-full"></span>
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Visa Types Section */}
            <div className="md:col-span-3">
              <h3 className="mb-8 text-lg font-semibold text-white">
                <span className="relative inline-block">
                  Indian e-Visa Types
                  <span className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-primary to-transparent"></span>
                </span>
              </h3>
              <ul className="space-y-4">
                {[
                  'Tourist e-Visa',
                  'Business e-Visa',
                  'Medical e-Visa',
                  'Conference e-Visa',
                ].map(item => (
                  <li key={item}>
                    <Link
                      href="/visa/step-one"
                      className="inline-block text-sm text-gray-300 transition-all duration-300 hover:text-white hover:translate-x-2 group"
                    >
                      <span className="relative">
                        {item}
                        <span className="absolute bottom-0 left-0 w-0 h-px transition-all duration-300 bg-gradient-to-r from-primary to-accent group-hover:w-full"></span>
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Legal Section */}
            <div className="md:col-span-2">
              <h3 className="mb-8 text-lg font-semibold text-white">
                <span className="relative inline-block">
                  Legal
                  <span className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-primary to-transparent"></span>
                </span>
              </h3>
              <ul className="space-y-4">
                {[
                  { text: 'Terms & Conditions', href: '/terms-and-conditions' },
                  { text: 'Privacy Policy', href: '/privacy-policy' },
                  { text: 'Cookie Policy', href: '/cookie-policy' },
                  { text: 'Refund Policy', href: '/refund-policy' },
                ].map(item => (
                  <li key={item.text}>
                    <Link
                      href={item.href}
                      className="inline-block text-sm text-gray-300 transition-all duration-300 hover:text-white hover:translate-x-2 group"
                    >
                      <span className="relative">
                        {item.text}
                        <span className="absolute bottom-0 left-0 w-0 h-px transition-all duration-300 bg-gradient-to-r from-primary to-accent group-hover:w-full"></span>
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Copyright Section */}
          <div className="pt-12 mt-12 text-center border-t border-white/5">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-accent/5 to-tertiary/5"></div>
              <p className="relative text-sm text-gray-400">
                © {new Date().getFullYear()} indianvisapplication.us. All rights
                reserved. This is a commercial website to apply for visa to
                India.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
