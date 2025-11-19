'use client';

import { CheckCircle2 } from 'lucide-react';

const advantages = [
  'Industry-leading expertise with 15+ years of PR experience',
  'Strategic partnerships with top-tier media outlets',
  'Data-driven approach with measurable ROI tracking',
  'Dedicated account team with 24/7 support',
  'Proven track record across 20+ industries',
  'Award-winning creative campaigns',
];

export function About() {
  return (
    <section
      id="about"
      className="py-20"
      style={{
        paddingTop: 'var(--spacing-section)',
        paddingBottom: 'var(--spacing-section)',
        backgroundColor: 'var(--white)'
      }}
    >
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div>
            <div
              className="inline-block px-4 py-1 rounded-full text-xs font-semibold mb-6"
              style={{
                backgroundColor: 'rgba(24, 99, 220, 0.1)',
                color: 'var(--blue-primary)'
              }}
            >
              ABOUT US
            </div>

            <h2
              className="mb-6"
              style={{
                fontSize: 'var(--text-section-title)',
                color: 'var(--neutral-gray)',
                fontWeight: '700'
              }}
            >
              Your Strategic PR Partner for Success
            </h2>

            <p
              className="mb-6"
              style={{
                fontSize: 'var(--text-body)',
                color: 'var(--neutral-gray)',
                lineHeight: '1.7',
                opacity: '0.8'
              }}
            >
              At Only1 Media PR, we believe every brand has a unique story worth telling.
              For over 15 years, we've helped companies of all sizes craft compelling
              narratives, build lasting relationships with media, and achieve their
              communication objectives.
            </p>

            <p
              className="mb-8"
              style={{
                fontSize: 'var(--text-body)',
                color: 'var(--neutral-gray)',
                lineHeight: '1.7',
                opacity: '0.8'
              }}
            >
              Our integrated approach combines traditional PR expertise with modern
              digital strategies, ensuring your message reaches the right audience
              through the most effective channels.
            </p>

            {/* Advantages List */}
            <div className="space-y-3">
              {advantages.map((advantage, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle2
                    className="w-5 h-5 flex-shrink-0 mt-0.5"
                    style={{ color: 'var(--blue-primary)' }}
                  />
                  <span
                    style={{
                      fontSize: 'var(--text-body)',
                      color: 'var(--neutral-gray)',
                      lineHeight: '1.6'
                    }}
                  >
                    {advantage}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Stats & Visual */}
          <div className="relative">
            {/* Main Stats Card */}
            <div
              className="p-8 rounded-lg relative z-10"
              style={{
                background: 'linear-gradient(135deg, var(--blue-primary) 0%, var(--blue-dark) 100%)',
                boxShadow: 'var(--shadow-large)'
              }}
            >
              <div className="grid grid-cols-2 gap-8">
                {[
                  { value: '15+', label: 'Years Experience' },
                  { value: '500+', label: 'Successful Campaigns' },
                  { value: '98%', label: 'Client Retention' },
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
                      className="text-white/80 text-sm"
                      style={{ fontSize: 'var(--text-small)' }}
                    >
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>

              {/* Decorative Element */}
              <div
                className="absolute -bottom-6 -right-6 w-32 h-32 rounded-lg"
                style={{
                  backgroundColor: 'var(--blue-primary)',
                  opacity: '0.2',
                  zIndex: -1
                }}
              />
            </div>

            {/* Secondary Card */}
            <div
              className="mt-6 p-6 rounded-lg"
              style={{
                backgroundColor: 'var(--white)',
                border: '1px solid var(--accent-gray)',
                boxShadow: 'var(--shadow-subtle)'
              }}
            >
              <h4
                className="mb-3"
                style={{
                  fontSize: 'var(--text-card-title)',
                  color: 'var(--neutral-gray)',
                  fontWeight: '700'
                }}
              >
                Industry Recognition
              </h4>
              <div className="space-y-2">
                {[
                  'PR Week Agency of the Year 2023',
                  'Best Crisis Management Campaign 2022',
                  'Digital PR Excellence Award 2021',
                ].map((award, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-2"
                  >
                    <div
                      className="w-2 h-2 rounded-full"
                      style={{ backgroundColor: 'var(--blue-primary)' }}
                    />
                    <span
                      style={{
                        fontSize: 'var(--text-body)',
                        color: 'var(--neutral-gray)',
                        opacity: '0.8'
                      }}
                    >
                      {award}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
