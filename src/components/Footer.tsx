import React, { useState } from 'react';
import { Sparkles, Mail, Check, ArrowRight, ShieldCheck, X } from 'lucide-react';
import { SALON_INFO } from '../data';

export const Footer: React.FC = () => {
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);
  const [legalModal, setLegalModal] = useState<'privacy' | 'terms' | null>(null);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (newsletterEmail.trim()) {
      setSubscribed(true);
    }
  };

  const quickLinks = [
    { label: 'Home', href: '#home' },
    { label: 'Services & Pricing', href: '#services' },
    { label: 'Transformations Gallery', href: '#gallery' },
    { label: 'Meet the Team', href: '#team' },
    { label: 'Client Reviews', href: '#reviews' },
    { label: 'Gift Certificates', href: '#gift-cards' },
    { label: 'Book Appointment', href: '#booking' },
    { label: 'FAQ', href: '#faq' },
  ];

  return (
    <footer className="bg-[#242424] text-white/80 pt-16 pb-12 border-t border-[#C9A96E]/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Three Column Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-14 border-b border-white/10">
          {/* Column 1: Brand & Quick Links (5 cols) */}
          <div className="lg:col-span-4">
            <div className="flex items-center gap-2.5 mb-4">
              <span className="w-8 h-8 rounded-full border border-[#C9A96E] flex items-center justify-center text-[#C9A96E]">
                <Sparkles className="w-4 h-4" />
              </span>
              <span className="font-serif text-2xl tracking-wide text-white">
                Luxe Studio
              </span>
            </div>
            <p className="font-sans text-xs sm:text-sm text-white/60 leading-relaxed mb-6 max-w-sm">
              An haute coiffure atelier dedicated to bespoke hair color, precision cuts, Ayurvedic botanical spas, and royal bridal couture in Bandra West, Mumbai.
            </p>

            <span className="text-xs uppercase tracking-widest text-[#C9A96E] font-semibold block mb-3">
              Explore
            </span>
            <div className="grid grid-cols-2 gap-2 text-xs sm:text-sm">
              {quickLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-white/70 hover:text-[#C9A96E] transition-colors py-0.5"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* Column 2: Contact Info Summary (4 cols) */}
          <div className="lg:col-span-4">
            <span className="text-xs uppercase tracking-widest text-[#C9A96E] font-semibold block mb-4">
              Atelier Location & Hours
            </span>
            <div className="space-y-3 text-xs sm:text-sm text-white/70">
              <p className="leading-snug">
                <strong className="text-white block font-serif text-base mb-0.5">Luxe Studio Mumbai</strong>
                {SALON_INFO.address}<br />
                {SALON_INFO.city}
              </p>

              <div className="pt-2">
                <a
                  href={SALON_INFO.phoneRaw}
                  className="text-white hover:text-[#C9A96E] transition-colors block font-semibold"
                >
                  {SALON_INFO.phone}
                </a>
                <a
                  href={`mailto:${SALON_INFO.email}`}
                  className="text-white/70 hover:text-[#C9A96E] transition-colors block mt-0.5"
                >
                  {SALON_INFO.email}
                </a>
              </div>

              <div className="pt-2 text-xs text-white/50">
                <p>Tue–Fri: 10:00 AM – 8:00 PM</p>
                <p>Saturday: 9:30 AM – 8:30 PM</p>
                <p>Sunday: 10:00 AM – 6:00 PM</p>
                <p>Monday: Reserved for master education</p>
              </div>
            </div>
          </div>

          {/* Column 3: Newsletter Signup (4 cols) */}
          <div className="lg:col-span-4">
            <span className="text-xs uppercase tracking-widest text-[#C9A96E] font-semibold block mb-4">
              Join the Insider List
            </span>
            <p className="font-sans text-xs sm:text-sm text-white/70 leading-relaxed mb-4">
              Get exclusive offers and styling tips. Receive seasonal trend forecasts and private booking window alerts.
            </p>

            {!subscribed ? (
              <form onSubmit={handleSubscribe} className="space-y-2">
                <div className="relative">
                  <input
                    type="email"
                    required
                    placeholder="Enter your email"
                    value={newsletterEmail}
                    onChange={(e) => setNewsletterEmail(e.target.value)}
                    className="w-full pl-4 pr-10 py-3 rounded-full bg-white/10 border border-white/20 text-white placeholder-white/40 text-xs focus:outline-none focus:ring-2 focus:ring-[#C9A96E] focus:bg-white/15"
                  />
                  <button
                    type="submit"
                    className="absolute right-1.5 top-1.5 bottom-1.5 px-4 rounded-full bg-[#C9A96E] hover:bg-[#B89558] text-white text-xs font-medium uppercase tracking-wider transition-colors flex items-center justify-center cursor-pointer"
                    aria-label="Subscribe to newsletter"
                  >
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
                <span className="text-[11px] text-white/40 block">
                  We respect your inbox. Unsubscribe at any time.
                </span>
              </form>
            ) : (
              <div className="p-4 rounded-2xl bg-white/10 border border-[#C9A96E]/40 text-xs text-white flex items-center gap-3">
                <span className="w-7 h-7 rounded-full bg-emerald-700 text-white flex items-center justify-center shrink-0">
                  <Check className="w-4 h-4" />
                </span>
                <span>Thank you for subscribing! Your welcome guide is on its way.</span>
              </div>
            )}
          </div>
        </div>

        {/* Bottom Bar: Copyright & Small Links */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-white/50 gap-4">
          <p>© 2026 Luxe Studio. All rights reserved.</p>

          <div className="flex items-center space-x-6">
            <button
              type="button"
              onClick={() => setLegalModal('privacy')}
              className="hover:text-white transition-colors cursor-pointer"
            >
              Privacy Policy
            </button>
            <button
              type="button"
              onClick={() => setLegalModal('terms')}
              className="hover:text-white transition-colors cursor-pointer"
            >
              Terms of Service
            </button>
          </div>
        </div>
      </div>

      {/* Legal Dialog / Modal */}
      {legalModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-xs text-[#2D2D2D]">
          <div className="relative w-full max-w-lg bg-[#FAF7F2] rounded-3xl p-6 sm:p-8 shadow-2xl border border-[#C9A96E]/30 max-h-[80vh] overflow-y-auto">
            <button
              type="button"
              onClick={() => setLegalModal(null)}
              className="absolute top-5 right-5 p-2 rounded-full text-[#2D2D2D]/60 hover:text-[#2D2D2D] hover:bg-[#2D2D2D]/5 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            <h3 className="font-serif text-2xl text-[#2D2D2D] mb-4">
              {legalModal === 'privacy' ? 'Privacy Policy' : 'Terms of Service'}
            </h3>

            <div className="text-xs sm:text-sm text-[#2D2D2D]/80 space-y-3 leading-relaxed">
              {legalModal === 'privacy' ? (
                <>
                  <p>
                    At Luxe Studio, your privacy and peace of mind are paramount. We collect personal details strictly to confirm bookings, provide bespoke hair color records, and communicate appointment notifications.
                  </p>
                  <p>
                    We never sell, rent, or distribute guest data to third-party marketing entities. Payment transactions conducted in-studio are processed through PCI-compliant encrypted terminals.
                  </p>
                  <p>
                    If you wish to update or delete your profile history at any time, please notify our front desk at hello@luxestudio.com.
                  </p>
                </>
              ) : (
                <>
                  <p>
                    By reserving an appointment at Luxe Studio, you acknowledge our 48-hour cancellation policy. Cancellations made with less than 24 hours notice may incur a 50% reservation fee.
                  </p>
                  <p>
                    We strive for 100% satisfaction. If adjustments are required after your service, please notify us within 7 days for a complimentary refinement with your stylist.
                  </p>
                  <p>
                    Gift certificates and promotional offers are non-transferable for cash value.
                  </p>
                </>
              )}
            </div>

            <div className="mt-6 pt-4 border-t border-[#2D2D2D]/10 text-right">
              <button
                type="button"
                onClick={() => setLegalModal(null)}
                className="px-6 py-2 rounded-full bg-[#2D2D2D] text-white text-xs font-semibold uppercase tracking-wider hover:bg-[#C9A96E] transition-colors"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </footer>
  );
};
