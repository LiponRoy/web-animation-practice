'use client';

import { Sparkles } from 'lucide-react';

export default function Hero() {
  return (
    <div className="w-full bg-[#1e1e1e] text-white py-20 text-center px-4">
      <div className="w-full mx-auto">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gradient-to-r from-orange-600 to-indigo-600 text-sm font-medium mb-6">
          <Sparkles className="w-4 h-4" />
          <span>Let’s enhance your next shot.</span>
        </div>

        {/* Heading */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight mb-6">
          Flawless Edits,{' '}
          <span className="bg-gradient-to-r from-indigo-300 to-indigo-500 text-transparent bg-clip-text">
            Global Impact
          </span>
        </h1>

        {/* Subheading */}
        <p className="text-lg text-gray-300 leading-relaxed">
          From simple clipping to high-end retouching—we deliver fast, reliable, and stunning results
          that save you time and cost.
        </p>
      </div>
    </div>
  );
}
