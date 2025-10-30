"use client";

import { useState } from "react";

export default function Home() {
  const [formData, setFormData] = useState({
    name: "",
    organization: "",
    email: "",
    tier: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // TODO: Add form submission logic
    alert("Thank you for your interest! We'll be in touch soon.");
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-holiday-green to-emerald-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Bringing 80 Current and Former Foster Youth Together This Holiday
              Season 🎄
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-green-50">
              Join us for a magical virtual Gingerbread House Contest on
              December 19th at 3PM PST, where community members will build,
              decorate, and celebrate together.
            </p>
            <a
              href="#sponsor"
              className="inline-block bg-white text-holiday-green px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition-colors"
            >
              Become a Sponsor
            </a>
          </div>
        </div>
      </section>

      {/* Value Proposition */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-6xl mb-4">🏠</div>
              <h3 className="text-2xl font-bold mb-3">
                Complete Gingerbread Kit
              </h3>
              <p className="text-gray-600">
                Pre-assembled gingerbread house with icing, candies, and
                decorations delivered right to their door.
              </p>
            </div>
            <div className="text-center">
              <div className="text-6xl mb-4">🎁</div>
              <h3 className="text-2xl font-bold mb-3">Bonus Gift Card</h3>
              <p className="text-gray-600">
                Additional gift card to purchase extra decorations and supplies
                to make their creation unique.
              </p>
            </div>
            <div className="text-center">
              <div className="text-6xl mb-4">🎉</div>
              <h3 className="text-2xl font-bold mb-3">Live Virtual Event</h3>
              <p className="text-gray-600">
                Join the community at 3PM PST for a guided building session,
                with prizes for the most creative designs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Stories */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-12">
            See Our Impact in Action 📸
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow">
              <div className="aspect-video bg-gradient-to-br from-blue-400 to-purple-500 flex items-center justify-center">
                <span className="text-white text-xl font-semibold">
                  Video Placeholder
                </span>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-2">
                  Creating Holiday Magic
                </h3>
                <p className="text-gray-600">
                  Watch how our community comes together to celebrate the
                  holidays and create lasting memories through creative
                  activities and genuine connection.
                </p>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-xl transition-shadow">
              <div className="mb-4">
                <span className="text-4xl">💬</span>
              </div>
              <h3 className="text-2xl font-bold mb-3">Community Member</h3>
              <p className="text-gray-700 italic mb-4">
                &quot;Events like these remind me that I'm not alone. The
                gingerbread house contest brought so much joy to my December,
                and connecting with others who understand my journey made it
                even more special.&quot;
              </p>
              <p className="text-sm text-gray-500">
                — Former foster youth, Age 24
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Sponsorship Tiers */}
      <section id="sponsor" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-4">
            Holiday Sponsorship Opportunities 🎁
          </h2>
          <p className="text-xl text-center text-gray-600 mb-12 max-w-3xl mx-auto">
            Your support makes magical moments possible. Choose a sponsorship
            level that aligns with your organization's values.
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            {/* Tier 1 */}
            <div className="bg-white border-2 border-holiday-red rounded-lg p-8 hover:shadow-xl transition-shadow">
              <div className="text-center mb-6">
                <div className="text-4xl mb-3">🎄</div>
                <h3 className="text-2xl font-bold text-holiday-red mb-2">
                  Holiday Helper
                </h3>
                <div className="text-4xl font-bold mb-4">$2,500</div>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start">
                  <span className="text-holiday-green mr-2">✦</span>
                  <span>Sponsor 10 gingerbread house kits</span>
                </li>
                <li className="flex items-start">
                  <span className="text-holiday-green mr-2">✦</span>
                  <span>Logo on event materials</span>
                </li>
                <li className="flex items-start">
                  <span className="text-holiday-green mr-2">✦</span>
                  <span>Social media recognition</span>
                </li>
                <li className="flex items-start">
                  <span className="text-holiday-green mr-2">✦</span>
                  <span>Impact report after event</span>
                </li>
              </ul>
            </div>

            {/* Tier 2 */}
            <div className="bg-gradient-to-br from-holiday-green to-emerald-600 text-white rounded-lg p-8 shadow-xl transform scale-105">
              <div className="text-center mb-6">
                <div className="text-4xl mb-3">⭐</div>
                <h3 className="text-2xl font-bold mb-2">
                  Winter Wonderland Champion
                </h3>
                <div className="text-4xl font-bold mb-4">$5,000</div>
                <div className="inline-block bg-white/20 px-3 py-1 rounded-full text-sm font-semibold">
                  MOST POPULAR
                </div>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start">
                  <span className="text-holiday-gold mr-2">✦</span>
                  <span>Sponsor 20 gingerbread house kits</span>
                </li>
                <li className="flex items-start">
                  <span className="text-holiday-gold mr-2">✦</span>
                  <span>Premium logo placement</span>
                </li>
                <li className="flex items-start">
                  <span className="text-holiday-gold mr-2">✦</span>
                  <span>Speaking opportunity at event</span>
                </li>
                <li className="flex items-start">
                  <span className="text-holiday-gold mr-2">✦</span>
                  <span>Featured in press releases</span>
                </li>
                <li className="flex items-start">
                  <span className="text-holiday-gold mr-2">✦</span>
                  <span>Exclusive behind-the-scenes content</span>
                </li>
              </ul>
            </div>

            {/* Tier 3 */}
            <div className="bg-white border-2 border-holiday-gold rounded-lg p-8 hover:shadow-xl transition-shadow">
              <div className="text-center mb-6">
                <div className="text-4xl mb-3">✨</div>
                <h3 className="text-2xl font-bold text-holiday-gold mb-2">
                  Season&apos;s Star
                </h3>
                <div className="text-4xl font-bold mb-4">$10,000+</div>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start">
                  <span className="text-holiday-green mr-2">✦</span>
                  <span>Sponsor 40+ gingerbread house kits</span>
                </li>
                <li className="flex items-start">
                  <span className="text-holiday-green mr-2">✦</span>
                  <span>Title sponsor recognition</span>
                </li>
                <li className="flex items-start">
                  <span className="text-holiday-green mr-2">✦</span>
                  <span>Co-host event with Foster Greatness</span>
                </li>
                <li className="flex items-start">
                  <span className="text-holiday-green mr-2">✦</span>
                  <span>Custom partnership package</span>
                </li>
                <li className="flex items-start">
                  <span className="text-holiday-green mr-2">✦</span>
                  <span>Year-round partnership opportunities</span>
                </li>
                <li className="flex items-start">
                  <span className="text-holiday-green mr-2">✦</span>
                  <span>Executive briefing with leadership</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Dual Impact */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-12">
            The Dual Impact of Your Sponsorship
          </h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <div className="text-5xl mb-4">❤️</div>
              <h3 className="text-2xl font-bold mb-4">Community Impact</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="text-holiday-green mr-2 font-bold">✓</span>
                  <span>
                    Foster meaningful connections during the holiday season
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-holiday-green mr-2 font-bold">✓</span>
                  <span>
                    Combat isolation experienced by many foster youth
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-holiday-green mr-2 font-bold">✓</span>
                  <span>
                    Create joyful memories and holiday traditions
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-holiday-green mr-2 font-bold">✓</span>
                  <span>
                    Build confidence through creative expression
                  </span>
                </li>
              </ul>
            </div>
            <div>
              <div className="text-5xl mb-4">✨</div>
              <h3 className="text-2xl font-bold mb-4">Your Organization</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="text-holiday-green mr-2 font-bold">✓</span>
                  <span>
                    Demonstrate authentic commitment to social impact
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-holiday-green mr-2 font-bold">✓</span>
                  <span>Engage employees in meaningful giving</span>
                </li>
                <li className="flex items-start">
                  <span className="text-holiday-green mr-2 font-bold">✓</span>
                  <span>Build brand awareness with purpose</span>
                </li>
                <li className="flex items-start">
                  <span className="text-holiday-green mr-2 font-bold">✓</span>
                  <span>
                    Create positive PR and thought leadership opportunities
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-4">
            Become a Sponsor Today
          </h2>
          <p className="text-xl text-center text-gray-600 mb-12">
            Fill out the form below and we'll be in touch within 24 hours to
            discuss your sponsorship.
          </p>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Your Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-holiday-green focus:border-transparent"
                />
              </div>
              <div>
                <label
                  htmlFor="organization"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Organization *
                </label>
                <input
                  type="text"
                  id="organization"
                  name="organization"
                  required
                  value={formData.organization}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-holiday-green focus:border-transparent"
                />
              </div>
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700 mb-2"
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
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-holiday-green focus:border-transparent"
              />
            </div>
            <div>
              <label
                htmlFor="tier"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Sponsorship Tier *
              </label>
              <select
                id="tier"
                name="tier"
                required
                value={formData.tier}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-holiday-green focus:border-transparent"
              >
                <option value="">Select a tier...</option>
                <option value="helper">Holiday Helper ($2,500)</option>
                <option value="champion">
                  Winter Wonderland Champion ($5,000)
                </option>
                <option value="star">Season&apos;s Star ($10,000+)</option>
                <option value="custom">Custom Amount</option>
              </select>
            </div>
            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Additional Information (Optional)
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                value={formData.message}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-holiday-green focus:border-transparent"
                placeholder="Tell us more about your organization or any questions you have..."
              />
            </div>
            <button
              type="submit"
              className="w-full bg-holiday-red text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-red-700 transition-colors"
            >
              Submit Sponsorship Inquiry
            </button>
          </form>
        </div>
      </section>
    </main>
  );
}
