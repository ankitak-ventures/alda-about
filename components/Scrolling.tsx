"use client";

interface ScrollingProps {
    /**
     * Optional custom phrases for Row 1 (gliding left)
     * Defaults to ["Timeless Homes", "Timeless Homes", "Timeless Homes", "Timeless Homes"]
     */
    row1Words?: string[];
    /**
     * Optional custom phrases for Row 2 (gliding right)
     * Defaults to ["Built with Pride", "Timeless Homes", "Built with Pride", "Timeless Homes"]
     */
    row2Words?: string[];
}

export default function Scrolling({
    row1Words = [
        "Timeless Homes",
        "Timeless Homes",
        "Timeless Homes",
        "Timeless Homes",
    ],
    row2Words = [
        "Built with Pride",
        "Timeless Homes",
        "Built with Pride",
        "Timeless Homes",
    ],
}: ScrollingProps) {
    return (
        <section
            aria-label="Brand Motto Scrolling Section"
            className="relative w-full overflow-hidden bg-white pt-1 sm:pt-2 md:pt-3 pb-6 sm:pb-8 md:pb-10 select-none pause-on-hover border-y border-slate-100"
        >
            {/* Container holding the two opposing marquee rows */}
            <div className="flex flex-col space-y-0.5 sm:space-y-1 md:space-y-1.5">
                {/* =================================================================
            ROW 1: Gliding Right-to-Left
            ================================================================= */}
                <div className="flex w-max animate-marquee-left">
                    {/* Primary Sequence */}
                    <div className="flex shrink-0 items-center">
                        {row1Words.map((word, index) => (
                            <span
                                key={`r1-primary-${index}`}
                                className="stroke-text text-[38px] sm:text-[54px] md:text-[72px] lg:text-[92px] xl:text-[108px] font-bold tracking-tight leading-[0.9] pr-8 sm:pr-10 md:pr-12 lg:pr-16 cursor-default transition-all duration-300 hover:scale-[1.01]"
                                style={{
                                    WebkitTextStroke: "1.2px #d4d4d8",
                                    color: "transparent",
                                }}
                            >
                                {word}
                            </span>
                        ))}
                    </div>

                    {/* Duplicate Sequence for Zero-Jitter Infinite Loop */}
                    <div className="flex shrink-0 items-center" aria-hidden="true">
                        {row1Words.map((word, index) => (
                            <span
                                key={`r1-duplicate-${index}`}
                                className="stroke-text text-[38px] sm:text-[54px] md:text-[72px] lg:text-[92px] xl:text-[108px] font-bold tracking-tight leading-[0.9] pr-8 sm:pr-10 md:pr-12 lg:pr-16 cursor-default transition-all duration-300 hover:scale-[1.01]"
                                style={{
                                    WebkitTextStroke: "1.2px #d4d4d8",
                                    color: "transparent",
                                }}
                            >
                                {word}
                            </span>
                        ))}
                    </div>
                </div>

                {/* =================================================================
            ROW 2: Gliding Left-to-Right
            ================================================================= */}
                <div className="flex w-max animate-marquee-right">
                    {/* Primary Sequence */}
                    <div className="flex shrink-0 items-center">
                        {row2Words.map((word, index) => (
                            <span
                                key={`r2-primary-${index}`}
                                className="stroke-text text-[38px] sm:text-[54px] md:text-[72px] lg:text-[92px] xl:text-[108px] font-bold tracking-tight leading-[0.9] pr-8 sm:pr-10 md:pr-12 lg:pr-16 cursor-default transition-all duration-300 hover:scale-[1.01]"
                                style={{
                                    WebkitTextStroke: "1.2px #d4d4d8",
                                    color: "transparent",
                                }}
                            >
                                {word}
                            </span>
                        ))}
                    </div>

                    {/* Duplicate Sequence for Zero-Jitter Infinite Loop */}
                    <div className="flex shrink-0 items-center" aria-hidden="true">
                        {row2Words.map((word, index) => (
                            <span
                                key={`r2-duplicate-${index}`}
                                className="stroke-text text-[38px] sm:text-[54px] md:text-[72px] lg:text-[92px] xl:text-[108px] font-bold tracking-tight leading-[0.9] pr-8 sm:pr-10 md:pr-12 lg:pr-16 cursor-default transition-all duration-300 hover:scale-[1.01]"
                                style={{
                                    WebkitTextStroke: "1.2px #d4d4d8",
                                    color: "transparent",
                                }}
                            >
                                {word}
                            </span>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
