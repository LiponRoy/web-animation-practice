"use client";
import { useEffect, useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";


const GsapTimeline = () => {
  const boxRef1 = useRef(null);
  const boxRef2 = useRef(null);
  const boxRef3 = useRef(null);

  const tl =gsap.timeline()

  // Using useGSAP to run animation on mount
useGSAP(() => {
  tl.from(boxRef1.current, {
    x: 800,
    duration: 3,
    opacity: 0,
  });
  tl.from(boxRef2.current, {
    x: 800,
    duration: 3,
    opacity: 0,
  });
  tl.from(boxRef3.current, {
    x: 800,
    duration: 3,
    opacity: 0,
  });
}, []);


  return (
    <div  className=" bg-green-300 h-screen w-full flex justify-center items-center" >
     <div ref={boxRef1} className=" font-bold text-4xl h-42 w-42 bg-green-100 flex justify-center items-center rounded-3xl border border-slate-400">A</div>
     <div ref={boxRef2} className=" font-bold text-4xl h-42 w-42 bg-green-400 flex justify-center items-center rounded-3xl border border-slate-400">A</div>
     <div ref={boxRef3} className=" font-bold text-4xl h-42 w-42 bg-green-400 flex justify-center items-center rounded-3xl border border-slate-400">A</div>
    </div>
  );
};
export default GsapTimeline
