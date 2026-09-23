import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown, HelpCircle, Phone } from 'lucide-react';
import { FAQS, SALON_INFO } from '../data';

export const FAQSection: React.FC = () => {
  const [openId, setOpenId] = useState<string | null>(FAQS[0].id);

  const toggleFAQ = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <section id="faq" className="py-24 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
      {/* Header */}
      <div className="text-center max-w-2xl mx-auto mb-14">
        <span className="text-xs uppercase tracking-[0.25em] text-[#C9A96E] font-semibold block mb-2">
          Helpful Guidance
        </span>
        <h2 className="font-serif text-3xl sm:text-5xl font-normal text-[#2D2D2D] mb-3">
          Frequently Asked Questions
        </h2>
        <p className="font-sans text-base sm:text-lg text-[#2D2D2D]/70 font-normal">
          Everything you need to know about your luxury salon experience at Luxe Studio.
        </p>
      </div>

      {/* Accordion List */}
      <div className="space-y-4">
        {FAQS.map((faq) => {
          const isOpen = openId === faq.id;
          return (
            <div
              key={faq.id}
              className="bg-white rounded-2xl border border-[#2D2D2D]/10 overflow-hidden shadow-2xs transition-colors duration-200"
            >
              <button
                type="button"
                onClick={() => toggleFAQ(faq.id)}
                className="w-full py-5 px-6 text-left flex items-center justify-between gap-4 focus:outline-none focus:bg-[#FAF7F2]/50 cursor-pointer"
                aria-expanded={isOpen}
              >
                <span className="font-serif text-lg sm:text-xl font-normal text-[#2D2D2D]">
                  {faq.question}
                </span>
                <span
                  className={`w-8 h-8 rounded-full bg-[#FAF7F2] flex items-center justify-center shrink-0 transition-transform duration-300 text-[#C9A96E] ${
                    isOpen ? 'rotate-180 bg-[#C9A96E] text-white' : ''
                  }`}
                >
                  <ChevronDown className="w-4 h-4" />
                </span>
              </button>

              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.28, ease: 'easeInOut' }}
                  >
                    <div className="px-6 pb-6 pt-1 text-sm sm:text-base text-[#2D2D2D]/75 leading-relaxed border-t border-[#FAF7F2]">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>

      {/* Concierge Help Callout */}
      <div className="mt-12 text-center p-6 rounded-2xl bg-white/60 border border-[#C9A96E]/20 max-w-xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="text-left text-xs sm:text-sm text-[#2D2D2D]/75">
          <p className="font-medium text-[#2D2D2D]">Have a question not listed here?</p>
          <p className="text-xs text-[#2D2D2D]/60 mt-0.5">Our front desk concierge is delighted to assist.</p>
        </div>
        <a
          href={SALON_INFO.phoneRaw}
          className="px-5 py-2.5 rounded-full bg-[#2D2D2D] hover:bg-[#C9A96E] text-white text-xs font-semibold uppercase tracking-wider transition-colors inline-flex items-center gap-2 shrink-0"
        >
          <Phone className="w-3.5 h-3.5" />
          <span>Call Concierge</span>
        </a>
      </div>
    </section>
  );
};
