"use client";

import React from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Abhilekh() {
    const sectionRef = React.useRef(null);
    const [selectedMusing, setSelectedMusing] = React.useState(null);

    const musings = [
        {
            id: 1,
            title: "Days",
            image: "/photo.jpeg",
            content: "I often ask myself how I feel today\nMotivational quotes are drafted every day\nTypical overthinker you can say\n\nHustling Mon to Thursdays\nOverwhelming late-night Fridays\nHangover Saturdays and Chill Sundays\n\nBraided me in the pattern of days\nDrenched and drained somedays\nFlabbergasted the other days\n\nBuilding and assembling words play\nJust to discover what to say\nWhen I asked myself how I feel today"
        },
        {
            id: 2,
            title: "Growth",
            image: "/2.jpeg",
            content: "Despite giving your best, your growth will still get stuck. \nHope will be crushed, exhaustion will peak, \nbut all that's left will be starting over again,and \nyet you will again wish for is that ray for \nwhich you have come so far."
        },
        {
            id: 3,
            title: "You and Me",
            image: "/3.jpeg",
            content: "Just a plan to stay a little long\nWhite Curtains, pillows and coffee strong\nCandles, Music, Terrace with lights all done\nA stolen time from universe with all the fun\nFinally You and Me turned one"
        },
        {
            id: 4,
            title: "Wheel of Unhappiness",
            image: "/4.jpeg",
            content: "I often find myself in a maze of life\nNot fitting in the box of societal site\nSeeking for the finesst version in sight\nYet all I glance is a obscurity of the night.\nBut i am yearning for that glimmer of hope so bright\nPivoting from the wrong to find path so right\nIn quest for that illuminating light"
        },
        {
            id: 5,
            title: "The Art of Being Alone",
            image: "/5.jpeg",
            content: "Wrapped in the wet grass\nBeneath the moon's soft glance\nA flickering show of starlight\nI sat alone, embraced by the night\n\nNo crowds to chase, no noisy noise\nJust me and my soul so quiet and poised\nAlone, not lonely, in a place that is known\nBeing fully myself, not a clone\n\nReminiscing roots, cherishing this solitude\nHumming a quiet song, healing the mood\nFor in the art of being alone\nI found a place to call my own"
        },
        {
            id: 6,
            title: "To the Daughters",
            image: "/6.jpeg",
            content: "She walks with grace through rising days,\nIndependent in a thousand ways.\n\nHer eyes are fixed on distant dreams,\nYet all they ask is, \"No wedding schemes?\"\n\nShe pays her bills, earns by her choice,\nBut \"It's late now...\" echoes from her mother's voice.\n\nHer love runs deep, her heart gives care,\nYet judgment finds her everywhere.\n\nShe shares her earnings, proud and true,\nWhile the world shames her parents, too\n\"They take from their daughter?\" the whispers go,\nTurning her love into their low.\n\nShe crafts her path beyond extremes,\nYet \"Not settled!\" the world screams.\n\nBut let me tell you something clear:\nA ring or vow doesn't define her here.\n\nShe is enough and always has been,\nQuiet but chasing every single win.\n\nNo need for labels, no need to explain,\nShe writes her story, breaking every chain."
        },
        {
            id: 7,
            title: "Rainy Day",
            image: "/7.jpeg",
            content: "Let me tell you, or if I may\nHow love found me on a rainy day\n\nThe clouds rolled in, the skies turned grey\nMy umbrella, sadly, was home that day.\n\nThe city felt cold, the streets soaked with rain\nI stepped into a shop to escape the strain\n\nI stood alone with dripping hair\nBut suddenly, a warmth came through from the air\n\nA boy stepped close, stood by my side\nRaised his hands with an umbrella so wide\n\nI looked at him, gave a glance\nThe charming face smiled for once\n\nTime stood still, quiet and real,\nNo storm could match how I'd feel.\n\nThe rain then stopped, and he walked away,\nYet something stayed, more than words could say."
        }
    ];

    React.useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.from(".musing-card", {
                y: 50,
                opacity: 1,
                duration: 0.8,
                stagger: 0.1,
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top 80%",
                    toggleActions: "play none none reverse",
                },
            });
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section ref={sectionRef} id="abhilekh" className="py-24 px-6 relative min-h-screen" >
            {/* Background Decoration */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-3xl -z-10"></div>

            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-5">
                    <h2 className="text-4xl font-bold mb-4 font-serif">Abhilekh</h2>
                    <p className="text-primary italic font-serif text-lg">- Musings -</p>
                    <div className="w-16 h-1 bg-primary rounded-full mx-auto mt-4"></div>
                </div>

                {/* Grid Gallery */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 ">
                    {musings.map((item) => (
                        <div
                            key={item.id}
                            onClick={() => setSelectedMusing(item)}
                            className="musing-card glass-card p-4 rounded-xl cursor-pointer hover:shadow-xl hover:-translate-y-2 transition-all duration-300 group"
                        >
                            <div className="h-48 rounded-lg overflow-hidden mb-4 relative">
                                <img
                                    src={item.image}
                                    alt={item.title}
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors"></div>
                            </div>
                            <h3 className="text-xl font-serif font-semibold text-center group-hover:text-primary transition-colors">
                                {item.title}
                            </h3>
                        </div>
                    ))}
                </div>

                <div className="mt-44 glass-card p-8 rounded-2xl max-w-3xl mx-auto text-center">
                    <p className="text-gray-700 leading-relaxed italic text-sm md:text-md">
                        ॥ यद्यद्विभूतिमत्सत्त्वं श्रीमदूर्जितमेव वा ।<br />
                        तत्तदेवावगच्छ त्वं मम तेजोऽंशसम्भवम् ॥
                    </p>
                    <p className="text-xs md:text-sm text-gray-600 italic mt-4 px-4 max-w-2xl mx-auto">
                        &quot;Whatever is glorious, beautiful, or powerful,whatever we create,know that it springs from but a spark of the Divine.&quot;
                    </p>
                    <p className="text-[10px] md:text-xs text-gray-500 mt-2">
                        — Bhagavad Gita 10.41
                    </p>
                </div>

                {/* Modal */}
                {selectedMusing && (
                    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
                        <div
                            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
                            onClick={() => setSelectedMusing(null)}
                        ></div>
                        <div className="relative bg-white/90 backdrop-blur-md p-8 rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-white/20">
                            <button
                                onClick={() => setSelectedMusing(null)}
                                className="absolute top-4 right-4 text-gray-500 hover:text-red-500 transition-colors"
                            >
                                <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>

                            <div className="text-center">



                                <div className="mb-8 rounded-xl overflow-hidden max-h-80 mx-auto w-fit shadow-lg">
                                    <img
                                        src={selectedMusing.image}
                                        alt={selectedMusing.title}
                                        className="object-cover max-h-80"
                                    />
                                </div>

                                <h3 className="text-3xl font-serif font-bold mb-2">{selectedMusing.title}</h3>
                                <div className="w-16 h-1 bg-primary rounded-full mx-auto mt-4"></div>

                                <div className="mt-4 mb-4 font-serif text-md leading-loose text-gray-700 italic whitespace-pre-line text-left flex justify-center align-center">
                                    {selectedMusing.content}
                                </div>
                                <div className="test-right flex justify-end pr-5 text-primary font-serif">
                                    -M.D
                                </div>

                            </div>
                        </div>
                    </div>
                )}
            </div>

        </section >
    );
}
