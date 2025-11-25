"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function Header() {
    const [scrolled, setScrolled] = useState(false); // animation trigger at 500px
    const [scrolledColor, setScrolledColor] = useState(false); // color trigger before 500px

    useEffect(() => {
        const handleScroll = () => {
            const y = window.scrollY;
            setScrolled(y > 500);           // triggers animation after 500
            setScrolledColor(y > 0 && y <= 500); // white background only between 0–500
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <header
            className={`fixed top-0 left-0 w-full z-50 px-5 py-6 transition-colors duration-500 
            ${scrolledColor ? "bg-white/70 shadow-sm" : "bg-transparent"}`}
        >
            <div
                className={`relative flex items-center justify-between transition-all duration-500 
                ${scrolled ? "mt-10" : ""}`}
            >

                {/* Logo / Sunflower */}
                <div
                    className={`flex items-center gap-2 transition-all duration-1000
                    ${scrolled
                            ? "absolute left-1/2 transform -translate-x-1/2 py-2 px-6 bg-white/70 rounded-full shadow-lg w-md"
                            : "relative left-0 transform translate-x-0"
                        }`}
                >
                    <div
                        className={`flex items-center gap-2 transition-all duration-1000
                    ${scrolled
                                ? "absolute left-1/2 transform -translate-x-1/2 py-2 px-6 bg-white/70 rounded-full shadow-lg w-md"
                                : "relative left-0 transform translate-x-0"
                            }`}
                    >
                        {/* CUSTOM SVG: CIRCUIT & BULB */}
                        <div className="flex items-center justify-center w-[100px] h-[50px]">
                            <svg
                                width="100%"
                                height="100%"
                                viewBox={scrolled ? "0 0 140 60" : "0 0 50 60"}
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                                className="overflow-visible"
                            >
                                {/* --- DEFINE CIRCUIT PATHS --- */}

                                {/* Path 1: Input Trace (Left to Resistor) */}
                                <path
                                    d="M 0 30 L 15 30 L 20 20"
                                    stroke={scrolled ? "#fbbf24" : "#4b5563"}
                                    strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"
                                    className="transition-colors duration-500"
                                />

                                {/* Path 2: The Resistor (Zig Zag) */}
                                <path
                                    d="M 20 20 L 25 40 L 35 20 L 45 40 L 50 30"
                                    stroke={scrolled ? "#fbbf24" : "#4b5563"}
                                    strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"
                                    className="transition-all duration-700 ease-linear"
                                    style={{ strokeDasharray: 100, strokeDashoffset: scrolled ? 0 : 0 }}
                                />

                                {/* Path 3: Trace to Capacitor (Middle) */}
                                <path
                                    d="M 50 30 L 65 30"
                                    stroke={scrolled ? "#fbbf24" : "#4b5563"}
                                    strokeWidth="3" strokeLinecap="round"
                                    className="transition-colors duration-500 delay-300"
                                />

                                {/* Component: Capacitor (Vertical Lines) */}
                                <line x1="65" y1="20" x2="65" y2="40" stroke={scrolled ? "#fbbf24" : "#4b5563"} strokeWidth="3" />
                                <line x1="72" y1="20" x2="72" y2="40" stroke={scrolled ? "#fbbf24" : "#4b5563"} strokeWidth="3" />

                                {/* Path 4: Output Trace (Capacitor to Bulb) */}
                                <path
                                    d="M 72 30 L 90 30"
                                    stroke="#fbbf24"
                                    strokeWidth="3" strokeLinecap="round"
                                    className="transition-all duration-500 ease-out delay-500"
                                    style={{ strokeDasharray: 30, strokeDashoffset: scrolled ? 0 : 30, }}
                                />

                                {/* --- THE BULB --- */}

                                <g transform="translate(85, 5)" className={`transition-opacity duration-700 delay-300 ${scrolled ? "block" : "hidden"}`}>

                                    {/* Bulb Glass */}
                                    <path
                                        d="M 15 30 C 5 30 5 10 15 10 C 25 10 25 30 15 30"
                                        fill={scrolled ? "#fbbf24" : "transparent"}
                                        stroke={scrolled ? "#fbbf24" : "#4b5563"}
                                        strokeWidth="2"
                                        className={`transition-all duration-500 delay-700 ${scrolled ? "drop-shadow-[0_0_12px_rgba(251,191,36,0.9)] block" : "hidden"}`}
                                    />
                                    {/* Filament (Inside Bulb) */}
                                    <path
                                        d="M 12 30 L 12 20 L 15 15 L 18 20 L 18 30"
                                        stroke={scrolled ? "#fff" : "#4b5563"}
                                        strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"
                                        className={`transition-colors duration-500 delay-700 ${scrolled ? "block" : "hidden"}`}
                                    />
                                    {/* Bulb Base (Screw part) */}
                                    <path
                                        d="M 11 30 L 19 30 L 19 34 L 11 34 Z"
                                        fill="#374151"
                                        style={{ display: scrolled ? "block" : "hidden" }}
                                    />
                                    <path
                                        d="M 13 34 L 17 34 L 16 37 L 14 37 Z"
                                        fill="#1f2937"
                                        style={{ display: scrolled ? "block" : "hidden" }}
                                    />

                                </g>

                                {/* --- EXTRA: Glow Rays (Only visible when lit) --- */}
                                <g
                                    transform="translate(105, 30)"
                                    className={`transition-all duration-500 delay-1000 ${scrolled ? "opacity-100 scale-100" : "opacity-0 scale-50"}`}
                                >
                                    <line x1="0" y1="-22" x2="0" y2="-26" stroke="#fbbf24" strokeWidth="2" strokeLinecap="round" />
                                    <line x1="16" y1="-16" x2="19" y2="-19" stroke="#fbbf24" strokeWidth="2" strokeLinecap="round" />
                                    <line x1="22" y1="0" x2="26" y2="0" stroke="#fbbf24" strokeWidth="2" strokeLinecap="round" />
                                </g>

                            </svg>
                        </div>
                    </div>
                    {/* <img src="./tricycle.png" width={50} height={50} alt="sunflower" /> */}
                    <div
                        className={`flex flex-col transition-opacity duration-500 
                        ${scrolled ? "opacity-0" : "opacity-100"}`}
                    >
                        <Link href="/">
                            <span className="font-semibold text-xl">Mabisha Dahal</span>
                        </Link>
                        <span className="text-gray-500 text-sm">Engineer</span>
                    </div>
                </div>

                {/* Navbar */}
                <nav
                    className={`flex gap-6 items-center text-lg transition-all duration-1000
                    ${scrolled
                            ? "absolute left-1/2 transform -translate-x-2/5 py-2 ml-8"
                            : "relative"
                        }`}
                >
                    <Link href="/resume" className="hover:underline">Resume</Link>
                    <span className="h-6 border-l border-gray-400"></span>
                    <Link href="/projects" className="hover:underline">Projects</Link>
                    <span className="h-6 border-l border-gray-400"></span>
                    <Link href="/contact" className="hover:underline">Contact</Link>
                </nav>

            </div>
        </header>
    );
}
