'use client';

import { ArrowUpRight } from 'lucide-react';

const caseStudies = [
  {
    client: 'TechCorp Global',
    industry: 'Technology',
    challenge: 'Launch a new SaaS product in a crowded market',
    result: '300% increase in media coverage, 5M+ social impressions',
    metrics: ['300%', '5M+', '87%'],
    metricLabels: ['Media Coverage', 'Impressions', 'Awareness Lift'],
  },
  {
    client: 'HealthPlus Wellness',
    industry: 'Healthcare',
    challenge: 'Rebuild brand trust after regulatory challenges',
    result: 'Restored positive sentiment, 250+ favorable articles',
    metrics: ['92%', '250+', '40%'],
    metricLabels: ['Positive Sentiment', 'Articles', 'Trust Increase'],
  },
  {
    client: 'FinanceFirst',
    industry: 'Financial Services',
    challenge: 'Position CEO as industry thought leader',
    result: 'Featured in Forbes, WSJ, and Bloomberg',
    metrics: ['15+', '3.2M', '10X'],
    metricLabels: ['Major Features', 'Reach', 'Executive Visibility'],
  },
];

export function CaseStudies() {
  return (
    <section
      id="case-studies"
      className="py-20"
      style={{
        paddingTop: 'var(--spacing-section)',
        paddingBottom: 'var(--spacing-section)',
        backgroundColor: 'var(--muted)'
      }}
    >
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2
            className="mb-4"
            style={{
              fontSize: 'var(--text-section-title)',
              color: 'var(--neutral-gray)',
              fontWeight: '700'
            }}
          >
            Proven Results
          </h2>
          <p
            className="text-center"
            style={{
              fontSize: 'var(--text-body)',
              color: 'var(--neutral-gray)',
              lineHeight: '1.6',
              opacity: '0.8'
            }}
          >
            Real campaigns. Real impact. See how we've helped industry leaders
            achieve their PR objectives and drive business growth.
          </p>
        </div>

        {/* Case Studies Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {caseStudies.map((study, index) => (
            <div
              key={index}
              className="rounded-lg p-8 transition-all hover:shadow-medium cursor-pointer group"
              style={{
                backgroundColor: 'var(--white)',
                boxShadow: 'var(--shadow-subtle)'
              }}
            >
              {/* Industry Tag */}
              <div
                className="inline-block px-3 py-1 rounded-full text-xs font-semibold mb-4"
                style={{
                  backgroundColor: 'rgba(24, 99, 220, 0.1)',
                  color: 'var(--blue-primary)'
                }}
              >
                {study.industry}
              </div>

              {/* Client Name */}
              <h3
                className="mb-3 flex items-center justify-between"
                style={{
                  fontSize: 'var(--text-card-title)',
                  color: 'var(--neutral-gray)',
                  fontWeight: '700'
                }}
              >
                {study.client}
                <ArrowUpRight
                  className="w-5 h-5 opacity-0 group-hover:opacity-100 transition-opacity"
                  style={{ color: 'var(--blue-primary)' }}
                />
              </h3>

              {/* Challenge */}
              <div className="mb-4">
                <div
                  className="text-xs font-semibold mb-1"
                  style={{ color: 'var(--neutral-gray)', opacity: '0.6' }}
                >
                  CHALLENGE
                </div>
                <p
                  style={{
                    fontSize: 'var(--text-body)',
                    color: 'var(--neutral-gray)',
                    lineHeight: '1.6'
                  }}
                >
                  {study.challenge}
                </p>
              </div>

              {/* Result */}
              <div className="mb-6">
                <div
                  className="text-xs font-semibold mb-1"
                  style={{ color: 'var(--neutral-gray)', opacity: '0.6' }}
                >
                  RESULT
                </div>
                <p
                  style={{
                    fontSize: 'var(--text-body)',
                    color: 'var(--neutral-gray)',
                    lineHeight: '1.6'
                  }}
                >
                  {study.result}
                </p>
              </div>

              {/* Metrics */}
              <div className="grid grid-cols-3 gap-4 pt-4 border-t" style={{ borderColor: 'var(--accent-gray)' }}>
                {study.metrics.map((metric, idx) => (
                  <div key={idx}>
                    <div
                      className="text-2xl font-bold mb-1"
                      style={{ color: 'var(--blue-primary)' }}
                    >
                      {metric}
                    </div>
                    <div
                      className="text-xs"
                      style={{ color: 'var(--neutral-gray)', opacity: '0.7' }}
                    >
                      {study.metricLabels[idx]}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-md text-base font-semibold text-white transition-opacity hover:opacity-90"
            style={{
              backgroundColor: 'var(--blue-primary)',
              height: 'var(--button-height)',
              display: 'inline-flex',
              alignItems: 'center'
            }}
          >
            View All Case Studies
            <ArrowUpRight className="w-5 h-5" />
          </a>
        </div>
      </div>
    </section>
  );
}
