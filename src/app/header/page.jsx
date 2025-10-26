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
                    <img src="./tricycle.png" width={50} height={50} alt="sunflower" />
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
                            ? "absolute left-1/2 transform -translate-x-2/5 py-2"
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
