import React from 'react';
import { ExternalLink } from 'lucide-react';
import Button from '@/components/shared/Button';
import { SITE_CONFIG } from '@/lib/constants';

export default function CallToAction() {
  return (
    <section className="py-20 lg:py-32 bg-gradient-to-br from-primary-600 to-primary-800 text-white">
      <div className="container mx-auto px-6 lg:px-16 text-center">
        <h2 className="font-heading text-4xl md:text-5xl mb-6">
          Ready to Own a Piece?
        </h2>
        <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto leading-relaxed">
          Browse my current available work or contact me about custom pieces.
          Each tool is unique and built to accompany you on your adventures.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button size="lg" variant="secondary" asChild>
            <a href="/portfolio">Browse All Work</a>
          </Button>

          <Button size="lg" asChild className="bg-white text-primary-700 hover:bg-neutral-100">
            <a
              href={SITE_CONFIG.etsyShopUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2"
            >
              Visit Etsy Shop
              <ExternalLink size={18} />
            </a>
          </Button>
        </div>

        <div className="mt-12 pt-8 border-t border-primary-500">
          <p className="text-primary-200 text-lg">
            Questions about custom work?{' '}
            <a
              href="/about"
              className="text-white underline underline-offset-4 hover:text-primary-100 transition-colors"
            >
              Learn more about my process
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}