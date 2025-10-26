"use client";

import { motion } from "framer-motion";
import Image from "next/image"


export default function Home() {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 text-gray-900">
            {/* Top Navigation */}
            {/* Main Content */}
            <main className="flex  items-center mt-20 mb-20 py-15">

                <Image
                    width={500}
                    height={500}
                    src="/piccrop.png"
                    // src="https://plus.unsplash.com/premium_photo-1664474619075-644dd191935f?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aW1hZ2V8ZW58MHx8MHx8fDA%3D" // replace with your own photo
                    alt="Profile"
                    className="w-120 h-120 rounded-full object-cover shadow-lg"
                />
                <div className="px-3">
                    {/* <p className="max-w-md text-5xl font-bold m-8"> Hello</p> */}
                    <p className="max-w-md m-8 text-black text-8xl font-bold">
                        Hello
                    </p>
                    <p className="max-w-md m-8 text-gray-600 px-2">
                        <b className="text-black text-xl "> A Bit About Me </b><br />
                        I'm a paragraph. Click here to add your own text and edit me. I'm a
                        great place for you to tell a story and let your users know a little
                        more about you.
                    </p>

                    {/* Animated Buttons */}
                    <motion.div
                        className="flex gap-6 mt-10"
                        initial="hidden"
                        animate="visible"
                        variants={{
                            hidden: {},
                            visible: {
                                transition: {
                                    staggerChildren: 0.1,   // wait until the previous one is done
                                    delayChildren: 0.1
                                }
                            }
                        }}
                    >
                        {[
                            { text: "Resume", color: "bg-[#eea302]" },
                            { text: "Projects", color: "bg-[#660033]" },
                            { text: "Contact", color: "bg-[#006644]" },
                        ].map((btn, i) => (
                            <motion.a
                                key={i}
                                href={`#${btn.text.toLowerCase()}`}
                                variants={{
                                    hidden: { opacity: 0, y: 100 },
                                    visible: { opacity: 1, y: 0 }
                                }}
                                transition={{
                                    duration: 0.1,    // each animation lasts 0.4s
                                    ease: "easeOut"
                                }}
                                style={{
                                    transition: "border-color .3s ease, background-color .3s ease, transform .3s ease"
                                }}
                                className={`${btn.color} px-9 py-14 rounded-full text-white font-semibold shadow-md hover:scale-110 hover:bg-amber-50 hover:text-black border-1 border-black`}
                            >
                                {btn.text}
                            </motion.a>
                        ))}
                    </motion.div>
                </div>
                {/* <div
                    className={`absolute bottom-0 left-0 right-10 h-[3px] bg-yellow-500 rounded-full transition-all ease-out ${scrolled ? "opacity-100" : "opacity-0"
                        }`}
                    style={{ width: `${sunPos}%`, transition: "0.9s ease-out" }}
                >
                    {scrolled && (
                        <span
                            className="absolute -top-[35px]"
                            style={{ left: "96%", transition: "0.3s ease-out" }}
                        >
                            <img
                                src="/sunflower.png"
                                width={40}
                                height={40}
                                alt="sunflower"
                            />
                        </span>
                    )}
                </div> */}
            </main>
            {/* Footer */}
        </div>
    );
}
