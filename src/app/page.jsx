"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";
import Resume from "./resume/page";
import Project from "./projects/page";
import Contact from "./contacts/page";

gsap.registerPlugin(ScrollTrigger, MotionPathPlugin);

export default function Home() {
  const imgRef = useRef(null);
  const textRef = useRef(null);
  const btnsRef = useRef(null);
  const leftRef = useRef(null);
  const rightRef = useRef(null);

  useEffect(() => {
    window.scrollTo(0, 0);
    if (!imgRef.current || !leftRef.current || !rightRef.current) return;

    const left = leftRef.current;
    const right = rightRef.current;

    // Create timeline controlled by scroll
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: imgRef.current,
        start: "top 80%",
        toggleActions: "play none none reverse",
      },
    });

    // Circle stroke animation
    tl.set([left, right], {
      strokeDasharray: (i, el) => el.getTotalLength(),
      strokeDashoffset: (i, el) => el.getTotalLength(),
    });

    tl.to([left, right], {
      strokeDashoffset: 0,
      duration: 2,
      ease: "power2.out",
      stagger: 0,
    });

    // Image fade-in (runs with circle)
    tl.fromTo(
      imgRef.current,
      { y: 100, opacity: 0 },
      { y: 0, opacity: 1, duration: 1.2, ease: "power3.out" },
      "<"
    );

    // Text animation (slightly after image)
    if (textRef.current) {
      tl.fromTo(
        textRef.current,
        { x: -100, opacity: 0 },
        { x: 0, opacity: 1, duration: 1, ease: "power3.out" },
        "-=0.5"
      );
    }

    // Buttons (AFTER circle finishes)
    if (btnsRef.current) {
      tl.fromTo(
        btnsRef.current.children,
        { y: 100, opacity: 0, scale: 0.8 },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 0.6,
          ease: "back.out(1.7)",
          stagger: { each: 0.15, from: "start" },
        },
        ">+0.2" // wait until circle completes
      );
    }

    // Hover effect for buttons (kept as you had it)
    const buttons = btnsRef.current?.querySelectorAll(".fancy-btn");
    buttons?.forEach((btn) => {
      const flair = btn.querySelector(".button__flair");

      const moveFlair = (e) => {
        const label = btn.querySelector(".button__label");
        label.style.color = "black";
        const rect = btn.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        gsap.set(flair, { left: x, top: y, xPercent: -50, yPercent: -50 });
      };

      btn.addEventListener("mouseenter", (e) => {
        moveFlair(e);
        gsap.to(flair, { scale: 1, duration: 0.5, ease: "power2.out" });
      });

      btn.addEventListener("mouseleave", (e) => {
        moveFlair(e);
        gsap.to(flair, { scale: 0, duration: 0.5, ease: "power2.out" });
        const label = btn.querySelector(".button__label");
        label.style.color = "white";
      });

      btn.addEventListener("mousemove", (e) => {
        moveFlair(e);
      });
    });

    return () => {
      tl.kill();
    };
  }, []);

  return (
    <div>
      <div className="h-[650] flex flex-col items-center justify-center bg-gray-100 text-gray-900">
        <main className="flex items-center mt-15 mb-4 py-10">
          {/* Profile Image */}
          <div ref={imgRef}>
            <div className="relative flex justify-center items-center w-[500px] h-[500px]">
              <svg className="absolute" width="450" height="450" viewBox="0 0 520 520">
                {/* Left half (bottom → top) */}
                <path
                  ref={leftRef}
                  d="M260,510 A250,250 0 0,1 260,10"
                  stroke="#f0b100"
                  strokeWidth="2"
                  fill="transparent"
                />
                {/* Right half (bottom → top) */}
                <path
                  ref={rightRef}
                  d="M260,510 A250,250 0 0,0 260,10"
                  stroke="#f0b100"
                  strokeWidth="2"
                  fill="transparent"
                />
              </svg>

              <Image
                width={500}
                height={500}
                alt="Profile"
                src="./piccrop.png"
                className="w-[350px] h-[350px] rounded-full object-cover shadow-lg relative z-10"
              />
            </div>
          </div>

          {/* Text + Buttons */}
          <div className="px-1" ref={textRef}>
            <p className="max-w-md m-8 text-black text-8xl font-bold">Hello</p>
            <p className="max-w-md m-8 text-gray-600 px-2">
              <b className="text-black text-xl">A Bit About Me</b>
              <br />
              I'm a paragraph. Click here to add your own text and edit me. I'm a
              great place for you to tell a story and let your users know a little
              more about you.
            </p>

            {/* Animated Buttons with Flair */}
            <div ref={btnsRef} className="flex gap-6 mt-10">
              {[
                { text: "Resume", color: "bg-[#eea302]" },
                { text: "Projects", color: "bg-[#660033]" },
                { text: "Contact", color: "bg-[#006644]" },
              ].map((btn, i) => (
                <a
                  key={i}
                  href={`/${btn.text.toLowerCase()}`}
                  className={`fancy-btn relative overflow-hidden ${btn.color} px-9 py-14 rounded-full text-white font-semibold shadow-md border border-black`}
                >
                  <span className="button__flair absolute bg-white rounded-full scale-0 w-[150%] h-[150%] pointer-events-none"></span>
                  <span className="button__label relative z-10">{btn.text}</span>
                </a>
              ))}
            </div>
          </div>
        </main>
      </div>
      <Resume />
      <Project />
      <Contact />
    </div>

  );
}
