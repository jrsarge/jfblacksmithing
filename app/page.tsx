import React from 'react';
import Hero from '@/components/home/Hero';
import Introduction from '@/components/home/Introduction';
import FeaturedProducts from '@/components/home/FeaturedProducts';
import Process from '@/components/home/Process';
import CallToAction from '@/components/home/CallToAction';

export default function HomePage() {
  return (
    <>
      <Hero />
      <Introduction />
      <FeaturedProducts />
      <Process />
      <CallToAction />
    </>
  );
}