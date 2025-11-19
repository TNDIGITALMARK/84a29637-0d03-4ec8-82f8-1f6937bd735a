'use client';

import Link from 'next/link';

export function Hero() {
  return (
    <section
      className="relative min-h-screen flex items-center justify-center"
      style={{
        marginTop: 'var(--nav-height)',
        background: 'linear-gradient(135deg, rgba(24, 99, 220, 0.95) 0%, rgba(0, 86, 167, 0.95) 100%)',
      }}
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
            backgroundSize: '40px 40px'
          }}
        />
      </div>

      {/* Content */}
      <div className="container mx-auto px-6 py-20 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h1
            className="text-white mb-6"
            style={{
              fontSize: 'var(--text-hero-title)',
              lineHeight: '1.1',
              fontWeight: '700',
              letterSpacing: '-0.02em'
            }}
          >
            Elevate Your Brand with Strategic PR
          </h1>

          <p
            className="text-white mb-10 max-w-2xl mx-auto"
            style={{
              fontSize: 'var(--text-hero-subtitle)',
              lineHeight: '1.6',
              fontWeight: '400',
              opacity: '0.95'
            }}
          >
            We craft compelling narratives that capture attention, build credibility,
            and drive meaningful results for forward-thinking brands.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              href="#contact"
              className="px-8 py-4 rounded-md text-base font-semibold transition-all hover:shadow-lg"
              style={{
                backgroundColor: 'var(--white)',
                color: 'var(--blue-primary)',
                height: 'var(--button-height)',
                display: 'flex',
                alignItems: 'center',
                minWidth: '180px',
                justifyContent: 'center'
              }}
            >
              Start Your Campaign
            </Link>

            <Link
              href="#services"
              className="px-8 py-4 rounded-md text-base font-semibold transition-all border-2 border-white text-white hover:bg-white"
              style={{
                height: 'var(--button-height)',
                display: 'flex',
                alignItems: 'center',
                minWidth: '180px',
                justifyContent: 'center'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = 'var(--blue-primary)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = 'white';
              }}
            >
              Explore Services
            </Link>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20 pt-20 border-t border-white/20">
            {[
              { value: '500+', label: 'Campaigns Launched' },
              { value: '98%', label: 'Client Satisfaction' },
              { value: '2.5M+', label: 'Media Impressions' },
              { value: '50+', label: 'Industry Awards' },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div
                  className="text-4xl font-bold text-white mb-2"
                  style={{ letterSpacing: '-0.02em' }}
                >
                  {stat.value}
                </div>
                <div
                  className="text-white/80 text-sm font-medium"
                  style={{ fontSize: 'var(--text-body)' }}
                >
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg
          className="w-6 h-6 text-white"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
        </svg>
      </div>
    </section>
  );
}
