"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Resume from "./resume/page";
import Contact from "./contacts/page";
import Projects from "./projects/page";

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  const heroRef = useRef(null);
  const textRef = useRef(null);
  const imageRef = useRef(null);

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
    <div className="bg-background text-foreground overflow-hidden">
      {/* Hero Section */}
      <section
        ref={heroRef}
        className="relative min-h-screen flex items-center justify-center px-6 pt-20 pb-10"
      >
        {/* Background Elements */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
          <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] bg-secondary/30 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          {/* Text Content */}
          <div ref={textRef} className="flex flex-col gap-6 order-2 lg:order-1">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary/50 border border-secondary w-fit">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
              <span className="text-sm font-medium text-gray-600">Available for work</span>
            </div>

            <h1 className="text-5xl lg:text-7xl font-bold tracking-tight leading-[1.1]">
              Hello, I'm <br />
              <span className="text-gradient">Mabisha Dahal</span>
            </h1>

            <p className="text-lg text-gray-600 max-w-lg leading-relaxed">
              I craft digital experiences that blend <span className="font-semibold text-foreground">technical excellence</span> with <span className="font-semibold text-foreground">visual storytelling</span>.
              Let's build something extraordinary together.
            </p>

            <div className="flex flex-wrap gap-4 mt-4">
              <a
                href="/projects"
                className="px-8 py-3 bg-foreground text-background rounded-full font-medium hover:bg-gray-800 transition-all transform hover:-translate-y-1 shadow-lg hover:shadow-xl"
              >
                View Work
              </a>
              <a
                href="/contact"
                className="px-8 py-3 bg-white border border-gray-200 text-foreground rounded-full font-medium hover:bg-gray-50 transition-all transform hover:-translate-y-1 shadow-sm hover:shadow-md"
              >
                Contact Me
              </a>
            </div>
          </div>

          {/* Image/Visual */}
          <div ref={imageRef} className="relative order-1 lg:order-2 flex justify-center">
            <div className="relative w-[300px] h-[300px] lg:w-[450px] lg:h-[450px]">
              {/* Yellow Circle Outside */}
              <div className="absolute inset-0 rounded-full border-4 border-primary/30 animate-pulse"></div>
              <div className="absolute inset-4 rounded-full border-4 border-primary"></div>

              {/* Profile Image */}
              <div className="absolute inset-8 rounded-full overflow-hidden shadow-2xl">
                <Image
                  src="/piccrop.png"
                  alt="Mabisha Dahal"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Other Sections */}
      <Resume />
      <Projects />
      <Contact />
    </div>
  );
}
