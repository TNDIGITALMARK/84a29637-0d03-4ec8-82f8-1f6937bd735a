'use client';

import { Megaphone, Users, TrendingUp, Globe, Award, Target } from 'lucide-react';

const services = [
  {
    icon: Megaphone,
    title: 'Media Relations',
    description: 'Build strong relationships with journalists and secure high-impact media coverage that amplifies your brand message.',
  },
  {
    icon: Users,
    title: 'Crisis Management',
    description: 'Protect your reputation with strategic crisis communication planning and rapid response protocols.',
  },
  {
    icon: TrendingUp,
    title: 'Brand Strategy',
    description: 'Develop comprehensive brand positioning strategies that differentiate you in competitive markets.',
  },
  {
    icon: Globe,
    title: 'Digital PR',
    description: 'Leverage social media, influencer partnerships, and digital channels to maximize your online presence.',
  },
  {
    icon: Award,
    title: 'Thought Leadership',
    description: 'Establish executive visibility through speaking engagements, bylined articles, and industry recognition.',
  },
  {
    icon: Target,
    title: 'Campaign Management',
    description: 'Execute integrated PR campaigns that drive measurable results and achieve your business objectives.',
  },
];

export function Services() {
  return (
    <section
      id="services"
      className="py-20"
      style={{
        paddingTop: 'var(--spacing-section)',
        paddingBottom: 'var(--spacing-section)',
        backgroundColor: 'var(--white)'
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
            Strategic PR Services
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
            Comprehensive public relations solutions designed to elevate your brand,
            engage your audience, and drive measurable business outcomes.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="p-8 rounded-lg transition-all hover:shadow-medium cursor-pointer group"
                style={{
                  backgroundColor: 'var(--white)',
                  border: '1px solid var(--accent-gray)',
                  boxShadow: 'var(--shadow-subtle)'
                }}
              >
                {/* Icon */}
                <div
                  className="w-14 h-14 rounded-lg flex items-center justify-center mb-6 transition-transform group-hover:scale-110"
                  style={{
                    backgroundColor: 'rgba(24, 99, 220, 0.1)'
                  }}
                >
                  <Icon
                    className="w-7 h-7"
                    style={{ color: 'var(--blue-primary)', strokeWidth: 2 }}
                  />
                </div>

                {/* Title */}
                <h3
                  className="mb-3"
                  style={{
                    fontSize: 'var(--text-card-title)',
                    color: 'var(--neutral-gray)',
                    fontWeight: '700'
                  }}
                >
                  {service.title}
                </h3>

                {/* Description */}
                <p
                  style={{
                    fontSize: 'var(--text-body)',
                    color: 'var(--neutral-gray)',
                    lineHeight: '1.6',
                    opacity: '0.8'
                  }}
                >
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
