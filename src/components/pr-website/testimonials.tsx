'use client';

import { Quote } from 'lucide-react';

const testimonials = [
  {
    quote: "Only1 Media PR transformed our brand narrative and delivered exceptional media coverage. Their strategic approach and industry connections are unmatched.",
    author: "Sarah Johnson",
    position: "CMO",
    company: "TechVision Inc.",
  },
  {
    quote: "The team's crisis management expertise saved our reputation during a challenging period. Their quick response and strategic counsel were invaluable.",
    author: "Michael Chen",
    position: "CEO",
    company: "InnovateCorp",
  },
  {
    quote: "From zero to industry thought leader in 6 months. The results speak for themselves. Highly recommend their thought leadership program.",
    author: "Emily Rodriguez",
    position: "Founder",
    company: "NextGen Solutions",
  },
];

export function Testimonials() {
  return (
    <section
      id="testimonials"
      className="py-20 relative overflow-hidden"
      style={{
        paddingTop: 'var(--spacing-section)',
        paddingBottom: 'var(--spacing-section)',
        backgroundColor: 'var(--white)'
      }}
    >
      {/* Decorative Element */}
      <div
        className="absolute top-0 right-0 w-96 h-96 rounded-full blur-3xl opacity-10"
        style={{ backgroundColor: 'var(--blue-primary)' }}
      />

      <div className="container mx-auto px-6 relative z-10">
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
            Client Success Stories
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
            Don't just take our word for it. Here's what industry leaders say about
            partnering with Only1 Media PR.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="p-8 rounded-lg transition-all hover:shadow-medium"
              style={{
                backgroundColor: 'var(--white)',
                border: '1px solid var(--accent-gray)',
                boxShadow: 'var(--shadow-subtle)'
              }}
            >
              {/* Quote Icon */}
              <div
                className="w-12 h-12 rounded-lg flex items-center justify-center mb-6"
                style={{
                  backgroundColor: 'rgba(24, 99, 220, 0.1)'
                }}
              >
                <Quote
                  className="w-6 h-6"
                  style={{ color: 'var(--blue-primary)', fill: 'var(--blue-primary)' }}
                />
              </div>

              {/* Quote */}
              <p
                className="mb-6"
                style={{
                  fontSize: 'var(--text-body)',
                  color: 'var(--neutral-gray)',
                  lineHeight: '1.7',
                  fontStyle: 'italic'
                }}
              >
                "{testimonial.quote}"
              </p>

              {/* Author */}
              <div className="pt-4 border-t" style={{ borderColor: 'var(--accent-gray)' }}>
                <div
                  className="font-semibold mb-1"
                  style={{
                    fontSize: 'var(--text-body)',
                    color: 'var(--neutral-gray)'
                  }}
                >
                  {testimonial.author}
                </div>
                <div
                  className="text-xs"
                  style={{ color: 'var(--neutral-gray)', opacity: '0.7' }}
                >
                  {testimonial.position}, {testimonial.company}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Trust Indicators */}
        <div className="mt-20 pt-12 border-t" style={{ borderColor: 'var(--accent-gray)' }}>
          <div className="text-center mb-8">
            <p
              className="text-xs font-semibold tracking-wider"
              style={{ color: 'var(--neutral-gray)', opacity: '0.6' }}
            >
              TRUSTED BY LEADING BRANDS
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8 items-center opacity-40">
            {['Brand 1', 'Brand 2', 'Brand 3', 'Brand 4', 'Brand 5'].map((brand, index) => (
              <div
                key={index}
                className="text-center font-bold text-2xl"
                style={{ color: 'var(--neutral-gray)' }}
              >
                {brand}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
