'use client';

import Link from 'next/link';
import { Navigation } from '@/components/navigation';
import { Footer } from '@/components/footer';
import { ServiceCard } from '@/components/service-card';
import { Radio, Shield, Target, Wifi } from 'lucide-react';

export default function HomePage() {
  return (
    <>
      <Navigation />

      {/* Hero Section */}
      <section
        className="relative min-h-[600px] flex items-center justify-center text-white"
        style={{
          backgroundImage: 'url(/generated/hero-background.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        {/* Navy Overlay */}
        <div
          className="absolute inset-0"
          style={{ backgroundColor: 'var(--navy-overlay)' }}
        />

        {/* Hero Content */}
        <div className="relative z-10 max-w-[1400px] mx-auto px-6 py-32 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
            ELEVATE YOUR NARRATIVE,
            <br />
            DOMINATE THE MEDIA LANDSCAPE
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-100 max-w-3xl mx-auto">
            Strategic Public Relations for Visionary Brands
          </p>
          <Link
            href="/contact"
            className="inline-block bg-[var(--gold-accent)] hover:bg-[var(--gold-hover)] text-white px-10 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:scale-105 shadow-large"
          >
            Schedule a Call Today
          </Link>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white">
        <div className="max-w-[1400px] mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            <ServiceCard
              icon={Radio}
              title="Media Relations"
              description="Build powerful connections with top-tier journalists and secure premium media placements."
            />
            <ServiceCard
              icon={Shield}
              title="Crisis Management"
              description="Navigate challenging situations with strategic communication that protects your brand."
            />
            <ServiceCard
              icon={Target}
              title="Brand Strategy"
              description="Position your brand as an industry leader with compelling narrative development."
            />
            <ServiceCard
              icon={Wifi}
              title="Digital PR"
              description="Amplify your message across digital channels with data-driven PR campaigns."
            />
          </div>
        </div>
      </section>

      {/* Client Success Stories Section */}
      <section className="py-20 bg-[var(--gray-light)]">
        <div className="max-w-[1400px] mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-[var(--navy-primary)] mb-4">
            CLIENT SUCCESS STORIES
          </h2>
          <p className="text-lg text-[var(--gray-medium)] mb-12">
            Only1 Media PR transformed our brand presence
          </p>

          {/* Client Logos */}
          <div className="flex flex-wrap justify-center items-center gap-12 mb-12">
            <div className="text-2xl font-bold text-gray-400 opacity-70 hover:opacity-100 transition-opacity">
              GLOBAL CORP
            </div>
            <div className="text-2xl font-bold text-gray-400 opacity-70 hover:opacity-100 transition-opacity">
              TECH INSIGHTS
            </div>
            <div className="text-2xl font-bold text-gray-400 opacity-70 hover:opacity-100 transition-opacity">
              FINTECH LEADERS
            </div>
            <div className="text-2xl font-bold text-gray-400 opacity-70 hover:opacity-100 transition-opacity">
              PRIME CAPITAL
            </div>
          </div>

          {/* CTA Button */}
          <Link
            href="/case-studies"
            className="inline-block bg-[var(--navy-primary)] hover:bg-[var(--navy-dark)] text-white px-8 py-3 rounded-lg font-medium transition-all duration-300 hover:scale-105"
          >
            Get In Touch
          </Link>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="py-20 bg-white">
        <div className="max-w-[1400px] mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <div className="mb-8">
              <svg
                className="w-16 h-16 mx-auto text-[var(--gold-accent)] opacity-30"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
              </svg>
            </div>
            <blockquote className="text-2xl md:text-3xl font-medium text-[var(--navy-primary)] mb-6 leading-relaxed">
              "Only1 Media PR doubled our media mentions in just 90 days. Their strategic approach transformed our brand visibility."
            </blockquote>
            <p className="text-lg text-[var(--gray-medium)] font-medium">
              — Sarah Johnson, CEO of TechVision
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
