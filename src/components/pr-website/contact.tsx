'use client';

import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { useState } from 'react';

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
    alert('Thank you for your interest! We will get back to you soon.');
    setFormData({ name: '', email: '', company: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section
      id="contact"
      className="py-20"
      style={{
        paddingTop: 'var(--spacing-section)',
        paddingBottom: 'var(--spacing-section)',
        background: 'linear-gradient(135deg, rgba(24, 99, 220, 0.05) 0%, rgba(0, 86, 167, 0.05) 100%)',
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
            Let's Start Your PR Journey
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
            Ready to elevate your brand? Get in touch with our PR experts to discuss
            how we can help achieve your communication goals.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Information */}
          <div>
            <h3
              className="mb-6"
              style={{
                fontSize: 'var(--text-card-title)',
                color: 'var(--neutral-gray)',
                fontWeight: '700'
              }}
            >
              Get In Touch
            </h3>

            <div className="space-y-6">
              {[
                { icon: Mail, label: 'Email', value: 'hello@only1mediapr.com' },
                { icon: Phone, label: 'Phone', value: '+1 (555) 123-4567' },
                { icon: MapPin, label: 'Office', value: 'New York, NY 10001' },
              ].map((item, index) => {
                const Icon = item.icon;
                return (
                  <div key={index} className="flex items-start gap-4">
                    <div
                      className="w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0"
                      style={{
                        backgroundColor: 'rgba(24, 99, 220, 0.1)'
                      }}
                    >
                      <Icon
                        className="w-5 h-5"
                        style={{ color: 'var(--blue-primary)' }}
                      />
                    </div>
                    <div>
                      <div
                        className="text-xs font-semibold mb-1"
                        style={{ color: 'var(--neutral-gray)', opacity: '0.6' }}
                      >
                        {item.label}
                      </div>
                      <div
                        style={{
                          fontSize: 'var(--text-body)',
                          color: 'var(--neutral-gray)',
                          fontWeight: '500'
                        }}
                      >
                        {item.value}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Additional Info */}
            <div
              className="mt-8 p-6 rounded-lg"
              style={{
                backgroundColor: 'var(--white)',
                border: '1px solid var(--accent-gray)',
                boxShadow: 'var(--shadow-subtle)'
              }}
            >
              <h4
                className="mb-3"
                style={{
                  fontSize: 'var(--text-body)',
                  color: 'var(--neutral-gray)',
                  fontWeight: '700'
                }}
              >
                Office Hours
              </h4>
              <p
                style={{
                  fontSize: 'var(--text-body)',
                  color: 'var(--neutral-gray)',
                  lineHeight: '1.6',
                  opacity: '0.8'
                }}
              >
                Monday - Friday: 9:00 AM - 6:00 PM EST
                <br />
                Saturday - Sunday: Closed
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div
            className="p-8 rounded-lg"
            style={{
              backgroundColor: 'var(--white)',
              boxShadow: 'var(--shadow-medium)'
            }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block mb-2 text-sm font-semibold"
                  style={{ color: 'var(--neutral-gray)' }}
                >
                  Full Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-md transition-all focus:outline-none focus:ring-2"
                  style={{
                    border: '1px solid var(--accent-gray)',
                    fontSize: 'var(--text-body)',
                    backgroundColor: 'var(--white)'
                  }}
                  placeholder="John Doe"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm font-semibold"
                  style={{ color: 'var(--neutral-gray)' }}
                >
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-md transition-all focus:outline-none focus:ring-2"
                  style={{
                    border: '1px solid var(--accent-gray)',
                    fontSize: 'var(--text-body)',
                    backgroundColor: 'var(--white)'
                  }}
                  placeholder="john@company.com"
                />
              </div>

              <div>
                <label
                  htmlFor="company"
                  className="block mb-2 text-sm font-semibold"
                  style={{ color: 'var(--neutral-gray)' }}
                >
                  Company
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-md transition-all focus:outline-none focus:ring-2"
                  style={{
                    border: '1px solid var(--accent-gray)',
                    fontSize: 'var(--text-body)',
                    backgroundColor: 'var(--white)'
                  }}
                  placeholder="Your Company"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block mb-2 text-sm font-semibold"
                  style={{ color: 'var(--neutral-gray)' }}
                >
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  className="w-full px-4 py-3 rounded-md transition-all focus:outline-none focus:ring-2 resize-none"
                  style={{
                    border: '1px solid var(--accent-gray)',
                    fontSize: 'var(--text-body)',
                    backgroundColor: 'var(--white)'
                  }}
                  placeholder="Tell us about your PR needs..."
                />
              </div>

              <button
                type="submit"
                className="w-full px-8 py-4 rounded-md text-base font-semibold text-white transition-opacity hover:opacity-90 flex items-center justify-center gap-2"
                style={{
                  backgroundColor: 'var(--blue-primary)',
                  height: 'var(--button-height)',
                }}
              >
                Send Message
                <Send className="w-5 h-5" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
