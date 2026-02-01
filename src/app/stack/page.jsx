"use client";

import React from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Stack() {
    const sectionRef = React.useRef(null);
    const skillsRef = React.useRef(null);

    const skills = [
        "Programming – Python, SQL, C, C++",
        "Software Development – HTML5, CSS, Bootstrap, JavaScript, React, Node.js",
        "Database Management – PostgreSQL",
        "Version Control – Git, GitHub",
        "Design Tools – Photoshop",
        "Microsoft Office Suite – Word, PowerPoint, Excel",
    ];

    React.useEffect(() => {
        const ctx = gsap.context(() => {
            // Animate Skills
            gsap.from(skillsRef.current.children, {
                scale: 0.8,
                opacity: 1,
                duration: 0.6,
                stagger: 0.1,
                scrollTrigger: {
                    trigger: skillsRef.current,
                    start: "top 85%",
                    toggleActions: "play none none reverse",
                },
            });
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <>
            <section ref={sectionRef} id="stack" className="relative min-h-screen py-12 px-6 overflow-hidden">
                {/* Background Decoration */}
                <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-secondary/20 rounded-full blur-3xl -z-10 translate-x-1/3 -translate-y-1/4"></div>

                <div className="max-w-5xl mx-auto">
                    {/* Page Title */}
                    <div className="mb-20 text-center">
                        <h2 className="text-4xl font-bold mb-4">My Stack</h2>
                        <div className="w-16 h-1 bg-primary rounded-full mx-auto"></div>
                    </div>

                    <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-secondary/20 rounded-full blur-3xl -z-10 translate-x-1/3 -translate-y-1/4"></div>

                    <div className="max-w-5xl mx-auto">
                        {/* Page Title */}

                        <div ref={skillsRef} className="flex flex-wrap gap-5 justify-center">
                            {skills.map((skill, idx) => (
                                <div
                                    key={idx}
                                    className="px-5 py-6 rounded-xl bg-white border border-primary shadow-sm text-sm font-medium text-gray-700 hover:border-primary hover:text-primary transition-colors cursor-default"
                                >
                                    {skill}
                                </div>
                            ))}
                        </div>
                    </div>
                    {/* Additional Info */}
                    <div className="mt-16 glass-card p-8 rounded-2xl max-w-3xl mx-auto text-center">
                        <p className="text-gray-700 leading-relaxed italic">
                            ॥ बन्धुरात्मात्मनस्तस्य येनात्मैवात्मना जितः ॥
                        </p>
                        <p className="text-sm text-gray-600 italic">
                            &quot;For one who has conquered the mind, the mind is a friend; for one who has not, it remains an enemy.&quot;
                        </p>
                        <p className="text-xs text-gray-500 mt-1">
                            — Bhagavad Gita 6.6
                        </p>
                    </div>
                </div>
            </section>

        </>
    );
}
