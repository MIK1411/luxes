import React, { useState, useRef, useCallback } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Sparkles, Instagram, Sliders, X, Check, ArrowRight } from 'lucide-react';
import { BEFORE_AFTER_CASES, GALLERY_THUMBNAILS, GalleryItem, Service } from '../data';

interface GallerySectionProps {
  onBookLook: (lookName: string) => void;
}

export const GallerySection: React.FC<GallerySectionProps> = ({ onBookLook }) => {
  const [activeCaseIndex, setActiveCaseIndex] = useState(0);
  const [sliderPos, setSliderPos] = useState(50); // percentage 0 - 100
  const [isDragging, setIsDragging] = useState(false);
  const [containerWidth, setContainerWidth] = useState<number>(800);
  const [selectedThumbnail, setSelectedThumbnail] = useState<GalleryItem | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const activeCase = BEFORE_AFTER_CASES[activeCaseIndex];

  React.useEffect(() => {
    const updateWidth = () => {
      if (containerRef.current) {
        setContainerWidth(containerRef.current.clientWidth);
      }
    };
    updateWidth();
    window.addEventListener('resize', updateWidth);
    return () => window.removeEventListener('resize', updateWidth);
  }, []);

  const handleMove = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const clamped = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPos(clamped);
  }, []);

  const handleMouseDown = () => setIsDragging(true);
  const handleTouchStart = () => setIsDragging(true);

  // Global mouse/touch release
  const handlePointerUp = () => {
    if (isDragging) setIsDragging(false);
  };

  const handlePointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (isDragging) {
      handleMove(e.clientX);
    }
  };

  return (
    <section id="gallery" className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 lg:px-8 w-full max-w-7xl mx-auto overflow-hidden">
      {/* Header */}
      <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-12">
        <span className="text-xs uppercase tracking-[0.25em] text-[#C9A96E] font-semibold block mb-2">
          Real Results
        </span>
        <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-normal text-[#2D2D2D] mb-3">
          Our Transformations
        </h2>
        <p className="font-sans text-sm sm:text-base md:text-lg text-[#2D2D2D]/70 font-normal">
          Drag the slider to reveal the artistry behind our client transformations.
        </p>
      </div>

      {/* Case Studies Selector Tabs */}
      <div className="flex items-center justify-start sm:justify-center gap-2 sm:gap-3 mb-8 overflow-x-auto pb-3 w-full no-scrollbar px-1">
        {BEFORE_AFTER_CASES.map((item, idx) => (
          <button
            key={item.id}
            type="button"
            onClick={() => {
              setActiveCaseIndex(idx);
              setSliderPos(50);
            }}
            className={`px-4 sm:px-6 py-2 sm:py-2.5 rounded-full text-xs sm:text-sm font-medium transition-all duration-200 cursor-pointer whitespace-nowrap shrink-0 ${
              activeCaseIndex === idx
                ? 'bg-[#2D2D2D] text-white shadow-md'
                : 'bg-white text-[#2D2D2D]/70 hover:bg-[#FAF7F2] border border-[#2D2D2D]/10'
            }`}
          >
            {item.title}
          </button>
        ))}
      </div>

      {/* Interactive Before / After Comparison Slider Container */}
      <div className="max-w-4xl mx-auto mb-16 w-full">
        <div
          ref={containerRef}
          onPointerDown={handleMouseDown}
          onPointerMove={handlePointerMove}
          onPointerUp={handlePointerUp}
          onTouchStart={handleTouchStart}
          className="relative w-full h-[320px] xs:h-[360px] sm:h-[440px] md:h-[480px] rounded-3xl overflow-hidden shadow-xl select-none cursor-ew-resize border border-[#C9A96E]/20 bg-[#2D2D2D]"
        >
          {/* AFTER SIDE (Full Background Layer) */}
          <div className="absolute inset-0 w-full h-full flex flex-col justify-between p-4 sm:p-8 md:p-10 overflow-hidden">
            <img
              src={activeCase.afterImage}
              alt={activeCase.afterLabel}
              referrerPolicy="no-referrer"
              className="absolute inset-0 w-full h-full object-cover object-center brightness-[1.03] contrast-[1.04] transition-all duration-300"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-transparent to-black/25 pointer-events-none" />

            <div className="relative z-10 flex justify-end">
              <span className="px-3 sm:px-3.5 py-1 sm:py-1.5 rounded-full bg-white/95 backdrop-blur-xs text-[#2D2D2D] text-[11px] sm:text-xs font-semibold uppercase tracking-wider shadow-sm flex items-center gap-1.5 border border-[#C9A96E]/30">
                <Sparkles className="w-3 sm:w-3.5 h-3 sm:h-3.5 text-[#C9A96E]" />
                {activeCase.afterLabel}
              </span>
            </div>

            <div className="relative z-10 max-w-[200px] xs:max-w-xs ml-auto text-right text-white drop-shadow-sm bg-black/60 backdrop-blur-md p-3 sm:p-4 rounded-2xl border border-white/20">
              <p className="text-[10px] sm:text-xs uppercase tracking-widest text-[#DFCA9B] font-semibold mb-0.5 sm:mb-1">
                The Result
              </p>
              <p className="text-xs sm:text-sm leading-snug line-clamp-3 xs:line-clamp-none">
                {activeCase.afterDescription}
              </p>
            </div>
          </div>

          {/* BEFORE SIDE (Clipped via sliderPos %) */}
          <div
            style={{ width: `${sliderPos}%` }}
            className="absolute top-0 left-0 bottom-0 overflow-hidden border-r-2 border-white flex flex-col justify-between p-4 sm:p-8 md:p-10"
          >
            {/* Inner image locked full width to prevent distortion */}
            <div
              style={{ width: containerWidth ? `${containerWidth}px` : '100%' }}
              className="absolute inset-0 h-full pointer-events-none"
            >
              <img
                src={activeCase.beforeImage}
                alt={activeCase.beforeLabel}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover object-center brightness-[0.97] contrast-[0.98] transition-all duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-transparent to-black/25" />
            </div>

            {/* Inner content */}
            <div
              style={{ width: containerWidth ? `${containerWidth}px` : '100%' }}
              className="relative z-10 flex flex-col justify-between h-full pointer-events-none pr-6"
            >
              <div className="flex justify-start">
                <span className="px-3 sm:px-3.5 py-1 sm:py-1.5 rounded-full bg-black/75 backdrop-blur-xs text-white text-[11px] sm:text-xs font-semibold uppercase tracking-wider shadow-sm border border-white/10">
                  {activeCase.beforeLabel}
                </span>
              </div>

              <div className="max-w-[200px] xs:max-w-xs text-left text-white/95 drop-shadow-sm bg-black/60 backdrop-blur-md p-3 sm:p-4 rounded-2xl border border-white/20">
                <p className="text-[10px] sm:text-xs uppercase tracking-widest text-[#D4A5A5] font-semibold mb-0.5 sm:mb-1">
                  Starting Base
                </p>
                <p className="text-xs sm:text-sm leading-snug line-clamp-3 xs:line-clamp-none">
                  {activeCase.beforeDescription}
                </p>
              </div>
            </div>
          </div>

          {/* Draggable Vertical Divider & Handle */}
          <div
            style={{ left: `${sliderPos}%` }}
            className="absolute top-0 bottom-0 -ml-0.5 w-1 bg-white shadow-[0_0_10px_rgba(0,0,0,0.4)] pointer-events-none"
          >
            <div className="absolute top-1/2 -translate-y-1/2 -left-4 w-9 h-9 rounded-full bg-white text-[#2D2D2D] shadow-lg flex items-center justify-center border border-[#C9A96E]/40 pointer-events-auto cursor-ew-resize">
              <Sliders className="w-4 h-4 rotate-90 text-[#C9A96E]" />
            </div>
          </div>
        </div>

        {/* Accessible Range Input slider below for smooth mobile/keyboard navigation */}
        <div className="mt-4 flex items-center justify-between gap-4 max-w-xs mx-auto text-xs text-[#2D2D2D]/60 font-medium">
          <span>← Before</span>
          <input
            type="range"
            min="0"
            max="100"
            value={sliderPos}
            onChange={(e) => setSliderPos(Number(e.target.value))}
            aria-label="Before and after transformation comparison slider"
            className="w-full accent-[#C9A96E] cursor-ew-resize"
          />
          <span>After →</span>
        </div>
      </div>

      {/* Grid of 6 Thumbnail Cards */}
      <div className="mb-10">
        <h3 className="font-serif text-xl sm:text-2xl text-center text-[#2D2D2D] mb-8 font-normal">
          Explore Recent Salon Looks
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {GALLERY_THUMBNAILS.map((item) => (
            <motion.div
              key={item.id}
              whileHover={{ y: -6, scale: 1.02 }}
              onClick={() => setSelectedThumbnail(item)}
              className="group relative h-72 rounded-3xl overflow-hidden cursor-pointer shadow-sm hover:shadow-2xl transition-all duration-300 border border-[#2D2D2D]/10 bg-[#2D2D2D]"
            >
              {/* Photo with zoom motion graphic */}
              <img
                src={item.image}
                alt={item.title}
                className="absolute inset-0 w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-700 ease-out"
              />

              {/* Ambient glass overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-black/10 group-hover:from-black/95 transition-colors" />

              {/* Tag & Content */}
              <div className="absolute top-4 left-4">
                <span className="px-3 py-1 rounded-full bg-black/60 backdrop-blur-md text-white/95 text-[11px] font-semibold tracking-wide uppercase border border-white/20">
                  {item.category}
                </span>
              </div>

              <div className="absolute bottom-4 left-4 right-4 text-white">
                <h4 className="font-serif text-xl font-normal leading-snug mb-1 group-hover:text-[#DFCA9B] transition-colors">
                  {item.title}
                </h4>
                <p className="text-xs text-white/80 line-clamp-1 mb-2">
                  {item.description}
                </p>
                <div className="flex items-center justify-between text-[11px] text-white/70 pt-2 border-t border-white/15">
                  <span>Styled by {item.stylist}</span>
                  <span className="text-[#DFCA9B] group-hover:translate-x-1.5 transition-transform inline-flex items-center gap-1 font-semibold">
                    View Look <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* View Full Portfolio on Instagram link */}
      <div className="text-center pt-2">
        <a
          href="https://instagram.com"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2.5 px-6 py-3 rounded-full bg-white hover:bg-[#FAF7F2] text-[#2D2D2D] border border-[#2D2D2D]/15 font-medium text-sm transition-all duration-200 hover:border-[#C9A96E] hover:text-[#C9A96E] shadow-xs"
        >
          <Instagram className="w-4 h-4 text-[#D4A5A5]" />
          <span>View Full Portfolio on Instagram</span>
        </a>
      </div>

      {/* Thumbnail Detail Lightbox Modal */}
      <AnimatePresence>
        {selectedThumbnail && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-xs">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="relative w-full max-w-lg bg-[#FAF7F2] rounded-3xl overflow-hidden shadow-2xl border border-[#C9A96E]/20"
            >
              <button
                type="button"
                onClick={() => setSelectedThumbnail(null)}
                className="absolute top-4 right-4 z-10 p-2 rounded-full bg-black/40 text-white hover:bg-black/60 transition-colors"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="h-64 w-full relative flex items-end p-6 overflow-hidden">
                <img
                  src={selectedThumbnail.image}
                  alt={selectedThumbnail.title}
                  className="absolute inset-0 w-full h-full object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-black/30" />
                <div className="relative text-white z-10">
                  <span className="text-xs uppercase tracking-widest text-[#DFCA9B] font-semibold block mb-1">
                    {selectedThumbnail.category} Atelier Showcase
                  </span>
                  <h3 className="font-serif text-2xl font-normal">
                    {selectedThumbnail.title}
                  </h3>
                </div>
              </div>

              <div className="p-6">
                <p className="text-sm text-[#2D2D2D]/80 mb-4 leading-relaxed">
                  {selectedThumbnail.description}. Created with precision formulation, bond-protective technology, and bespoke styling products.
                </p>

                <div className="flex items-center justify-between text-xs text-[#2D2D2D]/60 py-3 border-y border-[#2D2D2D]/10 mb-6">
                  <span>Lead Artist: <strong>{selectedThumbnail.stylist}</strong></span>
                  <span>Duration: <strong>2–3 Hours</strong></span>
                </div>

                <div className="flex items-center gap-3">
                  <button
                    type="button"
                    onClick={() => {
                      const look = selectedThumbnail.title;
                      setSelectedThumbnail(null);
                      onBookLook(look);
                    }}
                    className="flex-1 py-3 px-5 rounded-full bg-[#C9A96E] hover:bg-[#B89558] text-white font-medium text-sm transition-colors text-center cursor-pointer shadow-sm"
                  >
                    Book This Look
                  </button>
                  <button
                    type="button"
                    onClick={() => setSelectedThumbnail(null)}
                    className="py-3 px-5 rounded-full bg-white hover:bg-[#F3ECE2] text-[#2D2D2D] border border-[#2D2D2D]/15 font-medium text-sm transition-colors cursor-pointer"
                  >
                    Close
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};
