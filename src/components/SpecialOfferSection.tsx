import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Sparkles, Gift, Check, ArrowRight, Copy } from 'lucide-react';

interface SpecialOfferSectionProps {
  onClaimOffer: (promoCode: string) => void;
}

export const SpecialOfferSection: React.FC<SpecialOfferSectionProps> = ({ onClaimOffer }) => {
  const [claimed, setClaimed] = useState(false);
  const [copied, setCopied] = useState(false);
  const promoCode = 'FIRST20';

  const handleClaim = () => {
    setClaimed(true);
    onClaimOffer(promoCode);
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(promoCode);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="relative rounded-3xl overflow-hidden p-8 sm:p-14 shadow-xl border border-[#C9A96E]/30 bg-gradient-to-r from-[#FAF0E6] via-[#F3ECE2] to-[#EBD9D5]">
        {/* Shimmer / sparkle ambient animations */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <motion.div
            animate={{
              opacity: [0.15, 0.45, 0.15],
              scale: [1, 1.15, 1],
              rotate: [0, 45, 0],
            }}
            transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-radial from-[#C9A96E]/40 via-[#D4A5A5]/30 to-transparent blur-2xl"
          />
          <motion.div
            animate={{
              opacity: [0.2, 0.5, 0.2],
              scale: [1, 1.2, 1],
            }}
            transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
            className="absolute -bottom-20 -left-20 w-80 h-80 rounded-full bg-radial from-[#D4A5A5]/40 via-[#C9A96E]/20 to-transparent blur-2xl"
          />

          {/* Shimmer light sweep */}
          <motion.div
            animate={{ x: ['-100%', '200%'] }}
            transition={{ duration: 4.5, repeat: Infinity, ease: 'linear', repeatDelay: 2 }}
            className="absolute top-0 bottom-0 w-1/3 bg-gradient-to-r from-transparent via-white/30 to-transparent skew-x-12"
          />
        </div>

        {/* Content */}
        <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-8 text-center lg:text-left">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/80 border border-[#C9A96E]/40 text-[#B89558] text-xs font-semibold uppercase tracking-wider mb-4 shadow-2xs">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Welcome to Luxe Studio</span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-[#2D2D2D] mb-4 leading-tight">
              New Client Special
            </h2>

            <p className="font-sans text-base sm:text-xl text-[#2D2D2D]/85 font-normal leading-relaxed">
              Receive <span className="font-semibold text-[#2D2D2D]">20% off your first visit</span> + a complimentary Royal Shirodhara botanical steam infusion (₹1,499 value).
            </p>

            <p className="text-xs text-[#2D2D2D]/60 mt-2 font-normal">
              *Valid for new guests in Mumbai on any service ₹1,500+. Applied automatically at reservation.
            </p>
          </div>

          {/* CTA & Code Container */}
          <div className="flex flex-col sm:flex-row items-center gap-3.5 w-full lg:w-auto">
            {!claimed ? (
              <button
                type="button"
                onClick={handleClaim}
                className="w-full sm:w-auto px-8 py-4 rounded-full bg-[#C9A96E] hover:bg-[#B89558] text-white font-medium text-base tracking-wide shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-0.5 cursor-pointer flex items-center justify-center gap-2"
              >
                <span>Claim Your Offer</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            ) : (
              <div className="flex flex-col sm:flex-row items-center gap-2 w-full">
                <div className="flex items-center gap-2 px-4 py-3 rounded-full bg-white text-[#2D2D2D] border border-[#C9A96E] text-sm font-semibold tracking-wider shadow-xs">
                  <span>Code:</span>
                  <span className="text-[#C9A96E] font-mono text-base">{promoCode}</span>
                  <button
                    type="button"
                    onClick={handleCopy}
                    className="p-1 text-[#2D2D2D]/50 hover:text-[#2D2D2D] transition-colors"
                    title="Copy code"
                  >
                    {copied ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>
                <button
                  type="button"
                  onClick={() => onClaimOffer(promoCode)}
                  className="px-6 py-3 rounded-full bg-[#2D2D2D] hover:bg-[#C9A96E] text-white text-sm font-medium transition-colors cursor-pointer"
                >
                  Book with Offer
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
