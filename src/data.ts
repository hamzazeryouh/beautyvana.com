import { Product, RoutineQuestion } from './types';

export const WHATSAPP_NUMBER = '15558904321'; // Default WhatsApp number

export const PRODUCTS: Product[] = [
  {
    id: 'rad-serum',
    name: 'Radiance Serum',
    tagline: 'Vitamin C + Bakuchiol',
    category: 'Serum',
    price: 24.00,
    rating: 4.9,
    reviewsCount: 342,
    imageBg: 'from-orange-100 via-amber-50 to-rose-200',
    imageUrl: 'https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&w=800&q=80',
    badge: 'Bestseller',
    description: 'A gentle yet potent brightening serum formulated with 15% pure Vitamin C and plant-derived Bakuchiol to visibly fade dark spots and boost collagen without irritation.',
    keyIngredients: ['15% L-Ascorbic Acid', '1% Bakuchiol', 'Hyaluronic Acid 5-Complex', 'Centella Asiatica'],
    benefits: ['Evens skin tone & texture', 'Fades hyperpigmentation & sun spots', 'Boosts natural skin luminosity'],
    volume: '30ml / 1.01 fl. oz.',
    howToUse: 'Apply 3-4 drops to clean, toned skin every morning. Gently pat until absorbed. Follow with moisturizer and SPF.'
  },
  {
    id: 'velvet-cream',
    name: 'Velvet Moisture Cream',
    tagline: 'Rice Water Essence + Ceramides',
    category: 'Cream',
    price: 32.00,
    rating: 4.8,
    reviewsCount: 518,
    imageBg: 'from-cyan-100 via-sky-50 to-blue-200',
    imageUrl: 'https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&w=800&q=80',
    badge: 'Viral Pick',
    description: 'Deeply comforting barrier cream infused with fermented Korean Rice Water and 5 essential Ceramides. Delivers 48-hour hydration with a weightless cloud-like finish.',
    keyIngredients: ['68% Fermented Rice Water', '5-Type Ceramide Complex', 'Squalane', 'Panthenol'],
    benefits: ['Repairs damaged skin barrier', 'Locks in weightless moisture', 'Leaves a silky velvet glow'],
    volume: '50ml / 1.69 fl. oz.',
    howToUse: 'Scoop a dime-sized amount and warm between fingertips. Massage onto face and neck as the final step of your routine.'
  },
  {
    id: 'glow-nectar',
    name: 'Glow Nectar Oil',
    tagline: 'Mugwort + Camellia Seed',
    category: 'Oil',
    price: 18.00,
    rating: 4.7,
    reviewsCount: 189,
    imageBg: 'from-green-100 via-emerald-50 to-teal-200',
    imageUrl: 'https://images.unsplash.com/photo-1608248597359-0e6d5c9a69ef?auto=format&fit=crop&w=800&q=80',
    description: 'A non-comedogenic botanical face oil that calms redness instantly. Made with wild Jeju Mugwort and cold-pressed Camellia seed oil for a glass-skin finish.',
    keyIngredients: ['Jeju Mugwort Extract', 'Camellia Japonica Seed Oil', 'Jojoba Oil', 'Blue Tansy'],
    benefits: ['Calms inflammation & breakouts', 'Seals hydration without clogging pores', 'Imparts instant glass-skin radiance'],
    volume: '30ml / 1.01 fl. oz.',
    howToUse: 'Press 2 drops into skin after moisturizer, or mix 1 drop directly into your liquid foundation for an all-day dewy finish.'
  },
  {
    id: 'midnight-dew',
    name: 'Midnight Dew Mask',
    tagline: 'Sleep Overnight Recovery',
    category: 'Mask',
    price: 28.00,
    rating: 4.9,
    reviewsCount: 426,
    imageBg: 'from-purple-100 via-fuchsia-50 to-violet-200',
    imageUrl: 'https://images.unsplash.com/photo-1567982047351-76b6f93e38ee?auto=format&fit=crop&w=800&q=80',
    badge: 'Award Winner',
    description: 'Wake up to plump, baby-soft skin. This gel-cream overnight treatment works with your skin circadian rhythm to intensely hydrate and smooth fine lines while you sleep.',
    keyIngredients: ['Melatonin Complex', 'Polyglutamic Acid', 'Niacinamide 4%', 'Beta-Glucan'],
    benefits: ['Intense overnight cell renewal', 'Plumps dehydration lines', 'Brightens dull morning complexion'],
    volume: '60ml / 2.02 fl. oz.',
    howToUse: 'Apply a generous layer across face and neck 20 minutes before bedtime. Rinse lightly with lukewarm water in the morning.'
  },
  {
    id: 'cloud-cleanser',
    name: 'Cloud Barrier Foam',
    tagline: 'Green Tea + Amino Acids',
    category: 'Cleanser',
    price: 20.00,
    rating: 4.8,
    reviewsCount: 290,
    imageBg: 'from-emerald-100 via-teal-50 to-cyan-200',
    imageUrl: 'https://images.unsplash.com/photo-1556228722-d1e3e7f4c561?auto=format&fit=crop&w=800&q=80',
    description: 'pH 5.5 balanced balancing foam cleanser that lifts away impurities, sunscreen, and excess sebum without stripping the skin natural lipid barrier.',
    keyIngredients: ['Boseong Green Tea Water', 'Apple Amino Acids', 'Allantoin', 'Glycerin'],
    benefits: ['Low pH gentle cleansing', 'Maintains optimal oil-water balance', 'Never leaves skin feeling tight'],
    volume: '150ml / 5.07 fl. oz.',
    howToUse: 'Lather a pea-sized amount with water between palms. Gently massage over damp face in circular motions for 60 seconds, then rinse.'
  },
  {
    id: 'glass-toner',
    name: 'Hydro Essence Toner',
    tagline: 'Birch Sap + Triple HA',
    category: 'Toner',
    price: 22.00,
    rating: 4.9,
    reviewsCount: 612,
    imageBg: 'from-blue-100 via-indigo-50 to-purple-200',
    imageUrl: 'https://images.unsplash.com/photo-1617897903246-719242758050?auto=format&fit=crop&w=800&q=80',
    badge: 'Must Have',
    description: 'A viscous hydrating prep toner powered by Korean White Birch Sap. Acts as a moisture magnet that multiplies the absorption rate of all subsequent serums.',
    keyIngredients: ['80% Inje Birch Sap', 'Triple Molecular Weight HA', 'Betaine', 'Heartleaf Extract'],
    benefits: ['Quenches deep skin thirst', 'Preps skin for maximum serum uptake', 'Soothes heat & sensitivity'],
    volume: '200ml / 6.76 fl. oz.',
    howToUse: 'After cleansing, pour several drops into palms and pat directly into face and neck. For extra dry days, layer 2-3 times.'
  }
];

export const ROUTINE_QUESTIONS: RoutineQuestion[] = [
  {
    id: 1,
    question: "What is your primary skin concern right now?",
    options: [
      { label: "Dullness & Uneven Tone", description: "Looking for bright, glowing glass skin", recommendedCategories: ['Serum', 'Toner'] },
      { label: "Dryness & Flaking", description: "Skin feels tight, thirsty, or dehydrated", recommendedCategories: ['Cream', 'Toner', 'Mask'] },
      { label: "Redness & Sensitivity", description: "Easily irritated, compromised barrier", recommendedCategories: ['Oil', 'Cream', 'Cleanser'] },
      { label: "Tired Morning Skin", description: "Want overnight plumping & recovery", recommendedCategories: ['Mask', 'Serum'] }
    ]
  },
  {
    id: 2,
    question: "How does your skin feel by midday?",
    options: [
      { label: "Comfortable & Balanced", description: "Normal moisture levels throughout the day", recommendedCategories: ['Serum', 'Cream'] },
      { label: "Slick & Oily in T-Zone", description: "Produces excess sebum, needs lightweight moisture", recommendedCategories: ['Cleanser', 'Toner'] },
      { label: "Tight & Needing Moisture", description: "Craves richer creams and botanical oils", recommendedCategories: ['Cream', 'Oil', 'Mask'] }
    ]
  }
];

export const TESTIMONIALS = [
  {
    quote: "The Radiance Serum cleared my stubborn post-acne dark spots in 3 weeks! Plus ordering through WhatsApp was so effortless and personal.",
    author: "Soo-Jin K.",
    location: "Seoul, KR",
    rating: 5,
    product: "Radiance Serum"
  },
  {
    quote: "I love the Frosted Glass aesthetic of the bottles and the Velvet Cream is literally like cashmere on my dry sensitive winter skin.",
    author: "Elena R.",
    location: "Toronto, CA",
    rating: 5,
    product: "Velvet Moisture Cream"
  },
  {
    quote: "Beautyvana routine finder recommended the Hydro Toner and Glow Nectar. My skin has never looked this luminous without makeup!",
    author: "Chloe M.",
    location: "Sydney, AU",
    rating: 5,
    product: "Glow Nectar Oil"
  }
];
