import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Sparkles, Phone, Clock, Calendar } from 'lucide-react';
import { SALON_INFO } from '../data';

interface NavbarProps {
  onOpenBooking: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenBooking }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'Services', href: '#services' },
    { label: 'Gallery', href: '#gallery' },
    { label: 'Team', href: '#team' },
    { label: 'Reviews', href: '#reviews' },
    { label: 'Contact', href: '#contact' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#FAF7F2]/90 backdrop-blur-md shadow-xs border-b border-[#C9A96E]/20 py-3.5'
            : 'bg-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Salon Logo */}
            <a
              href="#home"
              onClick={(e) => handleNavClick(e, '#home')}
              className="group flex items-center gap-2.5 text-left focus:outline-none"
              aria-label="Luxe Studio Home"
            >
              <span className="w-8 h-8 rounded-full border border-[#C9A96E] flex items-center justify-center text-[#C9A96E] group-hover:bg-[#C9A96E] group-hover:text-white transition-colors duration-300">
                <Sparkles className="w-4 h-4" />
              </span>
              <div className="flex flex-col">
                <span className="font-serif text-2xl tracking-wide font-normal text-[#2D2D2D] leading-none">
                  Luxe Studio
                </span>
                <span className="text-[10px] uppercase tracking-[0.25em] text-[#C9A96E] font-medium mt-1">
                  Atelier & Salon
                </span>
              </div>
            </a>

            {/* Desktop Navigation Links */}
            <nav className="hidden md:flex items-center space-x-8 text-sm font-medium tracking-wide">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="text-[#2D2D2D]/80 hover:text-[#C9A96E] transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1.5px] after:bg-[#C9A96E] hover:after:w-full after:transition-all after:duration-300"
                >
                  {link.label}
                </a>
              ))}
            </nav>

            {/* Desktop Action & Mobile Toggle */}
            <div className="flex items-center gap-4">
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                onClick={onOpenBooking}
                className="hidden sm:inline-flex items-center justify-center px-6 py-2.5 rounded-full bg-[#C9A96E] hover:bg-[#B89558] text-white text-sm font-medium tracking-wide shadow-sm hover:shadow-md transition-all duration-200 cursor-pointer"
              >
                Book Now
              </motion.button>

              {/* Mobile Hamburger Button */}
              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="md:hidden p-2 rounded-lg text-[#2D2D2D] hover:text-[#C9A96E] focus:outline-none focus:ring-2 focus:ring-[#C9A96E]/50"
                aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Full-Screen Overlay Nav */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-40 bg-[#FAF7F2] flex flex-col justify-between pt-24 pb-8 px-6 md:hidden overflow-y-auto"
          >
            <div className="flex flex-col space-y-6">
              <div className="pb-4 border-b border-[#C9A96E]/20">
                <span className="text-xs uppercase tracking-widest text-[#C9A96E] font-semibold">
                  Navigation
                </span>
              </div>
              {navLinks.map((link, idx) => (
                <motion.a
                  initial={{ opacity: 0, x: -15 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.05 }}
                  key={link.label}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="font-serif text-2xl text-[#2D2D2D] hover:text-[#C9A96E] transition-colors py-1 flex items-center justify-between"
                >
                  <span>{link.label}</span>
                  <span className="text-xs font-sans text-[#C9A96E]">0{idx + 1}</span>
                </motion.a>
              ))}

              <div className="pt-4">
                <button
                  type="button"
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenBooking();
                  }}
                  className="w-full py-3.5 px-6 rounded-full bg-[#C9A96E] hover:bg-[#B89558] text-white font-medium text-base tracking-wide shadow-md flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Calendar className="w-4 h-4" />
                  Book Your Appointment
                </button>
              </div>
            </div>

            {/* Mobile Footer Info */}
            <div className="pt-8 border-t border-[#C9A96E]/20 text-sm text-[#2D2D2D]/70 space-y-2">
              <a
                href={SALON_INFO.phoneRaw}
                className="flex items-center gap-2 text-[#2D2D2D] hover:text-[#C9A96E] font-medium"
              >
                <Phone className="w-4 h-4 text-[#C9A96E]" />
                {SALON_INFO.phone}
              </a>
              <div className="flex items-center gap-2 text-xs text-[#2D2D2D]/60">
                <Clock className="w-4 h-4 text-[#C9A96E]" />
                Tue–Fri: 10am–8pm · Sat: 9:30am–8:30pm · Sun: 10am–6pm
              </div>
              <p className="text-xs text-[#2D2D2D]/50 pt-2">
                Waterfield Road, Bandra West, Mumbai · Valet parking available
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
