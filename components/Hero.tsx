import Image from "next/image";
import Link from "next/link";

export default function Hero() {
    return (
        // Banner container with reduced height (400px - 420px)
        <section className="relative h-[400px] md:h-[420px] w-full flex items-center overflow-hidden bg-slate-950 text-white">

            {/* 1. Background Image with Next.js Image Optimization */}
            <div className="absolute inset-0 z-0">
                <Image
                    src="/hero-banner.jpg"
                    alt="ALDA Homes Luxury Architecture"
                    fill
                    priority
                    sizes="100vw"
                    className="object-cover object-center scale-105 transition-transform duration-1000"
                />

                {/* Dark luxury gradient overlay for maximum text readability */}
                <div className="absolute inset-0 bg-gradient-to-r from-slate-950/95 via-slate-950/75 to-slate-900/30" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-transparent to-black/40" />
            </div>

            {/* 2. Banner Content Container */}
            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
                <div className="max-w-3xl space-y-4">

                    {/* Breadcrumb Navigation */}
                    <nav aria-label="Breadcrumb" className="flex items-center space-x-2 text-xs font-semibold tracking-wider uppercase text-gray-400">
                        <Link href="/" className="hover:text-amber-400 transition-colors">
                            Home
                        </Link>
                        <span className="text-gray-600">/</span>
                        <span className="text-amber-500">About Us</span>
                    </nav>

                    {/* Eyebrow Tag / Sub-title */}
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/15 border border-amber-500/25 text-amber-300 text-[11px] font-medium tracking-wide">
                        <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" />
                        <span>Chennai · Contracting & Real Estate Development</span>
                    </div>

                    {/* Main Banner Heading (Reduced font size) */}
                    <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-white leading-tight">
                        From Vision to Reality,{" "}
                        <span className="text-amber-500">
                            Built with Pride
                        </span>
                    </h1>

                    {/* Description / Dummy Content (Reduced font size) */}
                    <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal max-w-xl">
                        With over 40 years of continuous construction and engineering heritage,
                        ALDA Homes transforms prime spaces into vibrant communities across Chennai,
                        delivering homes crafted with precision, passion, and enduring value.
                    </p>

                    {/* Action CTA Buttons */}
                    <div className="flex flex-wrap items-center gap-3 pt-2">
                        <button
                            type="button"
                            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-bold text-slate-950 bg-amber-500 hover:bg-amber-400 shadow-md shadow-amber-500/20 transition-all duration-200 hover:scale-105 active:scale-95 cursor-pointer"
                        >
                            <span>Explore Projects</span>
                            <svg className="w-3.5 h-3.5 stroke-[2.5]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M7 17L17 7M17 7H7M17 7V17" />
                            </svg>
                        </button>

                        <button
                            type="button"
                            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-medium text-white bg-white/10 hover:bg-white/20 border border-white/20 backdrop-blur-sm transition-all cursor-pointer"
                        >
                            <span>Our Story & Legacy</span>
                        </button>
                    </div>

                </div>
            </div>

        </section>
    );
}
