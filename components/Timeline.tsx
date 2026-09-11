"use client";

import React, { useEffect, useRef, useState } from "react";

interface MilestoneItem {
    year: string;
    title: string;
    description: string;
    isUp: boolean; // Alternates content position: true = UP, false = DOWN
    icon: (props: { className?: string }) => React.JSX.Element;
}

const milestones: MilestoneItem[] = [
    {
        year: "1986",
        title: "Heritage Genesis",
        description: "Laying foundational craftsmanship and enduring construction standards.",
        isUp: true,
        icon: ({ className }) => (
            <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                <polyline points="9 22 9 12 15 12 15 22" />
            </svg>
        ),
    },
    {
        year: "1999",
        title: "Strategic Alliances",
        description: "Forming landmark industry partnerships to scale structural engineering.",
        isUp: false,
        icon: ({ className }) => (
            <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                <circle cx="9" cy="7" r="4" />
                <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
                <path d="M16 3.13a4 4 0 0 1 0 7.75" />
            </svg>
        ),
    },
    {
        year: "2005",
        title: "Urban Horizons",
        description: "Pioneering master-planned developments in emerging city corridors.",
        isUp: true,
        icon: ({ className }) => (
            <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10" />
                <polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76" />
            </svg>
        ),
    },
    {
        year: "2010",
        title: "Brand Foundation",
        description: "Formally establishing ALDA with a vision of uncompromised trust.",
        isUp: false,
        icon: ({ className }) => (
            <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="9" />
                <path d="M12 7v10M7 12h10" />
            </svg>
        ),
    },
    {
        year: "2013",
        title: "1M+ Sq.Ft. Delivered",
        description: "Delivering over one million square feet of landmark residences.",
        isUp: true,
        icon: ({ className }) => (
            <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4 21V9l6-4 6 4v12" />
                <path d="M9 21v-5a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v5" />
                <path d="M19 21V13l3-2v10" />
            </svg>
        ),
    },
    {
        year: "2016",
        title: "Customer Delight",
        description: "Introducing transparent buyer metrics and proactive homeowner care.",
        isUp: false,
        icon: ({ className }) => (
            <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
            </svg>
        ),
    },
    {
        year: "2018",
        title: "Green Architecture",
        description: "Pioneering sustainable biophilic masterplans and eco-conscious communities.",
        isUp: true,
        icon: ({ className }) => (
            <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z" />
                <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12" />
            </svg>
        ),
    },
    {
        year: "2020",
        title: "Quality Checkpoints",
        description: "Standardizing 1,357+ stringent quality audits with on-time delivery.",
        isUp: false,
        icon: ({ className }) => (
            <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" />
                <path d="m9 12 2 2 4-4" />
            </svg>
        ),
    },
    {
        year: "2022",
        title: "Benchmark Ratings",
        description: "Achieving prestigious CRISIL 7-star ratings and design accolades.",
        isUp: true,
        icon: ({ className }) => (
            <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
            </svg>
        ),
    },
    {
        year: "2024",
        title: "10,000+ Happy Families",
        description: "Reaching the milestone of 10,000+ delighted homeowner families.",
        isUp: false,
        icon: ({ className }) => (
            <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M3 10a5 5 0 0 1 8.94-3H20l2 2-2 2-1-1-2 2-1-1-2 2h-1.06A5 5 0 0 1 3 10Z" />
                <circle cx="8" cy="10" r="1.5" />
            </svg>
        ),
    },
    {
        year: "2026",
        title: "Smart Residences",
        description: "Launching next-generation intelligent homes built for future living.",
        isUp: true,
        icon: ({ className }) => (
            <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
                <line x1="8" y1="21" x2="16" y2="21" />
                <line x1="12" y1="17" x2="12" y2="21" />
            </svg>
        ),
    },
    {
        year: "2028",
        title: "Future Horizons",
        description: "Designing sustainable, carbon-neutral community ecosystems.",
        isUp: false,
        icon: ({ className }) => (
            <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10" />
                <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" />
                <path d="M2 12h20" />
            </svg>
        ),
    },
];

export default function Timeline() {
    const scrollContainerRef = useRef<HTMLDivElement | null>(null);
    const [canScrollLeft, setCanScrollLeft] = useState(false);
    const [canScrollRight, setCanScrollRight] = useState(true);
    const [isDragging, setIsDragging] = useState(false);
    const [startX, setStartX] = useState(0);
    const [scrollLeft, setScrollLeft] = useState(0);

    const checkScrollBounds = () => {
        const el = scrollContainerRef.current;
        if (!el) return;
        setCanScrollLeft(el.scrollLeft > 20);
        setCanScrollRight(el.scrollLeft < el.scrollWidth - el.clientWidth - 20);
    };

    useEffect(() => {
        const el = scrollContainerRef.current;
        if (!el) return;

        checkScrollBounds();
        el.addEventListener("scroll", checkScrollBounds);
        window.addEventListener("resize", checkScrollBounds);

        return () => {
            el.removeEventListener("scroll", checkScrollBounds);
            window.removeEventListener("resize", checkScrollBounds);
        };
    }, []);

    const handleScroll = (direction: "left" | "right") => {
        const el = scrollContainerRef.current;
        if (!el) return;
        const scrollAmount = 380;
        el.scrollBy({
            left: direction === "left" ? -scrollAmount : scrollAmount,
            behavior: "smooth",
        });
    };

    const handleMouseDown = (e: React.MouseEvent) => {
        const el = scrollContainerRef.current;
        if (!el) return;
        setIsDragging(true);
        setStartX(e.pageX - el.offsetLeft);
        setScrollLeft(el.scrollLeft);
    };

    const handleMouseMove = (e: React.MouseEvent) => {
        if (!isDragging) return;
        e.preventDefault();
        const el = scrollContainerRef.current;
        if (!el) return;
        const x = e.pageX - el.offsetLeft;
        const walk = (x - startX) * 1.5;
        el.scrollLeft = scrollLeft - walk;
    };

    const handleMouseUpOrLeave = () => {
        setIsDragging(false);
    };

    return (
        <section
            aria-label="Our Journey Timeline"
            className="relative w-full bg-[#faf9f6] text-slate-900 pt-8 sm:pt-10 md:pt-12 pb-12 sm:pb-16 overflow-hidden border-t border-slate-200/70 select-none"
        >
            <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
                {/* =========================================================================
                    1. SECTION HEADER (Reduced Top Space, Clean Title & Arrows)
                   ========================================================================= */}
                <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-6 sm:mb-8">
                    <div>
                        {/* Eyebrow Badge */}
                        <div className="inline-flex items-center gap-2 px-3 py-0.5 rounded-full bg-[#f17829]/10 border border-[#f17829]/30 text-[#f17829] text-xs font-extrabold uppercase tracking-[0.2em] mb-2 shadow-2xs">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#f17829] animate-pulse" />
                            <span>OUR JOURNEY</span>
                        </div>

                        {/* Heading */}
                        <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#18212e] tracking-tight leading-tight">
                            Building More Than{" "}
                            <span className="relative inline-block text-[#f17829]">
                                Homes
                            </span>
                        </h2>
                        <p className="mt-1.5 text-sm sm:text-base text-slate-600 font-normal max-w-xl leading-relaxed">
                            A legacy of thoughtful master planning, quality craftsmanship, and enduring trust across generations.
                        </p>
                    </div>

                    {/* Navigation Buttons */}
                    <div className="flex items-center gap-3 self-end sm:self-auto">
                        <button
                            type="button"
                            onClick={() => handleScroll("left")}
                            disabled={!canScrollLeft}
                            aria-label="Previous milestones"
                            className={`w-10 h-10 rounded-full border flex items-center justify-center transition-all duration-300 shadow-2xs ${canScrollLeft
                                ? "bg-white border-slate-300 text-slate-800 hover:border-[#f17829] hover:text-[#f17829] hover:bg-[#f17829]/10 cursor-pointer shadow-sm"
                                : "bg-slate-100/60 border-slate-200 text-slate-400 cursor-not-allowed"
                                }`}
                        >
                            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                            </svg>
                        </button>
                        <button
                            type="button"
                            onClick={() => handleScroll("right")}
                            disabled={!canScrollRight}
                            aria-label="Next milestones"
                            className={`w-10 h-10 rounded-full border flex items-center justify-center transition-all duration-300 shadow-2xs ${canScrollRight
                                ? "bg-white border-slate-300 text-slate-800 hover:border-[#f17829] hover:text-[#f17829] hover:bg-[#f17829]/10 cursor-pointer shadow-sm"
                                : "bg-slate-100/60 border-slate-200 text-slate-400 cursor-not-allowed"
                                }`}
                        >
                            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                            </svg>
                        </button>
                    </div>
                </div>

                {/* =========================================================================
                    2. HORIZONTAL SCROLLABLE TIMELINE (12 MILESTONES, SMALL DOTS, NO BOXES)
                   ========================================================================= */}
                <div
                    ref={scrollContainerRef}
                    onMouseDown={handleMouseDown}
                    onMouseMove={handleMouseMove}
                    onMouseUp={handleMouseUpOrLeave}
                    onMouseLeave={handleMouseUpOrLeave}
                    className={`w-full overflow-x-auto cursor-grab active:cursor-grabbing pb-4 pt-2 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden ${isDragging ? "select-none" : ""
                        }`}
                >
                    <div className="relative min-w-max px-6">
                        {/* Height Container */}
                        <div className="relative h-[340px] flex items-center">
                            {/* Continuous Center Horizontal Line */}
                            <div className="absolute left-0 right-0 top-1/2 -translate-y-1/2 h-[1.5px] bg-slate-300" />
                            <div className="absolute left-0 right-0 top-1/2 -translate-y-1/2 h-[1.5px] bg-gradient-to-r from-[#f17829]/20 via-[#f17829] to-[#f17829]/20" />

                            {/* Milestones Row */}
                            <div className="relative flex items-center gap-12 sm:gap-16 z-10">
                                {milestones.map((item) => {
                                    const Icon = item.icon;

                                    return (
                                        <div
                                            key={item.year}
                                            className="group relative w-[210px] sm:w-[230px] flex-shrink-0 h-full flex flex-col items-center select-none"
                                        >
                                            {/* =========================================================
                                                UPPER ZONE (Above Line: isUp = true)
                                                NO BOX - Pure floating typography & clean micro icon
                                               ========================================================= */}
                                            {item.isUp && (
                                                <div className="absolute bottom-[calc(50%+16px)] left-0 right-0 flex flex-col items-center text-center transition-transform duration-300 group-hover:-translate-y-1">
                                                    {/* Minimalist Icon Badge */}
                                                    <div className="w-8 h-8 rounded-lg bg-[#f17829]/10 border border-[#f17829]/30 flex items-center justify-center text-[#f17829] mb-1.5 shadow-2xs group-hover:bg-[#f17829] group-hover:text-white transition-all duration-300">
                                                        <Icon className="w-4 h-4" />
                                                    </div>

                                                    {/* Year */}
                                                    <p className="text-2xl sm:text-3xl font-black text-[#18212e] tracking-tight group-hover:text-[#f17829] transition-colors leading-none">
                                                        {item.year}
                                                    </p>

                                                    {/* Title */}
                                                    <h3 className="text-sm font-bold text-[#18212e] mt-1 mb-0.5 leading-snug">
                                                        {item.title}
                                                    </h3>

                                                    {/* Short Crisp Description */}
                                                    <p className="text-xs text-slate-500 font-normal leading-relaxed max-w-[190px]">
                                                        {item.description}
                                                    </p>
                                                </div>
                                            )}

                                            {/* =========================================================
                                                CENTER DOT: SMALL, CLEAN & MINIMALIST
                                               ========================================================= */}
                                            <div className="w-2.5 h-2.5 rounded-full bg-[#f17829] ring-4 ring-[#f17829]/20 group-hover:scale-135 group-hover:ring-[#f17829]/40 transition-all duration-300 shadow-2xs z-20" />

                                            {/* =========================================================
                                                LOWER ZONE (Below Line: isUp = false)
                                                NO BOX - Pure floating typography & clean micro icon
                                               ========================================================= */}
                                            {!item.isUp && (
                                                <div className="absolute top-[calc(50%+16px)] left-0 right-0 flex flex-col items-center text-center transition-transform duration-300 group-hover:translate-y-1">
                                                    {/* Minimalist Icon Badge */}
                                                    <div className="w-8 h-8 rounded-lg bg-[#f17829]/10 border border-[#f17829]/30 flex items-center justify-center text-[#f17829] mb-1.5 shadow-2xs group-hover:bg-[#f17829] group-hover:text-white transition-all duration-300">
                                                        <Icon className="w-4 h-4" />
                                                    </div>

                                                    {/* Year */}
                                                    <p className="text-2xl sm:text-3xl font-black text-[#18212e] tracking-tight group-hover:text-[#f17829] transition-colors leading-none">
                                                        {item.year}
                                                    </p>

                                                    {/* Title */}
                                                    <h3 className="text-sm font-bold text-[#18212e] mt-1 mb-0.5 leading-snug">
                                                        {item.title}
                                                    </h3>

                                                    {/* Short Crisp Description */}
                                                    <p className="text-xs text-slate-500 font-normal leading-relaxed max-w-[190px]">
                                                        {item.description}
                                                    </p>
                                                </div>
                                            )}
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Subtle Scroll Hint */}

            </div>
        </section>
    );
}
