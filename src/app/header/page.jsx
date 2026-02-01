"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header() {
    const [scrolled, setScrolled] = useState(false);
    const [activeSection, setActiveSection] = useState("");
    const [headScrolled, setHeadScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);
    const pathname = usePathname();

    useEffect(() => {
        const handleScroll = () => {
            const isDesktop = typeof window !== "undefined" && window.innerWidth >= 768;
            setScrolled(isDesktop && window.scrollY > 300);
            setHeadScrolled(window.scrollY > 50);
            if (pathname === "/") {
                const sections = ["about", "background", "stack", "projects", "abhilekh", "contact"];
                let current = "";

                // Check hero section first
                if (window.scrollY < 300) {
                    current = "";
                } else {
                    for (const section of sections) {
                        const element = document.getElementById(section);
                        if (element) {
                            const rect = element.getBoundingClientRect();
                            // If top of section is near the viewport top (with some offset)
                            // or if the section covers the middle of the viewport
                            if (rect.top <= 300 && rect.bottom >= 300) {
                                current = section;
                            }
                        }
                    }
                }
                setActiveSection(current);
            }
        };

        window.addEventListener("scroll", handleScroll);
        window.addEventListener("resize", handleScroll);
        handleScroll(); // Check on mount
        return () => {
            window.removeEventListener("scroll", handleScroll);
            window.removeEventListener("resize", handleScroll);
        };
    }, [pathname]);

    useEffect(() => {
        if (pathname !== "/") {
            const path = pathname.substring(1); // remove leading slash
            setActiveSection(path);
        } else {
            // Reset or re-evaluate if navigating back to home
            if (window.scrollY < 100) setActiveSection("");
        }
        setMenuOpen(false); // Close mobile menu on route change
    }, [pathname]);

    const navItems = ["About", "Background", "My Stack", "Projects", "Musings", "Contact"];

    const LogoIcon = () => (
        <svg
            width="40"
            height="24"
            viewBox="0 0 40 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="text-primary"
        >
            <line x1="0" y1="12" x2="8" y2="12" />
            <polyline points="8,12 12,4 16,20 20,4 24,20 28,4 32,12" />
            <line x1="32" y1="12" x2="40" y2="12" />

        </svg>
    );

    return (
        <header
            className={`fixed z-50  transition-[left,transform] ease-in-out duration-600
    ${scrolled
                    ? "top-6 left-1/2 -translate-x-1/2 w-fit rounded-full shadow-lg py-3 px-8 "
                    : "top-0 left-0 w-full py-6  translate-x-0"
                }
              ${!headScrolled
                    ? "bg-transparent"
                    : !scrolled
                        ? "bg-white/70 backdrop-blur-sm"
                        : "bg-white"
                }
  `}
        >

            <div className={`flex items-center transition-all duration-500
                ${scrolled
                    ? "gap-6"
                    : "w-full max-w-7xl mx-auto px-6 justify-between"}`}>

                {/* Logo Area */}
                <Link href="/" className="group flex items-center gap-3">
                    <div className="relative w-10 h-10 flex items-center justify-center bg-primary/10 rounded-full overflow-hidden transition-transform duration-300 group-hover:scale-110 shrink-0">
                        <LogoIcon />
                    </div>
                    <div className={`flex flex-col transition-all duration-500 ease-in-out overflow-hidden whitespace-nowrap
                        ${scrolled ? "w-0 opacity-0" : "w-auto opacity-100"}`}>
                        <span className="font-bold text-lg tracking-tight text-foreground group-hover:text-primary transition-colors">
                            Mabisha Dahal
                        </span>
                        <span className="text-xs text-gray-500 font-medium tracking-wide uppercase">
                            Engineer
                        </span>
                    </div>
                </Link>

                {/* Navigation */}
                <nav className="hidden md:flex items-center gap-8">
                    {navItems.map((item) => {
                        // Map display name to section ID/path
                        let sectionPath = item.toLowerCase();
                        if (item === "My Stack") sectionPath = "stack";
                        if (item === "Musings") sectionPath = "abhilekh";
                        if (item === "Home") sectionPath = "";

                        const isActive = activeSection === sectionPath;
                        return (
                            <Link
                                key={item}
                                href={`/${sectionPath}`}
                                className={`relative text-sm font-medium transition-colors py-1 group flex items-center gap-2
                                ${isActive ? "text-primary font-bold" : "text-gray-600 hover:text-foreground"}`}
                            >
                                {/* Icon Indicator - Logo instead of dot */}
                                {isActive && (
                                    <span className="animate-pulse">
                                        <div className="w-4 h-4">
                                            <svg width="100%" height="100%" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                                                <path d="M9 12h6" />
                                                <path d="M12 3v18" />
                                                <path d="M12 9l-3 3 3 3" />
                                                <path d="M12 15l3-3-3-3" />
                                            </svg>
                                        </div>
                                    </span>
                                )}
                                {item}
                                {!isActive && (
                                    <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-primary transition-all duration-300 group-hover:w-full"></span>
                                )}
                            </Link>
                        );
                    })}
                </nav>

                {/* Mobile Menu Button */}
                <button
                    type="button"
                    className="md:hidden w-10 h-10 flex items-center justify-center rounded-full text-foreground hover:bg-primary/15 hover:text-primary transition-colors"
                    aria-expanded={menuOpen}
                    aria-label={menuOpen ? "Close menu" : "Open menu"}
                    onClick={() => setMenuOpen((prev) => !prev)}
                >
                    {menuOpen ? (
                        <svg width="22" height="22" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    ) : (
                        <svg width="22" height="22" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    )}
                </button>
            </div>

            {/* Backdrop */}
            {menuOpen && (
                <div
                    className="md:hidden fixed inset-0 z-[60] bg-transparent transition-opacity duration-300"
                    aria-hidden="true"
                    onClick={() => setMenuOpen(false)}
                />
            )}

            {/* Mobile Menu Panel - Side Drawer from Right */}
            <div
                className={`md:hidden fixed right-0 top-0 bottom-0 z-[70] w-80 bg-white shadow-2xl transition-transform duration-500 ease-in-out ${menuOpen ? "translate-x-0" : "translate-x-full"
                    }`}
                aria-hidden={!menuOpen}
            >
                <div className="h-full flex flex-col bg-white">
                    {/* Close Button Inside Drawer */}
                    <div className="flex justify-between items-center mt-8 mr-8 ml-8">
                        <a href="/" className="text-xm font-bold uppercase tracking-widest text-primary">Mabisha</a>
                        <button
                            onClick={() => setMenuOpen(false)}
                            className="p-2 rounded-full hover:bg-secondary/50 transition-colors"
                        >
                            <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </div>

                    <nav className="flex flex-col gap-4 bg-white pt-8">
                        {navItems.map((item) => {
                            let sectionPath = item.toLowerCase();
                            if (item === "My Stack") sectionPath = "stack";
                            if (item === "Musings") sectionPath = "abhilekh";
                            if (item === "Home") sectionPath = "";
                            const isActive = activeSection === sectionPath;
                            return (
                                <Link
                                    key={item}
                                    href={`/${sectionPath}`}
                                    onClick={() => setMenuOpen(false)}
                                    className={`py-4 px-6 rounded-2xl text-lg font-medium transition-all duration-300 flex items-center justify-between group ${isActive
                                        ? "text-primary bg-primary/10 font-bold"
                                        : "text-gray-700 hover:text-primary hover:bg-secondary/20"
                                        }`}
                                >
                                    {item}
                                    <svg
                                        width="20"
                                        height="20"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        className={`transition-transform duration-300 ${isActive ? "translate-x-0" : "-translate-x-4 opacity-0 group-hover:translate-x-0 group-hover:opacity-100"}`}
                                    >
                                        <polyline points="9 18 15 12 9 6" />
                                    </svg>
                                </Link>
                            );
                        })}
                    </nav>

                    <div className="mt-auto pt-8 border-t border-secondary/50">
                        <p className="text-xs text-gray-400 text-center font-medium">
                            &copy; 2026 Mabisha Dahal
                        </p>
                    </div>
                </div>
            </div>
        </header>
    );
}
