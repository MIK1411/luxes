import React from 'react';
import { motion } from 'motion/react';
import { Star, ArrowDown, Sparkles, ShieldCheck, Users, MapPin, Award, Scissors } from 'lucide-react';
import { SALON_INFO } from '../data';

interface HeroProps {
  onBookClick: () => void;
  onGalleryClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onBookClick, onGalleryClick }) => {
  return (
    <section
      id="home"
      className="relative min-h-[96vh] flex items-center justify-center pt-28 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden"
    >
      {/* Dynamic Animated Motion Graphics in Background */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Base ambient gradient */}
        <div
          className="absolute inset-0 bg-gradient-to-b from-[#F3ECE2] via-[#FAF7F2] to-[#FAF7F2]"
          aria-hidden="true"
        />

        {/* Floating Animated Geometric Blobs with Motion Graphics */}
        <motion.div
          animate={{
            x: [0, 40, -30, 0],
            y: [0, -50, 20, 0],
            scale: [1, 1.15, 0.95, 1],
            rotate: [0, 90, 180, 0],
          }}
          transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute -top-12 -left-20 w-[550px] h-[550px] rounded-full bg-radial from-[#C9A96E]/20 via-[#D4A5A5]/15 to-transparent blur-3xl"
          aria-hidden="true"
        />

        <motion.div
          animate={{
            x: [0, -50, 30, 0],
            y: [0, 40, -30, 0],
            scale: [1, 1.2, 0.9, 1],
            rotate: [0, -120, -240, 0],
          }}
          transition={{ duration: 22, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute top-1/3 -right-24 w-[600px] h-[600px] rounded-full bg-radial from-[#D4A5A5]/20 via-[#C9A96E]/15 to-transparent blur-3xl"
          aria-hidden="true"
        />

        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.15, 0.35, 0.15],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute bottom-10 left-1/3 w-[500px] h-[500px] rounded-full bg-radial from-[#C9A96E]/15 to-transparent blur-2xl"
          aria-hidden="true"
        />

        {/* Motion Graphics: Floating Floating Golden Rings & Sparkle Orbs */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 35, repeat: Infinity, ease: 'linear' }}
          className="absolute -top-10 right-[15%] w-72 h-72 rounded-full border border-[#C9A96E]/20 border-dashed pointer-events-none"
        />
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 28, repeat: Infinity, ease: 'linear' }}
          className="absolute bottom-16 left-[10%] w-60 h-60 rounded-full border border-[#D4A5A5]/25 border-dotted pointer-events-none"
        />

        {/* Ambient Subtle Texture Grid */}
        <div className="absolute inset-0 opacity-[0.035] bg-[radial-gradient(#2D2D2D_1px,transparent_1px)] [background-size:24px_24px]" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto text-center">
        {/* Subtle top chip with pulse effect */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/85 border border-[#C9A96E]/40 text-[#B89558] text-xs uppercase tracking-widest font-semibold mb-6 shadow-xs backdrop-blur-md"
        >
          <motion.span
            animate={{ rotate: [0, 15, -15, 0] }}
            transition={{ repeat: Infinity, duration: 3, ease: 'easeInOut' }}
          >
            <Sparkles className="w-3.5 h-3.5 text-[#C9A96E]" />
          </motion.span>
          <span>Bespoke Indian Haircraft · Bandra West, Mumbai</span>
        </motion.div>

        {/* Large serif heading */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1, ease: 'easeOut' }}
          className="font-serif text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-normal text-[#2D2D2D] tracking-tight leading-[1.15] mb-6 px-2"
        >
          Where Royal Elegance <br className="hidden sm:inline" />
          <span className="italic font-normal text-[#C9A96E]">Meets Modern Artistry</span>
        </motion.h1>

        {/* Subheading */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2, ease: 'easeOut' }}
          className="font-sans text-base sm:text-xl text-[#2D2D2D]/80 max-w-2xl mx-auto font-normal leading-relaxed mb-8"
        >
          {SALON_INFO.subheading}
        </motion.p>

        {/* Floating Mini Photo Badges (Motion Graphics) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.25 }}
          className="flex items-center justify-center gap-4 sm:gap-6 mb-10 overflow-x-auto py-2 no-scrollbar"
        >
          <div className="flex items-center gap-2.5 px-3.5 py-1.5 rounded-2xl bg-white/90 shadow-sm border border-[#2D2D2D]/10 backdrop-blur-sm">
            <img
              src="https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=120&q=80"
              alt="Salon Styling"
              className="w-8 h-8 rounded-full object-cover border border-[#C9A96E]/50"
            />
            <div className="text-left">
              <span className="text-[11px] font-semibold text-[#2D2D2D] block leading-none">Vidal Sassoon</span>
              <span className="text-[10px] text-[#2D2D2D]/60 leading-none">Trained Stylists</span>
            </div>
          </div>

          <div className="flex items-center gap-2.5 px-3.5 py-1.5 rounded-2xl bg-white/90 shadow-sm border border-[#2D2D2D]/10 backdrop-blur-sm">
            <img
              src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=120&q=80"
              alt="Bridal Couture"
              className="w-8 h-8 rounded-full object-cover border border-[#C9A96E]/50"
            />
            <div className="text-left">
              <span className="text-[11px] font-semibold text-[#2D2D2D] block leading-none">Royal Indian Bridal</span>
              <span className="text-[10px] text-[#2D2D2D]/60 leading-none">350+ Weddings</span>
            </div>
          </div>

          <div className="hidden md:flex items-center gap-2.5 px-3.5 py-1.5 rounded-2xl bg-white/90 shadow-sm border border-[#2D2D2D]/10 backdrop-blur-sm">
            <img
              src="https://images.unsplash.com/photo-1519699047748-de8e457a634e?auto=format&fit=crop&w=120&q=80"
              alt="Balayage Hair"
              className="w-8 h-8 rounded-full object-cover border border-[#C9A96E]/50"
            />
            <div className="text-left">
              <span className="text-[11px] font-semibold text-[#2D2D2D] block leading-none">Caramel Balayage</span>
              <span className="text-[10px] text-[#2D2D2D]/60 leading-none">Zero Brass Lift</span>
            </div>
          </div>
        </motion.div>

        {/* Two CTAs side by side */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3, ease: 'easeOut' }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-5 mb-12"
        >
          <motion.button
            whileHover={{ scale: 1.03, y: -2 }}
            whileTap={{ scale: 0.98 }}
            type="button"
            onClick={onBookClick}
            className="w-full sm:w-auto px-8 py-4 rounded-full bg-[#C9A96E] hover:bg-[#B89558] text-white font-medium text-base tracking-wide shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer flex items-center justify-center gap-2"
          >
            <span>Book Your Chair (From ₹899)</span>
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.03, y: -2 }}
            whileTap={{ scale: 0.98 }}
            type="button"
            onClick={onGalleryClick}
            className="w-full sm:w-auto px-8 py-4 rounded-full bg-white/80 hover:bg-white text-[#2D2D2D] border border-[#2D2D2D]/20 hover:border-[#C9A96E] font-medium text-base tracking-wide transition-all duration-300 cursor-pointer backdrop-blur-xs flex items-center justify-center gap-2"
          >
            <Scissors className="w-4 h-4 text-[#C9A96E]" />
            <span>Explore Transformations</span>
          </motion.button>
        </motion.div>

        {/* Trust bar */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="inline-flex flex-wrap items-center justify-center gap-2 sm:gap-4 px-6 py-3 rounded-full bg-white/70 border border-[#C9A96E]/20 text-xs sm:text-sm text-[#2D2D2D]/85 shadow-xs backdrop-blur-md"
        >
          <span className="flex items-center gap-1 font-semibold text-[#2D2D2D]">
            <span className="text-[#C9A96E]">★</span>
            <span>4.9</span>
            <span className="font-normal text-[#2D2D2D]/60">(480+ Reviews)</span>
          </span>
          <span className="text-[#C9A96E]/40" aria-hidden="true">·</span>
          <span className="flex items-center gap-1.5 font-medium">
            <Award className="w-3.5 h-3.5 text-[#C9A96E]" />
            <span>12+ Years in Bandra West</span>
          </span>
          <span className="text-[#C9A96E]/40" aria-hidden="true">·</span>
          <span className="flex items-center gap-1.5 font-medium">
            <Users className="w-3.5 h-3.5 text-[#C9A96E]" />
            <span>6 Celebrity Hair Artisans</span>
          </span>
        </motion.div>
      </div>

      {/* Gentle scroll indicator with subtle pulse */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-1 text-[#2D2D2D]/40">
        <span className="text-[10px] uppercase tracking-widest">Explore</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
        >
          <ArrowDown className="w-4 h-4 text-[#C9A96E]" />
        </motion.div>
      </div>
    </section>
  );
};

