// components/ScrollSections.tsx
'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function ScrollSections() {
  const section1Ref = useRef<HTMLDivElement>(null);
  const section2Ref = useRef<HTMLDivElement>(null);
  const section3Ref = useRef<HTMLDivElement>(null);
  const section4Ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!section1Ref.current || !section2Ref.current) return;

    // for section 1
    gsap.from(section1Ref.current, {
      scale: 0,
      duration: 1,
      delay:1,
      rotate: 360,
      scrollTrigger: {
        trigger: section1Ref.current,
        scroller: 'body',
        markers: true,
        start: 'top 60%',
      },
    });
// for section 2
    gsap.from(section2Ref.current, {
      opacity: 0,
      duration: 1,
      x: 500,
      scrollTrigger: {
        trigger: section2Ref.current,
        scroller: 'body',
        markers: true,
        start: 'top 60%',
      },
    });

// for section 3 text 1
    gsap.from(section3Ref.current, {
      opacity: 0,
      duration: 1,
      x: 500,
      scrollTrigger: {
        trigger: section3Ref.current,
        scroller: 'body',
        markers: true,
        start: 'top 60%',
      },
    });

// for section 3 text 2
    gsap.from(section4Ref.current, {
      opacity: 0,
      duration: 2,
      x: -500,
      scrollTrigger: {
        trigger: section4Ref.current,
        scroller: 'body',
        markers: true,
        start: 'top 60%',
      },
    });
  }, []);

  return (
    <div className="w-full h-screen">
      {/* Section 1 */}
      <div className="h-screen w-full flex items-center justify-center bg-green-400">
        <div
          ref={section1Ref}
          className="w-36 h-36 bg-amber-600 flex justify-center items-center text-white rounded-xl border-2 p-2"
        >
          Section 1
        </div>
      </div>

      {/* Section 2 */}
      <div className="h-screen w-full flex items-center justify-center bg-blue-400">
        <div
          ref={section2Ref}
          className="w-36 h-36 bg-pink-600 flex justify-center items-center text-white rounded-xl border-2 p-2"
        >
          Section 2
        </div>
      </div>
      {/* Section 3 */}
      <div className="h-screen w-full flex items-center justify-center bg-blue-400">
        <div
          ref={section3Ref}
          className="flex justify-center items-center text-white rounded-xl border-2 p-2 text-8xl m-4"
        >
          Section 3 text 1
        </div>
        <div
          ref={section4Ref}
          className="flex justify-center items-center text-white rounded-xl border-2 p-2 text-8xl m-4"
        >
          Section 3 text 2
        </div>
      </div>
    </div>
  );
}
