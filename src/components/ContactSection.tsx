import React from 'react';
import { motion } from 'motion/react';
import { MapPin, Phone, Mail, Clock, ExternalLink, Navigation } from 'lucide-react';
import { SALON_INFO } from '../data';

export const ContactSection: React.FC = () => {
  const socialLinks = [
    {
      name: 'Instagram',
      href: 'https://instagram.com',
      icon: (
        <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
        </svg>
      ),
    },
    {
      name: 'Facebook',
      href: 'https://facebook.com',
      icon: (
        <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
          <path d="M9 8H6v4h3v12h5V12h3.642L18 8h-4V6.333C14 5.374 14.5 5 15.667 5H18V0h-3.808C10.592 0 9 1.583 9 4.615V8z"/>
        </svg>
      ),
    },
    {
      name: 'TikTok',
      href: 'https://tiktok.com',
      icon: (
        <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
          <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 3 15.73a6.34 6.34 0 0 0 6.35 6.34 6.33 6.33 0 0 0 6.35-6.34V8.71a8.21 8.21 0 0 0 4.89 1.6v-3.62h-1z"/>
        </svg>
      ),
    },
    {
      name: 'Pinterest',
      href: 'https://pinterest.com',
      icon: (
        <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
          <path d="M12 0a12 12 0 0 0-4.37 23.18c-.03-.9-.05-2.29.05-3.28.09-.94.61-5.06.61-5.06s-.16-.31-.16-.77c0-.72.42-1.26.94-1.26.44 0 .66.33.66.73 0 .45-.28 1.11-.43 1.73-.12.52.26.94.77.94 1.25 0 2.22-1.32 2.22-3.22 0-1.68-1.21-2.86-2.93-2.86-2.14 0-3.39 1.6-3.39 3.26 0 .64.25 1.33.56 1.71.06.07.07.14.05.21-.05.23-.18.73-.2 0.83-.03.14-.11.17-.25.1-1-.46-1.62-1.92-1.62-3.09 0-2.52 1.83-4.83 5.28-4.83 2.77 0 4.93 1.98 4.93 4.62 0 2.76-1.74 4.97-4.15 4.97-.81 0-1.57-.42-1.83-.92l-.5 1.9c-.18.69-.67 1.56-1 2.09A11.99 11.99 0 0 0 12 24c6.63 0 12-5.37 12-12S18.63 0 12 0z"/>
        </svg>
      ),
    },
  ];

  return (
    <section id="contact" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Header */}
      <div className="text-center max-w-2xl mx-auto mb-16">
        <span className="text-xs uppercase tracking-[0.25em] text-[#C9A96E] font-semibold block mb-2">
          Visit Our Sanctuary
        </span>
        <h2 className="font-serif text-3xl sm:text-5xl font-normal text-[#2D2D2D] mb-3">
          Contact & Location
        </h2>
        <p className="font-sans text-base sm:text-lg text-[#2D2D2D]/70 font-normal">
          We welcome you to experience effortless luxury in our Bandra West flagship salon, Mumbai.
        </p>
      </div>

      {/* Two Column Layout (Stacked on mobile) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
        {/* Left Column: Contact Info & Hours */}
        <div className="lg:col-span-6 bg-white rounded-3xl p-8 sm:p-10 border border-[#2D2D2D]/10 shadow-sm flex flex-col justify-between">
          <div>
            <h3 className="font-serif text-2xl font-normal text-[#2D2D2D] mb-6">
              Studio Details
            </h3>

            {/* Address */}
            <div className="flex items-start gap-4 mb-6">
              <div className="w-10 h-10 rounded-full bg-[#FAF7F2] text-[#C9A96E] flex items-center justify-center shrink-0 border border-[#C9A96E]/20">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <span className="text-xs uppercase tracking-wider text-[#2D2D2D]/50 font-semibold block mb-1">
                  Location
                </span>
                <p className="text-sm sm:text-base text-[#2D2D2D] font-medium leading-snug">
                  {SALON_INFO.address}
                </p>
                <p className="text-xs text-[#2D2D2D]/60 mt-0.5">
                  Complimentary 3-hour valet parking at entrance
                </p>
              </div>
            </div>

            {/* Phone (styled as tap-to-call link) */}
            <div className="flex items-start gap-4 mb-6">
              <div className="w-10 h-10 rounded-full bg-[#FAF7F2] text-[#C9A96E] flex items-center justify-center shrink-0 border border-[#C9A96E]/20">
                <Phone className="w-5 h-5" />
              </div>
              <div>
                <span className="text-xs uppercase tracking-wider text-[#2D2D2D]/50 font-semibold block mb-1">
                  Concierge Desk (Tap to Call)
                </span>
                <a
                  href={SALON_INFO.phoneRaw}
                  className="text-base sm:text-lg text-[#2D2D2D] font-semibold hover:text-[#C9A96E] transition-colors inline-block"
                >
                  {SALON_INFO.phone}
                </a>
                <p className="text-xs text-[#2D2D2D]/60 mt-0.5">
                  SMS reservations & queries supported
                </p>
              </div>
            </div>

            {/* Email */}
            <div className="flex items-start gap-4 mb-8">
              <div className="w-10 h-10 rounded-full bg-[#FAF7F2] text-[#C9A96E] flex items-center justify-center shrink-0 border border-[#C9A96E]/20">
                <Mail className="w-5 h-5" />
              </div>
              <div>
                <span className="text-xs uppercase tracking-wider text-[#2D2D2D]/50 font-semibold block mb-1">
                  Direct Inquiries
                </span>
                <a
                  href={`mailto:${SALON_INFO.email}`}
                  className="text-sm sm:text-base text-[#2D2D2D] hover:text-[#C9A96E] transition-colors font-medium"
                >
                  {SALON_INFO.email}
                </a>
              </div>
            </div>

            {/* Hours of Operation for each day of the week */}
            <div className="pt-6 border-t border-[#2D2D2D]/10">
              <div className="flex items-center gap-2 mb-4">
                <Clock className="w-4 h-4 text-[#C9A96E]" />
                <h4 className="font-serif text-lg font-normal text-[#2D2D2D]">
                  Hours of Operation
                </h4>
              </div>

              <div className="space-y-2 text-xs sm:text-sm">
                {SALON_INFO.hours.map((item) => {
                  const isClosed = item.hours.includes('Closed');
                  return (
                    <div
                      key={item.day}
                      className="flex items-center justify-between py-1 border-b border-[#FAF7F2] last:border-0"
                    >
                      <span className="text-[#2D2D2D]/75 font-medium">{item.day}</span>
                      <span
                        className={
                          isClosed
                            ? 'text-amber-800/80 font-medium'
                            : 'text-[#2D2D2D] font-semibold'
                        }
                      >
                        {item.hours}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Social media links row with hover animations */}
          <div className="pt-8 border-t border-[#2D2D2D]/10 mt-6">
            <span className="text-xs uppercase tracking-widest text-[#2D2D2D]/50 font-semibold block mb-3">
              Follow Our Atelier
            </span>
            <div className="flex items-center gap-3">
              {socialLinks.map((s) => (
                <motion.a
                  key={s.name}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -3, scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-10 h-10 rounded-full bg-[#FAF7F2] hover:bg-[#C9A96E] text-[#2D2D2D] hover:text-white flex items-center justify-center transition-colors duration-200 border border-[#2D2D2D]/10 shadow-2xs"
                  aria-label={s.name}
                >
                  {s.icon}
                </motion.a>
              ))}
            </div>
          </div>
        </div>

        {/* Right Column: Embedded Google Maps / Mumbai Landmark Placeholder */}
        <div className="lg:col-span-6 min-h-[420px] rounded-3xl overflow-hidden border border-[#2D2D2D]/10 shadow-sm relative flex flex-col justify-between p-8 bg-[#EFECE6]">
          {/* Stylized Map Canvas Background */}
          <div className="absolute inset-0 pointer-events-none opacity-40">
            {/* Grid streets simulation */}
            <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <pattern id="map-pattern" width="80" height="80" patternUnits="userSpaceOnUse">
                  <path d="M 80 0 L 0 0 0 80" fill="none" stroke="#D1C7B7" strokeWidth="2"/>
                  <path d="M 0 40 L 80 40" fill="none" stroke="#E5DEC9" strokeWidth="6"/>
                  <path d="M 40 0 L 40 80" fill="none" stroke="#E5DEC9" strokeWidth="6"/>
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="#EFECE6"/>
              <rect width="100%" height="100%" fill="url(#map-pattern)"/>
              {/* Arabian Sea coastline contour simulation */}
              <path d="M -20 180 Q 150 120 400 240 T 800 210" fill="none" stroke="#D9E2D8" strokeWidth="35" opacity="0.6"/>
            </svg>
          </div>

          {/* Top Map Card Controls */}
          <div className="relative z-10 flex items-center justify-between">
            <span className="px-3.5 py-1.5 rounded-full bg-white/90 backdrop-blur-xs text-[#2D2D2D] text-xs font-semibold uppercase tracking-wider shadow-xs flex items-center gap-1.5 border border-[#2D2D2D]/10">
              <Navigation className="w-3.5 h-3.5 text-[#C9A96E]" />
              <span>Bandra West · Mumbai Coastal</span>
            </span>

            <span className="px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-[11px] font-semibold">
              Open Today
            </span>
          </div>

          {/* Center Map Pin Graphic */}
          <div className="relative z-10 my-auto text-center py-10">
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ repeat: Infinity, duration: 2.5, ease: 'easeInOut' }}
              className="inline-flex flex-col items-center"
            >
              <div className="w-14 h-14 rounded-full bg-[#C9A96E] text-white shadow-xl flex items-center justify-center border-4 border-white">
                <MapPin className="w-7 h-7" />
              </div>
              <div className="w-4 h-1.5 bg-black/20 rounded-full blur-2xs mt-1" />
            </motion.div>

            <div className="mt-3 inline-block bg-white/95 backdrop-blur-xs px-5 py-2.5 rounded-2xl shadow-lg border border-[#C9A96E]/30">
              <h4 className="font-serif text-lg font-medium text-[#2D2D2D]">
                Luxe Studio Mumbai
              </h4>
              <p className="text-xs text-[#2D2D2D]/70 font-sans">
                Waterfield Road, Bandra West
              </p>
            </div>
          </div>

          {/* Bottom Action Bar */}
          <div className="relative z-10 bg-white/95 backdrop-blur-xs rounded-2xl p-4 shadow-md border border-[#2D2D2D]/10 flex flex-col sm:flex-row items-center justify-between gap-3">
            <div className="text-left">
              <p className="text-xs font-semibold text-[#2D2D2D]">Plan Your Arrival</p>
              <p className="text-[11px] text-[#2D2D2D]/60">Opp. Olive Bar & Kitchen, Bandra</p>
            </div>

            <div className="flex items-center gap-2 w-full sm:w-auto">
              <a
                href={SALON_INFO.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-4 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-semibold uppercase tracking-wider transition-colors inline-flex items-center justify-center gap-1.5"
              >
                <span>WhatsApp</span>
              </a>
              <a
                href="https://maps.google.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-4 py-2 rounded-xl bg-[#2D2D2D] hover:bg-[#C9A96E] text-white text-xs font-semibold uppercase tracking-wider transition-colors inline-flex items-center justify-center gap-1.5"
              >
                <span>Directions</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
