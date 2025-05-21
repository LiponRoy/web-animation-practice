"use client";
import React from "react";
import { useEffect, useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const BoxComeRotateBounce = () => {
  const boxRef = useRef(null);

  // Using useGSAP to run animation on mount
useGSAP(() => {
  gsap.from(boxRef.current, {
    x: 800,
    duration: 3,
    rotate: 360,
    opacity: 0,
    scale: 1,
    ease: "bounce.out",
    delay: 0.2,
  });
}, []);


  return (
    <div  className=" bg-green-300 h-screen w-full flex justify-center items-center" >
     <div ref={boxRef} className=" font-bold text-4xl h-42 w-42 bg-green-100 flex justify-center items-center rounded-3xl border border-slate-400">A</div>
    </div>
  );
};

export default BoxComeRotateBounce;
