
"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import About from "./about/page";
import Background from "./background/page";
import Stack from "./stack/page";
import Projects from "./projects/page";
import Contact from "./contact/page";
import Abhilekh from "./abhilekh/page";

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  const heroRef = useRef(null);
  const textRef = useRef(null);
  const imageRef = useRef(null);
  const [displayText, setDisplayText] = useState("");
  const fullText = "Mabisha Dahal";

  useEffect(() => {
    let currentIndex = 0;
    const typingInterval = setInterval(() => {
      if (currentIndex <= fullText.length) {
        setDisplayText(fullText.slice(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(typingInterval);
      }
    }, 100); // Adjust typing speed here

    return () => clearInterval(typingInterval);
  }, []);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Initial Load Animation
      const tl = gsap.timeline();

      tl.fromTo(
        textRef.current.children,
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, stagger: 0.2, ease: "power3.out" }
      )
        .fromTo(
          imageRef.current,
          { scale: 0.9, opacity: 0 },
          { scale: 1, opacity: 1, duration: 1.2, ease: "power2.out" },
          "-=0.8"
        );

      // Parallax Effect on Scroll
      gsap.to(imageRef.current, {
        yPercent: 20,
        ease: "none",
        scrollTrigger: {
          trigger: heroRef.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <div className="bg-background/30 text-foreground overflow-hidden">
      {/* Hero Section */}
      <section
        ref={heroRef}
        className="relative min-h-screen flex items-center justify-center px-6 pt-20"
      >
        {/* Background Elements */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
          <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] bg-secondary/30 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          {/* Text Content */}
          <div ref={textRef} className="flex flex-col gap-6 order-2 lg:order-1">
            <h1 className="text-5xl lg:text-7xl font-bold tracking-tight leading-[1.1]">
              <span className="text-gradient">Hello, I'm</span><br />
              <span className="text-primary">
                {displayText}
                <span className="animate-ping text-gradient">|</span>
              </span>
            </h1>

            <p className="text-lg text-gray-600 max-w-lg leading-relaxed">
              Transforming ideas into intelligent software with engineeirng precision and ML insights
            </p>

            <div className="flex flex-wrap gap-4 mt-4">
              <a
                href="/about"
                className="px-8 py-3 bg-primary border border-primary text-background rounded-full font-medium hover:bg-white hover:text-primary hover:border-primary transition-all transform hover:-translate-y-1 shadow-lg hover:shadow-xl"
              >
                About Me
              </a>
              <a
                href="/contact"
                className="px-8 py-3 bg-white border border-gray-200 text-foreground rounded-full font-medium hover:border-primary transition-all transform hover:-translate-y-1 shadow-sm hover:shadow-md"
              >
                Get Connected
              </a>
            </div>
            {/* <div className="max-w-lg p-4 border-l-4 border-amber-500 bg-amber-50/30 rounded-r-lg">
              <p className="text-base font-serif italic tracking-wide mb-1 leading-relaxed">
                ॥ कर्मण्येवाधिकारस्ते मा फलेषु कदाचन ॥
              </p>
              <p className="text-sm text-gray-600 italic">
                "Focus on action, not result"
              </p>
              <p className="text-xs text-gray-500 mt-1">
                — Bhagavad Gita 2.47
              </p>
            </div> */}
          </div>

          {/* Image/Visual */}
          <div ref={imageRef} className="relative order-1 lg:order-2 flex justify-center">
            <div className="relative w-[300px] h-[300px] lg:w-[450px] lg:h-[450px]">
              {/* Yellow Circle Outside */}
              <div className="absolute inset-0 rounded-full border-4 border-primary animate-pulse"></div>
              <div className="absolute inset-1 rounded-full border-4 border-primary/60 animate-pulse"></div>
              <div className="absolute inset-2 rounded-full border-4 border-primary/50 animate-pulse"></div>
              <div className="absolute inset-3 rounded-full border-4 border-primary/40 animate-pulse"></div>
              <div className="absolute inset-4 rounded-full border-4 border-primary/30 animate-pulse"></div>
              <div className="absolute inset-5 rounded-full border-4 border-primary/20 animate-pulse"></div>
              <div className="absolute inset-6 rounded-full border-4 border-primary/10 animate-pulse"></div>
              <div className="absolute inset-7 rounded-full border-4 border-primary/10 animate-pulse"></div>
              <div className="absolute inset-8 rounded-full border-4 border-primary/10 animate-pulse"></div>
              {/* Profile Image */}
              <div className="absolute inset-8 rounded-full overflow-hidden shadow-2xl">
                <Image
                  src="/piccrop.png"
                  alt="Mabisha Dahal"

                  // width={450}
                  // height={450}
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </div>

        </div >
      </section >

      {/* Other Sections */}
      <About />
      <Background />
      <Stack />
      <Projects />
      <Abhilekh />
      <Contact />
    </div >
  );
}
