"use client";

import React from "react";

export default function Resume() {
    const workExperience = [
        {
            role: "Editor",
            company: "Company Name",
            period: "2019 – Present",
            description:
                "Lead content creation and editorial processes, ensuring high-quality output across all platforms.",
        },
        {
            role: "Writer at Large",
            company: "Company Name",
            period: "2016 – 2018",
            description:
                "Produced long-form articles and contributed to multiple publications with focus on storytelling.",
        },
        {
            role: "Intern",
            company: "Company Name",
            period: "2015 – 2016",
            description:
                "Assisted senior editors and writers, gaining hands-on experience in content creation and publishing.",
        },
    ];

    const education = [
        {
            degree: "Master’s Degree",
            institution: "Establishment Name",
            period: "2015 – 2016",
            description:
                "Specialized in [Your Field], focusing on advanced research and practical applications.",
        },
        {
            degree: "Bachelor’s Degree",
            institution: "Establishment Name",
            period: "2012 – 2015",
            description:
                "Focused on [Your Field], building a strong foundation for professional development.",
        },
    ];

    const skills = [
        "Web Development – React, Next.js, Tailwind CSS",
        "UI/UX Design – Responsive & intuitive designs",
        "Content Strategy – Editorial planning",
        "Project Management – Team coordination",
    ];

    return (
        <section id="resume" className="relative min-h-screen py-24 px-6 overflow-hidden">
            {/* Background Decoration */}
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-secondary/20 rounded-full blur-3xl -z-10 translate-x-1/3 -translate-y-1/4"></div>

            <div className="max-w-5xl mx-auto">
                {/* Page Title */}
                <div className="mb-20 text-center">
                    <h2 className="text-4xl font-bold mb-4">Resume</h2>
                    <div className="w-16 h-1 bg-primary rounded-full mx-auto"></div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">


                    {/* Education & Skills */}
                    <div className="space-y-16">
                        {/* Education */}
                        <section>
                            <h3 className="text-2xl font-bold mb-10 flex items-center gap-3">
                                <span className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center text-primary">
                                    <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path d="M12 14l9-5-9-5-9 5 9 5z" /><path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" /></svg>
                                </span>
                                Education
                            </h3>
                            <div className="space-y-8 border-l-2 border-secondary/50 pl-8 ml-4 relative">
                                {education.map((edu, idx) => (
                                    <div key={idx} className="relative group">
                                        <div className="absolute -left-[41px] top-1 w-5 h-5 rounded-full border-4 border-background bg-gray-400 group-hover:bg-primary transition-colors"></div>
                                        <div className="glass-card p-6 rounded-xl transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                                            <span className="inline-block px-3 py-1 rounded-full bg-secondary/50 text-xs font-semibold text-gray-600 mb-3">
                                                {edu.period}
                                            </span>
                                            <h4 className="text-xl font-bold text-foreground">{edu.degree}</h4>
                                            <p className="text-gray-500 font-medium mb-3">{edu.institution}</p>
                                            <p className="text-gray-600 leading-relaxed text-sm">{edu.description}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </section>

                        {/* Skills */}

                    </div>
                    {/* Work Experience Timeline */}
                    <section>
                        <h3 className="text-2xl font-bold mb-10 flex items-center gap-3">
                            <span className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center text-primary">
                                <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                            </span>
                            Work Experience
                        </h3>
                        <div className="space-y-8 border-l-2 border-secondary/50 pl-8 ml-4 relative">
                            {workExperience.map((job, idx) => (
                                <div key={idx} className="relative group">
                                    {/* Dot */}
                                    <div className="absolute -left-[41px] top-1 w-5 h-5 rounded-full border-4 border-background bg-primary transition-transform group-hover:scale-125"></div>

                                    {/* Content */}
                                    <div className="glass-card p-6 rounded-xl transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                                        <span className="inline-block px-3 py-1 rounded-full bg-secondary/50 text-xs font-semibold text-gray-600 mb-3">
                                            {job.period}
                                        </span>
                                        <h4 className="text-xl font-bold text-foreground">{job.role}</h4>
                                        <p className="text-primary font-medium mb-3">{job.company}</p>
                                        <p className="text-gray-600 leading-relaxed text-sm">{job.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </section>


                </div>
            </div>
            <section className="relative mt-24 mb-10 px-6 overflow-hidden">
                {/* Background Decoration */}
                <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-secondary/20 rounded-full blur-3xl -z-10 translate-x-1/3 -translate-y-1/4"></div>

                <div className="max-w-5xl mx-auto">
                    {/* Page Title */}
                    <div className="mb-20 text-center">
                        <h2 className="text-4xl font-bold mb-4">Skills & Expertise</h2>
                        <div className="w-16 h-1 bg-primary rounded-full mx-auto"></div>
                    </div>
                    <div className="flex flex-wrap flex gap-5">
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
            </section>
        </section>
    );
}
