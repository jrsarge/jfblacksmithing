# JF Blacksmithing Website - Product Requirements Document

## Project Overview
A custom Next.js website for JF Blacksmithing to showcase handcrafted blacksmithing work and drive traffic to the Etsy shop. The site focuses on primitive outdoor enthusiasts and collectors while establishing SEO presence through educational content.

## Business Context
- **Business Name**: jfblacksmithing
- **Owner**: J.F. (initials only for now)
- **Business Type**: Side hobby/passion project with Etsy sales
- **Etsy Shop**: https://www.etsy.com/shop/jfblacksmithing/?etsrc=sdt
- **Domain**: Using Vercel free domain initially

## Brand Identity

### Voice & Personality
- Rustic and DIY-focused
- Authentic craftsman who creates for the love of the craft
- Bushcraft enthusiast - creates tools, then uses them in the field
- Educational and approachable
- Not overly commercial - this is about the craft first

### Target Audience
1. **Primary**: Primitive outdoor enthusiasts who value handcrafted tools
2. **Secondary**: Collectors interested in steel knots and unique pieces
3. Geographic: US-based customers

### Key Differentiator
Connection between blacksmithing and bushcraft - showing tools in action during backpacking trips, creating wooden implements with forged knives and hatchets

## Product Categories
1. Knives (various styles)
2. Hatchets
3. Flint and Steel Strikers
4. Keychains
5. Steel Knots (decorative)
6. Custom Work (selective)

## Site Goals
1. Drive traffic to Etsy shop
2. Establish SEO presence for blacksmithing + bushcraft keywords
3. Showcase craftsmanship and personality
4. Build trust through authenticity and educational content
5. Create a portfolio of work

## Core Features

### Must Have (MVP)
1. **Homepage**
   - Hero section with striking imagery
   - Introduction to JF and his craft
   - Featured products (3-4 items)
   - Clear CTA to Etsy shop
   - Brief explanation of the blacksmithing + bushcraft connection

2. **Portfolio/Gallery**
   - Grid layout of products
   - Organized by category
   - High-quality images
   - Each item links to Etsy or has "Shop Similar on Etsy" CTA
   - Filter by category

3. **About Page**
   - Personal story (to be gathered via interview)
   - Philosophy on craft
   - Process overview
   - Photos of workshop/in action
   - Connection to bushcraft

4. **Blog Section**
   - 5-10 pre-written posts at launch
   - Tutorial content
   - Bushcraft + blacksmithing topics
   - Process posts showing creation
   - SEO-optimized

5. **Navigation**
   - Simple, clear menu
   - Mobile-responsive
   - Sticky header
   - Etsy shop link prominent

### Nice to Have (Future)
- Contact form for custom work inquiries
- Newsletter signup
- Instagram feed integration
- Video embeds from YouTube
- Testimonials/reviews section

## Content Assets Available
- 200+ photos from Facebook
- YouTube channel with videos
- Facebook page with content
- Existing social media presence to leverage

## Technical Requirements

### Stack
- **Framework**: Next.js 14+ (App Router)
- **Styling**: Tailwind CSS
- **Language**: TypeScript
- **Deployment**: Vercel
- **Image Optimization**: Next.js Image component

### Performance Goals
- Lighthouse score 90+ on all metrics
- First Contentful Paint < 1.5s
- Largest Contentful Paint < 2.5s
- Mobile-first responsive design

### SEO Requirements
- Semantic HTML
- Meta tags for all pages
- Open Graph tags for social sharing
- Schema markup for products and blog posts
- Sitemap generation
- robots.txt
- Image alt text for all images

### Accessibility
- WCAG 2.1 AA compliance
- Keyboard navigation
- Screen reader friendly
- Proper heading hierarchy
- Color contrast ratios met

## Content Strategy

### Blog Topics (SEO-focused)
1. Blacksmithing basics and tutorials
2. Tool reviews and comparisons
3. Bushcraft projects using forged tools
4. Behind-the-scenes process posts
5. Material guides (types of steel, etc.)
6. Beginner guides

### Keywords to Target
- Handmade knives
- Bushcraft knives
- Blacksmith tools
- Steel striker
- Hand forged hatchet
- Custom blacksmith work
- Traditional blacksmithing
- Primitive outdoor tools

## Design Guidelines

### Visual Style
- Rustic, authentic aesthetic
- Earth tones (browns, grays, steel colors, warm oranges from forge)
- High-quality imagery showcasing craftsmanship
- Clean typography that doesn't compete with images
- Plenty of whitespace
- Natural textures where appropriate

### Photography Focus
- Workshop shots showing process
- Finished products in studio settings
- Products in use during bushcraft/camping
- Close-ups showing detail and craftsmanship
- Action shots of forging

## User Flows

### Primary Flow: Visitor to Etsy Customer
1. Land on homepage via search/social
2. See compelling imagery and intro
3. Browse portfolio or read blog post
4. Click CTA to Etsy shop
5. Make purchase on Etsy

### Secondary Flow: Learning Visitor
1. Find site via search for tutorial/technique
2. Read blog post
3. Explore other content
4. Discover products
5. Follow to Etsy or bookmark for later

## Success Metrics
- Organic traffic growth month-over-month
- Click-through rate to Etsy shop
- Time on site
- Pages per session
- Blog post engagement (reading time)
- Etsy shop traffic from website referrals

## Project Phases

### Phase 1: MVP Launch (Current)
- Core pages (Home, Portfolio, About, Blog)
- 5-10 blog posts
- Basic navigation and footer
- Mobile responsive
- SEO fundamentals

### Phase 2: Enhancement
- Contact form
- Additional blog posts
- Video integration
- Performance optimization
- Analytics setup

### Phase 3: Growth
- Newsletter integration
- Enhanced social proof
- More advanced SEO
- Content calendar established

## Constraints & Considerations
- Owner runs this as side hobby - content updates won't be frequent
- No e-commerce on this site - all sales through Etsy
- Budget-conscious - using free hosting (Vercel)
- DIY maintenance - needs to be simple to update

## Out of Scope
- E-commerce functionality
- Payment processing
- Inventory management
- User accounts/login
- Direct messaging system (initial phase)

## Notes for Development
- Plan for easy content updates (blog posts as MDX files)
- Consider placeholder content for missing photos initially
- Build reusable components for product cards
- Ensure all Etsy links open in new tabs
- Create simple CMS structure for blog posts
- Document how to add new blog posts for owner