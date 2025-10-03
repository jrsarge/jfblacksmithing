export const SITE_CONFIG = {
  name: 'JF Blacksmithing',
  tagline: 'Handcrafted Tools for the Modern Primitive',
  description: 'Traditional blacksmithing meets bushcraft. Tools built to perform where it matters most.',
  url: 'https://jfblacksmithing.vercel.app',
  etsyShopUrl: 'https://www.etsy.com/shop/jfblacksmithing/?etsrc=sdt',
  social: {
    facebook: '',
    youtube: '',
    instagram: '',
  },
  author: 'JF',
  keywords: [
    'blacksmithing',
    'handmade knives',
    'bushcraft',
    'hand forged',
    'custom blacksmith work',
    'traditional blacksmithing',
    'primitive outdoor tools',
    'steel striker',
    'bushcraft knives',
  ],
};

export const NAVIGATION_ITEMS = [
  { href: '/', label: 'Home' },
  { href: '/portfolio', label: 'Portfolio' },
  { href: '/blog', label: 'Blog' },
  { href: '/about', label: 'About' },
];

export const PRODUCT_CATEGORIES = [
  'knives',
  'hatchets',
  'strikers',
  'keychains',
  'steel-knots',
  'custom',
] as const;

export type ProductCategory = typeof PRODUCT_CATEGORIES[number];