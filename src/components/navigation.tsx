'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';

export function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white shadow-subtle">
      <div className="max-w-[1400px] mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <span className="text-2xl font-bold text-[var(--navy-primary)] tracking-tight">
              ONLY1 MEDIA PR
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link
              href="/"
              className="text-[var(--navy-primary)] hover:text-[var(--gold-accent)] transition-colors font-medium"
            >
              Services
            </Link>
            <Link
              href="/case-studies"
              className="text-[var(--navy-primary)] hover:text-[var(--gold-accent)] transition-colors font-medium"
            >
              About
            </Link>
            <Link
              href="/case-studies"
              className="text-[var(--navy-primary)] hover:text-[var(--gold-accent)] transition-colors font-medium"
            >
              Portfolio
            </Link>
            <Link
              href="/contact"
              className="text-[var(--navy-primary)] hover:text-[var(--gold-accent)] transition-colors font-medium"
            >
              Contact
            </Link>
          </div>

          {/* CTA Button - Desktop */}
          <Link
            href="/contact"
            className="hidden md:block bg-[var(--gold-accent)] hover:bg-[var(--gold-hover)] text-white px-8 py-3 rounded-lg font-medium transition-all duration-300 hover:scale-105"
          >
            Schedule Call
          </Link>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-[var(--navy-primary)]"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200">
          <div className="px-6 py-4 space-y-4">
            <Link
              href="/"
              className="block text-[var(--navy-primary)] hover:text-[var(--gold-accent)] font-medium py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Services
            </Link>
            <Link
              href="/case-studies"
              className="block text-[var(--navy-primary)] hover:text-[var(--gold-accent)] font-medium py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              About
            </Link>
            <Link
              href="/case-studies"
              className="block text-[var(--navy-primary)] hover:text-[var(--gold-accent)] font-medium py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Portfolio
            </Link>
            <Link
              href="/contact"
              className="block text-[var(--navy-primary)] hover:text-[var(--gold-accent)] font-medium py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Contact
            </Link>
            <Link
              href="/contact"
              className="block bg-[var(--gold-accent)] hover:bg-[var(--gold-hover)] text-white px-6 py-3 rounded-lg font-medium text-center transition-all"
              onClick={() => setMobileMenuOpen(false)}
            >
              Schedule Call
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
