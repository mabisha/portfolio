"use client";

import React from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function About() {
    const sectionRef = React.useRef(null);
    const contentRef = React.useRef(null);

    React.useEffect(() => {
        const ctx = gsap.context(() => {
            // Animate content cards
            gsap.from(contentRef.current.children, {
                y: 60,
                opacity: 0,
                duration: 0.8,
                stagger: 0.15,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: contentRef.current,
                    start: "top 80%",
                    toggleActions: "play none none reverse",
                },
            });
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section ref={sectionRef} id="about" className="relative  py-24 px-6 overflow-hidden">
            {/* Background Decoration */}
            <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-primary/10 rounded-full blur-3xl -z-10 -translate-x-1/3 translate-y-1/4"></div>
            <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-secondary/20 rounded-full blur-3xl -z-10 translate-x-1/4"></div>

            <div className="max-w-6xl mx-auto">
                {/* Section Title */}
                <div className="mb-20 text-center">
                    <h2 className="text-4xl font-bold mb-4">About Me</h2>
                    <div className="w-16 h-1 bg-primary rounded-full mx-auto"></div>
                </div>

                {/* Hobbies Grid */}
                <div ref={contentRef} className="glass-card p-10 rounded-2xl max-w-4xl mx-auto backdrop-blur-md bg-white/40 border border-white/20 shadow-xl">
                    <div className="space-y-6 text-lg text-gray-700 leading-relaxed font-light">
                        <p>
                            <span className="text-2xl font-serif mr-2">Hi, I&apos;m Mabisha.</span>
                            <br /> <span className="text-xs">Disclaimer: I don&apos;t know the literal meaning of my name. It&apos;s a blend of my parents&apos; names and maybe that&apos;s meaning enough. </span>
                        </p>
                        <p>
                            I began my journey studying Electronics & Communication Engineering at Tribhuvan University, ERC Dharan, a place where blue mountains meet higher ambitions. While circuits and signals shaped my foundation, life gently rewired me into a software developer. But I am still learning to be someone who now builds with logic, imagination, and endless curiosity.
                        </p>
                        <p>
                            Outside the world of code, I exist in colors, words, and quiet observations. Writing is how I understand myself and painting is how I calm myself. You can find fragments of my thoughts and poetic reflections in <a href="/abhilekh" className="text-primary font-medium hover:underline decoration-primary underline-offset-4">Musings</a>, a small archive of feelings, questions, and moments I didn’t want to forget.
                            <br /> I am also a devoted explorer of stories, whether through movies that make time disappear or books that make reality feel bigger.
                        </p>
                        <p>
                            And somewhere between code, art, stories, and curiosity,
                            I am still becoming. <br />
                            Email: [lastName][firstName]@gmail.com
                        </p>
                    </div>
                </div>

                {/* Personal Note */}
                <div className="mt-16 glass-card p-8 rounded-2xl max-w-3xl mx-auto text-center">
                    <p className="text-gray-700 leading-relaxed italic">
                        ॥ उद्धरेदात्मनात्मानं नात्मानमवसादयेत् ॥
                    </p>
                    <p className="text-sm text-gray-600 italic">
                        &quot;Lift yourself by yourself; do not let yourself down. The self is one&apos;s own friend and enemy.&quot;
                    </p>
                    <p className="text-xs text-gray-500 mt-1">
                        — Bhagavad Gita 6.5
                    </p>
                </div>
            </div>
        </section >
    );
}
