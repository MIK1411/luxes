import React from 'react';
import { motion } from 'motion/react';
import { Instagram, ArrowRight, Sparkles } from 'lucide-react';
import { TEAM_MEMBERS, Stylist } from '../data';

interface TeamSectionProps {
  onBookStylist: (stylist: Stylist) => void;
}

export const TeamSection: React.FC<TeamSectionProps> = ({ onBookStylist }) => {
  return (
    <section id="team" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Section Header */}
      <div className="text-center max-w-2xl mx-auto mb-14">
        <span className="text-xs uppercase tracking-[0.25em] text-[#C9A96E] font-semibold block mb-2">
          Master Artisans
        </span>
        <h2 className="font-serif text-3xl sm:text-5xl font-normal text-[#2D2D2D] mb-3">
          Meet Your Stylists
        </h2>
        <p className="font-sans text-base sm:text-lg text-[#2D2D2D]/70 font-normal">
          Passionate artists dedicated to personalized luxury, color excellence, and healthy hair.
        </p>
      </div>

      {/* Team Cards: Horizontal scroll on mobile, 3-column grid on desktop */}
      <div className="flex md:grid md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 overflow-x-auto pb-6 md:pb-0 snap-x snap-mandatory no-scrollbar -mx-4 px-4 sm:mx-0 sm:px-0">
        {TEAM_MEMBERS.map((stylist) => (
          <motion.div
            key={stylist.id}
            whileHover={{ y: -6 }}
            className="min-w-[290px] sm:min-w-[340px] md:min-w-0 snap-center bg-white rounded-3xl p-7 border border-[#2D2D2D]/5 shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
          >
            <div>
              {/* Header row with Stylist Portrait Photo & Social Link */}
              <div className="flex items-center justify-between mb-6">
                {/* Photo avatar with gold border and sparkle badge */}
                <div className="relative">
                  <div className="w-20 h-20 rounded-full p-1 bg-gradient-to-tr from-[#C9A96E] to-[#D4A5A5] shadow-md">
                    <img
                      src={stylist.image}
                      alt={stylist.name}
                      className="w-full h-full rounded-full object-cover object-center border-2 border-white"
                    />
                  </div>
                  <span className="absolute -bottom-1 -right-1 w-6 h-6 rounded-full bg-[#C9A96E] border-2 border-white flex items-center justify-center text-white shadow-xs">
                    <Sparkles className="w-3 h-3" />
                  </span>
                </div>

                {/* Social media icon link */}
                <a
                  href={`https://instagram.com`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-full bg-[#FAF7F2] text-[#2D2D2D]/70 hover:text-[#C9A96E] hover:bg-[#F3ECE2] transition-colors"
                  aria-label={`${stylist.name}'s Instagram profile`}
                >
                  <Instagram className="w-4 h-4" />
                </a>
              </div>

              {/* Stylist Name & Title */}
              <h3 className="font-serif text-2xl font-normal text-[#2D2D2D] mb-1">
                {stylist.name}
              </h3>
              <p className="text-xs uppercase tracking-wider text-[#C9A96E] font-semibold mb-4">
                {stylist.role}
              </p>

              {/* Short Bio */}
              <p className="font-sans text-sm text-[#2D2D2D]/75 leading-relaxed mb-6">
                {stylist.bio}
              </p>

              {/* Specialty Tags */}
              <div className="flex flex-wrap gap-1.5 mb-6">
                {stylist.specialties.map((spec) => (
                  <span
                    key={spec}
                    className="text-[11px] px-2.5 py-1 rounded-full bg-[#FAF7F2] text-[#2D2D2D]/80 border border-[#2D2D2D]/10 font-medium"
                  >
                    {spec}
                  </span>
                ))}
              </div>
            </div>

            {/* Book with Stylist Button */}
            <div className="pt-4 border-t border-[#FAF7F2]">
              <button
                type="button"
                onClick={() => onBookStylist(stylist)}
                className="w-full py-3 px-4 rounded-xl bg-[#2D2D2D] hover:bg-[#C9A96E] text-white font-medium text-xs tracking-wider uppercase transition-colors duration-200 flex items-center justify-center gap-2 cursor-pointer shadow-xs"
              >
                <span>Book with {stylist.name.split(' ')[0]}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
