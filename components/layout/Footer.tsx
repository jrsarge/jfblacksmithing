import React from 'react';
import Link from 'next/link';
import { ExternalLink } from 'lucide-react';
import { SITE_CONFIG, NAVIGATION_ITEMS } from '@/lib/constants';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-neutral-800 text-neutral-200">
      <div className="container mx-auto px-6 lg:px-16 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand Info */}
          <div className="space-y-4">
            <h3 className="font-heading text-2xl text-white">
              {SITE_CONFIG.name}
            </h3>
            <p className="text-neutral-300 text-lg font-medium">
              {SITE_CONFIG.tagline}
            </p>
            <p className="text-neutral-400 leading-relaxed">
              {SITE_CONFIG.description}
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-heading text-lg text-white">Quick Links</h4>
            <nav className="flex flex-col space-y-2">
              {NAVIGATION_ITEMS.map((item) => (
                <Link
                  key={item.href}
                  href={item.href as any}
                  className="text-neutral-300 hover:text-white transition-colors"
                >
                  {item.label}
                </Link>
              ))}
              <a
                href={SITE_CONFIG.etsyShopUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent-400 hover:text-accent-300 transition-colors inline-flex items-center gap-1"
              >
                Shop on Etsy
                <ExternalLink size={14} />
              </a>
            </nav>
          </div>

          {/* Connect */}
          <div className="space-y-4">
            <h4 className="font-heading text-lg text-white">Connect</h4>
            <div className="space-y-2">
              {SITE_CONFIG.social.youtube && (
                <a
                  href={SITE_CONFIG.social.youtube}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-neutral-300 hover:text-white transition-colors inline-flex items-center gap-2"
                >
                  YouTube
                  <ExternalLink size={14} />
                </a>
              )}
              {SITE_CONFIG.social.facebook && (
                <a
                  href={SITE_CONFIG.social.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-neutral-300 hover:text-white transition-colors inline-flex items-center gap-2"
                >
                  Facebook
                  <ExternalLink size={14} />
                </a>
              )}
              {SITE_CONFIG.social.instagram && (
                <a
                  href={SITE_CONFIG.social.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-neutral-300 hover:text-white transition-colors inline-flex items-center gap-2"
                >
                  Instagram
                  <ExternalLink size={14} />
                </a>
              )}
            </div>
          </div>
        </div>

        <div className="border-t border-neutral-700 mt-8 pt-8 text-center">
          <p className="text-neutral-400">
            © {currentYear} {SITE_CONFIG.name}. Handcrafted with pride.
          </p>
        </div>
      </div>
    </footer>
  );
}