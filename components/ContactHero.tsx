import Image from "next/image";
import Link from "next/link";

export default function ContactHero() {
    return (
        // Banner container with identical height and style to Hero
        <section className="relative h-[400px] md:h-[520px] w-full flex items-center overflow-hidden bg-slate-950 text-white">

            {/* 1. Background Image with Next.js Image Optimization */}
            <div className="absolute inset-0 z-0">
                <Image
                    src="/hero-banner.jpg"
                    alt="Contact ALDA Homes"
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
                        <Link href="/" className="hover:text-[#f17829] transition-colors">
                            Home
                        </Link>
                        <span className="text-gray-600">/</span>
                        <span className="text-[#f17829]">Contact</span>
                    </nav>

                    {/* Eyebrow Tag / Sub-title */}
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#f17829]/15 border border-[#f17829]/30 text-[#f17829] text-[11px] font-medium tracking-wide uppercase">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#f17829] animate-pulse" />
                        <span>GET IN TOUCH</span>
                    </div>

                    {/* Main Banner Heading */}
                    <h1 className="text-xl sm:text-2xl md:text-3xl font-bold tracking-tight text-white leading-tight">
                        Let’s{" "}
                        <span className="text-[#f17829]">
                            Connect
                        </span>
                    </h1>

                    {/* Description */}
                    <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal max-w-xl">
                        Whether you’re looking for your next home or would like to know more about ALDA, we’re here to help.
                    </p>

                    {/* Action CTA Buttons */}
                    <div className="flex flex-wrap items-center gap-3 pt-2">
                        <a
                            href="#contact-section"
                            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-bold text-white bg-[#f17829] hover:bg-[#d9671e] shadow-md shadow-[#f17829]/25 transition-all duration-200 hover:scale-105 active:scale-95 cursor-pointer"
                        >
                            <span>Send a Message</span>
                            <svg className="w-3.5 h-3.5 stroke-[2.5]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                            </svg>
                        </a>

                        <a
                            href="tel:+914424987654"
                            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-medium text-white bg-white/10 hover:bg-white/20 border border-white/20 backdrop-blur-sm transition-all cursor-pointer"
                        >
                            <span>Call Directly</span>
                        </a>
                    </div>

                </div>
            </div>

        </section>
    );
}
