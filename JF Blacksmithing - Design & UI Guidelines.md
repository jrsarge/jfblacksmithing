# JF Blacksmithing - Design & UI Guidelines

## Design Philosophy

### Core Principles
1. **Rustic Authenticity**: Design reflects the handmade, traditional nature of the craft
2. **Clarity Over Decoration**: Content (images, products) is the star
3. **Functional Beauty**: Every element serves a purpose
4. **Warmth & Approachability**: Inviting to both experts and beginners
5. **Mobile-First**: Optimized for all devices, mobile priority

### Visual Themes
- **Fire & Steel**: Warm oranges, deep browns, cool grays
- **Natural & Earthy**: Organic textures, natural materials
- **Craftsmanship**: Attention to detail in every element
- **Adventure Ready**: Rugged, outdoor-inspired aesthetic

## Color System

### Primary Palette
```css
/* Primary - Saddle Brown (Earth/Leather) */
--primary-50: #fdf8f6
--primary-100: #f2e8e5
--primary-200: #eaddd7
--primary-300: #e0cec7
--primary-400: #d2bab0
--primary-500: #c19a6b  /* Main */
--primary-600: #8b4513  /* Brand color */
--primary-700: #654321
--primary-800: #4a2f0f
--primary-900: #3d2510

/* Secondary - Steel Gray */
--secondary-50: #f8f9fa
--secondary-100: #e9ecef
--secondary-200: #dee2e6
--secondary-300: #ced4da
--secondary-400: #adb5bd
--secondary-500: #696969  /* Main */
--secondary-600: #4a4a4a
--secondary-700: #343a40
--secondary-800: #212529
--secondary-900: #16191c

/* Accent - Forge Fire (Orange/Amber) */
--accent-50: #fff7ed
--accent-100: #ffedd5
--accent-200: #fed7aa
--accent-300: #fdba74
--accent-400: #fb923c
--accent-500: #f97316  /* Main */
--accent-600: #ea580c
--accent-700: #c2410c
--accent-800: #9a3412
--accent-900: #7c2d12

/* Neutral Palette */
--neutral-50: #fafaf9   /* Background */
--neutral-100: #f5f5f4
--neutral-200: #e7e5e4
--neutral-300: #d6d3d1
--neutral-400: #a8a29e
--neutral-500: #78716c
--neutral-600: #57534e
--neutral-700: #44403c
--neutral-800: #292524
--neutral-900: #1c1917  /* Text */
```

### Color Usage

**Backgrounds:**
- Main background: `neutral-50` (#fafaf9)
- Card/section backgrounds: White or `neutral-100`
- Dark sections: `neutral-800` or `neutral-900`
- Overlay: `rgba(0, 0, 0, 0.5)`

**Text:**
- Primary text: `neutral-900` (#1c1917)
- Secondary text: `neutral-600` (#57534e)
- Light text (on dark): White or `neutral-50`
- Links: `primary-600` (hover: `primary-700`)

**Buttons:**
- Primary CTA: `accent-500` (hover: `accent-600`)
- Secondary: `primary-600` (hover: `primary-700`)
- Outline: Border `neutral-300`, text `neutral-700`

**Accents:**
- Category badges: `accent-100` bg, `accent-700` text
- Borders: `neutral-200` or `neutral-300`
- Focus states: `accent-500` ring

## Typography

### Font Families
```css
/* Headings - Bold, Rustic Character */
--font-heading: 'Bebas Neue', 'Oswald', sans-serif;

/* Body - Clean, Readable */
--font-body: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;

/* Monospace - Technical Details */
--font-mono: 'JetBrains Mono', 'Fira Code', monospace;
```

### Type Scale
```css
/* Desktop */
--text-xs: 0.75rem;     /* 12px */
--text-sm: 0.875rem;    /* 14px */
--text-base: 1rem;      /* 16px */
--text-lg: 1.125rem;    /* 18px */
--text-xl: 1.25rem;     /* 20px */
--text-2xl: 1.5rem;     /* 24px */
--text-3xl: 1.875rem;   /* 30px */
--text-4xl: 2.25rem;    /* 36px */
--text-5xl: 3rem;       /* 48px */
--text-6xl: 3.75rem;    /* 60px */
--text-7xl: 4.5rem;     /* 72px */

/* Mobile Scale (slightly reduced) */
--text-mobile-5xl: 2.5rem;   /* 40px */
--text-mobile-6xl: 3rem;     /* 48px */
--text-mobile-7xl: 3.5rem;   /* 56px */
```

### Typography Styles

**Hero Headline:**
- Font: `font-heading`
- Size: `text-6xl` (desktop), `text-mobile-5xl` (mobile)
- Weight: 700
- Line height: 1.1
- Letter spacing: -0.02em
- Color: White or `neutral-900`

**Section Headings (H2):**
- Font: `font-heading`
- Size: `text-4xl` (desktop), `text-3xl` (mobile)
- Weight: 600
- Line height: 1.2
- Color: `neutral-900`

**Subsection Headings (H3):**
- Font: `font-heading`
- Size: `text-3xl` (desktop), `text-2xl` (mobile)
- Weight: 600
- Line height: 1.3
- Color: `neutral-800`

**Body Text:**
- Font: `font-body`
- Size: `text-base` or `text-lg`
- Weight: 400
- Line height: 1.7
- Color: `neutral-700`

**Small Text:**
- Font: `font-body`
- Size: `text-sm`
- Weight: 400
- Line height: 1.5
- Color: `neutral-600`

## Spacing System

### Base Unit: 4px

```css
--spacing-1: 0.25rem;   /* 4px */
--spacing-2: 0.5rem;    /* 8px */
--spacing-3: 0.75rem;   /* 12px */
--spacing-4: 1rem;      /* 16px */
--spacing-5: 1.25rem;   /* 20px */
--spacing-6: 1.5rem;    /* 24px */
--spacing-8: 2rem;      /* 32px */
--spacing-10: 2.5rem;   /* 40px */
--spacing-12: 3rem;     /* 48px */
--spacing-16: 4rem;     /* 64px */
--spacing-20: 5rem;     /* 80px */
--spacing-24: 6rem;     /* 96px */
--spacing-32: 8rem;     /* 128px */
```

### Component Spacing

**Container Padding:**
- Desktop: `spacing-16` to `spacing-24`
- Tablet: `spacing-12`
- Mobile: `spacing-6` to `spacing-8`

**Section Spacing:**
- Between sections: `spacing-20` to `spacing-32`
- Within sections: `spacing-12` to `spacing-16`

**Component Margins:**
- Heading to content: `spacing-6`
- Paragraph spacing: `spacing-4`
- List items: `spacing-3`

## Component Designs

### Button Styles

**Primary Button (CTA):**
```css
background: accent-500
color: white
padding: 12px 32px
border-radius: 6px
font-weight: 600
font-size: text-base
transition: all 200ms

hover:
  background: accent-600
  transform: translateY(-2px)
  box-shadow: 0 4px 12px rgba(249, 115, 22, 0.3)
```

**Secondary Button:**
```css
background: primary-600
color: white
padding: 12px 32px
border-radius: 6px
font-weight: 600
font-size: text-base

hover:
  background: primary-700
```

**Outline Button:**
```css
background: transparent
border: 2px solid neutral-300
color: neutral-700
padding: 10px 30px
border-radius: 6px
font-weight: 500

hover:
  border-color: primary-600
  color: primary-600
  background: primary-50
```

### Card Styles

**Product Card:**
```css
background: white
border-radius: 8px
overflow: hidden
box-shadow: 0 1px 3px rgba(0,0,0,0.1)
transition: all 300ms

hover:
  box-shadow: 0 8px 24px rgba(0,0,0,0.15)
  transform: translateY(-4px)

Structure:
- Image container (aspect-ratio: 1/1)
- Content padding: 20px
- Title: font-heading, text-xl
- Category badge
- Description: text-sm, neutral-600
- CTA button
```

**Blog Card:**
```css
background: white
border-radius: 8px
overflow: hidden
box-shadow: 0 1px 3px rgba(0,0,0,0.1)

Structure:
- Featured image (aspect-ratio: 16/9)
- Content padding: 24px
- Category badge (top-left absolute on image)
- Title: font-heading, text-2xl
- Excerpt: text-base, neutral-600
- Meta info: text-sm, neutral-500
```

### Badge Styles

**Category Badge:**
```css
background: accent-100
color: accent-700
padding: 4px 12px
border-radius: 12px
font-size: text-xs
font-weight: 600
text-transform: uppercase
letter-spacing: 0.05em
```

**Tag:**
```css
background: neutral-100
color: neutral-700
padding: 4px 10px
border-radius: 4px
font-size: text-xs
font-weight: 500
```

## Layout Patterns

### Container Widths
```css
--container-sm: 640px
--container-md: 768px
--container-lg: 1024px
--container-xl: 1280px
--container-2xl: 1536px

/* Standard content container */
max-width: container-xl
padding: 0 spacing-6 (mobile) to spacing-16 (desktop)
margin: 0 auto
```

### Grid Systems

**Product Grid:**
```css
display: grid
grid-template-columns: 
  mobile: 1 column
  tablet: 2 columns
  desktop: 3 columns
  large: 4 columns
gap: spacing-6 to spacing-8
```

**Blog Grid:**
```css
display: grid
grid-template-columns:
  mobile: 1 column
  tablet: 2 columns
  desktop: 3 columns
gap: spacing-8
```

**Two-Column Layout:**
```css
display: grid
grid-template-columns:
  mobile: 1 column
  desktop: 1fr 1fr (or 2fr 1fr)
gap: spacing-12
align-items: center
```

### Header Layout

**Desktop:**
```
[Logo/Brand]              [Nav Links]              [Etsy CTA]
     ↓                         ↓                         ↓
  Left 20%               Center 60%                 Right 20%
```

**Mobile:**
```
[Logo/Brand]                                    [Hamburger]
Full width sticky header, 64px height
```

### Footer Layout

**Desktop (3 columns):**
```
[Brand Info]          [Quick Links]          [Social/Connect]
```

**Mobile (stacked):**
```
[Brand Info]
[Quick Links]
[Social/Connect]
[Copyright]
```

## Image Treatments

### Hero Images
```css
position: relative
height: 100vh (or min-height: 600px)
background: linear-gradient(overlay)

Overlay:
  background: linear-gradient(
    to bottom,
    rgba(0,0,0,0.3),
    rgba(0,0,0,0.6)
  )
```

### Product Images
```css
aspect-ratio: 1/1
object-fit: cover
background: neutral-100

hover effect:
  transform: scale(1.05)
  transition: 400ms ease
```

### Blog Featured Images
```css
aspect-ratio: 16/9
object-fit: cover
border-radius: 8px (or 0 for card edges)
```

### Image Filters/Effects
- Slight desaturation on hover (filter: grayscale(0.1))
- Subtle brightness on non-active images
- Sharp, high-contrast for product shots
- Warm color grading for lifestyle/bushcraft shots

## Interactive Elements

### Hover States
**Links:**
```css
default: primary-600
hover: primary-700
text-decoration: underline on hover
transition: 200ms
```

**Images:**
```css
transform: scale(1.05)
brightness: 1.05
transition: 400ms ease-out
```

**Cards:**
```css
transform: translateY(-4px)
box-shadow: elevation-lg
transition: 300ms ease
```

### Focus States
```css
outline: none
ring: 3px solid accent-400
ring-offset: 2px
border-radius: 4px
```

### Loading States
```css
background: neutral-100
animation: pulse 2s infinite

skeleton for images/cards while loading
```

## Iconography

### Icon Library
- **Primary**: Lucide React or Heroicons
- **Style**: Outline for most, Solid for emphasis
- **Size**: 20px (default), 24px (large), 16px (small)
- **Color**: Inherit from parent or neutral-600

### Common Icons Needed
- Menu (hamburger)
- Close (X)
- Arrow right (CTAs)
- External link (Etsy links)
- Social media (YouTube, Facebook, Instagram)
- Fire (forge/process)
- Tool/hammer
- Search (future)
- Email
- Calendar/clock (blog dates)

## Animation Guidelines

### Transitions
```css
/* Default */
transition: all 200ms ease

/* Slower for complex */
transition: all 400ms ease-out

/* Fast for micro-interactions */
transition: all 150ms ease
```

### Keyframe Animations

**Fade In Up (for content):**
```css
@keyframes fadeInUp {
  from {
    opacity: 0
    transform: translateY(30px)
  }
  to {
    opacity: 1
    transform: translateY(0)
  }
}
```

**Pulse (for loading):**
```css
@keyframes pulse {
  0%, 100% { opacity: 1 }
  50% { opacity: 0.5 }
}
```

### Scroll Animations
- Fade in elements as they enter viewport
- Parallax on hero images (subtle)
- Sticky header with shadow on scroll

## Responsive Breakpoints

### Mobile First Approach
```css
/* Mobile (default) */
base styles

/* Tablet (768px+) */
@media (min-width: 768px)

/* Desktop (1024px+) */
@media (min-width: 1024px)

/* Large Desktop (1280px+) */
@media (min-width: 1280px)
```

### Component Adjustments

**Typography:**
- Reduce heading sizes 20-30% on mobile
- Maintain readability (min 16px body)

**Spacing:**
- Reduce padding/margins 30-50% on mobile
- Tighter grid gaps on mobile

**Images:**
- Full width on mobile
- Contained/aspect-ratio maintained on desktop

**Navigation:**
- Hamburger menu < 768px
- Full nav bar ≥ 768px

## Accessibility Standards

### Color Contrast
- Text on background: minimum 4.5:1 ratio
- Large text (18px+): minimum 3:1 ratio
- Interactive elements: 3:1 ratio

### Focus Indicators
- Visible focus ring on all interactive elements
- Minimum 2px ring, contrasting color
- Never remove outline without replacement

### Touch Targets
- Minimum 44x44px for all interactive elements
- Adequate spacing between touch targets (8px+)

### Alt Text
- Descriptive alt text for all images
- Empty alt for decorative images
- Context in alt text for product images

## Dark Mode (Future Consideration)

### Color Adjustments
```css
/* Dark mode palette */
--dm-bg: neutral-900
--dm-surface: neutral-800
--dm-text: neutral-50
--dm-text-secondary: neutral-300
--dm-border: neutral-700

/* Keep brand colors similar */
--dm-primary: primary-400 (lighter)
--dm-accent: accent-400 (lighter)
```

## Design Checklist

### Every Page Should Have:
- [ ] Clear visual hierarchy
- [ ] Consistent spacing rhythm
- [ ] Mobile-responsive layout
- [ ] Accessible color contrast
- [ ] Loading states for dynamic content
- [ ] Error states where applicable
- [ ] Clear CTAs
- [ ] Breadcrumbs/navigation context

### Every Component Should Have:
- [ ] Hover states
- [ ] Focus states
- [ ] Active states
- [ ] Disabled states (if applicable)
- [ ] Responsive sizing
- [ ] Proper semantic HTML

## Brand Assets Checklist

### To Create:
- [ ] Logo/wordmark (SVG format)
- [ ] Favicon (16x16, 32x32, 192x192)
- [ ] Open Graph image (1200x630)
- [ ] Social media profile images
- [ ] Email signature graphics (if needed)