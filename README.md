# Luxe Studio Mumbai — Luxury Hair Atelier & Bridal Salon

> **Where Royal Elegance Meets Modern Artistry**  
> Premier luxury hair salon located on Waterfield Road, Bandra West, Mumbai, specializing in bespoke balayage, Ayurvedic botanical hair rituals, Brazilian cysteine glass hair, and opulent royal Indian bridal couture.

---

## ✨ Features

- **Curated Haircraft Services**:
  - Full catalog of high-end salon treatments tailored for Indian hair textures and climate.
  - Transparent pricing in Indian Rupees (**INR ₹**) with duration details and category filtering (Cuts & Styling, Color, Treatments, Extensions, Bridal).
  - Subtle Framer Motion entrance transitions and floating hover micro-interactions on service icons.

- **Interactive Before / After Transformation Slider**:
  - Drag-and-reveal split comparison slider showcasing authentic transformations.
  - Hand-painted Warm Honey Balayage on dark bases, Monsoon Humidity Frizz to Liquid Cysteine Glass Hair, and Royal Indian Bridal Bun with Mogra flowers.
  - Adaptive container width tracking that resizes seamlessly across mobile, tablet, and widescreen viewports.

- **4-Step Booking Wizard**:
  - **Step 1**: Choose service by category with preview thumbnail cards and pricing.
  - **Step 2**: Select stylist (creative directors, balayage alchemists, or first available).
  - **Step 3**: Pick appointment date and preferred time slot.
  - **Step 4**: Enter guest details, apply promotional discount codes (e.g. `FIRST20`), view full reservation summary, and generate a verified booking confirmation ticket.

- **Digital Gift Vouchers**:
  - Pre-set voucher denominations (₹2,500, ₹5,000, ₹10,000) or custom voucher generation (₹1,000 to ₹50,000) with a live card preview and instant checkout modal.

- **Master Artisans & Stylists**:
  - Profiles of top stylists including Vidal Sassoon-trained creative directors, colorists, and certified Ayurvedic scalp therapists.

- **Client Testimonials & FAQ**:
  - Verified 5-star customer reviews from bridal clients, treatments, and styling sessions.
  - Accordion FAQ addressing appointment prep, consultations, bridal trials, and hair health.

- **Sanctuary Location & Concierge Desk**:
  - Direct WhatsApp concierge integration, tap-to-call direct line, Google Maps directions, and valet parking information for Bandra West, Mumbai.

- **Fully Responsive & Device-Adaptive**:
  - Configured with `viewport-fit=cover` and device safe-area insets (`env(safe-area-inset-left)`, `env(safe-area-inset-right)`).
  - Touch-friendly tap targets ($\ge 44\text{px}$) and fluid typography scaling gracefully on narrow screens (320px–375px) up to 4K displays.

---

## 🎨 Design System & Color Palette

| Token | Hex Code | Description |
| :--- | :--- | :--- |
| **Creamy Ivory** | `#FAF7F2` | Calming background tones |
| **Charcoal** | `#2D2D2D` | Primary typography & high-contrast elements |
| **Warm Gold** | `#C9A96E` | Brand accent, CTA buttons, and highlighted badges |
| **Soft Champagne** | `#DFCA9B` | Subtle borders, shimmer highlights, and secondary icons |
| **Dusty Rose** | `#D4A5A5` | Romantic secondary accent and bridal styling cues |

### Typography
- **Headings**: *Playfair Display* (Editorial luxury serif)
- **Body & Controls**: *DM Sans* (Clean, modern sans-serif)

---

## 🛠️ Tech Stack

- **Framework**: [React 19](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/)
- **Bundler & Tooling**: [Vite 8](https://vitejs.dev/) + `@tailwindcss/vite`
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **Animation**: [Motion (Framer Motion)](https://motion.dev/)
- **Icons**: [Lucide React](https://lucide.dev/)

---

## 🚀 Getting Started

### Prerequisites
- Node.js (v18 or higher recommended)
- npm or bun

### Installation

```bash
# 1. Install dependencies
npm install

# 2. Run the development server
npm run dev

# 3. Build for production
npm run build

# 4. Check for TypeScript or lint issues
npm run lint
```

The application runs on `http://localhost:3000`.

---

## 📂 Project Structure

```
├── public/                 # Static assets
├── src/
│   ├── assets/             # Generated photography and imagery
│   │   └── images/
│   ├── components/         # Modular React components
│   │   ├── BookingSection.tsx     # 4-Step reservation wizard & confirmation modal
│   │   ├── ContactSection.tsx     # Bandra location, hours, WhatsApp concierge & map
│   │   ├── FAQSection.tsx         # Collapsible luxury salon FAQ
│   │   ├── Footer.tsx             # Salon footer, links, and operational hours
│   │   ├── GallerySection.tsx     # Interactive before/after transformation slider & gallery lightbox
│   │   ├── GiftCardsSection.tsx   # Digital gift voucher purchasing
│   │   ├── Hero.tsx               # Entrance hero banner with animated golden rings & trust badges
│   │   ├── Navbar.tsx             # Sticky blurred navigation & mobile drawer
│   │   ├── ReviewsSection.tsx     # Verified guest testimonials & ratings
│   │   ├── ServicesSection.tsx    # Curated services grid with floating icon animations
│   │   ├── SpecialOfferSection.tsx# New guest welcome promotion (FIRST20 code)
│   │   └── TeamSection.tsx        # Master stylist profiles & credentials
│   ├── App.tsx             # Root application orchestrator
│   ├── data.ts             # Salon catalog, pricing (INR), team, and reviews
│   ├── index.css           # Global Tailwind CSS definitions & typography
│   └── main.tsx            # React DOM entry point
├── index.html              # HTML entry with OpenGraph metadata & Google Fonts
├── metadata.json           # Application metadata & capabilities
├── package.json            # Project dependencies & scripts
├── tsconfig.json           # TypeScript configuration
└── vite.config.ts          # Vite build configuration
```

---

## 📜 License

Private & Proprietary — Built for Luxe Studio Mumbai. All rights reserved.
