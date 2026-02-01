"use client";

import React from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Contact() {
    const sectionRef = React.useRef(null);
    const titleRef = React.useRef(null);
    const infoRef = React.useRef(null);
    const formRef = React.useRef(null);

    const [formData, setFormData] = React.useState({
        firstName: "",
        lastName: "",
        email: "",
        message: ""
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const { firstName, lastName, email, message } = formData;
        const subject = `Portfolio Contact from ${firstName} ${lastName}`;
        const body = `Name: ${firstName} ${lastName}%0D%0AEmail: ${email}%0D%0A%0D%0A${message}`;
        window.location.href = `mailto:dahalmabisha@gmail.com?subject=${subject}&body=${body}`;
    };

    React.useEffect(() => {
        const ctx = gsap.context(() => {
            // Animate Title
            gsap.from(titleRef.current, {
                y: 30,
                opacity: 0,
                duration: 0.8,
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top 80%",
                    toggleActions: "play none none reverse",
                },
            });

            // Animate Contact Info
            gsap.from(infoRef.current, {
                x: -50,
                opacity: 0,
                duration: 0.8,
                delay: 0.2,
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top 70%",
                    toggleActions: "play none none reverse",
                },
            });

            // Animate Form
            gsap.from(formRef.current, {
                x: 50,
                opacity: 0,
                duration: 0.8,
                delay: 0.2,
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top 70%",
                    toggleActions: "play none none reverse",
                },
            });
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section ref={sectionRef} id="contact" className="py-24 px-6 ">
            <div className="max-w-4xl mx-auto">
                <div ref={titleRef} className="text-center mb-16">
                    <h2 className="text-4xl font-bold mb-4">Get in Touch</h2>
                    <div className="w-16 h-1 bg-primary rounded-full mx-auto"></div>
                    <p className="mt-4 text-gray-600">
                        Hey, I&apos;d love to hear from you. Have a great day!
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    {/* Contact Info */}
                    <div ref={infoRef} className="space-y-8">
                        <div className="glass-card p-8 rounded-2xl">
                            <h3 className="text-xl font-bold mb-6">Contact Information</h3>

                            <div className="space-y-6">
                                <div className="flex items-start gap-4">
                                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0">
                                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                                    </div>
                                    <div>
                                        <p className="text-sm text-gray-500 font-medium">Phone</p>
                                        <p className="text-lg font-semibold">+977-9819031566</p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0">
                                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                                    </div>
                                    <div>
                                        <p className="text-sm text-gray-500 font-medium">Email</p>
                                        <p className="text-lg font-semibold">dahalmabisha@gmail.com</p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0">
                                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                                    </div>
                                    <div>
                                        <p className="text-sm text-gray-500 font-medium">Location</p>
                                        <p className="text-lg font-semibold">Kathmandu, Nepal</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <form ref={formRef} onSubmit={handleSubmit} className="glass-card p-8 rounded-2xl space-y-6">
                        <div className="grid grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <label className="text-sm font-medium text-gray-700">First Name</label>
                                <input
                                    type="text"
                                    name="firstName"
                                    value={formData.firstName}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-4 py-3 rounded-lg bg-white/50 border border-secondary focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                                    placeholder="First Name"
                                />
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-medium text-gray-700">Last Name</label>
                                <input
                                    type="text"
                                    name="lastName"
                                    value={formData.lastName}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-4 py-3 rounded-lg bg-white/50 border border-secondary focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                                    placeholder="Last Name"
                                />
                            </div>
                        </div>

                        <div className="space-y-2">
                            <label className="text-sm font-medium text-gray-700">Email</label>
                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                                className="w-full px-4 py-3 rounded-lg bg-white/50 border border-secondary focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                                placeholder="Email"
                            />
                        </div>

                        <div className="space-y-2">
                            <label className="text-sm font-medium text-gray-700">Message</label>
                            <textarea
                                name="message"
                                rows="4"
                                value={formData.message}
                                onChange={handleChange}
                                required
                                className="w-full px-4 py-3 rounded-lg bg-white/50 border border-secondary focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all resize-none"
                                placeholder="Message"
                            ></textarea>
                        </div>

                        <button type="submit" className="w-full py-4 bg-primary border border-primary text-background font-bold rounded-lg hover:bg-white hover:text-primary transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                            Send Message
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
}
