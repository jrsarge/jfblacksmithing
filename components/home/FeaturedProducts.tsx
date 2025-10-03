import React from 'react';
import Image from 'next/image';
import { ExternalLink } from 'lucide-react';
import Button from '@/components/shared/Button';
import { SITE_CONFIG } from '@/lib/constants';

const featuredProducts = [
  {
    id: '1',
    title: 'Steel Strikers',
    category: 'Strikers',
    image: '/images/products/c-striker-1.jpg',
    description: 'Hand-forged fire striker for primitive fire starting with flint and steel.',
    etsyUrl: SITE_CONFIG.etsyShopUrl,
  },
  {
    id: '2',
    title: 'Char Cloth',
    category: 'Fire Starting',
    image: '/images/products/char-cloth-1.jpg',
    description: 'Essential tinder for fire starting with flint and steel or ferro rod.',
    etsyUrl: SITE_CONFIG.etsyShopUrl,
  },
  {
    id: '3',
    title: 'Steel Scout Knot',
    category: 'Steel Knots',
    image: '/images/products/steel-knot-1.jpg',
    description: 'Decorative forged steel knot showcasing traditional blacksmithing artistry.',
    etsyUrl: SITE_CONFIG.etsyShopUrl,
  },
  {
    id: '4',
    title: 'Bamboo Leaf Keychain',
    category: 'Keychains',
    image: '/images/products/bamboo-keychain-1.jpg',
    description: 'Hand-forged bamboo leaf design keychain, a unique piece of functional art.',
    etsyUrl: SITE_CONFIG.etsyShopUrl,
  },
];

export default function FeaturedProducts() {
  return (
    <section id="featured" className="py-20 lg:py-32 bg-neutral-50">
      <div className="container mx-auto px-6 lg:px-16">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-heading text-4xl md:text-5xl text-neutral-900 mb-6">
            Featured Creations
          </h2>
          <p className="text-xl text-neutral-600 max-w-2xl mx-auto">
            Each piece is hand-forged with attention to detail and built to last a lifetime.
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {featuredProducts.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-lg shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 overflow-hidden group"
            >
              {/* Product Image */}
              <div className="relative aspect-square overflow-hidden">
                <Image
                  src={product.image}
                  alt={product.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                  placeholder="blur"
                  blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
                />
                {/* Category Badge */}
                <div className="absolute top-4 left-4">
                  <span className="bg-accent-100 text-accent-700 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wide">
                    {product.category}
                  </span>
                </div>
              </div>

              {/* Product Info */}
              <div className="p-6">
                <h3 className="font-heading text-xl mb-2 text-neutral-900">
                  {product.title}
                </h3>
                <p className="text-sm text-neutral-600 mb-4 line-clamp-2">
                  {product.description}
                </p>

                <Button variant="outline" size="sm" asChild className="w-full">
                  <a
                    href={product.etsyUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2"
                  >
                    View on Etsy
                    <ExternalLink size={14} />
                  </a>
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* View All CTA */}
        <div className="text-center mt-12">
          <Button size="lg" variant="secondary" asChild>
            <a href="/portfolio">Browse All Work</a>
          </Button>
        </div>
      </div>
    </section>
  );
}