import React from 'react';
import Image from 'next/image';
import { ChevronDown } from 'lucide-react';
import Button from '@/components/shared/Button';
import { SITE_CONFIG } from '@/lib/constants';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero/forge-background.jpg"
          alt="Blacksmith forge with glowing embers"
          fill
          className="object-cover"
          priority
          placeholder="blur"
          blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/50 to-black/60" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <h1 className="font-heading text-6xl md:text-7xl lg:text-8xl font-bold text-white mb-6 animate-fade-in-up">
          Forged by Hand, Tested in the Wild
        </h1>
        <p className="text-xl md:text-2xl text-neutral-200 mb-8 max-w-2xl mx-auto leading-relaxed">
          Traditional blacksmithing meets bushcraft. Tools built to perform where it matters most.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button size="lg" asChild>
            <a href={SITE_CONFIG.etsyShopUrl} target="_blank" rel="noopener noreferrer">
              Shop Handcrafted Tools
            </a>
          </Button>
          <Button variant="outline" size="lg" asChild>
            <a href="#featured" className="text-white border-white hover:bg-white hover:text-neutral-900">
              Explore My Work
            </a>
          </Button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
        <div className="animate-bounce">
          <ChevronDown className="text-white" size={32} />
        </div>
      </div>
    </section>
  );
}