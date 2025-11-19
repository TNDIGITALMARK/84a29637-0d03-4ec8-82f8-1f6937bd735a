'use client';

import { Navigation } from '@/components/navigation';
import { Footer } from '@/components/footer';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';
import { useState } from 'react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    budget: '',
    timeline: '',
    industry: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));

    setIsSubmitting(false);
    setSubmitSuccess(true);

    // Reset form
    setTimeout(() => {
      setFormData({
        name: '',
        email: '',
        company: '',
        phone: '',
        budget: '',
        timeline: '',
        industry: '',
        message: '',
      });
      setSubmitSuccess(false);
    }, 3000);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <>
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-[var(--navy-primary)] to-[var(--navy-dark)] text-white">
        <div className="max-w-[1400px] mx-auto px-6 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Let's Start Your PR Journey
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto">
            Schedule a consultation with our senior PR specialists and discover how we can transform your brand narrative
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-white">
        <div className="max-w-[1400px] mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className="bg-white border border-gray-200 rounded-2xl p-8 md:p-12 shadow-subtle">
                <h2 className="text-3xl font-bold text-[var(--navy-primary)] mb-2">
                  Request a Consultation
                </h2>
                <p className="text-[var(--gray-medium)] mb-8">
                  Fill out the form below and we'll get back to you within 24 hours
                </p>

                {submitSuccess && (
                  <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg">
                    <p className="text-green-800 font-medium">
                      ✓ Thank you! We'll be in touch within 24 hours.
                    </p>
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-[var(--navy-primary)] mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[var(--gold-accent)] focus:border-transparent transition-all"
                        placeholder="John Doe"
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-[var(--navy-primary)] mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[var(--gold-accent)] focus:border-transparent transition-all"
                        placeholder="john@company.com"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="company" className="block text-sm font-medium text-[var(--navy-primary)] mb-2">
                        Company Name *
                      </label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        required
                        value={formData.company}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[var(--gold-accent)] focus:border-transparent transition-all"
                        placeholder="Acme Corp"
                      />
                    </div>

                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-[var(--navy-primary)] mb-2">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[var(--gold-accent)] focus:border-transparent transition-all"
                        placeholder="+1 (555) 123-4567"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="budget" className="block text-sm font-medium text-[var(--navy-primary)] mb-2">
                        Budget Range
                      </label>
                      <select
                        id="budget"
                        name="budget"
                        value={formData.budget}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[var(--gold-accent)] focus:border-transparent transition-all"
                      >
                        <option value="">Select budget range</option>
                        <option value="10k-25k">$10,000 - $25,000</option>
                        <option value="25k-50k">$25,000 - $50,000</option>
                        <option value="50k-100k">$50,000 - $100,000</option>
                        <option value="100k+">$100,000+</option>
                      </select>
                    </div>

                    <div>
                      <label htmlFor="timeline" className="block text-sm font-medium text-[var(--navy-primary)] mb-2">
                        Project Timeline
                      </label>
                      <select
                        id="timeline"
                        name="timeline"
                        value={formData.timeline}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[var(--gold-accent)] focus:border-transparent transition-all"
                      >
                        <option value="">Select timeline</option>
                        <option value="immediate">Immediate (1-2 weeks)</option>
                        <option value="1-month">Within 1 month</option>
                        <option value="3-months">Within 3 months</option>
                        <option value="flexible">Flexible</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="industry" className="block text-sm font-medium text-[var(--navy-primary)] mb-2">
                      Industry
                    </label>
                    <select
                      id="industry"
                      name="industry"
                      value={formData.industry}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[var(--gold-accent)] focus:border-transparent transition-all"
                    >
                      <option value="">Select your industry</option>
                      <option value="technology">Technology</option>
                      <option value="finance">Finance/FinTech</option>
                      <option value="healthcare">Healthcare</option>
                      <option value="retail">Retail/E-commerce</option>
                      <option value="real-estate">Real Estate</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-[var(--navy-primary)] mb-2">
                      Tell Us About Your Needs *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={6}
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[var(--gold-accent)] focus:border-transparent transition-all resize-none"
                      placeholder="Tell us about your PR goals, challenges, and what you hope to achieve..."
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-[var(--gold-accent)] hover:bg-[var(--gold-hover)] text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
                  >
                    {isSubmitting ? 'Sending...' : 'Schedule Consultation'}
                  </button>

                  <p className="text-sm text-[var(--gray-medium)] text-center">
                    * Required fields. We guarantee a response within 24 hours.
                  </p>
                </form>
              </div>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              <div className="bg-[var(--gray-light)] rounded-2xl p-8">
                <h3 className="text-2xl font-bold text-[var(--navy-primary)] mb-6">
                  Get in Touch
                </h3>

                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 rounded-full bg-[var(--gold-accent)] flex items-center justify-center flex-shrink-0">
                      <Phone size={20} className="text-white" />
                    </div>
                    <div>
                      <p className="font-semibold text-[var(--navy-primary)] mb-1">Phone</p>
                      <p className="text-[var(--gray-medium)]">+1 (555) 123-4567</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 rounded-full bg-[var(--gold-accent)] flex items-center justify-center flex-shrink-0">
                      <Mail size={20} className="text-white" />
                    </div>
                    <div>
                      <p className="font-semibold text-[var(--navy-primary)] mb-1">Email</p>
                      <p className="text-[var(--gray-medium)]">info@only1mediapr.com</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 rounded-full bg-[var(--gold-accent)] flex items-center justify-center flex-shrink-0">
                      <MapPin size={20} className="text-white" />
                    </div>
                    <div>
                      <p className="font-semibold text-[var(--navy-primary)] mb-1">Office</p>
                      <p className="text-[var(--gray-medium)]">
                        123 Madison Avenue
                        <br />
                        New York, NY 10016
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 rounded-full bg-[var(--gold-accent)] flex items-center justify-center flex-shrink-0">
                      <Clock size={20} className="text-white" />
                    </div>
                    <div>
                      <p className="font-semibold text-[var(--navy-primary)] mb-1">Hours</p>
                      <p className="text-[var(--gray-medium)]">
                        Monday - Friday
                        <br />
                        9:00 AM - 6:00 PM EST
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-[var(--navy-primary)] to-[var(--navy-dark)] rounded-2xl p-8 text-white">
                <h3 className="text-xl font-bold mb-4">Direct Access to Senior PR Specialists</h3>
                <p className="text-gray-200 text-sm leading-relaxed mb-6">
                  When you reach out, you'll speak directly with experienced PR professionals who understand your
                  industry and can provide strategic guidance from day one.
                </p>
                <div className="flex items-center space-x-2 text-[var(--gold-accent)]">
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="text-sm font-medium">24-hour response guarantee</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
