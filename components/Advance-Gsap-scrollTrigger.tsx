"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import dynamic from "next/dynamic";

const ReactPlayer = dynamic(() => import("react-player/lazy"), { ssr: false });

gsap.registerPlugin(ScrollTrigger);

export default function ScrollAdvance() {
  const section1Ref = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!videoRef.current) return;

    gsap.to(videoRef.current, {
      scale: 0.2,
      transformOrigin: "center center",
      ease: "none",
      scrollTrigger: {
        trigger: videoRef.current,
        start: "top center",
        end: "bottom top",
        scrub: true,
      },
    });
  }, []);

  return (
    <div className="w-full h-screen">
      {/* video section */}
      <div className="h-screen w-full flex items-center justify-center bg-white">
        <div ref={videoRef} className="w-full flex justify-center in-checked:">
          <ReactPlayer
            url="/videos/demo.mp4"
            controls={false}
            playing
            width="80%"
            height="100%"
            muted // 🔇 Required for autoplay
          />
        </div>
      </div>

      <div className="w-full h-screen bg-white relative overflow-y-auto no-scrollbar">
        <div className="sticky top-0 w-[80%] h-[560px] mx-auto mb-5 bg-red-400 border-8 border-slate-300 rounded-4xl p-4 scroll-smooth">
          <h1>Card 1</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate,
            debitis quis? Inventore voluptate quas aut, deserunt vel blanditiis
            facilis, nobis eius nihil reiciendis, nemo ut quia. Quisquam iusto
            numquam veniam!
          </p>
        </div>
        <div className="sticky top-10 w-[80%] h-[560px] mx-auto mb-5 bg-green-400 border-8 border-slate-300 rounded-4xl p-4 scroll-smooth">
          <h1>Card 2</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate,
            debitis quis? Inventore voluptate quas aut, deserunt vel blanditiis
            facilis, nobis eius nihil reiciendis, nemo ut quia. Quisquam iusto
            numquam veniam!
          </p>
        </div>
        <div className="sticky top-20 w-[80%] h-[560px] mx-auto mb-5 bg-blue-400 border-8 border-slate-300 rounded-4xl p-4 scroll-smooth">
          <h1>Card 3</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate,
            debitis quis? Inventore voluptate quas aut, deserunt vel blanditiis
            facilis, nobis eius nihil reiciendis, nemo ut quia. Quisquam iusto
            numquam veniam!
          </p>
        </div>
        <div className="sticky top-32 w-[80%] h-[560px] mx-auto mb-5 bg-cyan-400 border-8 border-slate-300 rounded-4xl p-4 scroll-smooth">
          <h1>Card 4</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate,
            debitis quis? Inventore voluptate quas aut, deserunt vel blanditiis
            facilis, nobis eius nihil reiciendis, nemo ut quia. Quisquam iusto
            numquam veniam!
          </p>
        </div>
        <div className="sticky top-0 w-[80%] h-[560px] mx-auto mb-5 bg-pink-400 border-8 border-slate-300 rounded-4xl p-4 shadow-2xl">
          <h1>Card 5</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate,
            debitis quis? Inventore voluptate quas aut, deserunt vel blanditiis
            facilis, nobis eius nihil reiciendis, nemo ut quia. Quisquam iusto
            numquam veniam!
          </p>
        </div>
      </div>

      {/* Section 1 */}
      <div className="h-screen w-full flex items-center justify-center bg-green-400">
        <div
          ref={section1Ref}
          className="w-36 h-36 bg-amber-600 flex justify-center items-center text-white rounded-xl border-2 p-2"
        >
          Section 1
        </div>
      </div>
      
    </div>
  );
}
