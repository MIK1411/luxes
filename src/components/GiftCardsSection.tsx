import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Gift, Sparkles, Check, Mail, Heart, X, ArrowRight } from 'lucide-react';
import { GIFT_CARD_PRESETS } from '../data';

export const GiftCardsSection: React.FC = () => {
  const [customAmount, setCustomAmount] = useState<string>('');
  const [selectedAmount, setSelectedAmount] = useState<number | null>(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  // Form fields
  const [recipientName, setRecipientName] = useState('');
  const [recipientEmail, setRecipientEmail] = useState('');
  const [senderName, setSenderName] = useState('');
  const [personalMessage, setPersonalMessage] = useState('');

  const handleSelectPreset = (amount: number) => {
    setSelectedAmount(amount);
    setIsSuccess(false);
    setModalOpen(true);
  };

  const handleCustomSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const parsed = parseInt(customAmount, 10);
    if (!isNaN(parsed) && parsed >= 1000 && parsed <= 50000) {
      setSelectedAmount(parsed);
      setIsSuccess(false);
      setModalOpen(true);
    }
  };

  const handleCompletePurchase = (e: React.FormEvent) => {
    e.preventDefault();
    if (recipientName && recipientEmail && senderName) {
      setIsSuccess(true);
    }
  };

  const handleClose = () => {
    setModalOpen(false);
    setIsSuccess(false);
    setRecipientName('');
    setRecipientEmail('');
    setSenderName('');
    setPersonalMessage('');
    setCustomAmount('');
  };

  return (
    <section id="gift-cards" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Header */}
      <div className="text-center max-w-2xl mx-auto mb-14">
        <span className="text-xs uppercase tracking-[0.25em] text-[#C9A96E] font-semibold block mb-2">
          Curated Presents
        </span>
        <h2 className="font-serif text-3xl sm:text-5xl font-normal text-[#2D2D2D] mb-3">
          Give the Gift of Beauty
        </h2>
        <p className="font-sans text-base sm:text-lg text-[#2D2D2D]/70 font-normal">
          Treat someone special to an unforgettable salon sanctuary experience.
        </p>
      </div>

      {/* 3 Pre-set Gift Card Options */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 mb-10">
        {GIFT_CARD_PRESETS.map((preset) => (
          <motion.div
            key={preset.amount}
            whileHover={{ y: -6 }}
            className="relative bg-gradient-to-br from-[#2D2D2D] via-[#383838] to-[#1F1F1F] text-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col justify-between overflow-hidden border border-[#C9A96E]/30"
          >
            {/* Ambient metallic sheen */}
            <div className="absolute top-0 right-0 w-32 h-32 rounded-full bg-radial from-[#C9A96E]/20 to-transparent blur-xl pointer-events-none" />

            <div>
              {/* Card Header */}
              <div className="flex items-center justify-between mb-8">
                <span className="font-serif text-lg tracking-wider text-[#FAF7F2]">
                  Luxe Studio
                </span>
                <span className="p-2 rounded-full bg-white/10 text-[#DFCA9B]">
                  <Gift className="w-5 h-5" />
                </span>
              </div>

              {/* Price & Name */}
              <div className="mb-4">
                <span className="font-serif text-3xl sm:text-4xl font-normal text-[#DFCA9B]">
                  ₹{preset.amount.toLocaleString('en-IN')}
                </span>
                <h3 className="font-sans text-base font-medium text-white/90 mt-2">
                  {preset.label}
                </h3>
              </div>

              <p className="font-sans text-xs text-white/60 leading-relaxed mb-6">
                {preset.note}
              </p>
            </div>

            {/* Action */}
            <button
              type="button"
              onClick={() => handleSelectPreset(preset.amount)}
              className="w-full py-3 px-5 rounded-full bg-[#C9A96E] hover:bg-[#B89558] text-white font-medium text-xs uppercase tracking-wider transition-colors shadow-sm cursor-pointer flex items-center justify-center gap-2"
            >
              <span>Buy Gift Voucher</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </motion.div>
        ))}
      </div>

      {/* Custom Amount Field */}
      <div className="max-w-xl mx-auto bg-white rounded-3xl p-6 sm:p-8 border border-[#2D2D2D]/10 shadow-xs mb-6">
        <form onSubmit={handleCustomSubmit} className="flex flex-col sm:flex-row items-center gap-3">
          <div className="relative flex-1 w-full">
            <span className="absolute left-4 top-1/2 -translate-y-1/2 text-lg font-serif text-[#2D2D2D]/50">
              ₹
            </span>
            <input
              type="number"
              min="1000"
              max="50000"
              step="500"
              placeholder="Enter custom amount (e.g. ₹3,500)"
              value={customAmount}
              onChange={(e) => setCustomAmount(e.target.value)}
              className="w-full pl-8 pr-4 py-3 rounded-full bg-[#FAF7F2] border border-[#2D2D2D]/15 text-[#2D2D2D] text-sm focus:outline-none focus:ring-2 focus:ring-[#C9A96E]"
            />
          </div>
          <button
            type="submit"
            disabled={!customAmount || parseInt(customAmount, 10) < 1000}
            className="w-full sm:w-auto px-6 py-3 rounded-full bg-[#2D2D2D] hover:bg-[#C9A96E] text-white text-xs font-semibold uppercase tracking-wider transition-colors disabled:opacity-50 cursor-pointer disabled:cursor-not-allowed"
          >
            Create Custom Voucher
          </button>
        </form>
      </div>

      {/* Brief note */}
      <div className="text-center flex items-center justify-center gap-2 text-xs sm:text-sm text-[#2D2D2D]/60">
        <Mail className="w-4 h-4 text-[#C9A96E]" />
        <span>Digital gift cards delivered instantly via email. Never expires.</span>
      </div>

      {/* Interactive Gift Card Checkout Modal */}
      <AnimatePresence>
        {modalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="relative w-full max-w-lg bg-[#FAF7F2] rounded-3xl p-6 sm:p-8 shadow-2xl border border-[#C9A96E]/30 max-h-[90vh] overflow-y-auto"
            >
              <button
                type="button"
                onClick={handleClose}
                className="absolute top-5 right-5 p-2 rounded-full text-[#2D2D2D]/60 hover:text-[#2D2D2D] hover:bg-[#2D2D2D]/5 transition-colors"
                aria-label="Close gift card modal"
              >
                <X className="w-5 h-5" />
              </button>

              {!isSuccess ? (
                <div>
                  <div className="mb-6">
                    <span className="text-xs uppercase tracking-widest text-[#C9A96E] font-semibold">
                      Digital Gift Certificate
                    </span>
                    <h3 className="font-serif text-2xl font-normal text-[#2D2D2D] mt-1">
                      Purchase ₹{selectedAmount?.toLocaleString('en-IN')} Gift Voucher
                    </h3>
                  </div>

                  {/* Visual Gift Card Preview */}
                  <div className="relative bg-gradient-to-tr from-[#2D2D2D] to-[#424242] text-white p-5 rounded-2xl shadow-md mb-6 border border-[#C9A96E]/40">
                    <div className="flex justify-between items-center text-xs text-[#DFCA9B]">
                      <span>LUXE STUDIO MUMBAI</span>
                      <Sparkles className="w-4 h-4" />
                    </div>
                    <div className="my-4">
                      <span className="font-serif text-3xl text-white font-normal">
                        ₹{selectedAmount?.toLocaleString('en-IN')}
                      </span>
                    </div>
                    <div className="flex justify-between items-end text-[11px] text-white/70">
                      <div>
                        <span>FOR: </span>
                        <strong className="text-white">{recipientName || 'Valued Guest'}</strong>
                      </div>
                      <span className="tracking-widest">VALID ACROSS BANDRA WEST SALON</span>
                    </div>
                  </div>

                  <form onSubmit={handleCompletePurchase} className="space-y-4">
                    <div>
                      <label className="block text-xs font-medium text-[#2D2D2D] mb-1">
                        Recipient Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Eleanor Vance"
                        value={recipientName}
                        onChange={(e) => setRecipientName(e.target.value)}
                        className="w-full px-4 py-2.5 rounded-xl bg-white border border-[#2D2D2D]/15 text-sm text-[#2D2D2D] focus:outline-none focus:ring-2 focus:ring-[#C9A96E]"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-medium text-[#2D2D2D] mb-1">
                        Recipient Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="eleanor@example.com"
                        value={recipientEmail}
                        onChange={(e) => setRecipientEmail(e.target.value)}
                        className="w-full px-4 py-2.5 rounded-xl bg-white border border-[#2D2D2D]/15 text-sm text-[#2D2D2D] focus:outline-none focus:ring-2 focus:ring-[#C9A96E]"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-medium text-[#2D2D2D] mb-1">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Julian"
                        value={senderName}
                        onChange={(e) => setSenderName(e.target.value)}
                        className="w-full px-4 py-2.5 rounded-xl bg-white border border-[#2D2D2D]/15 text-sm text-[#2D2D2D] focus:outline-none focus:ring-2 focus:ring-[#C9A96E]"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-medium text-[#2D2D2D] mb-1">
                        Personal Note (Optional)
                      </label>
                      <textarea
                        rows={2}
                        placeholder="Happy Birthday! Enjoy your day of pampering."
                        value={personalMessage}
                        onChange={(e) => setPersonalMessage(e.target.value)}
                        className="w-full px-4 py-2.5 rounded-xl bg-white border border-[#2D2D2D]/15 text-sm text-[#2D2D2D] focus:outline-none focus:ring-2 focus:ring-[#C9A96E] resize-none"
                      />
                    </div>

                    <div className="pt-2">
                      <button
                        type="submit"
                        className="w-full py-3.5 px-6 rounded-full bg-[#C9A96E] hover:bg-[#B89558] text-white font-medium text-sm tracking-wide shadow-md transition-colors cursor-pointer"
                      >
                        Complete Gift Card Purchase (${selectedAmount})
                      </button>
                    </div>
                  </form>
                </div>
              ) : (
                <div className="text-center py-6">
                  <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto mb-4">
                    <Check className="w-8 h-8" />
                  </div>
                  <h3 className="font-serif text-2xl font-normal text-[#2D2D2D] mb-2">
                    Gift Card Sent!
                  </h3>
                  <p className="font-sans text-sm text-[#2D2D2D]/75 max-w-sm mx-auto mb-6">
                    A digital certificate for <strong className="text-[#2D2D2D]">${selectedAmount}</strong> with redemption instructions has been dispatched to <strong>{recipientEmail}</strong>.
                  </p>
                  <button
                    type="button"
                    onClick={handleClose}
                    className="px-6 py-2.5 rounded-full bg-[#2D2D2D] text-white text-xs font-medium uppercase tracking-wider hover:bg-[#C9A96E] transition-colors cursor-pointer"
                  >
                    Done
                  </button>
                </div>
              )}
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};
