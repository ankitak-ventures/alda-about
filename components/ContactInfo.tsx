"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

export default function ContactInfo() {
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

    return (
        <section
            id="contact-section"
            ref={sectionRef}
            aria-label="Our Office"
            className="relative w-full bg-[#fbf9f6] text-[#0B1528] py-10 sm:py-12 md:py-14 px-4 sm:px-6 lg:px-8 overflow-hidden"
        >
            {/* Subtle luxury ambient glow behind card */}
            <div
                aria-hidden="true"
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-[#f17829]/[0.04] blur-[140px] rounded-full pointer-events-none -z-0"
            />

            <div className="relative z-10 max-w-6xl mx-auto">
                {/* =========================================================================
                    1. SECTION HEADER (Scroll Reveal)
                   ========================================================================= */}
                <div
                    className={`text-center max-w-2xl mx-auto mb-8 sm:mb-10 transition-all duration-700 ease-out transform ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
                        }`}
                >
                    {/* Eyebrow badge */}
                    <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#f17829]/10 border border-[#f17829]/30 text-[#f17829] text-[11px] font-bold uppercase tracking-[0.2em] mb-4 shadow-xs">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#f17829] animate-pulse" />
                        <span>Corporate Presence</span>
                    </div>

                    {/* Large Elegant Heading */}
                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#0B1528] tracking-tight uppercase">
                        OUR <span className="text-[#f17829]">OFFICE</span>
                    </h2>

                    {/* Subtitle */}
                    <p className="mt-4 text-xs sm:text-sm md:text-base text-slate-600 font-normal leading-relaxed max-w-xl mx-auto">
                        Experience ALDA’s hospitality and explore bespoke residential spaces in person at our flagship office in Adyar, Chennai.
                    </p>
                </div>

                {/* =========================================================================
                    2. CHENNAI OFFICE CARD (Single Centered Luxury Card)
                   ========================================================================= */}
                <div
                    className={`max-w-4xl mx-auto bg-white rounded-2xl sm:rounded-3xl border border-slate-200/90 shadow-xl shadow-slate-200/60 hover:shadow-2xl hover:shadow-[#f17829]/10 transition-all duration-700 ease-out transform ${isVisible ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-10 scale-[0.98]"
                        }`}
                >
                    <div className="grid grid-cols-1 lg:grid-cols-12 overflow-hidden rounded-2xl sm:rounded-3xl">
                        {/* -------------------------------------------------------------
                            LEFT: Visual Representation / Office Architectural Facade
                           ------------------------------------------------------------- */}
                        <div className="relative lg:col-span-5 min-h-[260px] sm:min-h-[320px] lg:min-h-full bg-slate-900 overflow-hidden flex flex-col justify-between p-6 sm:p-8">
                            {/* Visual Image */}
                            <Image
                                src="/timeline-landmark.jpg"
                                alt="ALDA ONE Chennai Corporate Office"
                                fill
                                sizes="(max-width: 1024px) 100vw, 40vw"
                                className="object-cover object-center scale-105 transition-transform duration-1000 group-hover:scale-110"
                            />

                            {/* Dark Luxury Gradient Overlays */}
                            <div className="absolute inset-0 bg-gradient-to-t from-[#0B1528] via-[#0B1528]/60 to-black/30" />
                            <div className="absolute inset-0 bg-[#0B1528]/25" />

                            {/* Top Badge: City & Office Tag */}
                            <div className="relative z-10 flex items-center justify-between">
                                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-black/50 backdrop-blur-md border border-white/15 text-white text-[11px] font-semibold tracking-wide uppercase">
                                    <svg className="w-3 h-3 text-[#f17829]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                    </svg>
                                    Chennai HQ
                                </span>


                            </div>

                            {/* Center/Bottom Overlay Info */}
                            <div className="relative z-10 mt-20 lg:mt-auto space-y-2">
                                <div className="inline-block px-2.5 py-0.5 rounded bg-[#f17829] text-white text-[10px] font-bold uppercase tracking-wider">
                                    Flagship Location
                                </div>
                                <h3 className="text-2xl font-bold text-white tracking-tight">
                                    ALDA ONE
                                </h3>
                                <p className="text-xs text-slate-300 font-normal leading-relaxed">
                                    Adyar Coastal Corridor · Chennai, India
                                </p>

                                {/* Operational Status Badge */}
                                <div className="pt-2 flex items-center gap-2">
                                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                                    <span className="text-xs font-medium text-emerald-300">
                                        Open for Visits & Consultations
                                    </span>
                                </div>
                            </div>
                        </div>

                        {/* -------------------------------------------------------------
                            RIGHT: Office Contact Information Details
                           ------------------------------------------------------------- */}
                        <div className="lg:col-span-7 p-6 sm:p-8 md:p-10 flex flex-col justify-between space-y-8 bg-white">
                            <div>
                                {/* Office Header */}
                                <div className="border-b border-slate-100 pb-5 mb-6">
                                    <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#f17829] mb-1">
                                        <span>Corporate Office</span>
                                        <span>•</span>
                                        <span>Tamil Nadu</span>
                                    </div>
                                    <h3 className="text-xl sm:text-2xl font-bold text-[#0B1528] tracking-tight">
                                        ALDA ONE — Chennai
                                    </h3>
                                </div>

                                {/* Information Grid / Stack */}
                                <div className="space-y-5">
                                    {/* 1. Address Item */}
                                    <div className="flex items-start gap-4 group">
                                        <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-[#f17829]/10 text-[#f17829] flex items-center justify-center transition-colors group-hover:bg-[#f17829] group-hover:text-white">
                                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                            </svg>
                                        </div>
                                        <div className="flex-1 min-w-0">
                                            <h4 className="text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-1">
                                                Office Address
                                            </h4>
                                            <p className="text-sm font-semibold text-[#0B1528] leading-relaxed">
                                                72, 28th Cross Street,<br />
                                                Indira Nagar, Adyar,<br />
                                                Chennai, Tamil Nadu, India
                                            </p>
                                        </div>
                                    </div>

                                    {/* 2. Phone Numbers */}
                                    <div className="flex items-start gap-4 group">
                                        <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-[#f17829]/10 text-[#f17829] flex items-center justify-center transition-colors group-hover:bg-[#f17829] group-hover:text-white">
                                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                            </svg>
                                        </div>
                                        <div className="flex-1 min-w-0">
                                            <h4 className="text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-1">
                                                Phone Inquiries
                                            </h4>
                                            <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-4 text-sm font-semibold text-[#0B1528]">
                                                <a
                                                    href="tel:+914445609989"
                                                    className="hover:text-[#f17829] transition-colors inline-block"
                                                >
                                                    +91-44-45609989
                                                </a>
                                                <span className="hidden sm:inline text-slate-300">/</span>
                                                <a
                                                    href="tel:+918939960009"
                                                    className="hover:text-[#f17829] transition-colors inline-block"
                                                >
                                                    +91-8939960009
                                                </a>
                                            </div>
                                        </div>
                                    </div>

                                    {/* 3. Email Address */}
                                    <div className="flex items-start gap-4 group">
                                        <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-[#f17829]/10 text-[#f17829] flex items-center justify-center transition-colors group-hover:bg-[#f17829] group-hover:text-white">
                                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                            </svg>
                                        </div>
                                        <div className="flex-1 min-w-0">
                                            <h4 className="text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-1">
                                                Direct Email
                                            </h4>
                                            <a
                                                href="mailto:info@sgrpl.com"
                                                className="text-sm font-semibold text-[#0B1528] hover:text-[#f17829] transition-colors"
                                            >
                                                info@sgrpl.com
                                            </a>
                                        </div>
                                    </div>

                                    {/* 4. Office Hours */}
                                    <div className="flex items-start gap-4 group">
                                        <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-[#f17829]/10 text-[#f17829] flex items-center justify-center transition-colors group-hover:bg-[#f17829] group-hover:text-white">
                                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <circle cx="12" cy="12" r="9" strokeWidth="1.8" />
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M12 6v6l4 2" />
                                            </svg>
                                        </div>
                                        <div className="flex-1 min-w-0">
                                            <h4 className="text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-1">
                                                Office Hours
                                            </h4>
                                            <p className="text-sm font-semibold text-[#0B1528]">
                                                09:30 AM – 06:00 PM <span className="font-normal text-xs text-slate-500">(Mon – Sat)</span>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Bottom Actions: View on Google Maps Button */}
                            <div className="pt-6 border-t border-slate-100">
                                <a
                                    href="https://www.google.com/maps/search/?api=1&query=72+28th+Cross+Street+Indira+Nagar+Adyar+Chennai+Tamil+Nadu+India"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center justify-center gap-2.5 w-full sm:w-auto px-7 py-3.5 rounded-full text-xs font-bold uppercase tracking-wider text-white bg-[#f17829] hover:bg-[#d9671e] shadow-lg shadow-[#f17829]/25 hover:shadow-[#f17829]/40 transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] group cursor-pointer"
                                >
                                    <span>VIEW ON GOOGLE MAPS</span>
                                    <svg
                                        className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                                        />
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
