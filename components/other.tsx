"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";

interface MediaPostItem {
    id: string;
    category: string;
    title: string;
    description: string;
    badge: string;
    date: string;
    readTime: string;
    fullStory: string;
}

const mediaItems: MediaPostItem[] = [
    {
        id: "hype-hub",
        category: "Press & Trends",
        title: "Hype Hub",
        description: "Where trending architectural news meets urban buzz.",
        badge: "Trending",
        date: "September 2026",
        readTime: "3 min read",
        fullStory:
            "ALDA takes center stage across major real-estate dailies as groundbreaking begins on Chennai's premier sustainable township. Discover how biophilic designs are redefining urban skylines.",
    },
    {
        id: "spotlight",
        category: "Exclusive Features",
        title: "Spotlight",
        description: "Latest updates and deep dives, hot off the press.",
        badge: "Exclusive",
        date: "August 2026",
        readTime: "4 min read",
        fullStory:
            "An inside look into ALDA's architectural masterplanning division. From sun-path analysis to earthquake-resilient engineering, explore how each square foot is thoughtfully engineered.",
    },
    {
        id: "accolades",
        category: "Awards & Honors",
        title: "Our Accolades",
        description: "Industry awards, shout-outs, and milestone achievements.",
        badge: "Awards",
        date: "July 2026",
        readTime: "2 min read",
        fullStory:
            "Celebrating our double gold win at the National Real Estate Excellence Awards for 'Best Sustainable Community Masterplan' and 'Highest On-Time Handover Index'.",
    },
    {
        id: "corporate-conscience",
        category: "ESG & Sustainability",
        title: "Corporate Conscience",
        description: "Leading with values that matter and ethics that inspire.",
        badge: "Impact",
        date: "June 2026",
        readTime: "5 min read",
        fullStory:
            "Our pledge for 100% rainwater recycling and solar-integrated common utilities is now live across all active developments. Building responsibly for generations to follow.",
    },
    {
        id: "newsletter",
        category: "Editorial Dispatch",
        title: "Newsletter",
        description: "Curated insights, market outlooks, and exclusive drops.",
        badge: "Issue #48",
        date: "May 2026",
        readTime: "4 min read",
        fullStory:
            "In this edition: The rising ROI of green-certified homes in South India, upcoming infrastructure corridors, and insider interviews with ALDA's chief architects.",
    },
    {
        id: "podcasts-blog",
        category: "Audio & Deep Dives",
        title: "Podcasts & Blog",
        description: "Fresh episodes and founder conversations anytime, anywhere.",
        badge: "Ep 12 Live",
        date: "April 2026",
        readTime: "18 min listen",
        fullStory:
            "Tune into 'Crafting Tomorrow': Founder conversations on balancing luxury aesthetics with structural integrity, and how smart automation elevates modern daily living.",
    },
];

export default function Other() {
    const sectionRef = useRef<HTMLElement | null>(null);
    const [isVisible, setIsVisible] = useState(false);
    const [activeModalItem, setActiveModalItem] = useState<MediaPostItem | null>(null);

    useEffect(() => {
        const section = sectionRef.current;
        if (!section) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                }
            },
            {
                threshold: 0.12,
                rootMargin: "0px 0px -40px 0px",
            }
        );

        observer.observe(section);

        return () => observer.disconnect();
    }, []);

    // Close modal on Escape key
    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === "Escape") {
                setActiveModalItem(null);
            }
        };
        window.addEventListener("keydown", handleKeyDown);
        return () => window.removeEventListener("keydown", handleKeyDown);
    }, []);

    return (
        <section
            ref={sectionRef}
            aria-label="Media Post News and Media Coverage"
            className="relative w-full bg-[#12151d80] text-white py-16 sm:py-20 md:py-24 overflow-hidden border-t border-slate-800/80"
        >
            {/* Architectural Background Image with Tuned Low Opacity */}
            <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden select-none">
                <Image
                    src="/media-bg.jpg"
                    alt="ALDA Media Architectural Skyline"
                    fill
                    priority
                    sizes="100vw"
                    className="object-cover object-center opacity-30"
                />
                {/* Smooth top/bottom fade into adjacent sections without suffocating the image */}
                <div className="absolute inset-0 bg-gradient-to-b from-[#12151d]/90 via-transparent to-[#12151d]" />
                <div className="absolute inset-0 bg-[#12151d]/25" />
            </div>

            {/* Background Ambient Glows */}
            <div
                aria-hidden="true"
                className="absolute top-0 right-1/4 w-[520px] h-[320px] bg-[#f17829]/[0.035] blur-[150px] rounded-full pointer-events-none z-0"
            />
            <div
                aria-hidden="true"
                className="absolute bottom-0 left-1/4 w-[480px] h-[300px] bg-blue-500/[0.025] blur-[140px] rounded-full pointer-events-none z-0"
            />

            <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
                {/* =========================================================================
                    1. SECTION HEADER: "MEDIA POST"
                   ========================================================================= */}
                <div
                    className={`flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 sm:mb-16 transition-all duration-700 ease-out transform ${isVisible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
                        }`}
                >
                    <div>
                        {/* Eyebrow Badge */}
                        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#f17829]/10 border border-[#f17829]/30 text-[#f17829] text-xs font-semibold uppercase tracking-widest mb-3.5 animate-orange-glow backdrop-blur-sm transition-all duration-300 hover:scale-[1.02]">
                            <span className="relative flex h-2 w-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#f17829] opacity-75 duration-1000" />
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#f17829]" />
                            </span>
                            <span className="animate-orange-shimmer font-bold">PRESS & COVERAGE</span>
                        </div>

                        {/* Main Title: MEDIA POST with Animated Orange Highlight */}
                        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-white tracking-tight uppercase leading-none">
                            MEDIA{" "}
                            <span className="relative inline-block">
                                <span className="animate-orange-shimmer inline-block">POST</span>
                                {/* Animated underline bar matching ALDA brand styling */}

                            </span>
                        </h2>
                    </div>

                    {/* Aligned Supporting Subtitle */}
                    <div className="max-w-md border-l-0 md:border-l md:border-slate-800 md:pl-6 pb-1">
                        <p className="text-xs sm:text-sm text-slate-400 font-normal leading-relaxed">
                            Stay updated with the latest news, press releases, and media coverage of ALDA&apos;s projects and impact.
                        </p>
                    </div>
                </div>

                {/* =========================================================================
                    2. REFINED MEDIA CARDS GRID
                       - Subtle box title weight (medium/semibold, not heavy black)
                       - Fluid, smooth hover & staggered entrance animation
                   ========================================================================= */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
                    {mediaItems.map((item, index) => (
                        <div
                            key={item.id}
                            role="button"
                            tabIndex={0}
                            onClick={() => setActiveModalItem(item)}
                            onKeyDown={(e) => {
                                if (e.key === "Enter" || e.key === " ") {
                                    e.preventDefault();
                                    setActiveModalItem(item);
                                }
                            }}
                            style={{
                                transitionDelay: isVisible ? `${index * 70}ms` : "0ms",
                            }}
                            className={`group relative p-6 rounded-xl bg-[#171a23]/75 backdrop-blur-md border border-slate-800/80 hover:border-[#f17829]/40 hover:bg-[#1c202c]/90 transition-all duration-300 ease-out cursor-pointer flex flex-col justify-between gap-5 overflow-hidden shadow-sm hover:shadow-xl hover:shadow-black/40 hover:-translate-y-1 transform ${isVisible
                                ? "translate-y-0 opacity-100"
                                : "translate-y-8 opacity-0"
                                }`}
                        >
                            {/* Subtle Ambient Gold Top-border Highlight on Hover */}
                            <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#f17829]/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

                            {/* Top Details: Category Pill & Read Time */}
                            <div>
                                <div className="flex items-center justify-between gap-2 mb-3">
                                    <span className="inline-flex items-center gap-1.5 text-[11px] font-medium tracking-wider text-[#f17829] uppercase group-hover:text-[#ff9248] transition-colors duration-200">
                                        <span className="relative flex h-1.5 w-1.5">
                                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#f17829] opacity-40 group-hover:opacity-90 duration-700" />
                                            <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-[#f17829]" />
                                        </span>
                                        <span className="group-hover:translate-x-0.5 transition-transform duration-200">
                                            {item.category}
                                        </span>
                                    </span>
                                    <span className="text-[11px] font-mono text-slate-500">
                                        {item.readTime}
                                    </span>
                                </div>

                                {/* Box Title: Refined, elegant medium weight (no heavy black font) */}
                                <h3 className="text-base sm:text-[17px] font-medium text-slate-100 group-hover:text-[#f17829] transition-colors duration-200 leading-snug">
                                    {item.title}
                                </h3>

                                {/* Subtitle / Description */}
                                <p className="mt-2 text-xs sm:text-sm text-slate-400 group-hover:text-slate-300 transition-colors duration-200 font-normal leading-relaxed line-clamp-2">
                                    {item.description}
                                </p>
                            </div>

                            {/* Card Footer: "Read Story" with micro-animated arrow */}
                            <div className="pt-3 border-t border-slate-800/60 flex items-center justify-between text-xs text-slate-400 group-hover:text-[#f17829] transition-colors duration-200">
                                <span className="font-medium">Read Story</span>
                                <div className="w-7 h-7 rounded-full bg-slate-800/70 group-hover:bg-[#f17829]/10 group-hover:text-[#f17829] flex items-center justify-center transition-all duration-300 transform group-hover:translate-x-1">
                                    <svg
                                        className="w-3.5 h-3.5"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        strokeWidth={2}
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M9 5l7 7-7 7"
                                        />
                                    </svg>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* =========================================================================
                3. INTERACTIVE PREVIEW MODAL
               ========================================================================= */}
            {activeModalItem && (
                <div
                    role="dialog"
                    aria-modal="true"
                    aria-labelledby="modal-title"
                    className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-sm transition-opacity duration-300"
                    onClick={() => setActiveModalItem(null)}
                >
                    <div
                        onClick={(e) => e.stopPropagation()}
                        className="relative w-full max-w-lg p-6 sm:p-8 rounded-2xl bg-[#171a23] border border-slate-700/80 shadow-2xl text-left"
                    >
                        {/* Close Button */}
                        <button
                            type="button"
                            onClick={() => setActiveModalItem(null)}
                            aria-label="Close modal"
                            className="absolute top-5 right-5 w-8 h-8 rounded-full bg-slate-800 text-slate-400 hover:text-white hover:border-[#f17829] hover:bg-[#f17829]/20 flex items-center justify-center transition-all cursor-pointer"
                        >
                            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>

                        {/* Modal Header */}
                        <div className="flex items-center gap-2 mb-3">
                            <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono font-medium uppercase tracking-wider bg-[#f17829]/10 text-[#f17829] border border-[#f17829]/30 animate-orange-glow">
                                {activeModalItem.badge}
                            </span>
                            <span className="text-xs text-slate-400 font-mono">
                                &bull; {activeModalItem.date}
                            </span>
                            <span className="text-xs text-slate-400 font-mono">
                                &bull; {activeModalItem.readTime}
                            </span>
                        </div>

                        {/* Modal Title (Clean medium weight) */}
                        <h4 id="modal-title" className="text-xl sm:text-2xl font-semibold text-white mb-2">
                            {activeModalItem.title}
                        </h4>

                        {/* Tagline with subtle orange shimmer */}
                        <p className="text-sm font-medium animate-orange-shimmer mb-4">
                            {activeModalItem.description}
                        </p>

                        {/* Story Content */}
                        <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-normal mb-6">
                            {activeModalItem.fullStory}
                        </p>

                        {/* Modal Footer / Action Button */}
                        <div className="flex items-center justify-end gap-3 pt-4 border-t border-slate-800">
                            <button
                                type="button"
                                onClick={() => setActiveModalItem(null)}
                                className="px-5 py-2 rounded-lg bg-[#f17829] hover:bg-[#d9671e] text-white font-semibold text-xs uppercase tracking-wider transition-all duration-200 cursor-pointer shadow-md shadow-[#f17829]/25"
                            >
                                Close Article
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </section>
    );
}
