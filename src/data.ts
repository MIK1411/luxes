import balayageBeforeImg from './assets/images/balayage_before_hair_1790162199152.jpg';
import balayageAfterImg from './assets/images/balayage_after_hair_1790162218738.jpg';
import frizzBeforeImg from './assets/images/frizz_before_hair_1790162236136.jpg';
import glassAfterImg from './assets/images/glass_after_hair_1790162253865.jpg';
import bridalBeforeImg from './assets/images/bridal_before_hair_1790162269275.jpg';
import bridalAfterImg from './assets/images/bridal_after_hair_1790162286447.jpg';

export interface Service {
  id: string;
  name: string;
  category: 'Cuts & Styling' | 'Color' | 'Treatments' | 'Extensions' | 'Bridal';
  description: string;
  duration: string;
  price: string;
  numericPrice: number;
  image: string;
  popular?: boolean;
}

export interface Stylist {
  id: string;
  name: string;
  initials: string;
  role: string;
  bio: string;
  specialties: string[];
  image: string;
  gradient: string;
  instagram: string;
}

export interface Review {
  id: string;
  name: string;
  rating: number;
  service: string;
  date: string;
  text: string;
  verified: boolean;
  avatar: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: string;
  image: string;
  description: string;
  stylist: string;
}

export interface BeforeAfterPair {
  id: string;
  title: string;
  description: string;
  beforeLabel: string;
  afterLabel: string;
  beforeImage: string;
  afterImage: string;
  beforeDescription: string;
  afterDescription: string;
}

export const SALON_INFO = {
  name: 'Luxe Studio',
  tagline: 'Where Royal Indian Elegance Meets Modern Hair Artistry',
  subheading: 'India’s premier luxury atelier for bespoke hair transformations, bridal couture styling, and restorative Ayurvedic hair spas in Bandra West, Mumbai.',
  phone: '+91 98201 44589',
  phoneRaw: 'tel:+919820144589',
  whatsapp: '+91 98201 44589',
  whatsappRaw: 'https://wa.me/919820144589?text=Hi%20Luxe%20Studio%2C%20I%20would%20like%20to%20book%20an%20appointment',
  email: 'concierge@luxestudiomumbai.com',
  address: 'Plot 42, Waterfield Road, Bandra West',
  city: 'Mumbai, Maharashtra 400050',
  country: 'India',
  currency: '₹',
  rating: 4.9,
  reviewCount: 480,
  yearsOfExcellence: 12,
  stylistCount: 6,
  hours: [
    { day: 'Monday', hours: '10:00 AM – 8:00 PM' },
    { day: 'Tuesday', hours: '10:00 AM – 8:00 PM' },
    { day: 'Wednesday', hours: '10:00 AM – 8:00 PM' },
    { day: 'Thursday', hours: '10:00 AM – 8:30 PM' },
    { day: 'Friday', hours: '10:00 AM – 9:00 PM' },
    { day: 'Saturday', hours: '9:30 AM – 9:00 PM' },
    { day: 'Sunday', hours: '10:00 AM – 8:00 PM' },
  ],
};

export const SERVICES: Service[] = [
  // Cuts & Styling
  {
    id: 'signature-cut',
    name: 'Signature Designer Haircut & Blowout',
    category: 'Cuts & Styling',
    description: 'Bespoke precision shear cut customized to Indian hair density, face shape, and texture. Accompanied by Kérastase deep wash and radiant velvet blowout.',
    duration: '60 min',
    price: '₹2,499',
    numericPrice: 2499,
    image: 'https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=800&q=80',
    popular: true,
  },
  {
    id: 'editorial-blowout',
    name: 'Royal Bollywood Velvet Blowdry',
    category: 'Cuts & Styling',
    description: 'Aromatherapy scalp massage with botanical oils, moisture bath, and iconic high-volume red carpet brush finish that lasts for 3 days.',
    duration: '45 min',
    price: '₹1,499',
    numericPrice: 1499,
    image: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'fringe-bang-trim',
    name: 'Face-Framing Curtain Bangs & Texture',
    category: 'Cuts & Styling',
    description: 'Delicate curtain fringe sculpt or dry texturizing to accentuate cheekbones and jawline between full salon appointments.',
    duration: '30 min',
    price: '₹899',
    numericPrice: 899,
    image: 'https://images.unsplash.com/photo-1595476108010-b4d1f102b1b1?auto=format&fit=crop&w=800&q=80',
  },

  // Color
  {
    id: 'custom-balayage',
    name: 'Caramel & Honey Sun-Kissed Balayage',
    category: 'Color',
    description: 'Hand-painted dimensional contouring specially formulated for warm Indian skin undertones with bond-building Olaplex infusion and gloss seal.',
    duration: '3–3.5 hours',
    price: '₹7,999',
    numericPrice: 7999,
    image: 'https://images.unsplash.com/photo-1519699047748-de8e457a634e?auto=format&fit=crop&w=800&q=80',
    popular: true,
  },
  {
    id: 'copper-vibrant',
    name: 'Rich Mocha Brunette & Cinnamon Glaze',
    category: 'Color',
    description: 'Luminous liquid glass hair glossing that transforms dull dark hair into lustrous espresso and spiced cinnamon reflections.',
    duration: '2 hours',
    price: '₹4,999',
    numericPrice: 4999,
    image: 'https://images.unsplash.com/photo-1527799820374-dcf8d9d4a388?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'root-touch-color',
    name: 'Ammonia-Free Organic Root Touchup',
    category: 'Color',
    description: '100% gentle grey coverage with nourishing argan and macadamia botanical oils that leave hair soft and scalp soothed.',
    duration: '90 min',
    price: '₹2,999',
    numericPrice: 2999,
    image: 'https://images.unsplash.com/photo-1580618672591-eb180b1a973f?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'global-blonding',
    name: 'Champagne Beige Foilayage & Lightening',
    category: 'Color',
    description: 'Multi-dimensional seamless lightener foils with anti-brass toner, ice pearl finish, and deep bond restoration.',
    duration: '4 hours',
    price: '₹9,499',
    numericPrice: 9499,
    image: 'https://images.unsplash.com/photo-1605497788044-5a32c7078486?auto=format&fit=crop&w=800&q=80',
  },

  // Treatments
  {
    id: 'brazilian-keratin',
    name: 'Brazilian Cysteine & Keratin Infusion',
    category: 'Treatments',
    description: 'Formaldehyde-free smoothing therapy designed for Indian tropical humidity. Banishes 95% frizz, delivers mirror shine, and cuts styling time by half.',
    duration: '2.5–3 hours',
    price: '₹6,999',
    numericPrice: 6999,
    image: 'https://images.unsplash.com/photo-1562322140-8baeececf3df?auto=format&fit=crop&w=800&q=80',
    popular: true,
  },
  {
    id: 'ayurvedic-scalp-spa',
    name: 'Royal Shirodhara & Botanical Hair Spa',
    category: 'Treatments',
    description: 'Signature Indian royal treatment: warm herbal infused Brahmi & Bhringraj oil massage, head marma acupressure, steam pod, and Kérastase caviar mask.',
    duration: '75 min',
    price: '₹3,499',
    numericPrice: 3499,
    image: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=800&q=80',
    popular: true,
  },
  {
    id: 'olaplex-k18-restoration',
    name: 'K18 Molecular Peptide Repair Ritual',
    category: 'Treatments',
    description: 'Patented biomimetic peptide therapy that reverses bleach, thermal, and chemical damage within 4 minutes, restoring elasticity and virgin strength.',
    duration: '45 min',
    price: '₹2,799',
    numericPrice: 2799,
    image: 'https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?auto=format&fit=crop&w=800&q=80',
  },

  // Extensions
  {
    id: 'invisible-weft-extensions',
    name: '100% Indian Remy Invisible Hair Extensions',
    category: 'Extensions',
    description: 'Premium ethically sourced temple virgin hair. Zero damage micro-bead wefts for natural length, cascading volume, and seamless blending.',
    duration: '3–4 hours',
    price: '₹18,999',
    numericPrice: 18999,
    image: 'https://images.unsplash.com/photo-1522337094346-2917730e7136?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'tape-in-extensions',
    name: 'Seamless Tape-In Density Fillers',
    category: 'Extensions',
    description: 'Medical-grade ultra-thin adhesive strips for instant volume around crown, temples, and perimeter for lavish open hairstyles.',
    duration: '90 min',
    price: '₹12,499',
    numericPrice: 12499,
    image: 'https://images.unsplash.com/photo-1500917293891-ef795e70e1f6?auto=format&fit=crop&w=800&q=80',
  },

  // Bridal
  {
    id: 'bridal-couture-styling',
    name: 'Royal Indian Bridal Couture Styling',
    category: 'Bridal',
    description: 'Master wedding styling: traditional or contemporary bridal bun with real Mogra / roses floral setting, Dupatta & Maang Tikka draping, and 12-hour hold spray.',
    duration: '2 hours',
    price: '₹8,499',
    numericPrice: 8499,
    image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=800&q=80',
    popular: true,
  },
  {
    id: 'sangeet-cocktail-waves',
    name: 'Sangeet & Cocktail Hollywood Glam Waves',
    category: 'Bridal',
    description: 'High-octane sculpted voluminous waves or textured textured half-updo with pearl pins, ideal for evening gowns and lehengas.',
    duration: '90 min',
    price: '₹4,499',
    numericPrice: 4499,
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'bridal-trial',
    name: 'Complete Bridal Consultation & Look Trial',
    category: 'Bridal',
    description: 'In-depth consultation testing 2 unique hair silhouettes with your jewelry, neckline evaluation, and wedding itinerary planning.',
    duration: '2.5 hours',
    price: '₹4,999',
    numericPrice: 4999,
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=80',
  }
];

export const TEAM_MEMBERS: Stylist[] = [
  {
    id: 'rohit-verma',
    name: 'Rohit Verma',
    initials: 'RV',
    role: 'Creative Director & Master Stylist',
    bio: 'Trained at Vidal Sassoon London with 14 years curating iconic hairstyles for Bollywood celebrities and high-fashion runways across Mumbai and Delhi. Renowned for architectural precision cuts.',
    specialties: ['Precision Cuts', 'Couture Styling', 'Celebrity Haircraft'],
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=600&q=80',
    gradient: 'from-[#D4A5A5] via-[#C9A96E] to-[#FAF7F2]',
    instagram: '@rohit.luxestudio',
  },
  {
    id: 'ananya-mehta',
    name: 'Ananya Mehta',
    initials: 'AM',
    role: 'Lead Balayage & Color Alchemist',
    bio: 'Ananya is celebrated across Mumbai for crafting warm honey, toffee, and espresso balayage tones perfectly harmonious with Indian skin tones without hair damage.',
    specialties: ['Caramel Balayage', 'Ammonia-Free Color', 'Glossing'],
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=600&q=80',
    gradient: 'from-[#C9A96E] via-[#DFCA9B] to-[#FAF7F2]',
    instagram: '@ananya.colorcraft',
  },
  {
    id: 'priya-sharma',
    name: 'Priya Sharma',
    initials: 'PS',
    role: 'Bridal Couture Hair Artist',
    bio: 'With over 350 Indian weddings styled across Udaipur, Goa, and Mumbai, Priya is the bridal choice for royal textured buns, real fresh flower ornamentation, and dupatta draping.',
    specialties: ['Royal Bridal Buns', 'Dupatta Setting', 'Floral Sculpting'],
    image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=600&q=80',
    gradient: 'from-[#D4A5A5] via-[#E8C5C8] to-[#FAF7F2]',
    instagram: '@priya.bridalhair',
  },
  {
    id: 'arjun-nair',
    name: 'Arjun Nair',
    initials: 'AN',
    role: 'Keratin & Humidity Shield Specialist',
    bio: 'Specialist in Brazilian cysteine, Botox smoothing, and anti-frizz protocols for the Indian climate. Passionate about transforming damaged, unruly textures into glass hair.',
    specialties: ['Cysteine Smoothing', 'K18 Molecular Spa', 'Anti-Frizz'],
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&q=80',
    gradient: 'from-[#A87B4F] via-[#C9A96E] to-[#FAF7F2]',
    instagram: '@arjun.hairrepair',
  },
  {
    id: 'meera-sen',
    name: 'Meera Sen',
    initials: 'MS',
    role: 'Ayurvedic Scalp & Hair Therapist',
    bio: 'Certified Ayurvedic trichologist blending traditional Indian botanical head massages with modern Swiss scalp micro-peels for severe hairfall recovery and lustrous hair growth.',
    specialties: ['Shirodhara Rituals', 'Herbal Hair Therapy', 'Scalp Health'],
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=600&q=80',
    gradient: 'from-[#E2B4B4] via-[#D4A5A5] to-[#FAF7F2]',
    instagram: '@meera.ayurhair',
  },
  {
    id: 'vikram-singh',
    name: 'Vikram Singh',
    initials: 'VS',
    role: 'Remy Hair Extension Master',
    bio: 'Pioneer of invisible micro-bead wefts and volume fillers in India. Ensures zero pull on natural roots, seamlessly blending lengths with customized root shadowing.',
    specialties: ['Temple Remy Wefts', 'Micro-Tape Fillers', 'Color Blending'],
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=600&q=80',
    gradient: 'from-[#C9A96E] via-[#8C6D40] to-[#FAF7F2]',
    instagram: '@vikram_extensions',
  },
];

export const REVIEWS: Review[] = [
  {
    id: 'rev-1',
    name: 'Rhea Kapoor',
    rating: 5,
    service: 'Royal Indian Bridal Couture Styling',
    date: '3 days ago',
    text: 'Priya made me feel like an absolute Mughal queen on my wedding day! My bridal bun stayed intact through 6 hours of ceremonies, heavy dupatta weight, and dancing. The fresh baby’s breath and mogra were pinned so gracefully.',
    verified: true,
    avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=200&q=80',
  },
  {
    id: 'rev-2',
    name: 'Karan Mehra',
    rating: 5,
    service: 'Signature Designer Haircut & Blowout',
    date: '1 week ago',
    text: 'Rohit Verma is a magician with shears. He took the time to understand my hair texture and gave me a cut that falls into place effortlessly even without daily styling. Truly Mumbai’s finest atelier.',
    verified: true,
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80',
  },
  {
    id: 'rev-3',
    name: 'Sunita Singhania',
    rating: 5,
    service: 'Royal Shirodhara & Botanical Hair Spa',
    date: '2 weeks ago',
    text: 'The Shirodhara and botanical oil massage was pure bliss. I entered feeling exhausted from Mumbai traffic and left feeling like I had spent a weekend in Kerala. My scalp feels invigorated and hair is so glossy.',
    verified: true,
    avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=200&q=80',
  },
  {
    id: 'rev-4',
    name: 'Aisha Merchant',
    rating: 5,
    service: 'Caramel & Honey Sun-Kissed Balayage',
    date: '3 weeks ago',
    text: 'Finding someone in Mumbai who understands how to lift dark Indian hair without turning it orange is rare. Ananya gave me the most glorious caramel balayage with zero damage! My friends have all booked appointments now.',
    verified: true,
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80',
  },
  {
    id: 'rev-5',
    name: 'Natasha Poonawalla',
    rating: 5,
    service: 'Brazilian Cysteine & Keratin Infusion',
    date: '1 month ago',
    text: 'Mumbai humidity used to make my hair frizz uncontrollably within minutes of stepping outside. Arjun’s Cysteine treatment gave me smooth, liquid glass hair that stays silky even during monsoon rain!',
    verified: true,
    avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=200&q=80',
  },
  {
    id: 'rev-6',
    name: 'Divya Deshmukh',
    rating: 5,
    service: 'Sangeet & Cocktail Hollywood Glam Waves',
    date: '1 month ago',
    text: 'Styled my hair for my sister’s sangeet in Bandra. The volume and shine stayed through non-stop dancing all night. Complimentary Kashmiri Kahwa tea was served during prep which made the experience so luxurious.',
    verified: true,
    avatar: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=200&q=80',
  },
];

export const BEFORE_AFTER_CASES: BeforeAfterPair[] = [
  {
    id: 'case-1',
    title: 'Warm Honey & Toffee Balayage',
    description: 'Transforming dull jet-black hair with brassy faded tips into dimensional honey ribbons.',
    beforeLabel: 'Starting Base: Dull & Monotone Black',
    afterLabel: 'Result: Hand-Painted Honey Balayage',
    beforeImage: balayageBeforeImg,
    afterImage: balayageAfterImg,
    beforeDescription: 'Monotone dry ends, faded brass patches, and unstyled lifeless texture.',
    afterDescription: 'Seamless honey & toffee ribbons with Kérastase gloss shine, soft waves, and zero brass.',
  },
  {
    id: 'case-2',
    title: 'Monsoon Humidity Frizz to Liquid Glass',
    description: 'Coarse, frizzy wavy hair renewed into mirror-shine sleekness.',
    beforeLabel: 'Starting Base: Frizzy Porous Hair',
    afterLabel: 'Result: Liquid Cysteine Glass Hair',
    beforeImage: frizzBeforeImg,
    afterImage: glassAfterImg,
    beforeDescription: 'High humidity volume expansion with damaged cuticle and unruly flyaways.',
    afterDescription: 'Sealed keratin alignment with silk bounce, reflective liquid gloss, and zero thermal tools needed.',
  },
  {
    id: 'case-3',
    title: 'Royal Bridal Hair Transformation',
    description: 'Everyday limp hair styled into a grand architectural bridal bun with fresh fragrant jasmine.',
    beforeLabel: 'Starting Base: Everyday Limp Hair',
    afterLabel: 'Result: Royal Indian Bridal Bun',
    beforeImage: bridalBeforeImg,
    afterImage: bridalAfterImg,
    beforeDescription: 'Fine density without volume to support heavy bridal jewelry or dupatta.',
    afterDescription: 'Sculpted structured bun reinforced with weightless hair cushions, real fresh Mogra garland, and gold jewel setting.',
  },
];

export const GALLERY_THUMBNAILS: GalleryItem[] = [
  {
    id: 'gal-1',
    title: 'Toffee Melt Balayage on Dark Hair',
    category: 'Color',
    image: 'https://images.unsplash.com/photo-1519699047748-de8e457a634e?auto=format&fit=crop&w=800&q=80',
    description: 'Subtle face-framing ribbons crafted for natural Indian brunettes',
    stylist: 'Ananya Mehta',
  },
  {
    id: 'gal-2',
    title: 'Royal Indian Bridal Bun with Real Mogra',
    category: 'Bridal',
    image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=800&q=80',
    description: 'Timeless floral hair craftsmanship for Indian wedding ceremonies',
    stylist: 'Priya Sharma',
  },
  {
    id: 'gal-3',
    title: 'Brazilian Liquid Cysteine Finish',
    category: 'Treatments',
    image: 'https://images.unsplash.com/photo-1562322140-8baeececf3df?auto=format&fit=crop&w=800&q=80',
    description: 'Anti-humidity glass hair that glides effortlessly through fingers',
    stylist: 'Arjun Nair',
  },
  {
    id: 'gal-4',
    title: 'Sangeet Hollywood Red Carpet Waves',
    category: 'Bridal',
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=80',
    description: 'Sculpted glossy waves paired with emerald lehenga accessories',
    stylist: 'Rohit Verma',
  },
  {
    id: 'gal-5',
    title: 'Cinnamon Gloss & Mocha Radiance',
    category: 'Color',
    image: 'https://images.unsplash.com/photo-1527799820374-dcf8d9d4a388?auto=format&fit=crop&w=800&q=80',
    description: 'Multi-tonal warm espresso glaze with mirror-finish hydration',
    stylist: 'Ananya Mehta',
  },
  {
    id: 'gal-6',
    title: 'Temple Remy Extensions Volume Transformation',
    category: 'Extensions',
    image: 'https://images.unsplash.com/photo-1522337094346-2917730e7136?auto=format&fit=crop&w=800&q=80',
    description: '24 inches of ethically sourced Indian temple Remy hair',
    stylist: 'Vikram Singh',
  },
];

export const FAQS: FAQItem[] = [
  {
    id: 'faq-1',
    question: 'How do you formulate hair color and balayage for Indian hair?',
    answer: 'Dark Indian hair naturally possesses dense red-orange undertones. At Luxe Studio, our master colorists use gentle low-volume lighteners enriched with Olaplex and K18 bond protectors. We customize cool-to-warm toners (caramel, mocha, toffee, cinnamon) that accentuate Indian skin complexions without brassiness or breakage.',
  },
  {
    id: 'faq-2',
    question: 'What is the difference between Brazilian Keratin and Cysteine treatment?',
    answer: 'While traditional treatments often contained harsh chemicals, our Cysteine infusion is 100% formaldehyde-free and naturally derived from amino acids. It respects your natural curl pattern, eliminating 90%+ frizz against Mumbai’s coastal humidity while leaving hair soft, touchable, and effortlessly manageable.',
  },
  {
    id: 'faq-3',
    question: 'Can you handle complete bridal hair, Dupatta setting, and Maang Tikka placement?',
    answer: 'Yes! Priya Sharma and our bridal team specialize in end-to-end luxury bridal hair couture. We supply professional hair padding, anchor heavy Dupattas safely with weightless pins, seamlessly set your Maang Tikka and Matha Patti, and integrate fresh flowers (Mogra, Baby’s Breath, or fresh roses).',
  },
  {
    id: 'faq-4',
    question: 'Where is the salon located and is valet parking available?',
    answer: 'We are situated at Plot 42, Waterfield Road in Bandra West, Mumbai (near Linking Road). Complimentary 3-hour valet parking is provided right outside our entrance for all registered clients.',
  },
  {
    id: 'faq-5',
    question: 'What is your cancellation and rescheduling policy?',
    answer: 'We respectfully request at least 24 hours notice for standard appointments and 48 hours for bridal and multi-hour transformation services. You can easily reschedule via phone or WhatsApp at +91 98201 44589.',
  },
  {
    id: 'faq-6',
    question: 'What luxury complimentary amenities do you provide during appointments?',
    answer: 'All guests enjoy our complimentary salon bar featuring freshly brewed Kashmiri Kahwa, organic Darjeeling green tea, artisanal espresso, tender coconut water, and artisanal macarons while your colors or hair spas process.',
  },
  {
    id: 'faq-7',
    question: 'Do you accept same-day appointments or walk-ins?',
    answer: 'While we encourage advance booking especially on weekends, we gladly accommodate same-day walk-ins whenever chair openings allow. Feel free to WhatsApp or call our concierge desk at +91 98201 44589 for live availability.',
  },
  {
    id: 'faq-8',
    question: 'What products do you use for hair spa and home maintenance?',
    answer: 'We work exclusively with Kérastase Paris, Olaplex, K18 Biomimetic Hairscience, Davines, and our exclusive in-house cold-pressed Ayurvedic botanical oils. Your stylist prescribes a customized home care regimen after every visit.',
  },
];

export const GIFT_CARD_PRESETS = [
  { amount: 2500, label: 'The Refresh Gift Card', note: 'Ideal for luxury designer haircut, blowout, or Ayurvedic botanical spa' },
  { amount: 5000, label: 'The Royal Indulgence Card', note: 'Covers rich glossing color, Cysteine therapy, or bridal party styling' },
  { amount: 10000, label: 'The Grand Transformation Card', note: 'Perfect for sun-kissed Balayage, bridal couture, or Remy extensions' },
];

export const TIME_SLOTS = [
  '10:30 AM',
  '11:45 AM',
  '01:15 PM',
  '02:30 PM',
  '03:45 PM',
  '05:00 PM',
  '06:15 PM',
  '07:30 PM',
];

