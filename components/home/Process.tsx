import React from 'react';
import { Flame, Hammer, Thermometer, Sparkles } from 'lucide-react';

const processSteps = [
  {
    icon: Flame,
    title: 'Heat',
    description: 'Steel is heated in the forge to temperatures over 2000°F, making it malleable for shaping.',
  },
  {
    icon: Hammer,
    title: 'Shape',
    description: 'Using hammer and anvil, the hot steel is carefully shaped into the desired form through repeated strikes.',
  },
  {
    icon: Thermometer,
    title: 'Temper',
    description: 'Heat treating and tempering give the steel its strength, hardness, and flexibility for lasting performance.',
  },
  {
    icon: Sparkles,
    title: 'Finish',
    description: 'Final grinding, polishing, and finishing touches create a tool that\'s both beautiful and functional.',
  },
];

export default function Process() {
  return (
    <section className="py-20 lg:py-32 bg-white">
      <div className="container mx-auto px-6 lg:px-16">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-heading text-4xl md:text-5xl text-neutral-900 mb-6">
            How It's Made
          </h2>
          <p className="text-xl text-neutral-600 max-w-2xl mx-auto">
            Every tool follows the same time-honored process that has created superior metalwork for centuries.
          </p>
        </div>

        {/* Process Steps */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {processSteps.map((step, index) => {
            const IconComponent = step.icon;
            return (
              <div key={index} className="text-center group">
                {/* Icon */}
                <div className="relative mx-auto mb-6">
                  <div className="w-20 h-20 bg-accent-100 rounded-full flex items-center justify-center group-hover:bg-accent-200 transition-colors duration-300">
                    <IconComponent className="text-accent-600" size={32} />
                  </div>
                  {/* Step Number */}
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-primary-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                    {index + 1}
                  </div>
                </div>

                {/* Content */}
                <h3 className="font-heading text-2xl text-neutral-900 mb-3">
                  {step.title}
                </h3>
                <p className="text-neutral-600 leading-relaxed">
                  {step.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Process CTA */}
        <div className="text-center mt-16">
          <p className="text-lg text-neutral-700 mb-6">
            Want to see the process in action?
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/blog"
              className="text-primary-600 hover:text-primary-700 font-semibold underline underline-offset-4"
            >
              Read Process Articles
            </a>
            <span className="hidden sm:inline text-neutral-400">•</span>
            <a
              href="/about"
              className="text-primary-600 hover:text-primary-700 font-semibold underline underline-offset-4"
            >
              Learn About the Workshop
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}