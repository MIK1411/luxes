import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Star, ChevronLeft, ChevronRight, CheckCircle2, MessageSquare } from 'lucide-react';
import { REVIEWS } from '../data';

export const ReviewsSection: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // Auto-scroll carousel every 4.5 seconds unless hovered
  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % REVIEWS.length);
    }, 4500);
    return () => clearInterval(interval);
  }, [isPaused]);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? REVIEWS.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % REVIEWS.length);
  };

  // Get 3 visible reviews starting from currentIndex for desktop wrapping
  const getVisibleReviews = () => {
    const list = [];
    for (let i = 0; i < 3; i++) {
      const idx = (currentIndex + i) % REVIEWS.length;
      list.push(REVIEWS[idx]);
    }
    return list;
  };

  const visibleReviews = getVisibleReviews();

  return (
    <section id="reviews" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Section Header */}
      <div className="text-center max-w-2xl mx-auto mb-12">
        <span className="text-xs uppercase tracking-[0.25em] text-[#C9A96E] font-semibold block mb-2">
          Client Praise
        </span>
        <h2 className="font-serif text-3xl sm:text-5xl font-normal text-[#2D2D2D] mb-4">
          What Our Clients Say
        </h2>

        {/* Large star rating display */}
        <div className="inline-flex flex-col items-center justify-center p-4 rounded-2xl bg-white/80 border border-[#C9A96E]/20 shadow-xs">
          <div className="flex items-center gap-1.5 text-[#C9A96E] mb-1">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-5 h-5 fill-[#C9A96E] text-[#C9A96E]" />
            ))}
          </div>
          <span className="font-serif text-lg sm:text-xl text-[#2D2D2D] font-medium">
            4.9 out of 5
          </span>
          <span className="text-xs text-[#2D2D2D]/60 mt-0.5">
            Based on 480+ verified Google & Salon reviews
          </span>
        </div>
      </div>

      {/* Auto-scrolling Testimonials Carousel */}
      <div
        className="relative"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
        onTouchStart={() => setIsPaused(true)}
        onTouchEnd={() => setIsPaused(false)}
      >
        {/* Navigation arrows for manual control */}
        <div className="hidden sm:flex items-center justify-between absolute -top-16 right-0 gap-2">
          <button
            type="button"
            onClick={handlePrev}
            className="w-10 h-10 rounded-full bg-white hover:bg-[#FAF7F2] text-[#2D2D2D] border border-[#2D2D2D]/15 flex items-center justify-center transition-colors shadow-xs cursor-pointer"
            aria-label="Previous review"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            type="button"
            onClick={handleNext}
            className="w-10 h-10 rounded-full bg-white hover:bg-[#FAF7F2] text-[#2D2D2D] border border-[#2D2D2D]/15 flex items-center justify-center transition-colors shadow-xs cursor-pointer"
            aria-label="Next review"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

        {/* Carousel Cards (3 visible on desktop, 1 on mobile) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {visibleReviews.map((rev, index) => (
            <motion.div
              key={`${rev.id}-${index}`}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className={`bg-white rounded-3xl p-7 border border-[#2D2D2D]/5 shadow-xs flex flex-col justify-between hover:shadow-xl transition-all duration-300 ${
                index > 0 ? 'hidden md:flex' : 'flex'
              }`}
            >
              <div>
                {/* Rating & Date */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-1 text-[#C9A96E]">
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-[#C9A96E] text-[#C9A96E]" />
                    ))}
                  </div>
                  <span className="text-xs text-[#2D2D2D]/50">{rev.date}</span>
                </div>

                {/* Review Text */}
                <p className="font-sans text-sm sm:text-base text-[#2D2D2D]/80 leading-relaxed italic mb-6">
                  “{rev.text}”
                </p>
              </div>

              {/* Client Info with Avatar & Service */}
              <div className="pt-4 border-t border-[#FAF7F2]">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <img
                      src={rev.avatar}
                      alt={rev.name}
                      className="w-10 h-10 rounded-full object-cover border border-[#C9A96E]/40 shadow-xs"
                    />
                    <div>
                      <h4 className="font-serif text-base font-medium text-[#2D2D2D] flex items-center gap-1.5">
                        <span>{rev.name}</span>
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#C9A96E]" />
                      </h4>
                      <p className="text-xs text-[#2D2D2D]/60 mt-0.5">{rev.service}</p>
                    </div>
                  </div>
                  <span className="text-[10px] uppercase tracking-wider text-[#C9A96E] font-semibold bg-[#FAF7F2] px-2.5 py-1 rounded-full border border-[#C9A96E]/20">
                    Verified
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Carousel Indicators / Pagination Dots */}
        <div className="flex items-center justify-center gap-2 mt-8">
          {REVIEWS.map((_, dotIdx) => (
            <button
              key={dotIdx}
              type="button"
              onClick={() => setCurrentIndex(dotIdx)}
              className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                currentIndex === dotIdx ? 'w-6 bg-[#C9A96E]' : 'w-2 bg-[#2D2D2D]/20 hover:bg-[#2D2D2D]/40'
              }`}
              aria-label={`Jump to review ${dotIdx + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Read More Reviews on Google Link */}
      <div className="text-center mt-10">
        <a
          href="https://google.com/maps"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-sm font-medium text-[#2D2D2D] hover:text-[#C9A96E] transition-colors group"
        >
          <span className="w-6 h-6 rounded-full bg-white shadow-xs border border-[#2D2D2D]/10 flex items-center justify-center text-xs font-bold text-blue-600">
            G
          </span>
          <span className="underline decoration-[#C9A96E]/50 underline-offset-4 group-hover:decoration-[#C9A96E]">
            Read More Reviews on Google
          </span>
        </a>
      </div>
    </section>
  );
};
