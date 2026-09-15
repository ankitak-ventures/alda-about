"use client";

import React, { useEffect, useRef, useState } from "react";

export default function VisionMission() {
    const sectionRef = useRef<HTMLElement>(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                }
            },
            {
                threshold: 0.15,
                rootMargin: "0px 0px -40px 0px",
            }
        );

        const currentElem = sectionRef.current;
        if (currentElem) {
            observer.observe(currentElem);
        }

        return () => {
            if (currentElem) {
                observer.unobserve(currentElem);
            }
        };
    }, []);

    const visionHighlights = [
        "Timeless architectural design",
        "Eco-conscious and sustainable communities",
        "Homes crafted for generational pride",
    ];

    const missionHighlights = [
        "1,357+ rigorous quality audits",
        "100% on-schedule handover commitment",
        "Lifetime homeowner care and delight",
    ];

    return (
        <section
            ref={sectionRef}
            aria-label="Our Vision and Mission"
            className="relative w-full bg-[#fcfbf9] text-slate-900 py-14 sm:py-18 md:py-24 overflow-hidden"
        >
            {/* Subtle luxury ambient glow */}
            <div
                aria-hidden="true"
                className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-[#f17829]/[0.05] blur-[120px] rounded-full pointer-events-none -z-0"
            />

            <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* =========================================================================
            1. SECTION HEADER (Smooth Fade-Up Animation)
           ========================================================================= */}
                <div
                    className={`max-w-2xl mx-auto text-center mb-12 sm:mb-16 transition-all duration-700 ease-out transform ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
                        }`}
                >
                    {/* Small Label */}
                    <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#f17829]/10 border border-[#f17829]/30 text-[#f17829] text-xs font-extrabold uppercase tracking-[0.2em] mb-3 shadow-2xs">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#f17829]" />
                        <span>OUR PURPOSE</span>
                    </div>

                    {/* Simple Title */}                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-slate-900 tracking-tight leading-tight">
                        <span className="relative inline-block">
                            Built
                            {/* Rectangular solid orange bar matching ALDA logo & user reference */}
                            <span
                                className={`absolute left-0 -bottom-1.5 sm:-bottom-2 md:-bottom-2.5 h-[6px] sm:h-[8px] md:h-[10px] bg-[#f17829] transition-all duration-1000 ease-out delay-150 ${isVisible ? "w-24 opacity-100 shadow-[0_0_10px_rgba(241,120,41,0.4)]" : "w-0 opacity-0"
                                    }`}
                                aria-hidden="true"
                            />
                        </span>{" "}
                        With <span className="text-[#f17829]">Purpose</span>
                    </h2>

                    {/* Simple Description */}
                    <p className="mt-3.5 text-sm sm:text-base md:text-lg text-slate-600 leading-relaxed font-normal">
                        Guided by a clear vision and committed to uncompromising quality in every home we build.
                    </p>
                </div>

                {/* =========================================================================
            2. OUR VISION & OUR MISSION (Directional Smooth Entrance Animations)
           ========================================================================= */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 items-stretch">
                    {/* OUR VISION CARD (Enters from Left) */}
                    <div
                        className={`group relative flex flex-col justify-between bg-white rounded-2xl sm:rounded-tl-[52px] sm:rounded-br-[52px] border border-slate-200/80 hover:border-[#f17829]/50 p-6 sm:p-8 md:p-10 shadow-sm hover:shadow-xl hover:shadow-[#f17829]/10 transition-all duration-1000 ease-out hover:-translate-y-1 overflow-hidden transform ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-12"
                            }`}
                    >
                        {/* Top gold accent line */}
                        <div className="absolute top-0 inset-x-0 h-[3px] bg-gradient-to-r from-[#f17829] via-[#f98b42] to-transparent opacity-80 group-hover:opacity-100 transition-opacity" />

                        <div>
                            {/* Icon & Title */}
                            <div className="flex items-center gap-3.5 mb-5">
                                <div className="w-11 h-11 rounded-xl bg-[#f17829]/10 border border-[#f17829]/30 flex items-center justify-center text-[#f17829] shadow-2xs group-hover:scale-105 transition-transform shrink-0">
                                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <circle cx="12" cy="12" r="10" />
                                        <polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76" />
                                    </svg>
                                </div>
                                <div>
                                    <span className="text-[11px] font-bold uppercase tracking-widest text-[#f17829] block">
                                        The Horizon
                                    </span>
                                    <h3 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
                                        Our Vision
                                    </h3>
                                </div>
                            </div>

                            {/* Simple Description */}
                            <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-normal mb-6">
                                To redefine homeownership by creating enduring landmarks of pride—where
                                architectural brilliance, sustainable craftsmanship, and community happiness
                                harmoniously converge.
                            </p>

                            {/* Highlights */}
                            <ul className="space-y-2.5 pt-4 border-t border-slate-100">
                                {visionHighlights.map((item, i) => (
                                    <li key={i} className="flex items-center gap-2.5 text-xs sm:text-sm font-medium text-slate-700">
                                        <span className="w-5 h-5 rounded-full bg-[#f17829]/15 text-[#f17829] flex items-center justify-center text-xs shrink-0 font-bold">
                                            ✓
                                        </span>
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Card Footer Tag */}
                        <div className="mt-8 pt-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-400">
                            <span className="font-semibold text-slate-600">A Legacy of Pride</span>
                            <span className="font-mono text-[11px]">ALDA HOMES</span>
                        </div>
                    </div>

                    {/* OUR MISSION CARD (Enters from Right) */}
                    <div
                        className={`group relative flex flex-col justify-between bg-white rounded-2xl sm:rounded-tr-[52px] sm:rounded-bl-[52px] border border-slate-200/80 hover:border-[#f17829]/50 p-6 sm:p-8 md:p-10 shadow-sm hover:shadow-xl hover:shadow-[#f17829]/10 transition-all duration-1000 ease-out hover:-translate-y-1 overflow-hidden transform ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-12"
                            }`}
                    >
                        {/* Top gold accent line */}
                        <div className="absolute top-0 inset-x-0 h-[3px] bg-gradient-to-r from-transparent via-[#f98b42] to-[#f17829] opacity-80 group-hover:opacity-100 transition-opacity" />

                        <div>
                            {/* Icon & Title */}
                            <div className="flex items-center gap-3.5 mb-5">
                                <div className="w-11 h-11 rounded-xl bg-[#f17829]/10 border border-[#f17829]/30 flex items-center justify-center text-[#f17829] shadow-2xs group-hover:scale-105 transition-transform shrink-0">
                                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <circle cx="12" cy="12" r="10" />
                                        <circle cx="12" cy="12" r="6" />
                                        <circle cx="12" cy="12" r="2" />
                                    </svg>
                                </div>
                                <div>
                                    <span className="text-[11px] font-bold uppercase tracking-widest text-[#f17829] block">
                                        The Execution
                                    </span>
                                    <h3 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
                                        Our Mission
                                    </h3>
                                </div>
                            </div>

                            {/* Simple Description */}
                            <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-normal mb-6">
                                To deliver an effortless, joyful homeownership experience at every step—anchored
                                in radical transparency, 1,357+ rigorous quality checkpoints, and lifelong customer
                                delight.
                            </p>

                            {/* Highlights */}
                            <ul className="space-y-2.5 pt-4 border-t border-slate-100">
                                {missionHighlights.map((item, i) => (
                                    <li key={i} className="flex items-center gap-2.5 text-xs sm:text-sm font-medium text-slate-700">
                                        <span className="w-5 h-5 rounded-full bg-[#f17829]/15 text-[#f17829] flex items-center justify-center text-xs shrink-0 font-bold">
                                            ✓
                                        </span>
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Card Footer Tag */}
                        <div className="mt-8 pt-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-400">
                            <span className="font-semibold text-slate-600">Committed Handover</span>
                            <span className="font-mono text-[11px]">1,357+ CHECKS</span>
                        </div>
                    </div>
                </div>
            </div>
        </section >
    );
}
