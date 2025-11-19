'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';

export function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Case Studies', href: '#case-studies' },
    { name: 'Testimonials', href: '#testimonials' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white shadow-subtle">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between" style={{ height: 'var(--nav-height)' }}>
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-10 h-10 rounded-md flex items-center justify-center" style={{ backgroundColor: 'var(--blue-primary)' }}>
              <span className="text-white font-bold text-xl">O1</span>
            </div>
            <span className="text-xl font-bold" style={{ color: 'var(--neutral-gray)' }}>
              Only1 Media PR
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-sm font-medium transition-opacity hover:opacity-70"
                style={{ color: 'var(--neutral-gray)' }}
              >
                {link.name}
              </Link>
            ))}
            <Link
              href="#contact"
              className="px-6 py-3 rounded-md text-sm font-semibold text-white transition-opacity hover:opacity-90"
              style={{
                backgroundColor: 'var(--blue-primary)',
                height: 'var(--button-height)',
                display: 'flex',
                alignItems: 'center'
              }}
            >
              Get Started
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6" style={{ color: 'var(--neutral-gray)' }} />
            ) : (
              <Menu className="w-6 h-6" style={{ color: 'var(--neutral-gray)' }} />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t" style={{ borderColor: 'var(--accent-gray)' }}>
            <div className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-sm font-medium py-2 transition-opacity hover:opacity-70"
                  style={{ color: 'var(--neutral-gray)' }}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
              <Link
                href="#contact"
                className="px-6 py-3 rounded-md text-sm font-semibold text-white text-center transition-opacity hover:opacity-90"
                style={{
                  backgroundColor: 'var(--blue-primary)',
                  height: 'var(--button-height)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}
                onClick={() => setMobileMenuOpen(false)}
              >
                Get Started
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
