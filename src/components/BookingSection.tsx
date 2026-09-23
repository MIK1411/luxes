import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Calendar as CalendarIcon,
  Clock,
  User,
  Scissors,
  Check,
  Sparkles,
  ArrowRight,
  ArrowLeft,
  ShieldAlert,
  Tag,
  CheckCircle2,
  X
} from 'lucide-react';
import { SERVICES, TEAM_MEMBERS, Service, Stylist, TIME_SLOTS } from '../data';

interface BookingSectionProps {
  preselectedService?: Service | null;
  preselectedStylist?: Stylist | null;
  activePromoCode?: string;
  onClearPreselections?: () => void;
}

export const BookingSection: React.FC<BookingSectionProps> = ({
  preselectedService,
  preselectedStylist,
  activePromoCode,
  onClearPreselections,
}) => {
  // Steps: 1, 2, 3, 4
  const [currentStep, setCurrentStep] = useState<number>(1);

  // Form State
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [selectedService, setSelectedService] = useState<Service | null>(null);
  const [selectedStylist, setSelectedStylist] = useState<Stylist | 'no-preference'>('no-preference');
  const [selectedDate, setSelectedDate] = useState<string>('');
  const [selectedTime, setSelectedTime] = useState<string>('');
  const [promoCodeInput, setPromoCodeInput] = useState<string>('');
  const [appliedPromo, setAppliedPromo] = useState<string>('');

  // Contact Info
  const [guestName, setGuestName] = useState('');
  const [guestEmail, setGuestEmail] = useState('');
  const [guestPhone, setGuestPhone] = useState('');
  const [guestNotes, setGuestNotes] = useState('');

  // Modals & confirmation
  const [bookingConfirmed, setBookingConfirmed] = useState(false);
  const [confirmationData, setConfirmationData] = useState<any>(null);

  // Pre-selection listener
  useEffect(() => {
    if (preselectedService) {
      setSelectedService(preselectedService);
      setSelectedCategory(preselectedService.category);
    }
  }, [preselectedService]);

  useEffect(() => {
    if (preselectedStylist) {
      setSelectedStylist(preselectedStylist);
    }
  }, [preselectedStylist]);

  useEffect(() => {
    if (activePromoCode) {
      setAppliedPromo(activePromoCode);
    }
  }, [activePromoCode]);

  // Set default minimum date (tomorrow)
  useEffect(() => {
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    const dateStr = tomorrow.toISOString().split('T')[0];
    if (!selectedDate) {
      setSelectedDate(dateStr);
    }
    if (!selectedTime) {
      setSelectedTime(TIME_SLOTS[1]);
    }
  }, []);

  const handleNextStep = () => {
    if (currentStep === 1 && !selectedService) return;
    if (currentStep === 3 && (!selectedDate || !selectedTime)) return;
    setCurrentStep((prev) => Math.min(4, prev + 1));
  };

  const handlePrevStep = () => {
    setCurrentStep((prev) => Math.max(1, prev - 1));
  };

  const handleApplyPromo = (e: React.FormEvent) => {
    e.preventDefault();
    if (promoCodeInput.trim().toUpperCase() === 'FIRST20') {
      setAppliedPromo('FIRST20');
      setPromoCodeInput('');
    }
  };

  const calculateFinalPrice = () => {
    if (!selectedService) return { original: 0, discount: 0, total: 0 };
    const original = selectedService.numericPrice;
    if (appliedPromo === 'FIRST20') {
      const discount = Math.round(original * 0.2);
      return { original, discount, total: original - discount };
    }
    return { original, discount: 0, total: original };
  };

  const priceCalc = calculateFinalPrice();

  const handleConfirmBooking = (e: React.FormEvent) => {
    e.preventDefault();
    if (!guestName || !guestEmail || !guestPhone || !selectedService) return;

    setConfirmationData({
      service: selectedService,
      stylist: selectedStylist === 'no-preference' ? 'First Available Master Stylist' : selectedStylist.name,
      date: selectedDate,
      time: selectedTime,
      guestName,
      guestEmail,
      guestPhone,
      guestNotes,
      total: priceCalc.total,
      appliedPromo,
      bookingRef: `LX-${Math.floor(100000 + Math.random() * 900000)}`,
    });

    setBookingConfirmed(true);
  };

  const handleReset = () => {
    setBookingConfirmed(false);
    setCurrentStep(1);
    setSelectedService(null);
    setSelectedStylist('no-preference');
    setGuestName('');
    setGuestEmail('');
    setGuestPhone('');
    setGuestNotes('');
    if (onClearPreselections) onClearPreselections();
  };

  const categories = ['All', 'Cuts & Styling', 'Color', 'Treatments', 'Extensions', 'Bridal'];
  const filteredServices = selectedCategory === 'All'
    ? SERVICES
    : SERVICES.filter((s) => s.category === selectedCategory);

  return (
    <section id="booking" className="py-24 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
      {/* Header */}
      <div className="text-center max-w-2xl mx-auto mb-12">
        <span className="text-xs uppercase tracking-[0.25em] text-[#C9A96E] font-semibold block mb-2">
          Reserve Your Chair
        </span>
        <h2 className="font-serif text-3xl sm:text-5xl font-normal text-[#2D2D2D] mb-3">
          Book Your Appointment
        </h2>
        <p className="font-sans text-base sm:text-lg text-[#2D2D2D]/70 font-normal">
          Select your customized service, preferred artist, and ideal appointment time.
        </p>
      </div>

      {/* Booking Wizard Container */}
      <div className="bg-white rounded-3xl p-6 sm:p-10 shadow-lg border border-[#2D2D2D]/10 relative">
        {/* Step Progress Bar (Step X of 4) */}
        <div className="mb-10">
          <div className="flex items-center justify-between text-xs sm:text-sm font-medium text-[#2D2D2D]/60 mb-3">
            <span className="text-[#C9A96E] font-semibold uppercase tracking-wider">
              Step {currentStep} of 4
            </span>
            <span>
              {currentStep === 1 && 'Select Service'}
              {currentStep === 2 && 'Choose Stylist'}
              {currentStep === 3 && 'Date & Time'}
              {currentStep === 4 && 'Details & Confirmation'}
            </span>
          </div>

          <div className="w-full bg-[#FAF7F2] h-2 rounded-full overflow-hidden border border-[#2D2D2D]/5">
            <motion.div
              initial={false}
              animate={{ width: `${(currentStep / 4) * 100}%` }}
              transition={{ duration: 0.35, ease: 'easeInOut' }}
              className="h-full bg-[#C9A96E] rounded-full"
            />
          </div>

          {/* Step Pill Indicators */}
          <div className="grid grid-cols-4 gap-2 mt-4 text-[11px] sm:text-xs text-center font-medium">
            {[
              { step: 1, label: '1. Service' },
              { step: 2, label: '2. Stylist' },
              { step: 3, label: '3. Schedule' },
              { step: 4, label: '4. Summary' },
            ].map((st) => (
              <button
                key={st.step}
                type="button"
                onClick={() => {
                  if (st.step < currentStep || (st.step === 2 && selectedService)) {
                    setCurrentStep(st.step);
                  }
                }}
                disabled={st.step > currentStep && !selectedService}
                className={`py-1.5 rounded-lg transition-colors ${
                  currentStep === st.step
                    ? 'text-[#C9A96E] font-bold bg-[#FAF7F2]'
                    : currentStep > st.step
                    ? 'text-emerald-700 cursor-pointer'
                    : 'text-[#2D2D2D]/40 cursor-not-allowed'
                }`}
              >
                {st.label}
              </button>
            ))}
          </div>
        </div>

        {/* STEP 1: Select Service Category & Specific Service */}
        {currentStep === 1 && (
          <motion.div
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 10 }}
          >
            <div className="mb-6">
              <h3 className="font-serif text-2xl text-[#2D2D2D] mb-1">
                Choose Your Service
              </h3>
              <p className="text-xs sm:text-sm text-[#2D2D2D]/60">
                Filter by category to view detailed descriptions and durations.
              </p>
            </div>

            {/* Category Filter Pills */}
            <div className="flex items-center gap-2 overflow-x-auto pb-3 mb-6 no-scrollbar">
              {categories.map((cat) => (
                <button
                  key={cat}
                  type="button"
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-3.5 py-1.5 rounded-full text-xs font-medium whitespace-nowrap transition-colors cursor-pointer ${
                    selectedCategory === cat
                      ? 'bg-[#2D2D2D] text-white'
                      : 'bg-[#FAF7F2] text-[#2D2D2D]/70 hover:bg-[#F3ECE2]'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Services List / Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-h-[380px] overflow-y-auto pr-1">
              {filteredServices.map((service) => {
                const isSelected = selectedService?.id === service.id;
                return (
                  <div
                    key={service.id}
                    onClick={() => setSelectedService(service)}
                    className={`p-3.5 rounded-2xl border transition-all duration-200 cursor-pointer flex gap-3.5 ${
                      isSelected
                        ? 'border-[#C9A96E] bg-[#FAF7F2] shadow-sm'
                        : 'border-[#2D2D2D]/10 bg-white hover:border-[#C9A96E]/50'
                    }`}
                  >
                    <img
                      src={service.image}
                      alt={service.name}
                      className="w-16 h-16 rounded-xl object-cover shrink-0 border border-[#2D2D2D]/10"
                    />
                    <div className="flex-1 flex flex-col justify-between min-w-0">
                      <div>
                        <div className="flex items-start justify-between gap-1 mb-1">
                          <span className="font-serif text-sm font-semibold text-[#2D2D2D] truncate">
                            {service.name}
                          </span>
                          {isSelected && (
                            <span className="w-4 h-4 rounded-full bg-[#C9A96E] text-white flex items-center justify-center shrink-0">
                              <Check className="w-2.5 h-2.5" />
                            </span>
                          )}
                        </div>
                        <p className="text-[11px] text-[#2D2D2D]/65 line-clamp-1 mb-1.5">
                          {service.description}
                        </p>
                      </div>
                      <div className="flex items-center justify-between text-[11px] text-[#2D2D2D]/70 pt-1.5 border-t border-[#2D2D2D]/5">
                        <span className="flex items-center gap-1">
                          <Clock className="w-3 h-3 text-[#C9A96E]" />
                          {service.duration}
                        </span>
                        <span className="font-bold text-[#2D2D2D]">
                          {service.price}
                        </span>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Action Buttons */}
            <div className="mt-8 pt-4 border-t border-[#2D2D2D]/10 flex justify-end">
              <button
                type="button"
                disabled={!selectedService}
                onClick={handleNextStep}
                className="px-8 py-3 rounded-full bg-[#C9A96E] hover:bg-[#B89558] text-white font-medium text-sm tracking-wide shadow-sm transition-colors disabled:opacity-40 disabled:cursor-not-allowed cursor-pointer flex items-center gap-2"
              >
                <span>Continue to Stylist</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </motion.div>
        )}

        {/* STEP 2: Select Stylist */}
        {currentStep === 2 && (
          <motion.div
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 10 }}
          >
            <div className="mb-6">
              <h3 className="font-serif text-2xl text-[#2D2D2D] mb-1">
                Select Your Stylist
              </h3>
              <p className="text-xs sm:text-sm text-[#2D2D2D]/60">
                Choose a specific team member or pick first available for greatest flexibility.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mb-8">
              {/* Option: No preference */}
              <div
                onClick={() => setSelectedStylist('no-preference')}
                className={`p-5 rounded-2xl border transition-all duration-200 cursor-pointer flex flex-col items-center text-center justify-center ${
                  selectedStylist === 'no-preference'
                    ? 'border-[#C9A96E] bg-[#FAF7F2] shadow-sm'
                    : 'border-[#2D2D2D]/10 bg-white hover:border-[#C9A96E]/50'
                }`}
              >
                <div className="w-14 h-14 rounded-full bg-[#FAF7F2] border border-[#C9A96E] flex items-center justify-center text-[#C9A96E] mb-3">
                  <Sparkles className="w-6 h-6" />
                </div>
                <h4 className="font-serif text-base font-normal text-[#2D2D2D]">
                  No Preference
                </h4>
                <p className="text-xs text-[#2D2D2D]/60 mt-1">
                  First available top-rated stylist
                </p>
                {selectedStylist === 'no-preference' && (
                  <span className="mt-2 text-xs font-semibold text-[#C9A96E] flex items-center gap-1">
                    <Check className="w-3.5 h-3.5" /> Selected
                  </span>
                )}
              </div>

              {/* Stylists */}
              {TEAM_MEMBERS.map((stylist) => {
                const isSelected =
                  selectedStylist !== 'no-preference' && selectedStylist?.id === stylist.id;
                return (
                  <div
                    key={stylist.id}
                    onClick={() => setSelectedStylist(stylist)}
                    className={`p-3.5 rounded-2xl border transition-all duration-200 cursor-pointer flex items-center gap-3.5 ${
                      isSelected
                        ? 'border-[#C9A96E] bg-[#FAF7F2] shadow-sm'
                        : 'border-[#2D2D2D]/10 bg-white hover:border-[#C9A96E]/50'
                    }`}
                  >
                    <div className="w-12 h-12 rounded-full p-0.5 bg-gradient-to-tr from-[#C9A96E] to-[#D4A5A5] shrink-0">
                      <img
                        src={stylist.image}
                        alt={stylist.name}
                        className="w-full h-full rounded-full object-cover object-center border border-white"
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="font-serif text-sm font-medium text-[#2D2D2D] truncate">
                        {stylist.name}
                      </h4>
                      <p className="text-[11px] text-[#C9A96E] font-medium truncate">
                        {stylist.role}
                      </p>
                      <p className="text-[10px] text-[#2D2D2D]/50 truncate mt-0.5">
                        {stylist.specialties[0]}
                      </p>
                    </div>
                    {isSelected && (
                      <span className="w-5 h-5 rounded-full bg-[#C9A96E] text-white flex items-center justify-center shrink-0">
                        <Check className="w-3 h-3" />
                      </span>
                    )}
                  </div>
                );
              })}
            </div>

            {/* Nav */}
            <div className="pt-4 border-t border-[#2D2D2D]/10 flex items-center justify-between">
              <button
                type="button"
                onClick={handlePrevStep}
                className="px-6 py-2.5 rounded-full border border-[#2D2D2D]/20 text-[#2D2D2D] hover:bg-[#FAF7F2] text-sm font-medium transition-colors flex items-center gap-2 cursor-pointer"
              >
                <ArrowLeft className="w-4 h-4" />
                <span>Back</span>
              </button>
              <button
                type="button"
                onClick={handleNextStep}
                className="px-8 py-3 rounded-full bg-[#C9A96E] hover:bg-[#B89558] text-white font-medium text-sm tracking-wide shadow-sm transition-colors cursor-pointer flex items-center gap-2"
              >
                <span>Continue to Schedule</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </motion.div>
        )}

        {/* STEP 3: Select Date & Time */}
        {currentStep === 3 && (
          <motion.div
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 10 }}
          >
            <div className="mb-6">
              <h3 className="font-serif text-2xl text-[#2D2D2D] mb-1">
                Select Date & Time
              </h3>
              <p className="text-xs sm:text-sm text-[#2D2D2D]/60">
                Salon hours: Tuesday–Friday 9am–8pm, Saturday 9am–6pm, Sunday 10am–4pm (Closed Mondays).
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              {/* Date Input */}
              <div className="bg-[#FAF7F2] p-6 rounded-2xl border border-[#2D2D2D]/10">
                <label className="block text-xs font-semibold uppercase tracking-wider text-[#2D2D2D] mb-2 flex items-center gap-1.5">
                  <CalendarIcon className="w-4 h-4 text-[#C9A96E]" />
                  <span>Choose Appointment Date</span>
                </label>
                <input
                  type="date"
                  value={selectedDate}
                  min={new Date().toISOString().split('T')[0]}
                  onChange={(e) => setSelectedDate(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl bg-white border border-[#2D2D2D]/15 text-[#2D2D2D] text-sm focus:outline-none focus:ring-2 focus:ring-[#C9A96E]"
                />
                <p className="text-[11px] text-[#2D2D2D]/55 mt-2">
                  *Appointments available up to 60 days in advance.
                </p>
              </div>

              {/* Time Slots */}
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-[#2D2D2D] mb-3 flex items-center gap-1.5">
                  <Clock className="w-4 h-4 text-[#C9A96E]" />
                  <span>Available Time Slots</span>
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
                  {TIME_SLOTS.map((slot) => {
                    const isSelected = selectedTime === slot;
                    return (
                      <button
                        key={slot}
                        type="button"
                        onClick={() => setSelectedTime(slot)}
                        className={`py-2.5 px-3 rounded-xl text-xs font-medium transition-all cursor-pointer ${
                          isSelected
                            ? 'bg-[#C9A96E] text-white shadow-xs font-semibold'
                            : 'bg-[#FAF7F2] text-[#2D2D2D] hover:bg-[#F3ECE2] border border-[#2D2D2D]/10'
                        }`}
                      >
                        {slot}
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Nav */}
            <div className="pt-4 border-t border-[#2D2D2D]/10 flex items-center justify-between">
              <button
                type="button"
                onClick={handlePrevStep}
                className="px-6 py-2.5 rounded-full border border-[#2D2D2D]/20 text-[#2D2D2D] hover:bg-[#FAF7F2] text-sm font-medium transition-colors flex items-center gap-2 cursor-pointer"
              >
                <ArrowLeft className="w-4 h-4" />
                <span>Back</span>
              </button>
              <button
                type="button"
                disabled={!selectedDate || !selectedTime}
                onClick={handleNextStep}
                className="px-8 py-3 rounded-full bg-[#C9A96E] hover:bg-[#B89558] text-white font-medium text-sm tracking-wide shadow-sm transition-colors disabled:opacity-40 disabled:cursor-not-allowed cursor-pointer flex items-center gap-2"
              >
                <span>Continue to Review</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </motion.div>
        )}

        {/* STEP 4: Guest Contact Info & Live Summary */}
        {currentStep === 4 && (
          <motion.div
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 10 }}
          >
            <div className="mb-6">
              <h3 className="font-serif text-2xl text-[#2D2D2D] mb-1">
                Guest Details & Review
              </h3>
              <p className="text-xs sm:text-sm text-[#2D2D2D]/60">
                Please provide your contact information to receive appointment reminders and confirmation.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-8">
              {/* Form Inputs (7 cols) */}
              <form onSubmit={handleConfirmBooking} id="booking-confirm-form" className="lg:col-span-7 space-y-4">
                <div>
                  <label className="block text-xs font-semibold text-[#2D2D2D] mb-1">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Victoria Sterling"
                    value={guestName}
                    onChange={(e) => setGuestName(e.target.value)}
                    className="w-full px-4 py-2.5 rounded-xl bg-[#FAF7F2] border border-[#2D2D2D]/15 text-sm text-[#2D2D2D] focus:outline-none focus:ring-2 focus:ring-[#C9A96E]"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-[#2D2D2D] mb-1">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="victoria@example.com"
                      value={guestEmail}
                      onChange={(e) => setGuestEmail(e.target.value)}
                      className="w-full px-4 py-2.5 rounded-xl bg-[#FAF7F2] border border-[#2D2D2D]/15 text-sm text-[#2D2D2D] focus:outline-none focus:ring-2 focus:ring-[#C9A96E]"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-[#2D2D2D] mb-1">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="(555) 000-0000"
                      value={guestPhone}
                      onChange={(e) => setGuestPhone(e.target.value)}
                      className="w-full px-4 py-2.5 rounded-xl bg-[#FAF7F2] border border-[#2D2D2D]/15 text-sm text-[#2D2D2D] focus:outline-none focus:ring-2 focus:ring-[#C9A96E]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#2D2D2D] mb-1">
                    Special Hair Notes or Requests (Optional)
                  </label>
                  <textarea
                    rows={3}
                    placeholder="E.g. Hair is shoulder length, history of box dye, sensitive scalp..."
                    value={guestNotes}
                    onChange={(e) => setGuestNotes(e.target.value)}
                    className="w-full px-4 py-2.5 rounded-xl bg-[#FAF7F2] border border-[#2D2D2D]/15 text-sm text-[#2D2D2D] focus:outline-none focus:ring-2 focus:ring-[#C9A96E] resize-none"
                  />
                </div>

                {/* Promo Code Input */}
                <div className="pt-2">
                  <div className="flex items-center gap-2">
                    <input
                      type="text"
                      placeholder="Have a promo code? (Try FIRST20)"
                      value={promoCodeInput}
                      onChange={(e) => setPromoCodeInput(e.target.value)}
                      className="flex-1 px-4 py-2 rounded-xl bg-[#FAF7F2] border border-[#2D2D2D]/15 text-xs text-[#2D2D2D] uppercase focus:outline-none focus:ring-2 focus:ring-[#C9A96E]"
                    />
                    <button
                      type="button"
                      onClick={handleApplyPromo}
                      className="px-4 py-2 rounded-xl bg-[#2D2D2D] text-white text-xs font-medium hover:bg-[#C9A96E] transition-colors cursor-pointer"
                    >
                      Apply
                    </button>
                  </div>
                  {appliedPromo && (
                    <p className="text-xs text-emerald-700 font-medium mt-1 flex items-center gap-1">
                      <Tag className="w-3.5 h-3.5" />
                      <span>Coupon &apos;{appliedPromo}&apos; applied: 20% discount granted!</span>
                    </p>
                  )}
                </div>
              </form>

              {/* Booking Summary Card (5 cols) */}
              <div className="lg:col-span-5 bg-[#FAF7F2] rounded-2xl p-6 border border-[#C9A96E]/30 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between pb-3 border-b border-[#2D2D2D]/10 mb-4">
                    <span className="font-serif text-lg text-[#2D2D2D]">
                      Reservation Summary
                    </span>
                    <span className="text-[11px] font-semibold text-[#C9A96E] uppercase tracking-wider">
                      Luxe Studio
                    </span>
                  </div>

                  <div className="space-y-3 text-xs sm:text-sm text-[#2D2D2D]/80 mb-6">
                    <div className="flex justify-between">
                      <span className="text-[#2D2D2D]/60">Service:</span>
                      <strong className="text-[#2D2D2D] text-right font-medium">
                        {selectedService?.name}
                      </strong>
                    </div>

                    <div className="flex justify-between">
                      <span className="text-[#2D2D2D]/60">Duration:</span>
                      <span className="font-medium">{selectedService?.duration}</span>
                    </div>

                    <div className="flex justify-between">
                      <span className="text-[#2D2D2D]/60">Stylist:</span>
                      <span className="font-medium text-[#2D2D2D]">
                        {selectedStylist === 'no-preference'
                          ? 'First Available Master'
                          : selectedStylist.name}
                      </span>
                    </div>

                    <div className="flex justify-between">
                      <span className="text-[#2D2D2D]/60">Date & Time:</span>
                      <span className="font-medium text-[#2D2D2D]">
                        {selectedDate} at {selectedTime}
                      </span>
                    </div>

                    {priceCalc.discount > 0 && (
                      <div className="flex justify-between text-emerald-700">
                        <span>New Client Special (20%):</span>
                        <span>-₹{priceCalc.discount.toLocaleString('en-IN')}</span>
                      </div>
                    )}

                    <div className="pt-3 border-t border-[#2D2D2D]/10 flex justify-between items-baseline">
                      <span className="font-serif text-base text-[#2D2D2D]">
                        Estimated Total:
                      </span>
                      <span className="font-serif text-2xl font-bold text-[#C9A96E]">
                        ₹{priceCalc.total.toLocaleString('en-IN')}
                      </span>
                    </div>
                  </div>

                  {/* Cancellation Policy Disclosure */}
                  <div className="p-3 rounded-xl bg-white/70 border border-[#2D2D2D]/10 text-[11px] text-[#2D2D2D]/70 leading-relaxed mb-4">
                    <p className="font-semibold text-[#2D2D2D] mb-0.5 flex items-center gap-1">
                      <ShieldAlert className="w-3 h-3 text-[#C9A96E]" />
                      Cancellation Policy
                    </p>
                    48-hour notice requested for cancellations. No credit card charge is processed now; payment is collected in-person upon service completion.
                  </div>
                </div>

                <button
                  type="submit"
                  form="booking-confirm-form"
                  disabled={!guestName || !guestEmail || !guestPhone}
                  className="w-full py-3.5 px-6 rounded-full bg-[#C9A96E] hover:bg-[#B89558] text-white font-medium text-sm tracking-wide shadow-md transition-all cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  Confirm Booking
                </button>
              </div>
            </div>

            {/* Back button */}
            <div className="pt-4 border-t border-[#2D2D2D]/10">
              <button
                type="button"
                onClick={handlePrevStep}
                className="px-6 py-2.5 rounded-full border border-[#2D2D2D]/20 text-[#2D2D2D] hover:bg-[#FAF7F2] text-sm font-medium transition-colors flex items-center gap-2 cursor-pointer"
              >
                <ArrowLeft className="w-4 h-4" />
                <span>Back</span>
              </button>
            </div>
          </motion.div>
        )}
      </div>

      {/* CONFIRMATION SUCCESS MODAL */}
      <AnimatePresence>
        {bookingConfirmed && confirmationData && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-xs">
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="relative w-full max-w-lg bg-[#FAF7F2] rounded-3xl p-6 sm:p-8 shadow-2xl border border-[#C9A96E]/40 text-center"
            >
              {/* Checkmark Animation Container */}
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: 'spring', damping: 12, stiffness: 200, delay: 0.1 }}
                className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto mb-4 border border-emerald-300"
              >
                <Check className="w-8 h-8" />
              </motion.div>

              <h3 className="font-serif text-3xl font-normal text-[#2D2D2D] mb-2">
                You&apos;re All Set!
              </h3>
              <p className="font-sans text-sm text-[#2D2D2D]/75 mb-6">
                Confirmation details and calendar invite have been sent to <strong>{confirmationData.guestEmail}</strong>.
              </p>

              {/* Receipt Ticket Box */}
              <div className="bg-white rounded-2xl p-5 text-left text-xs sm:text-sm space-y-2 border border-[#2D2D2D]/10 shadow-xs mb-6">
                <div className="flex justify-between pb-2 border-b border-[#2D2D2D]/10">
                  <span className="text-[#2D2D2D]/60">Booking Reference:</span>
                  <span className="font-mono font-bold text-[#C9A96E]">{confirmationData.bookingRef}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#2D2D2D]/60">Guest:</span>
                  <span className="font-medium text-[#2D2D2D]">{confirmationData.guestName}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#2D2D2D]/60">Service:</span>
                  <span className="font-medium text-[#2D2D2D]">{confirmationData.service.name}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#2D2D2D]/60">Stylist:</span>
                  <span className="font-medium text-[#2D2D2D]">{confirmationData.stylist}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#2D2D2D]/60">Scheduled:</span>
                  <span className="font-medium text-[#2D2D2D]">{confirmationData.date} at {confirmationData.time}</span>
                </div>
                <div className="flex justify-between pt-2 border-t border-[#2D2D2D]/10 font-semibold">
                  <span>Total Due Upon Arrival:</span>
                  <span className="text-[#C9A96E]">₹{confirmationData.total.toLocaleString('en-IN')}</span>
                </div>
              </div>

              <div className="flex items-center gap-3 justify-center">
                <button
                  type="button"
                  onClick={handleReset}
                  className="px-8 py-3 rounded-full bg-[#C9A96E] hover:bg-[#B89558] text-white font-medium text-xs uppercase tracking-wider transition-colors cursor-pointer shadow-sm"
                >
                  Done
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};
