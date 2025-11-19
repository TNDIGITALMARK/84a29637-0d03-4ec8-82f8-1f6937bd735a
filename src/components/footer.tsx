import Link from 'next/link';
import { Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-[var(--navy-primary)] text-white py-16">
      <div className="max-w-[1400px] mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Company Info */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-white">ONLY1 MEDIA PR</h3>
            <p className="text-gray-300 text-sm leading-relaxed">
              Strategic Public Relations for Visionary Brands. Transform your story into media gold.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/"
                  className="text-gray-300 hover:text-[var(--gold-accent)] transition-colors text-sm"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  href="/case-studies"
                  className="text-gray-300 hover:text-[var(--gold-accent)] transition-colors text-sm"
                >
                  Case Studies
                </Link>
              </li>
              <li>
                <Link
                  href="/case-studies"
                  className="text-gray-300 hover:text-[var(--gold-accent)] transition-colors text-sm"
                >
                  Portfolio
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-gray-300 hover:text-[var(--gold-accent)] transition-colors text-sm"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">Services</h4>
            <ul className="space-y-2">
              <li className="text-gray-300 text-sm">Media Relations</li>
              <li className="text-gray-300 text-sm">Crisis Management</li>
              <li className="text-gray-300 text-sm">Brand Positioning</li>
              <li className="text-gray-300 text-sm">Digital PR</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">Get in Touch</h4>
            <div className="space-y-2 text-sm text-gray-300">
              <p>+1 (555) 123-4567</p>
              <p>info@only1mediapr.com</p>
              <p>New York, NY</p>
            </div>
            {/* Social Icons */}
            <div className="flex space-x-4 pt-4">
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-[var(--gold-accent)] flex items-center justify-center transition-all duration-300"
                aria-label="Facebook"
              >
                <Facebook size={18} />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-[var(--gold-accent)] flex items-center justify-center transition-all duration-300"
                aria-label="Twitter"
              >
                <Twitter size={18} />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-[var(--gold-accent)] flex items-center justify-center transition-all duration-300"
                aria-label="LinkedIn"
              >
                <Linkedin size={18} />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-[var(--gold-accent)] flex items-center justify-center transition-all duration-300"
                aria-label="Instagram"
              >
                <Instagram size={18} />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} Only1 Media PR. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
