"use client";

import React, { useEffect, useRef, useState } from "react";

interface CounterItem {
    id: string;
    targetNumber: number;
    suffix?: string;
    primaryLabel?: string;
    secondaryLabel?: string;
    formatCommas?: boolean;
}

interface CounterProps {
    /**
     * Watermark text displayed faintly in the background behind the intro text
     */
    watermarkText?: string;
    /**
     * Brand name used in the introductory dummy text
     */
    brandName?: string;
}

export default function Counter({
    watermarkText = "We're",
    brandName = "ALDA",
}: CounterProps) {
    const sectionRef = useRef<HTMLElement>(null);
    const [hasAnimated, setHasAnimated] = useState(false);

    // Counter metrics matching the reference section layout
    const counterData: CounterItem[] = [
        {
            id: "years",
            targetNumber: 40,
            suffix: "+",
            primaryLabel: "Years",
            secondaryLabel: "Of Construction Heritage",
        },
        {
            id: "area",
            targetNumber: 12,
            suffix: "+",
            primaryLabel: "Million Sq.Ft.",
            secondaryLabel: "Delivered & Thriving",
        },
        {
            id: "customers",
            targetNumber: 10000,
            suffix: "+",
            primaryLabel: "Happy Families",
            secondaryLabel: "Delighted Across Projects",
            formatCommas: true,
        },
        {
            id: "quality",
            targetNumber: 1357,
            suffix: "+",
            primaryLabel: "Quality Checks",
            secondaryLabel: "Strict & Rigorous Standards",
            formatCommas: true,
        },
    ];

    // Animated values state
    const [counts, setCounts] = useState<number[]>(counterData.map(() => 0));

    // Intersection Observer to trigger counting animation on scroll
    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting && !hasAnimated) {
                    setHasAnimated(true);

                    const duration = 2000; // 2 seconds animation
                    const startTime = performance.now();

                    const animate = (currentTime: number) => {
                        const elapsed = currentTime - startTime;
                        const progress = Math.min(elapsed / duration, 1);

                        // Smooth ease-out cubic curve
                        const easeOutProgress = 1 - Math.pow(1 - progress, 3);

                        setCounts(
                            counterData.map((item) =>
                                Math.round(item.targetNumber * easeOutProgress)
                            )
                        );

                        if (progress < 1) {
                            requestAnimationFrame(animate);
                        } else {
                            setCounts(counterData.map((item) => item.targetNumber));
                        }
                    };

                    requestAnimationFrame(animate);
                }
            },
            {
                threshold: 0.2,
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
    }, [hasAnimated, counterData]);

    // Format count display
    const formatNumber = (num: number, useCommas?: boolean) => {
        if (useCommas) {
            return num.toLocaleString();
        }
        return num.toString();
    };

    return (
        <section
            ref={sectionRef}
            aria-label="Milestones and Track Record"
            className="relative w-full bg-[#18212e] text-white py-10 sm:py-12 md:py-16 overflow-hidden select-none"
        >
            {/* =========================================================================
          1. WATERMARK BACKGROUND GRAPHIC
         ========================================================================= */}
            <div
                aria-hidden="true"
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full text-center pointer-events-none select-none z-0 overflow-hidden"
            >
                <span className="text-[120px] sm:text-[180px] md:text-[230px] lg:text-[280px] font-black tracking-tight text-white/[0.045] leading-none block uppercase font-sans">
                    {watermarkText}
                </span>
            </div>

            {/* Subtle warm ambient lighting in the center background */}
            <div
                aria-hidden="true"
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-[#f17829]/[0.05] blur-[120px] rounded-full pointer-events-none z-0"
            />

            <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* =========================================================================
            2. CENTERED INTRODUCTORY BRAND STATEMENT
            Clean, elegant typography without yellow highlighted boxes
           ========================================================================= */}
                <div className="max-w-3xl mx-auto text-center mb-10 sm:mb-12 md:mb-14">
                    <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-semibold tracking-wider uppercase text-[#f17829] bg-[#f17829]/10 border border-[#f17829]/30 mb-4 backdrop-blur-sm">
                        <span>Milestones & Impact</span>
                    </div>

                    <div className="space-y-3 sm:space-y-3.5">
                        <p className="text-slate-200 text-base sm:text-lg md:text-[19px] leading-relaxed md:leading-[1.8] font-normal tracking-wide">
                            For {brandName}, pride defines our work, driving us to create homes that{" "}
                            <span className="text-white font-semibold">inspire true ownership.</span>
                        </p>

                        <p className="text-slate-300 text-sm sm:text-base md:text-[17px] leading-relaxed md:leading-[1.8] font-normal tracking-wide">
                            &ldquo;Home of Pride&rdquo; embodies our commitment to excellence, ensuring every
                            homeowner feels fulfilled,{" "}
                            <span className="text-white font-semibold">valued, and truly proud.</span>
                        </p>
                    </div>
                </div>

                {/* =========================================================================
            3. MILESTONE COUNTERS GRID (4 CARDS)
            Elevated modern card layout with gold metrics and cohesive alignment
           ========================================================================= */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
                    {counterData.map((item, index) => {
                        const currentCount = counts[index];

                        return (
                            <div
                                key={item.id}
                                className="group relative rounded-2xl bg-white/[0.03] border border-white/[0.08] hover:border-[#f17829]/50 p-6 sm:p-7 flex flex-col items-center text-center transition-all duration-300 hover:-translate-y-1.5 hover:shadow-lg hover:shadow-[#f17829]/10 backdrop-blur-xs"
                            >
                                {/* Subtle golden accent line on top of card on hover */}
                                <div className="absolute top-0 inset-x-0 h-[2px] bg-gradient-to-r from-transparent via-[#f17829]/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                                {/* Main Counter Number & Suffix */}
                                <div className="mb-2.5">
                                    <span className="text-4xl sm:text-4xl md:text-5xl lg:text-[50px] font-black text-[#f17829] tracking-tight leading-none tabular-nums drop-shadow-sm transition-transform duration-300 inline-block group-hover:scale-105">
                                        {formatNumber(currentCount, item.formatCommas)}
                                        {item.suffix}
                                    </span>
                                </div>

                                {/* Primary Unit / Label */}
                                {item.primaryLabel && (
                                    <h3 className="text-base sm:text-lg font-bold text-white tracking-tight mb-1.5">
                                        {item.primaryLabel}
                                    </h3>
                                )}

                                {/* Secondary Descriptive Label */}
                                {item.secondaryLabel && (
                                    <p className="text-xs sm:text-sm text-slate-400 font-normal leading-relaxed">
                                        {item.secondaryLabel}
                                    </p>
                                )}
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
