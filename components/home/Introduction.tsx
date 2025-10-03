import React from 'react';
import Image from 'next/image';

export default function Introduction() {
  return (
    <section className="py-20 lg:py-32 bg-white">
      <div className="container mx-auto px-6 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Content */}
          <div className="space-y-6">
            <h2 className="font-heading text-4xl md:text-5xl text-neutral-900 leading-tight">
              From the Forge to the Forest
            </h2>

            <div className="space-y-4 text-lg text-neutral-700 leading-relaxed">
              <p>
                Every piece I create starts with a vision: to craft tools that work as hard as you do.
                In my workshop, traditional blacksmithing techniques meet modern bushcraft needs,
                resulting in tools that are both beautiful and brutally functional.
              </p>

              <p>
                But I don't just forge these tools—I test them. From weekend camping trips to extended
                backpacking adventures, each knife, hatchet, and striker proves itself in the field
                before it ever reaches your hands. This is the connection between blacksmithing and
                bushcraft that drives everything I do.
              </p>

              <p>
                Quality over quantity. Tradition over trends. Function over flash. These aren't just
                tools; they're companions for your next adventure.
              </p>
            </div>
          </div>

          {/* Images */}
          <div className="space-y-6">
            <div className="relative">
              <Image
                src="/images/hero/workshop-forge.jpg"
                alt="Blacksmith workshop with forge and tools"
                width={600}
                height={400}
                className="rounded-lg shadow-lg"
                placeholder="blur"
                blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
              />
            </div>

            <div className="relative">
              <Image
                src="/images/hero/bushcraft-knife-use.jpg"
                alt="Hand-forged knife being used for bushcraft in nature"
                width={600}
                height={400}
                className="rounded-lg shadow-lg"
                placeholder="blur"
                blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}