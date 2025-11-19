'use client';

import { Navigation } from '@/components/navigation';
import { Footer } from '@/components/footer';
import { TrendingUp, Users, Award, Target } from 'lucide-react';

export default function CaseStudiesPage() {
  return (
    <>
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-[var(--navy-primary)] to-[var(--navy-dark)] text-white">
        <div className="max-w-[1400px] mx-auto px-6 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Success Stories That Speak Volumes
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto">
            Discover how we've transformed brands and amplified their voices across global media
          </p>
        </div>
      </section>

      {/* Featured Case Study */}
      <section className="py-20 bg-white">
        <div className="max-w-[1400px] mx-auto px-6">
          <div className="mb-16 text-center">
            <span className="inline-block bg-[var(--gold-accent)] text-white px-4 py-2 rounded-full text-sm font-semibold mb-4">
              Featured Case Study
            </span>
            <h2 className="text-4xl font-bold text-[var(--navy-primary)] mb-4">
              From Startup to Unicorn: A PR Success Story
            </h2>
            <p className="text-lg text-[var(--gray-medium)] max-w-3xl mx-auto">
              How we helped a fintech startup achieve unicorn status through strategic PR
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Image Placeholder */}
            <div className="relative h-[400px] bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl shadow-large overflow-hidden">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center p-8">
                  <Award size={64} className="mx-auto mb-4 text-[var(--gold-accent)]" />
                  <p className="text-xl font-semibold text-[var(--navy-primary)]">
                    Award-Winning Campaign
                  </p>
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="space-y-6">
              <div>
                <h3 className="text-2xl font-bold text-[var(--navy-primary)] mb-4">
                  The Challenge
                </h3>
                <p className="text-[var(--gray-dark)] leading-relaxed">
                  A promising fintech startup needed to establish credibility and gain traction in a crowded market.
                  They had innovative technology but lacked media presence and industry recognition.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-[var(--navy-primary)] mb-4">
                  Our Approach
                </h3>
                <p className="text-[var(--gray-dark)] leading-relaxed">
                  We developed a comprehensive 6-month PR campaign focused on thought leadership, strategic media
                  placements, and building relationships with tier-one financial journalists. Our team crafted
                  compelling narratives that positioned the founders as industry innovators.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-[var(--navy-primary)] mb-4">
                  The Results
                </h3>
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-[var(--gray-light)] p-4 rounded-lg">
                    <p className="text-3xl font-bold text-[var(--gold-accent)] mb-1">300%</p>
                    <p className="text-sm text-[var(--gray-medium)]">Increase in Media Coverage</p>
                  </div>
                  <div className="bg-[var(--gray-light)] p-4 rounded-lg">
                    <p className="text-3xl font-bold text-[var(--gold-accent)] mb-1">50M</p>
                    <p className="text-sm text-[var(--gray-medium)]">Media Impressions</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Media Placements */}
      <section className="py-20 bg-[var(--gray-light)]">
        <div className="max-w-[1400px] mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-[var(--navy-primary)] mb-4">
              Tier-One Media Placements
            </h2>
            <p className="text-lg text-[var(--gray-medium)]">
              We secure coverage in the publications that matter most
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-subtle flex items-center justify-center">
              <p className="text-2xl font-bold text-gray-400">Wall Street Journal</p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-subtle flex items-center justify-center">
              <p className="text-2xl font-bold text-gray-400">TechCrunch</p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-subtle flex items-center justify-center">
              <p className="text-2xl font-bold text-gray-400">Forbes</p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-subtle flex items-center justify-center">
              <p className="text-2xl font-bold text-gray-400">Bloomberg</p>
            </div>
          </div>
        </div>
      </section>

      {/* Key Metrics */}
      <section className="py-20 bg-white">
        <div className="max-w-[1400px] mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-[var(--navy-primary)] mb-4">
              Proven Track Record
            </h2>
            <p className="text-lg text-[var(--gray-medium)]">
              Our results speak for themselves
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center p-8">
              <TrendingUp size={48} className="mx-auto mb-4 text-[var(--gold-accent)]" />
              <p className="text-4xl font-bold text-[var(--navy-primary)] mb-2">25+</p>
              <p className="text-[var(--gray-medium)]">Tier-One Placements</p>
            </div>

            <div className="text-center p-8">
              <Users size={48} className="mx-auto mb-4 text-[var(--gold-accent)]" />
              <p className="text-4xl font-bold text-[var(--navy-primary)] mb-2">100+</p>
              <p className="text-[var(--gray-medium)]">Media Relationships</p>
            </div>

            <div className="text-center p-8">
              <Award size={48} className="mx-auto mb-4 text-[var(--gold-accent)]" />
              <p className="text-4xl font-bold text-[var(--navy-primary)] mb-2">15</p>
              <p className="text-[var(--gray-medium)]">Industry Awards</p>
            </div>

            <div className="text-center p-8">
              <Target size={48} className="mx-auto mb-4 text-[var(--gold-accent)]" />
              <p className="text-4xl font-bold text-[var(--navy-primary)] mb-2">98%</p>
              <p className="text-[var(--gray-medium)]">Client Satisfaction</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-[var(--navy-primary)] to-[var(--navy-dark)] text-white">
        <div className="max-w-[1400px] mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Ready to Write Your Success Story?
          </h2>
          <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
            Let's discuss how we can elevate your brand and dominate your industry's media landscape
          </p>
          <a
            href="/contact"
            className="inline-block bg-[var(--gold-accent)] hover:bg-[var(--gold-hover)] text-white px-10 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:scale-105"
          >
            Schedule Your Consultation
          </a>
        </div>
      </section>

      <Footer />
    </>
  );
}
