/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ServicesSection } from './components/ServicesSection';
import { GallerySection } from './components/GallerySection';
import { TeamSection } from './components/TeamSection';
import { ReviewsSection } from './components/ReviewsSection';
import { SpecialOfferSection } from './components/SpecialOfferSection';
import { GiftCardsSection } from './components/GiftCardsSection';
import { BookingSection } from './components/BookingSection';
import { FAQSection } from './components/FAQSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { Service, Stylist, SERVICES } from './data';
import { ArrowUp } from 'lucide-react';

export default function App() {
  const [selectedService, setSelectedService] = useState<Service | null>(null);
  const [selectedStylist, setSelectedStylist] = useState<Stylist | null>(null);
  const [activePromoCode, setActivePromoCode] = useState<string>('');
  const [showScrollTop, setShowScrollTop] = useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 600);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleBookNow = () => {
    scrollToSection('booking');
  };

  const handleViewGallery = () => {
    scrollToSection('gallery');
  };

  const handleSelectServiceFromList = (service: Service) => {
    setSelectedService(service);
    scrollToSection('booking');
  };

  const handleSelectStylistFromTeam = (stylist: Stylist) => {
    setSelectedStylist(stylist);
    scrollToSection('booking');
  };

  const handleClaimOffer = (promoCode: string) => {
    setActivePromoCode(promoCode);
    scrollToSection('booking');
  };

  const handleBookLookFromGallery = (lookName: string) => {
    // Match look name to a service if possible
    const match = SERVICES.find((s) =>
      lookName.toLowerCase().includes(s.name.toLowerCase().split(' ')[0]) ||
      s.description.toLowerCase().includes(lookName.toLowerCase().split(' ')[0])
    ) || SERVICES[0];
    setSelectedService(match);
    scrollToSection('booking');
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#FAF7F2] text-[#2D2D2D] selection:bg-[#C9A96E]/20 selection:text-[#2D2D2D] relative">
      {/* 1. Sticky Header & Navigation */}
      <Navbar onOpenBooking={handleBookNow} />

      <main>
        {/* 2. Hero Section */}
        <Hero onBookClick={handleBookNow} onGalleryClick={handleViewGallery} />

        {/* 3. Services & Pricing Section */}
        <ServicesSection onBookService={handleSelectServiceFromList} />

        {/* 4. Before/After Gallery Section */}
        <GallerySection onBookLook={handleBookLookFromGallery} />

        {/* 5. Meet the Team Section */}
        <TeamSection onBookStylist={handleSelectStylistFromTeam} />

        {/* 6. Reviews / Testimonials Section */}
        <ReviewsSection />

        {/* 7. Special Offers / First Visit Section */}
        <SpecialOfferSection onClaimOffer={handleClaimOffer} />

        {/* 8. Gift Cards Section */}
        <GiftCardsSection />

        {/* 9. Booking Section */}
        <BookingSection
          preselectedService={selectedService}
          preselectedStylist={selectedStylist}
          activePromoCode={activePromoCode}
          onClearPreselections={() => {
            setSelectedService(null);
            setSelectedStylist(null);
          }}
        />

        {/* 10. FAQ Section */}
        <FAQSection />

        {/* 11. Contact & Location Section */}
        <ContactSection />
      </main>

      {/* 12. Footer */}
      <Footer />

      {/* Floating Scroll to Top button */}
      {showScrollTop && (
        <button
          type="button"
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 z-40 p-3 rounded-full bg-[#2D2D2D] hover:bg-[#C9A96E] text-white shadow-lg transition-all duration-300 cursor-pointer"
          aria-label="Scroll back to top"
        >
          <ArrowUp className="w-5 h-5" />
        </button>
      )}
    </div>
  );
}
