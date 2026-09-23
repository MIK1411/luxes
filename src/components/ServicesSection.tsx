import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Clock, Sparkles, Scissors, Palette, Sparkle, HeartHandshake, Crown, ArrowRight } from 'lucide-react';
import { SERVICES, Service } from '../data';

interface ServicesSectionProps {
  onBookService: (service: Service) => void;
}

const CATEGORIES = [
  'All',
  'Cuts & Styling',
  'Color',
  'Treatments',
  'Extensions',
  'Bridal',
] as const;

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onBookService }) => {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [hoveredCardId, setHoveredCardId] = useState<string | null>(null);

  const filteredServices = activeCategory === 'All'
    ? SERVICES
    : SERVICES.filter((s) => s.category === activeCategory);

  const getCategoryIcon = (category: string, className = "w-4 h-4") => {
    switch (category) {
      case 'Cuts & Styling':
        return <Scissors className={`${className} text-[#C9A96E]`} />;
      case 'Color':
        return <Palette className={`${className} text-[#D4A5A5]`} />;
      case 'Treatments':
        return <Sparkles className={`${className} text-[#C9A96E]`} />;
      case 'Extensions':
        return <HeartHandshake className={`${className} text-[#D4A5A5]`} />;
      case 'Bridal':
        return <Crown className={`${className} text-[#C9A96E]`} />;
      default:
        return <Sparkle className={`${className} text-[#C9A96E]`} />;
    }
  };

  return (
    <section id="services" className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 lg:px-8 w-full max-w-7xl mx-auto">
      {/* Section Header */}
      <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-14">
        <span className="text-xs uppercase tracking-[0.25em] text-[#C9A96E] font-semibold block mb-2">
          Curated Haircraft
        </span>
        <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-normal text-[#2D2D2D] mb-3">
          Our Services
        </h2>
        <p className="font-sans text-sm sm:text-base md:text-lg text-[#2D2D2D]/70 font-normal">
          Transparent pricing. No surprises.
        </p>
      </div>

      {/* Filter Tabs */}
      <div className="flex items-center justify-start sm:justify-center overflow-x-auto pb-4 mb-8 sm:mb-12 no-scrollbar gap-2 sm:gap-3 w-full px-1">
        {CATEGORIES.map((cat) => {
          const isActive = activeCategory === cat;
          return (
            <motion.button
              key={cat}
              type="button"
              whileHover={{ scale: 1.04, y: -1 }}
              whileTap={{ scale: 0.97 }}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 sm:px-5 py-2.5 rounded-full text-xs sm:text-sm font-medium transition-all duration-200 whitespace-nowrap cursor-pointer flex items-center gap-2 ${
                isActive
                  ? 'bg-[#C9A96E] text-white shadow-md'
                  : 'bg-white/80 text-[#2D2D2D]/75 hover:bg-white hover:text-[#2D2D2D] border border-[#2D2D2D]/10'
              }`}
            >
              {cat !== 'All' && (
                <motion.span
                  animate={isActive ? { rotate: [0, -10, 10, 0] } : {}}
                  transition={{ duration: 0.4 }}
                  whileHover={{ rotate: 15, scale: 1.15 }}
                  className="shrink-0"
                >
                  {getCategoryIcon(cat, "w-3.5 h-3.5")}
                </motion.span>
              )}
              <span>{cat}</span>
            </motion.button>
          );
        })}
      </div>

      {/* Services Grid (Responsive: 1 col on mobile, 2 on tablet, 3 on desktop) */}
      <motion.div
        layout
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 lg:gap-8 w-full"
      >
        <AnimatePresence mode="popLayout">
          {filteredServices.map((service) => {
            const isHovered = hoveredCardId === service.id;
            return (
              <motion.div
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.35, ease: 'easeOut' }}
                key={service.id}
                onMouseEnter={() => setHoveredCardId(service.id)}
                onMouseLeave={() => setHoveredCardId(null)}
                className="group relative bg-white rounded-3xl border border-[#2D2D2D]/10 shadow-xs hover:shadow-2xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between overflow-hidden w-full"
              >
                {/* Image banner with zoom motion graphic */}
                <div className="relative h-44 sm:h-48 md:h-52 w-full overflow-hidden bg-[#EFECE6]">
                  <img
                    src={service.image}
                    alt={service.name}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-transparent to-black/15 pointer-events-none" />

                  {/* Category Pill Tag with Animated Pulsing/Floating Icon */}
                  <div className="absolute top-3 left-3 z-10">
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      className="inline-flex items-center gap-2 text-[11px] font-semibold text-white bg-black/50 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/20 uppercase tracking-wider shadow-sm cursor-default"
                    >
                      {/* Subtle Framer Motion entrance and pulse/float animation */}
                      <motion.span
                        initial={{ scale: 0, rotate: -30, opacity: 0 }}
                        animate={{
                          scale: 1,
                          rotate: 0,
                          opacity: 1,
                          y: isHovered ? [0, -3.5, 0] : [0, -1.5, 0],
                        }}
                        transition={{
                          scale: { type: 'spring', stiffness: 400, damping: 22 },
                          rotate: { type: 'spring', stiffness: 350, damping: 20 },
                          opacity: { duration: 0.25 },
                          y: {
                            repeat: Infinity,
                            duration: isHovered ? 1.2 : 2.8,
                            ease: 'easeInOut',
                          },
                        }}
                        whileHover={{
                          scale: 1.35,
                          rotate: [0, -15, 15, 0],
                          transition: { duration: 0.3 },
                        }}
                        className="inline-flex items-center justify-center shrink-0 drop-shadow-sm"
                      >
                        {getCategoryIcon(service.category, "w-3.5 h-3.5")}
                      </motion.span>
                      <span className="leading-none">{service.category}</span>
                    </motion.div>
                  </div>

                  {service.popular && (
                    <div className="absolute top-3 right-3 z-10">
                      <motion.span
                        animate={isHovered ? { scale: [1, 1.05, 1] } : {}}
                        transition={{ duration: 1.5, repeat: Infinity }}
                        className="text-[11px] font-bold text-white bg-[#C9A96E] px-3 py-1.5 rounded-full shadow-md uppercase tracking-wider flex items-center gap-1.5"
                      >
                        <motion.span
                          animate={{ rotate: isHovered ? [0, 20, -20, 0] : [0, 10, 0] }}
                          transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
                        >
                          <Sparkles className="w-3 h-3 text-white" />
                        </motion.span>
                        <span>Favorite</span>
                      </motion.span>
                    </div>
                  )}

                  {/* Price display directly on image corner */}
                  <div className="absolute bottom-3 left-3 text-white z-10">
                    <span className="text-xl sm:text-2xl font-bold font-serif tracking-tight drop-shadow-md">
                      {service.price}
                    </span>
                  </div>

                  <div className="absolute bottom-3 right-3 text-white/95 text-xs font-medium flex items-center gap-1.5 bg-black/45 backdrop-blur-xs px-2.5 py-1 rounded-full border border-white/10 z-10">
                    <motion.span
                      animate={isHovered ? { rotate: [0, -15, 15, 0] } : {}}
                      transition={{ duration: 1.8, repeat: Infinity }}
                    >
                      <Clock className="w-3.5 h-3.5 text-[#DFCA9B]" />
                    </motion.span>
                    <span>{service.duration}</span>
                  </div>
                </div>

                {/* Card Body */}
                <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between">
                  <div>
                    {/* Service Name */}
                    <h3 className="font-serif text-lg sm:text-xl md:text-2xl font-normal text-[#2D2D2D] group-hover:text-[#C9A96E] transition-colors mb-2.5">
                      {service.name}
                    </h3>

                    {/* Description */}
                    <p className="font-sans text-xs sm:text-sm text-[#2D2D2D]/70 leading-relaxed mb-6">
                      {service.description}
                    </p>
                  </div>

                  {/* Bottom CTA */}
                  <div className="pt-4 border-t border-[#FAF7F2] mt-auto">
                    <button
                      type="button"
                      onClick={() => onBookService(service)}
                      className="w-full min-h-[44px] py-3 px-4 rounded-xl bg-[#FAF7F2] hover:bg-[#C9A96E] text-[#2D2D2D] hover:text-white font-medium text-xs tracking-wider uppercase transition-colors duration-200 flex items-center justify-center gap-2 group-hover:bg-[#C9A96E] group-hover:text-white cursor-pointer shadow-2xs"
                    >
                      <span>Reserve Service</span>
                      <motion.span
                        animate={isHovered ? { x: [0, 4, 0] } : {}}
                        transition={{ repeat: Infinity, duration: 1 }}
                      >
                        <ArrowRight className="w-3.5 h-3.5" />
                      </motion.span>
                    </button>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </AnimatePresence>
      </motion.div>

      {/* Note below services */}
      <div className="mt-10 sm:mt-14 text-center text-xs text-[#2D2D2D]/60 max-w-xl mx-auto px-4">
        All Indian salon service pricing in INR (₹) is transparent and inclusive of taxes, private consultation, and complimentary Kashmiri Kahwa / artisanal espresso.
      </div>
    </section>
  );
};
