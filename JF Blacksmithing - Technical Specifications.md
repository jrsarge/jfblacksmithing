# JF Blacksmithing - Technical Specifications

## Technology Stack

### Core Framework
- **Next.js**: 14.2+ (App Router)
- **React**: 18+
- **TypeScript**: 5+
- **Node.js**: 18+ LTS

### Styling & UI
- **Tailwind CSS**: 3.4+
- **Fonts**: Google Fonts (see Design System)
- **Icons**: Lucide React or Heroicons

### Deployment & Hosting
- **Platform**: Vercel
- **Domain**: Vercel subdomain initially (jfblacksmithing.vercel.app)
- **Environment**: Production + Preview branches

## Project Structure

```
jfblacksmithing/
├── app/
│   ├── layout.tsx                 # Root layout
│   ├── page.tsx                   # Homepage
│   ├── about/
│   │   └── page.tsx              # About page
│   ├── portfolio/
│   │   └── page.tsx              # Portfolio/gallery
│   ├── blog/
│   │   ├── page.tsx              # Blog listing
│   │   └── [slug]/
│   │       └── page.tsx          # Individual blog post
│   ├── globals.css               # Global styles + Tailwind
│   └── api/                      # Future API routes
├── components/
│   ├── layout/
│   │   ├── Header.tsx
│   │   ├── Footer.tsx
│   │   └── Navigation.tsx
│   ├── home/
│   │   ├── Hero.tsx
│   │   ├── FeaturedProducts.tsx
│   │   └── Introduction.tsx
│   ├── portfolio/
│   │   ├── ProductGrid.tsx
│   │   ├── ProductCard.tsx
│   │   └── CategoryFilter.tsx
│   ├── blog/
│   │   ├── BlogCard.tsx
│   │   ├── BlogList.tsx
│   │   └── BlogPost.tsx
│   ├── shared/
│   │   ├── Button.tsx
│   │   ├── Card.tsx
│   │   └── Image.tsx
│   └── ui/                       # Reusable UI components
├── content/
│   └── blog/
│       ├── post-1.mdx           # Blog posts as MDX
│       ├── post-2.mdx
│       └── ...
├── public/
│   ├── images/
│   │   ├── products/
│   │   ├── process/
│   │   ├── hero/
│   │   └── blog/
│   ├── favicon.ico
│   └── robots.txt
├── lib/
│   ├── constants.ts             # Site constants
│   ├── blog.ts                  # Blog utilities
│   └── utils.ts                 # Helper functions
├── types/
│   └── index.ts                 # TypeScript types
└── config files...
```

## Design System

### Typography
```typescript
// Font Stack
Primary: 'Inter', sans-serif (body text)
Headings: 'Bebas Neue' or 'Oswald', sans-serif (rustic, bold)

// Scale
h1: 3.5rem (56px) - mobile: 2.5rem (40px)
h2: 2.5rem (40px) - mobile: 2rem (32px)
h3: 1.875rem (30px) - mobile: 1.5rem (24px)
h4: 1.5rem (24px)
body: 1rem (16px)
small: 0.875rem (14px)
```

### Color Palette
```typescript
// Primary Colors (Earthy, Forge-inspired)
primary: {
  DEFAULT: '#8B4513', // Saddle Brown
  dark: '#654321',
  light: '#A0522D',
}

// Secondary Colors (Steel, Ash)
secondary: {
  DEFAULT: '#696969', // Dim Gray
  dark: '#4A4A4A',
  light: '#A9A9A9',
}

// Accent (Forge Fire)
accent: {
  DEFAULT: '#D2691E', // Chocolate/Burnt Orange
  dark: '#B8581A',
  light: '#E67E22',
}

// Neutrals
background: '#FAFAF9', // Warm white
text: '#1F1F1F',
textLight: '#6B6B6B',
border: '#E5E5E5',
```

### Spacing Scale
Following Tailwind's default spacing (4px base unit)

### Breakpoints
```typescript
sm: 640px
md: 768px
lg: 1024px
xl: 1280px
2xl: 1536px
```

## Component Specifications

### Header Component
- Sticky on scroll
- Logo/brand name on left
- Navigation menu center/right
- "Shop on Etsy" CTA button (prominent)
- Mobile hamburger menu
- Height: 80px desktop, 64px mobile

### Footer Component
- Three column layout (desktop)
- Column 1: Brand info & tagline
- Column 2: Quick links
- Column 3: Social media links
- Copyright notice
- Etsy shop link
- Background: Dark neutral color

### Hero Section
- Full viewport height option
- Background image with overlay
- Centered headline and CTA
- Scroll indicator
- Responsive image handling

### Product Card
```typescript
interface ProductCard {
  image: string;
  title: string;
  category: string;
  description?: string;
  etsyUrl?: string;
}
```

### Blog Card
```typescript
interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  coverImage: string;
  category: string;
  tags: string[];
}
```

## Data Structures

### Product Categories
```typescript
type ProductCategory = 
  | 'knives'
  | 'hatchets'
  | 'strikers'
  | 'keychains'
  | 'steel-knots'
  | 'custom';

interface Product {
  id: string;
  title: string;
  category: ProductCategory;
  images: string[];
  description: string;
  featured?: boolean;
  etsyUrl?: string;
  inStock?: boolean;
}
```

### Site Configuration
```typescript
// lib/constants.ts
export const SITE_CONFIG = {
  name: 'JF Blacksmithing',
  tagline: 'Handcrafted Tools for the Modern Primitive',
  description: 'Traditional blacksmithing meets bushcraft...',
  url: 'https://jfblacksmithing.vercel.app',
  etsyShopUrl: 'https://www.etsy.com/shop/jfblacksmithing/?etsrc=sdt',
  social: {
    facebook: '',
    youtube: '',
    instagram: '',
  }
};
```

## Image Optimization

### Requirements
- Use Next.js Image component for all images
- WebP format with fallbacks
- Responsive sizing
- Lazy loading by default
- Blur placeholder

### Image Sizes
```typescript
// Product images
productThumbnail: 400x400
productDetail: 800x800
productHero: 1200x800

// Blog images
blogThumbnail: 600x400
blogHero: 1200x600

// Hero images
heroDesktop: 1920x1080
heroMobile: 800x1000
```

## SEO Implementation

### Metadata Template
```typescript
// app/layout.tsx
export const metadata: Metadata = {
  metadataBase: new URL('https://jfblacksmithing.vercel.app'),
  title: {
    default: 'JF Blacksmithing | Handcrafted Tools & Knives',
    template: '%s | JF Blacksmithing'
  },
  description: 'Traditional blacksmithing...',
  keywords: ['blacksmithing', 'handmade knives', 'bushcraft', ...],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://jfblacksmithing.vercel.app',
    siteName: 'JF Blacksmithing',
    images: [{
      url: '/og-image.jpg',
      width: 1200,
      height: 630,
    }],
  },
  twitter: {
    card: 'summary_large_image',
  },
};
```

### Structured Data (JSON-LD)
- Organization schema for homepage
- Article schema for blog posts
- Product schema for portfolio items

## Performance Targets

### Core Web Vitals
- LCP (Largest Contentful Paint): < 2.5s
- FID (First Input Delay): < 100ms
- CLS (Cumulative Layout Shift): < 0.1

### Other Metrics
- First Contentful Paint: < 1.5s
- Time to Interactive: < 3.5s
- Total Blocking Time: < 200ms

### Optimization Strategies
- Image optimization via Next.js Image
- Code splitting via dynamic imports
- Font optimization (font-display: swap)
- Minimize JavaScript bundle
- Static generation where possible
- ISR for blog posts (revalidate: 3600)

## Blog System

### Implementation
- MDX files in `/content/blog/`
- Frontmatter for metadata
- Static generation at build time
- Markdown rendering with custom components
- Syntax highlighting for code blocks
- Reading time calculation

### Frontmatter Schema
```yaml
---
title: "Post Title"
date: "2025-01-15"
excerpt: "Brief description..."
coverImage: "/images/blog/post-1.jpg"
category: "Tutorial"
tags: ["blacksmithing", "beginners"]
author: "JF"
---
```

## Accessibility Features

### Implementation Checklist
- [ ] Semantic HTML elements
- [ ] ARIA labels where needed
- [ ] Keyboard navigation support
- [ ] Focus indicators
- [ ] Alt text for all images
- [ ] Color contrast ratios (WCAG AA)
- [ ] Skip to main content link
- [ ] Accessible forms (when added)

## Development Workflow

### Getting Started
```bash
# Clone repository
git clone [repo-url]

# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Run production build locally
npm run start
```

### Scripts
```json
{
  "dev": "next dev",
  "build": "next build",
  "start": "next start",
  "lint": "next lint",
  "type-check": "tsc --noEmit"
}
```

### Environment Variables
```env
# .env.local
NEXT_PUBLIC_SITE_URL=https://jfblacksmithing.vercel.app
NEXT_PUBLIC_ETSY_SHOP_URL=https://www.etsy.com/shop/jfblacksmithing/?etsrc=sdt
```

## Testing Considerations

### Manual Testing Checklist
- [ ] Mobile responsiveness (all breakpoints)
- [ ] Cross-browser testing (Chrome, Firefox, Safari, Edge)
- [ ] Image loading and optimization
- [ ] Navigation functionality
- [ ] External links (Etsy) open in new tabs
- [ ] Blog post rendering
- [ ] SEO meta tags
- [ ] Performance metrics

## Future Technical Enhancements
- Analytics integration (Vercel Analytics or Google Analytics)
- Contact form with email service
- Newsletter integration (ConvertKit, Mailchimp)
- CMS integration (Sanity, Contentful) for easier updates
- Video embedding and optimization
- Search functionality for blog posts