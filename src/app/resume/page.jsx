// app/resume/page.tsx
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
        <section id="resume" className="bg-gray-50 min-h-screen py-16 text-gray-900">
            <div className="max-w-6xl mx-auto px-6">
                {/* Page Title */}
                <h2 className="text-4xl font-bold mb-20 text-gray-800">Resume</h2>

                {/* Work Experience Timeline */}
                <section className="mb-24">
                    <h3 className="text-2xl font-semibold mb-10">Work Experience</h3>
                    <div className="relative">
                        {/* Timeline Line */}
                        <div className="absolute left-4 top-0 w-1 bg-gray-300 h-full"></div>

                        {/* Work Items */}
                        <div className="space-y-12">
                            {workExperience.map((job, idx) => (
                                <div key={idx} className="flex items-start gap-6 relative">
                                    {/* Dot */}
                                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-yellow-500 mt-1 shadow-lg"></div>
                                    {/* Content */}
                                    <div className="bg-white p-6 rounded-xl shadow-md flex-1 hover:shadow-lg transition-shadow">
                                        <p className="text-gray-500 font-mono text-sm">{job.period}</p>
                                        <p className="font-semibold text-lg text-gray-900">{job.role}</p>
                                        <p className="text-gray-600 text-sm mb-1">{job.company}</p>
                                        <p className="text-gray-700 leading-relaxed">{job.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Education Timeline */}
                <section className="mb-24">
                    <h3 className="text-2xl font-semibold mb-10">Education</h3>
                    <div className="relative">
                        <div className="absolute left-4 top-0 w-1 bg-gray-300 h-full"></div>
                        <div className="space-y-12">
                            {education.map((edu, idx) => (
                                <div key={idx} className="flex items-start gap-6 relative">
                                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-yellow-500 mt-1 shadow-lg"></div>
                                    <div className="bg-white p-6 rounded-xl shadow-md flex-1 hover:shadow-lg transition-shadow">
                                        <p className="text-gray-500 font-mono text-sm">{edu.period}</p>
                                        <p className="font-semibold text-lg text-gray-900">{edu.degree}</p>
                                        <p className="text-gray-600 text-sm mb-1">{edu.institution}</p>
                                        <p className="text-gray-700 leading-relaxed">{edu.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Skills Section */}
                <section>
                    <h3 className="text-2xl font-semibold mb-10">Skills & Expertise</h3>
                    <div className="flex flex-wrap gap-4">
                        {skills.map((skill, idx) => (
                            <span
                                key={idx}
                                className="bg-yellow-200 text-gray-900 px-4 py-2 rounded-full text-sm font-medium shadow-sm"
                            >
                                {skill}
                            </span>
                        ))}
                    </div>
                </section>
            </div>
        </section>
    );
}
