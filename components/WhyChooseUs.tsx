"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

interface FeatureItem {
    id: string;
    title: string;
    description: string;
    highlightWord: string;
    icon: (props: { className?: string }) => React.JSX.Element;
}

export default function WhyChooseUs() {
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
                rootMargin: "0px 0px -50px 0px",
            }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => observer.disconnect();
    }, []);

    // Elevated features with customized messaging and luxury icons
    const features: FeatureItem[] = [
        {
            id: "delivery",
            title: "Punctual Handover",
            description:
                "Every project is delivered strictly on committed timelines with zero compromise on our 1,357+ quality checkpoints, delivering homes that inspire lasting",
            highlightWord: "Pride.",
            icon: ({ className }) => (
                // Precision Clock & Handover Key Motif
                <svg
                    className={className}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                >
                    <circle cx="12" cy="12" r="9" />
                    <polyline points="12 7 12 12 15 15" />
                    <path d="M19 5l2 2" />
                </svg>
            ),
        },
        {
            id: "transparency",
            title: "100% Transparent Deals",
            description:
                "Crystal-clear title deeds, RERA compliance, zero hidden clauses, and complete stage-wise documentation building unwavering",
            highlightWord: "Satisfaction.",
            icon: ({ className }) => (
                // Verified Shield & Trust Seal Motif
                <svg
                    className={className}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                >
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                    <path d="M9 12l2 2 4-4" />
                </svg>
            ),
        },
        {
            id: "design",
            title: "Innovative Architecture",
            description:
                "Bespoke layouts engineered for generous cross-ventilation, abundant natural daylight, and sustainable luxury designed to spark genuine",
            highlightWord: "Excitement.",
            icon: ({ className }) => (
                // Architectural Compass & Blueprint Motif
                <svg
                    className={className}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                >
                    <path d="M12 3v4" />
                    <circle cx="12" cy="5" r="2" />
                    <path d="M5 21l6.5-12" />
                    <path d="M19 21l-6.5-12" />
                    <path d="M8 17h8" />
                </svg>
            ),
        },
        {
            id: "customer",
            title: "Customer-Centric Care",
            description:
                "Dedicated relationship managers, real-time construction updates, and proactive lifetime support ensuring uninterrupted",
            highlightWord: "Happiness.",
            icon: ({ className }) => (
                // Heart & Caring Relationship Motif
                <svg
                    className={className}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                >
                    <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
                </svg>
            ),
        },
    ];

    return (
        <section
            ref={sectionRef}
            aria-label="Why Choose ALDA Homes"
            className="relative w-full bg-white text-slate-900 py-16 sm:py-20 md:py-24 overflow-hidden border-t border-gray-100"
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* =================================================================
            Section Header / Eyebrow (Smooth Fade-up)
            ================================================================= */}


                {/* =================================================================
            Main Content: 2x2 Feature Grid on Left + Lifestyle Image on Right
            ================================================================= */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
                    {/* Left Column: 4 Features in 2 Rows (Columns 1-7) */}
                    <div className="lg:col-span-7 flex flex-col">
                        {/* -------------------------------------------------------------
                ROW 1: Features 1 & 2
                ------------------------------------------------------------- */}
                        <div className="border-t border-gray-200 pt-8 pb-8 sm:pb-10">
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 sm:gap-10">
                                {features.slice(0, 2).map((item, index) => {
                                    const Icon = item.icon;
                                    return (
                                        <div
                                            key={item.id}
                                            className={`flex flex-col space-y-3 transition-all duration-700 ease-out transform ${isVisible
                                                ? "opacity-100 translate-y-0"
                                                : "opacity-0 translate-y-12"
                                                }`}
                                            style={{
                                                transitionDelay: isVisible
                                                    ? `${200 + index * 150}ms`
                                                    : "0ms",
                                            }}
                                        >
                                            {/* Icon + Title Header */}
                                            <div className="flex items-center gap-3.5">
                                                <div className="w-11 h-11 rounded-xl bg-amber-50 border border-amber-200/70 flex items-center justify-center text-amber-500 shadow-xs shrink-0 transition-transform duration-300 hover:scale-110">
                                                    <Icon className="w-5 h-5 text-[#f5a623]" />
                                                </div>
                                                <h3 className="text-lg font-bold text-slate-900 tracking-tight leading-snug">
                                                    {item.title}
                                                </h3>
                                            </div>

                                            {/* Description with Highlight Badge */}
                                            <p className="text-xs sm:text-[13px] md:text-sm text-gray-600 leading-relaxed font-normal pl-0.5">
                                                {item.description}{" "}
                                                <span className="inline-block bg-[#f5a623] text-slate-950 font-bold px-1.5 py-0.5 rounded text-xs shadow-2xs">
                                                    {item.highlightWord}
                                                </span>
                                            </p>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>

                        {/* -------------------------------------------------------------
                ROW 2: Features 3 & 4
                ------------------------------------------------------------- */}
                        <div className="border-t border-gray-200 pt-8">
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 sm:gap-10">
                                {features.slice(2, 4).map((item, index) => {
                                    const Icon = item.icon;
                                    return (
                                        <div
                                            key={item.id}
                                            className={`flex flex-col space-y-3 transition-all duration-700 ease-out transform ${isVisible
                                                ? "opacity-100 translate-y-0"
                                                : "opacity-0 translate-y-12"
                                                }`}
                                            style={{
                                                transitionDelay: isVisible
                                                    ? `${450 + index * 150}ms`
                                                    : "0ms",
                                            }}
                                        >
                                            {/* Icon + Title Header */}
                                            <div className="flex items-center gap-3.5">
                                                <div className="w-11 h-11 rounded-xl bg-amber-50 border border-amber-200/70 flex items-center justify-center text-amber-500 shadow-xs shrink-0 transition-transform duration-300 hover:scale-110">
                                                    <Icon className="w-5 h-5 text-[#f5a623]" />
                                                </div>
                                                <h3 className="text-lg font-bold text-slate-900 tracking-tight leading-snug">
                                                    {item.title}
                                                </h3>
                                            </div>

                                            {/* Description with Highlight Badge */}
                                            <p className="text-xs sm:text-[13px] md:text-sm text-gray-600 leading-relaxed font-normal pl-0.5">
                                                {item.description}{" "}
                                                <span className="inline-block bg-[#f5a623] text-slate-950 font-bold px-1.5 py-0.5 rounded text-xs shadow-2xs">
                                                    {item.highlightWord}
                                                </span>
                                            </p>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    </div>

                    {/* Right Column: Family Lifestyle Image with Soft Blend (Columns 8-12) */}
                    <div
                        className={`lg:col-span-5 relative w-full transition-all duration-1000 ease-out transform ${isVisible
                            ? "opacity-100 translate-y-0 scale-100"
                            : "opacity-0 translate-y-16 scale-95"
                            }`}
                        style={{
                            transitionDelay: isVisible ? "350ms" : "0ms",
                        }}
                    >
                        <div className="relative h-[340px] sm:h-[420px] md:h-[460px] lg:h-[490px] w-full rounded-2xl overflow-hidden shadow-lg border border-gray-100 group">
                            <Image
                                src="/why-choose-us.jpg"
                                alt="Happy family living in luxury ALDA home"
                                fill
                                priority={false}
                                sizes="(max-width: 1024px) 100vw, 42vw"
                                className="object-cover object-center transition-transform duration-1000 ease-out group-hover:scale-105"
                            />

                            {/* Seamless white gradient fade on the left (matching editorial reference) */}
                            <div className="absolute inset-y-0 left-0 w-24 sm:w-32 bg-gradient-to-r from-white via-white/50 to-transparent pointer-events-none hidden lg:block" />

                            {/* Subtle warm luxury bottom overlay */}
                            <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-slate-950/40 via-transparent to-transparent pointer-events-none" />

                            {/* Floating Quality Badge */}
                            <div className="absolute bottom-4 right-4 sm:bottom-6 sm:right-6 bg-white/95 backdrop-blur-md px-4 py-2.5 rounded-xl shadow-md border border-amber-100 flex items-center gap-3">
                                <div className="w-9 h-9 rounded-lg bg-amber-500 flex items-center justify-center text-slate-950 font-black text-sm">
                                    ✓
                                </div>
                                <div>
                                    <p className="text-[11px] font-semibold text-gray-500 uppercase tracking-wider">
                                        Quality Checks
                                    </p>
                                    <p className="text-xs sm:text-sm font-extrabold text-slate-900">
                                        1,357+ Strict Standards
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
