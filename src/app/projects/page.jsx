"use client";

import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

const projects = [
    {
        title: "Ecommerce-Website",
        category: "Full Stack Development",
        description: "An ecommerce website using React, Node.js, and PostgreSQL.",
        image: "ecommerce.png",
        link: "https://github.com/mabisha/Ecommerce-Website"
    },
    {
        title: "Object-Detection",
        category: "Machine Learning",
        description: "Object detection implementation using Computer Vision techniques.",
        image: "Object-detection.png",
        link: "https://github.com/mabisha/object-Detection"
    },
    {
        title: "Regression",
        category: "Data Science",
        description: "Implementation of logistic regression models for predictive analysis.",
        image: "regression(2).png",
        link: "https://github.com/mabisha/Regression"
    }
];

export default function Projects() {
    const sectionRef = useRef(null);
    const cardsRef = useRef([]);

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Animate Title and Description
            gsap.from(".project-header", {
                y: 30,
                opacity: 0,
                duration: 0.8,
                stagger: 0.2,
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top 80%",
                    toggleActions: "play none none reverse",
                },
            });

            // Animate Project Cards
            gsap.fromTo(
                cardsRef.current,
                { y: 100, opacity: 0 },
                {
                    y: 0,
                    opacity: 1,
                    duration: 0.8,
                    stagger: 0.2,
                    ease: "power3.out",
                    immediateRender: false,
                    scrollTrigger: {
                        trigger: sectionRef.current,
                        start: "top 70%",
                        toggleActions: "play none none reverse",
                    }
                }
            );

        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section ref={sectionRef} id="projects" className="py-24 px-6 bg-secondary/20 min-h-screen flex flex-col justify-center">
            <div className="max-w-7xl mx-auto w-full">
                <div className="flex flex-col items-center mb-16 text-center project-header">
                    <h2 className="text-4xl font-bold mb-4">My Projects</h2>
                    <div className="w-20 h-1 bg-primary rounded-full"></div>

                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <div
                            key={index}
                            ref={el => cardsRef.current[index] = el}
                            className={`group relative glass-card rounded-2xl overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2
                            ${index === 1 ? 'lg:mt-12' : index === 2 ? 'lg:mt-24' : ''}`}
                        >
                            {/* Image Placeholder */}
                            <div className="h-64 bg-gray-200 relative overflow-hidden">
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"></div>
                                <div className="w-full h-full bg-gray-300 flex items-center justify-center text-gray-500">
                                    <Image src={project.image} alt={project.title} width={500} height={500} />
                                </div>
                            </div>

                            <div className="p-8">
                                <span className="text-xs font-bold tracking-widest text-primary uppercase mb-2 block">
                                    {project.category}
                                </span>
                                <h3 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors">
                                    {project.title}
                                </h3>
                                <p className="text-gray-600 mb-6 line-clamp-3">
                                    {project.description}
                                </p>
                                <a
                                    href={project.link}
                                    className="inline-flex items-center text-sm font-semibold text-foreground hover:text-primary transition-colors"
                                >
                                    View Project
                                    <svg className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                    </svg>
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <div className="mt-20 glass-card p-8 rounded-2xl max-w-3xl mx-auto text-center">
                <p className="text-gray-700 leading-relaxed italic">
                    ॥ कर्मण्येवाधिकारस्ते मा फलेषु कदाचन ।<br />
                    मा कर्मफलहेतुर्भूर्मा ते सङ्गोऽस्त्वकर्मणि ॥
                </p>
                <p className="text-sm text-gray-600 italic mt-2">
                    &quot;You have a right to perform your prescribed duty, but you are not entitled to the fruits of action.&quot;
                </p>
                <p className="text-xs text-gray-500 mt-1">
                    — Bhagavad Gita 2.47
                </p>
            </div>
        </section >
    );
}
