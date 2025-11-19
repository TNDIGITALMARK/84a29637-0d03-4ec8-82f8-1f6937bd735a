'use client';

import Link from 'next/link';
import { Facebook, Twitter, Linkedin, Instagram, Mail } from 'lucide-react';

export function Footer() {
  const footerLinks = {
    Services: [
      { name: 'Media Relations', href: '#services' },
      { name: 'Crisis Management', href: '#services' },
      { name: 'Brand Strategy', href: '#services' },
      { name: 'Digital PR', href: '#services' },
    ],
    Company: [
      { name: 'About Us', href: '#about' },
      { name: 'Our Team', href: '#about' },
      { name: 'Careers', href: '#' },
      { name: 'Blog', href: '#' },
    ],
    Resources: [
      { name: 'Case Studies', href: '#case-studies' },
      { name: 'Testimonials', href: '#testimonials' },
      { name: 'Press Kit', href: '#' },
      { name: 'Contact', href: '#contact' },
    ],
  };

  const socialLinks = [
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Instagram, href: '#', label: 'Instagram' },
  ];

  return (
    <footer
      className="pt-16 pb-8"
      style={{
        backgroundColor: 'var(--neutral-gray)',
        color: 'var(--white)'
      }}
    >
      <div className="container mx-auto px-6">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-12">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center space-x-2 mb-4">
              <div
                className="w-10 h-10 rounded-md flex items-center justify-center"
                style={{ backgroundColor: 'var(--blue-primary)' }}
              >
                <span className="text-white font-bold text-xl">O1</span>
              </div>
              <span className="text-xl font-bold text-white">
                Only1 Media PR
              </span>
            </Link>
            <p
              className="mb-6 max-w-md"
              style={{
                fontSize: 'var(--text-body)',
                lineHeight: '1.6',
                opacity: '0.8'
              }}
            >
              Strategic public relations partner helping brands tell their story,
              build credibility, and achieve measurable business results.
            </p>

            {/* Newsletter */}
            <div>
              <h4
                className="text-sm font-semibold mb-3"
                style={{ color: 'var(--white)' }}
              >
                Subscribe to our newsletter
              </h4>
              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder="Your email"
                  className="flex-1 px-4 py-2 rounded-md text-sm"
                  style={{
                    backgroundColor: 'rgba(255, 255, 255, 0.1)',
                    border: '1px solid rgba(255, 255, 255, 0.2)',
                    color: 'var(--white)',
                  }}
                />
                <button
                  className="px-4 py-2 rounded-md transition-opacity hover:opacity-90"
                  style={{
                    backgroundColor: 'var(--blue-primary)',
                    color: 'var(--white)'
                  }}
                >
                  <Mail className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>

          {/* Links Columns */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4
                className="text-sm font-semibold mb-4"
                style={{ color: 'var(--white)' }}
              >
                {category}
              </h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-sm transition-opacity hover:opacity-70"
                      style={{ opacity: '0.8' }}
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Footer */}
        <div
          className="pt-8 flex flex-col md:flex-row justify-between items-center gap-6"
          style={{
            borderTop: '1px solid rgba(255, 255, 255, 0.1)'
          }}
        >
          {/* Copyright */}
          <p
            className="text-sm"
            style={{ opacity: '0.6' }}
          >
            © {new Date().getFullYear()} Only1 Media PR. All rights reserved.
          </p>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            {socialLinks.map((social) => {
              const Icon = social.icon;
              return (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 rounded-full flex items-center justify-center transition-all hover:opacity-70"
                  style={{
                    backgroundColor: 'rgba(255, 255, 255, 0.1)',
                    border: '1px solid rgba(255, 255, 255, 0.2)'
                  }}
                >
                  <Icon className="w-5 h-5" />
                </a>
              );
            })}
          </div>

          {/* Legal Links */}
          <div className="flex gap-6">
            <Link
              href="#"
              className="text-sm transition-opacity hover:opacity-70"
              style={{ opacity: '0.6' }}
            >
              Privacy Policy
            </Link>
            <Link
              href="#"
              className="text-sm transition-opacity hover:opacity-70"
              style={{ opacity: '0.6' }}
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
