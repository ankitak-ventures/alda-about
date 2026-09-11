"use client";

import { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import Image from "next/image";

// Sub-item definition for dropdown menus
interface DropdownSubItem {
    name: string;
    description: string;
    href: string;
    badge?: string;
}

// Mega-menu project definition
interface ProjectItem {
    name: string;
    location: string;
    type: string;
    status: "Ongoing" | "Upcoming" | "Completed";
    description: string;
    href: string;
}

export default function Header() {
    // State for DRA-style full-screen mega menu
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    // State for expandable submenus inside mega menu (null by default so nothing is open initially)
    const [openCategory, setOpenCategory] = useState<string | null>(null);

    // Close menu callback
    const handleCloseMenu = useCallback(() => {
        setIsMenuOpen(false);
    }, []);

    // Toggle menu callback
    const handleToggleMenu = useCallback(() => {
        setIsMenuOpen((prev) => !prev);
    }, []);

    // Toggle accordion section
    const toggleCategory = (category: string) => {
        setOpenCategory((prev) => (prev === category ? null : category));
    };

    // Close menu when ESC key is pressed
    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === "Escape") {
                setIsMenuOpen(false);
            }
        };

        window.addEventListener("keydown", handleKeyDown);
        return () => window.removeEventListener("keydown", handleKeyDown);
    }, []);

    // Prevent body scroll when mega menu is open
    useEffect(() => {
        if (isMenuOpen) {
            const originalOverflow = document.body.style.overflow;
            document.body.style.overflow = "hidden";
            return () => {
                document.body.style.overflow = originalOverflow;
            };
        }
    }, [isMenuOpen]);

    // ALDA's actual projects
    const aldaProjects: ProjectItem[] = [
        {
            name: "ALDA Ayan",
            location: "Thiruvanmiyur, Chennai",
            type: "3 BHK Luxury Residences",
            status: "Ongoing",
            description: "Spacious boutique residences designed around cross-ventilation and natural daylight.",
            href: "/projects/alda-ayan",
        },
        {
            name: "ALDA Aran",
            location: "Chennai",
            type: "Premium Residential Landmark",
            status: "Ongoing",
            description: "Newly signed premium residential development built with generational quality standards.",
            href: "/projects/alda-aran",
        },
        {
            name: "Upcoming Residential",
            location: "Prime Chennai Locations",
            type: "Exclusive Communities",
            status: "Upcoming",
            description: "Thoughtfully planned future developments in coveted Chennai neighborhoods.",
            href: "/upcoming-projects",
        },
        {
            name: "Turnkey Contracting",
            location: "Chennai & Suburbs",
            type: "Residential & Commercial",
            status: "Ongoing",
            description: "Comprehensive end-to-end contracting with strict 1,357+ quality checkpoints.",
            href: "/what-we-do/contracting",
        },
    ];

    // ALDA About Us sub-items
    const aboutSubItems: DropdownSubItem[] = [
        {
            name: "About ALDA",
            description: "Experience that builds trust across 40+ years",
            href: "/about",
        },
        {
            name: "Our Story & Legacy",
            description: "A rich journey from 1913 through Sri Shreenivas",
            href: "/legacy",
        },
        {
            name: "Our Team",
            description: "Visionary leadership & senior civil engineers",
            href: "/team",
        },
        {
            name: "Awards & Recognition",
            description: "35+ industry honors celebrating benchmark delivery",
            href: "/awards",
        },
        {
            name: "Customer Testimonials",
            description: "Trust and fulfillment built across 12,000+ families",
            href: "/testimonials",
        },
    ];

    // ALDA What We Do sub-items
    const whatWeDoSubItems: DropdownSubItem[] = [
        {
            name: "Overview",
            description: "One integrated ALDA approach uniting contracting & development",
            href: "/what-we-do",
        },
        {
            name: "Contracting",
            description: "Turnkey residential, commercial, and restoration expertise",
            href: "/what-we-do/contracting",
        },
        {
            name: "Real Estate Development",
            description: "Creating homes engineered for lifestyle, value, and pride",
            href: "/what-we-do/real-estate-development",
        },
    ];

    return (
        <>
            {/* =========================================================================
                1. HEADER BAR: ALDA LOGO + HAMBURGER ONLY (Full Width)
               ========================================================================= */}
            <header className="sticky top-0 z-40 w-full bg-[#FAF8F5]/95 backdrop-blur-md border-b border-stone-200/80 transition-all duration-300">
                <div className="w-full px-4 sm:px-8 lg:px-12 xl:px-16 flex items-center justify-between h-16 sm:h-18">
                    {/* Brand Logo (Left) */}
                    <div className="flex-shrink-0">
                        <Link href="/" aria-label="ALDA Home" className="inline-flex items-center group">
                            <span className="inline-flex items-center rounded-xl bg-[#FAF8F5] px-2 py-1 transition-transform duration-300 group-hover:scale-[1.02]">
                                <Image
                                    src="/brand/alda-logo.png"
                                    alt="ALDA — Crafting Spaces"
                                    width={160}
                                    height={40}
                                    priority
                                    className="h-8 sm:h-9 md:h-10 w-auto object-contain"
                                />
                            </span>
                        </Link>
                    </div>

                    {/* Hamburger Menu Button (Right) */}
                    <div className="flex items-center">
                        <button
                            type="button"
                            onClick={handleToggleMenu}
                            className="group relative flex items-center gap-2.5 sm:gap-3 px-3.5 sm:px-4.5 py-2 rounded-full bg-slate-900 hover:bg-[#f17829] text-white shadow-sm hover:shadow-lg hover:shadow-[#f17829]/20 border border-slate-800 hover:border-[#f17829] transition-all duration-300 cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#f17829] focus:ring-offset-2"
                            aria-label="Toggle Navigation Menu"
                            aria-expanded={isMenuOpen}
                        >
                            <span className="text-[11px] sm:text-xs font-bold uppercase tracking-widest text-stone-200 group-hover:text-white transition-colors select-none">
                                Menu
                            </span>

                            {/* Animated 3-line DRA-style Hamburger Icon */}
                            <span className="relative flex flex-col justify-center items-center gap-1 w-4.5 sm:w-5 h-4 shrink-0" aria-hidden="true">
                                <span className="w-4.5 h-[2px] bg-white group-hover:bg-white rounded-full transition-all duration-300" />
                                <span className="w-3.5 h-[2px] bg-[#f17829] group-hover:bg-white rounded-full transition-all duration-300 group-hover:w-4.5" />
                                <span className="w-4.5 h-[2px] bg-white group-hover:bg-white rounded-full transition-all duration-300" />
                            </span>
                        </button>
                    </div>
                </div>
            </header>

            {/* =========================================================================
                2. DRA HOMES-STYLE FULL-SCREEN MEGA MENU OVERLAY
                (Slides in smoothly and slowly from LEFT to RIGHT)
               ========================================================================= */}
            <div
                className={`fixed inset-0 z-50 overflow-hidden transition-all duration-700 ease-in-out ${isMenuOpen ? "opacity-100 pointer-events-auto visible" : "opacity-0 pointer-events-none invisible"
                    }`}
                role="dialog"
                aria-modal="true"
                aria-label="ALDA Mega Menu"
            >
                {/* Dark Backdrop */}
                <div
                    className={`fixed inset-0 bg-slate-950/75 backdrop-blur-md transition-opacity duration-700 ease-in-out ${isMenuOpen ? "opacity-100" : "opacity-0"
                        }`}
                    onClick={handleCloseMenu}
                />

                {/* Main Full-Screen Mega Menu Drawer Panel */}
                <div
                    className={`relative w-full h-full bg-[#FAF8F5] flex flex-col z-10 transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] transform will-change-transform ${isMenuOpen ? "translate-x-0" : "-translate-x-full"
                        }`}
                >
                    {/* Top Bar of the Mega Menu (Full Width) */}
                    <div className="flex-shrink-0 bg-[#FAF8F5] border-b border-stone-200 px-4 sm:px-8 lg:px-12 xl:px-16 py-3 sm:py-3.5">
                        <div className="w-full flex items-center justify-between">
                            {/* ALDA Logo in Menu */}
                            <Link href="/" onClick={handleCloseMenu} className="inline-flex items-center group">
                                <Image
                                    src="/brand/alda-logo.png"
                                    alt="ALDA Logo"
                                    width={140}
                                    height={36}
                                    className="h-7 sm:h-8 w-auto object-contain transition-transform group-hover:scale-105"
                                />
                            </Link>

                            {/* Center Tagline / Coordinates */}
                            <div className="hidden md:flex items-center gap-2.5 text-[11px] font-semibold uppercase tracking-widest text-stone-500">
                                <span className="w-2 h-2 rounded-full bg-[#f17829] animate-pulse" />
                                <span>Crafting Spaces · Chennai & Global</span>
                            </div>

                            {/* Close Button */}
                            <button
                                type="button"
                                onClick={handleCloseMenu}
                                className="group flex items-center gap-2.5 px-3.5 sm:px-4 py-1.5 rounded-full border border-stone-300 hover:border-[#f17829] bg-white hover:bg-[#f17829] text-slate-800 hover:text-white transition-all duration-300 cursor-pointer shadow-2xs"
                                aria-label="Close navigation menu"
                            >
                                <span className="text-xs font-extrabold uppercase tracking-widest transition-colors">Close</span>
                                <span className="w-5.5 h-5.5 rounded-full bg-slate-100 group-hover:bg-white/20 text-slate-700 group-hover:text-white flex items-center justify-center transition-colors">
                                    <svg className="w-3.5 h-3.5 stroke-[2.5]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                                    </svg>
                                </span>
                            </button>
                        </div>
                    </div>

                    {/* Mega Menu Content (Responsive Grid with Balanced Vertical Alignment) */}
                    <div className="flex-1 overflow-y-auto overflow-x-hidden">
                        <div className="w-full min-h-full grid grid-cols-1 lg:grid-cols-12 divide-y lg:divide-y-0 divide-stone-200">
                            {/* =========================================================
                                COLUMN 1 (On Desktop: Left Column / On Mobile: Order 2)
                                Showcase & Projects (Warm Editorial Light `#FAF8F5`)
                               ========================================================= */}
                            <div className="order-2 lg:order-1 lg:col-span-5 xl:col-span-5 p-5 sm:p-7 lg:p-8 xl:p-12 bg-[#FAF8F5] lg:border-r-4 lg:border-r-[#f17829] flex flex-col justify-center">
                                <div className="w-full max-w-lg xl:max-w-xl mx-auto space-y-5 lg:space-y-6">
                                    {/* 1. Category Heading & Project Links */}
                                    <div className="border-b border-stone-200 pb-4">
                                        <div className="flex items-center justify-between mb-2">
                                            <span className="text-[10px] font-black uppercase tracking-widest text-[#f17829]">
                                                ALDA Communities
                                            </span>
                                            <Link
                                                href="/projects"
                                                onClick={handleCloseMenu}
                                                className="text-[11px] font-bold text-[#f17829] hover:underline"
                                            >
                                                View All →
                                            </Link>
                                        </div>
                                        <h2 className="text-xl sm:text-2xl xl:text-3xl font-light text-slate-900 tracking-tight mb-3">
                                            Residential Developments
                                        </h2>

                                        {/* Mini Cards for ALDA Projects */}
                                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-2.5">
                                            {aldaProjects.slice(0, 3).map((project) => (
                                                <Link
                                                    key={project.name}
                                                    href={project.href}
                                                    onClick={handleCloseMenu}
                                                    className="group/proj p-2.5 rounded-xl bg-white border border-stone-200 hover:border-[#f17829] transition-all duration-200 flex items-center justify-between shadow-2xs hover:shadow-sm"
                                                >
                                                    <div>
                                                        <h4 className="text-xs sm:text-sm font-bold text-slate-900 group-hover/proj:text-[#f17829] transition-colors">
                                                            {project.name}
                                                        </h4>
                                                        <p className="text-[11px] text-stone-500 mt-0.5">
                                                            {project.location}
                                                        </p>
                                                    </div>
                                                    <span
                                                        className={`text-[9px] font-bold px-2 py-0.5 rounded uppercase tracking-wider shrink-0 ${project.status === "Ongoing"
                                                            ? "bg-[#f17829]/15 text-[#f17829]"
                                                            : "bg-blue-50 text-blue-600 border border-blue-200"
                                                            }`}
                                                    >
                                                        {project.status}
                                                    </span>
                                                </Link>
                                            ))}
                                        </div>
                                    </div>

                                    {/* 2. Contracting & Capabilities Section */}
                                    <div className="border-b border-stone-200 pb-4">
                                        <span className="text-[10px] font-black uppercase tracking-widest text-[#f17829] block mb-1">
                                            Turnkey Execution
                                        </span>
                                        <h2 className="text-xl sm:text-2xl xl:text-3xl font-light text-slate-900 tracking-tight mb-2.5">
                                            Contracting Services
                                        </h2>
                                        <div className="flex flex-wrap gap-2 text-[11px] font-bold uppercase tracking-wider">
                                            <Link
                                                href="/what-we-do/contracting"
                                                onClick={handleCloseMenu}
                                                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white border border-stone-200 hover:border-[#f17829] hover:text-[#f17829] text-slate-700 transition-colors shadow-2xs"
                                            >
                                                <span>Residential Construction</span>
                                                <span className="text-[#f17829]">→</span>
                                            </Link>
                                            <Link
                                                href="/what-we-do/contracting"
                                                onClick={handleCloseMenu}
                                                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white border border-stone-200 hover:border-[#f17829] hover:text-[#f17829] text-slate-700 transition-colors shadow-2xs"
                                            >
                                                <span>Commercial & Turnkey</span>
                                                <span className="text-[#f17829]">→</span>
                                            </Link>
                                        </div>
                                    </div>

                                    {/* 3. Featured Showcase Project Card */}
                                    <div className="p-4 rounded-xl bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white shadow-lg relative overflow-hidden group">
                                        <div className="relative z-10">
                                            <div className="flex items-center justify-between mb-1.5">
                                                <span className="px-2 py-0.5 rounded-full text-[9px] font-bold uppercase tracking-wider bg-[#f17829] text-white">
                                                    Featured Project
                                                </span>
                                                <span className="text-[11px] text-stone-400 font-mono">Thiruvanmiyur</span>
                                            </div>
                                            <h3 className="text-base sm:text-lg font-bold text-white tracking-tight">
                                                ALDA Ayan Residences
                                            </h3>
                                            <p className="text-xs text-stone-300 mt-1 leading-relaxed font-normal line-clamp-2">
                                                3 BHK luxury residences designed around cross-ventilation, coastal breezes, and 1,357+ stringent quality checkpoints.
                                            </p>
                                            <div className="mt-3 pt-2 border-t border-white/10 flex items-center justify-between">
                                                <Link
                                                    href="/projects/alda-ayan"
                                                    onClick={handleCloseMenu}
                                                    className="inline-flex items-center gap-1 text-xs font-bold text-[#f17829] hover:text-white transition-colors"
                                                >
                                                    <span>Explore Details</span>
                                                    <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 17L17 7M17 7H7M17 7V17" />
                                                    </svg>
                                                </Link>
                                                <span className="text-[10px] text-stone-400 font-mono">Ongoing</span>
                                            </div>
                                        </div>
                                    </div>

                                    {/* 4. Make a Call Box */}
                                    <div className="bg-white p-3.5 sm:p-4 rounded-xl border border-stone-200 shadow-xs">
                                        <div className="flex items-start justify-between">
                                            <div>
                                                <span className="text-[10px] font-extrabold uppercase tracking-widest text-[#f17829] block mb-0.5">
                                                    Make a Call
                                                </span>
                                                <a
                                                    href="tel:+918939960009"
                                                    className="text-lg sm:text-xl font-black text-slate-900 hover:text-[#f17829] transition-colors block tracking-tight"
                                                >
                                                    +91 89399 60009
                                                </a>
                                                <p className="text-[11px] text-stone-500 mt-0.5">
                                                    No. 72, 28th Cross St, Indira Nagar, Adyar, Chennai
                                                </p>
                                                <p className="text-[10px] text-stone-400 mt-0.5">
                                                    Mon to Sat · 9:00 AM – 6:00 PM IST
                                                </p>
                                            </div>
                                            <div className="w-8 h-8 rounded-lg bg-[#f17829]/10 text-[#f17829] flex items-center justify-center shrink-0">
                                                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                                </svg>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* =========================================================
                                COLUMN 2 (On Desktop: Right Column / On Mobile: Order 1)
                                Primary Navigation & CTA (Deep Architectural Charcoal `#12151c`)
                               ========================================================= */}
                            <div className="order-1 lg:order-2 lg:col-span-7 xl:col-span-7 p-5 sm:p-7 lg:p-8 xl:p-14 bg-[#12151c] text-white flex flex-col justify-center">
                                <div className="w-full max-w-lg xl:max-w-2xl mx-auto space-y-6">
                                    {/* Primary Navigation Tree (DRA side-navbar-nav with Balanced Spacing) */}
                                    <nav className="space-y-1 sm:space-y-1.5">
                                        {/* 1. Home */}
                                        <div className="border-b border-white/5 pb-1 sm:pb-1.5">
                                            <Link
                                                href="/"
                                                onClick={handleCloseMenu}
                                                className="group flex items-center justify-between py-1.5 sm:py-2 text-xl sm:text-2xl xl:text-[28px] font-light text-stone-200 hover:text-[#f17829] transition-colors"
                                            >
                                                <div className="inline-flex flex-col items-start">
                                                    <span className="group-hover:translate-x-1.5 transition-transform duration-300">
                                                        Home
                                                    </span>
                                                    <span className="h-[2px] w-6 bg-[#f17829] rounded-full mt-1 opacity-80 group-hover:opacity-100 group-hover:w-full transition-all duration-300 ease-out group-hover:shadow-[0_0_8px_rgba(241,120,41,0.6)]" />
                                                </div>
                                                <span className="text-xs text-stone-500 opacity-0 group-hover:opacity-100 transition-opacity">
                                                    01
                                                </span>
                                            </Link>
                                        </div>

                                        {/* 2. About Us (Accordion - Closed by default) */}
                                        <div className="border-b border-white/5 pb-1 sm:pb-1.5">
                                            <div className="flex items-center justify-between py-1.5 sm:py-2">
                                                <Link
                                                    href="/about"
                                                    onClick={handleCloseMenu}
                                                    className="group text-xl sm:text-2xl xl:text-[28px] font-light text-stone-200 hover:text-[#f17829] transition-colors flex-1"
                                                >
                                                    <div className="inline-flex flex-col items-start">
                                                        <span className="group-hover:translate-x-1.5 inline-block transition-transform duration-300">
                                                            About Us
                                                        </span>
                                                        <span
                                                            className={`h-[2px] bg-[#f17829] rounded-full mt-1 transition-all duration-300 ease-out ${
                                                                openCategory === "about"
                                                                    ? "w-full opacity-100 shadow-[0_0_8px_rgba(241,120,41,0.5)]"
                                                                    : "w-6 opacity-80 group-hover:opacity-100 group-hover:w-full group-hover:shadow-[0_0_8px_rgba(241,120,41,0.6)]"
                                                            }`}
                                                        />
                                                    </div>
                                                </Link>
                                                <button
                                                    type="button"
                                                    onClick={() => toggleCategory("about")}
                                                    className="p-1.5 text-stone-400 hover:text-[#f17829] cursor-pointer"
                                                    aria-label="Toggle About Us menu"
                                                    aria-expanded={openCategory === "about"}
                                                >
                                                    <svg
                                                        className={`w-5 h-5 transition-transform duration-300 ${openCategory === "about" ? "rotate-180 text-[#f17829]" : ""
                                                            }`}
                                                        fill="none"
                                                        viewBox="0 0 24 24"
                                                        stroke="currentColor"
                                                    >
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                                                    </svg>
                                                </button>
                                            </div>

                                            <div
                                                className={`grid transition-[grid-template-rows,opacity] duration-300 ease-in-out ${openCategory === "about"
                                                    ? "grid-rows-[1fr] opacity-100 my-1.5"
                                                    : "grid-rows-[0fr] opacity-0 my-0 pointer-events-none"
                                                    }`}
                                            >
                                                <div className="overflow-hidden">
                                                    <div className="pl-3 sm:pl-4 pr-2 py-2 sm:py-3 space-y-2 bg-white/5 rounded-xl">
                                                        {aboutSubItems.map((item) => (
                                                            <Link
                                                                key={item.name}
                                                                href={item.href}
                                                                onClick={handleCloseMenu}
                                                                className="group/sub flex items-center justify-between text-xs sm:text-sm text-stone-300 hover:text-[#f17829] transition-colors py-1"
                                                            >
                                                                <span className="inline-flex items-center gap-2">
                                                                    <span className="w-0 group-hover/sub:w-2.5 h-[1.5px] bg-[#f17829] rounded-full transition-all duration-200" />
                                                                    <span className="group-hover/sub:translate-x-0.5 transition-transform duration-200">{item.name}</span>
                                                                </span>
                                                                <span className="text-xs text-stone-500 group-hover/sub:text-[#f17829] transition-colors">
                                                                    →
                                                                </span>
                                                            </Link>
                                                        ))}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        {/* 3. What We Do (Accordion - Closed by default) */}
                                        <div className="border-b border-white/5 pb-1 sm:pb-1.5">
                                            <div className="flex items-center justify-between py-1.5 sm:py-2">
                                                <Link
                                                    href="/what-we-do"
                                                    onClick={handleCloseMenu}
                                                    className="group text-xl sm:text-2xl xl:text-[28px] font-light text-stone-200 hover:text-[#f17829] transition-colors flex-1"
                                                >
                                                    <div className="inline-flex flex-col items-start">
                                                        <span className="group-hover:translate-x-1.5 inline-block transition-transform duration-300">
                                                            What We Do
                                                        </span>
                                                        <span
                                                            className={`h-[2px] bg-[#f17829] rounded-full mt-1 transition-all duration-300 ease-out ${
                                                                openCategory === "whatwedo"
                                                                    ? "w-full opacity-100 shadow-[0_0_8px_rgba(241,120,41,0.5)]"
                                                                    : "w-6 opacity-80 group-hover:opacity-100 group-hover:w-full group-hover:shadow-[0_0_8px_rgba(241,120,41,0.6)]"
                                                            }`}
                                                        />
                                                    </div>
                                                </Link>
                                                <button
                                                    type="button"
                                                    onClick={() => toggleCategory("whatwedo")}
                                                    className="p-1.5 text-stone-400 hover:text-[#f17829] cursor-pointer"
                                                    aria-label="Toggle What We Do menu"
                                                    aria-expanded={openCategory === "whatwedo"}
                                                >
                                                    <svg
                                                        className={`w-5 h-5 transition-transform duration-300 ${openCategory === "whatwedo" ? "rotate-180 text-[#f17829]" : ""
                                                            }`}
                                                        fill="none"
                                                        viewBox="0 0 24 24"
                                                        stroke="currentColor"
                                                    >
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                                                    </svg>
                                                </button>
                                            </div>

                                            <div
                                                className={`grid transition-[grid-template-rows,opacity] duration-300 ease-in-out ${openCategory === "whatwedo"
                                                    ? "grid-rows-[1fr] opacity-100 my-1.5"
                                                    : "grid-rows-[0fr] opacity-0 my-0 pointer-events-none"
                                                    }`}
                                            >
                                                <div className="overflow-hidden">
                                                    <div className="pl-3 sm:pl-4 pr-2 py-2 sm:py-3 space-y-2 bg-white/5 rounded-xl">
                                                        {whatWeDoSubItems.map((item) => (
                                                            <Link
                                                                key={item.name}
                                                                href={item.href}
                                                                onClick={handleCloseMenu}
                                                                className="group/sub flex items-center justify-between text-xs sm:text-sm text-stone-300 hover:text-[#f17829] transition-colors py-1"
                                                            >
                                                                <span className="inline-flex items-center gap-2">
                                                                    <span className="w-0 group-hover/sub:w-2.5 h-[1.5px] bg-[#f17829] rounded-full transition-all duration-200" />
                                                                    <span className="group-hover/sub:translate-x-0.5 transition-transform duration-200">{item.name}</span>
                                                                </span>
                                                                <span className="text-xs text-stone-500 group-hover/sub:text-[#f17829] transition-colors">
                                                                    →
                                                                </span>
                                                            </Link>
                                                        ))}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        {/* 4. Projects (Accordion - Closed by default) */}
                                        <div className="border-b border-white/5 pb-1 sm:pb-1.5">
                                            <div className="flex items-center justify-between py-1.5 sm:py-2">
                                                <Link
                                                    href="/projects"
                                                    onClick={handleCloseMenu}
                                                    className="group text-xl sm:text-2xl xl:text-[28px] font-light text-stone-200 hover:text-[#f17829] transition-colors flex-1"
                                                >
                                                    <div className="inline-flex flex-col items-start">
                                                        <span className="group-hover:translate-x-1.5 inline-block transition-transform duration-300">
                                                            Projects
                                                        </span>
                                                        <span
                                                            className={`h-[2px] bg-[#f17829] rounded-full mt-1 transition-all duration-300 ease-out ${
                                                                openCategory === "projects"
                                                                    ? "w-full opacity-100 shadow-[0_0_8px_rgba(241,120,41,0.5)]"
                                                                    : "w-6 opacity-80 group-hover:opacity-100 group-hover:w-full group-hover:shadow-[0_0_8px_rgba(241,120,41,0.6)]"
                                                            }`}
                                                        />
                                                    </div>
                                                </Link>
                                                <button
                                                    type="button"
                                                    onClick={() => toggleCategory("projects")}
                                                    className="p-1.5 text-stone-400 hover:text-[#f17829] cursor-pointer"
                                                    aria-label="Toggle Projects menu"
                                                    aria-expanded={openCategory === "projects"}
                                                >
                                                    <svg
                                                        className={`w-5 h-5 transition-transform duration-300 ${openCategory === "projects" ? "rotate-180 text-[#f17829]" : ""
                                                            }`}
                                                        fill="none"
                                                        viewBox="0 0 24 24"
                                                        stroke="currentColor"
                                                    >
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                                                    </svg>
                                                </button>
                                            </div>

                                            <div
                                                className={`grid transition-[grid-template-rows,opacity] duration-300 ease-in-out ${openCategory === "projects"
                                                    ? "grid-rows-[1fr] opacity-100 my-1.5"
                                                    : "grid-rows-[0fr] opacity-0 my-0 pointer-events-none"
                                                    }`}
                                            >
                                                <div className="overflow-hidden">
                                                    <div className="pl-3 sm:pl-4 pr-2 py-2 sm:py-3 space-y-2 bg-white/5 rounded-xl">
                                                        <Link
                                                            href="/projects"
                                                            onClick={handleCloseMenu}
                                                            className="group/sub flex items-center justify-between text-xs sm:text-sm text-stone-300 hover:text-[#f17829] transition-colors py-1"
                                                        >
                                                            <span className="inline-flex items-center gap-2">
                                                                <span className="w-0 group-hover/sub:w-2.5 h-[1.5px] bg-[#f17829] rounded-full transition-all duration-200" />
                                                                <span className="group-hover/sub:translate-x-0.5 transition-transform duration-200">All Projects Overview</span>
                                                            </span>
                                                            <span className="text-xs text-stone-500 group-hover/sub:text-[#f17829]">→</span>
                                                        </Link>
                                                        {aldaProjects.map((p) => (
                                                            <Link
                                                                key={p.name}
                                                                href={p.href}
                                                                onClick={handleCloseMenu}
                                                                className="group/sub flex items-center justify-between text-xs sm:text-sm text-stone-300 hover:text-[#f17829] transition-colors py-1"
                                                            >
                                                                <span className="inline-flex items-center gap-2">
                                                                    <span className="w-0 group-hover/sub:w-2.5 h-[1.5px] bg-[#f17829] rounded-full transition-all duration-200" />
                                                                    <span className="group-hover/sub:translate-x-0.5 transition-transform duration-200">{p.name}</span>
                                                                </span>
                                                                <span className="text-[10px] px-1.5 py-0.5 rounded bg-[#f17829]/20 text-[#f17829] font-mono">
                                                                    {p.status}
                                                                </span>
                                                            </Link>
                                                        ))}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        {/* 5. Locations */}
                                        <div className="border-b border-white/5 pb-1 sm:pb-1.5">
                                            <Link
                                                href="/locations"
                                                onClick={handleCloseMenu}
                                                className="group flex items-center justify-between py-1.5 sm:py-2 text-xl sm:text-2xl xl:text-[28px] font-light text-stone-200 hover:text-[#f17829] transition-colors"
                                            >
                                                <span className="group-hover:translate-x-2 transition-transform duration-200">
                                                    Locations
                                                </span>
                                                <span className="text-xs text-stone-500 opacity-0 group-hover:opacity-100 transition-opacity">
                                                    05
                                                </span>
                                            </Link>
                                        </div>

                                        {/* 6. NRI Desk */}
                                        <div className="border-b border-white/5 pb-1 sm:pb-1.5">
                                            <Link
                                                href="/nri"
                                                onClick={handleCloseMenu}
                                                className="group flex items-center justify-between py-1.5 sm:py-2 text-xl sm:text-2xl xl:text-[28px] font-light text-stone-200 hover:text-[#f17829] transition-colors"
                                            >
                                                <span className="group-hover:translate-x-2 transition-transform duration-200">
                                                    NRI Desk
                                                </span>
                                                <span className="text-xs text-stone-500 opacity-0 group-hover:opacity-100 transition-opacity">
                                                    06
                                                </span>
                                            </Link>
                                        </div>

                                        {/* 7. Insights */}
                                        <div className="border-b border-white/5 pb-1 sm:pb-1.5">
                                            <Link
                                                href="/insights"
                                                onClick={handleCloseMenu}
                                                className="group flex items-center justify-between py-1.5 sm:py-2 text-xl sm:text-2xl xl:text-[28px] font-light text-stone-200 hover:text-[#f17829] transition-colors"
                                            >
                                                <span className="group-hover:translate-x-2 transition-transform duration-200">
                                                    Insights & News
                                                </span>
                                                <span className="text-xs text-stone-500 opacity-0 group-hover:opacity-100 transition-opacity">
                                                    07
                                                </span>
                                            </Link>
                                        </div>

                                        {/* 8. Careers */}
                                        <div className="border-b border-white/5 pb-1 sm:pb-1.5">
                                            <Link
                                                href="/careers"
                                                onClick={handleCloseMenu}
                                                className="group flex items-center justify-between py-1.5 sm:py-2 text-xl sm:text-2xl xl:text-[28px] font-light text-stone-200 hover:text-[#f17829] transition-colors"
                                            >
                                                <span className="group-hover:translate-x-2 transition-transform duration-200">
                                                    Careers
                                                </span>
                                                <span className="text-xs text-stone-500 opacity-0 group-hover:opacity-100 transition-opacity">
                                                    08
                                                </span>
                                            </Link>
                                        </div>

                                        {/* 9. Contact */}
                                        <div className="border-b border-white/5 pb-1 sm:pb-1.5">
                                            <Link
                                                href="/contact"
                                                onClick={handleCloseMenu}
                                                className="group flex items-center justify-between py-1.5 sm:py-2 text-xl sm:text-2xl xl:text-[28px] font-light text-stone-200 hover:text-[#f17829] transition-colors"
                                            >
                                                <span className="group-hover:translate-x-2 transition-transform duration-200">
                                                    Contact Us
                                                </span>
                                                <span className="text-xs text-stone-500 opacity-0 group-hover:opacity-100 transition-opacity">
                                                    09
                                                </span>
                                            </Link>
                                        </div>
                                    </nav>

                                    {/* Actions Row: Enquire Button + Email (Directly Connected) */}
                                    <div className="pt-2 sm:pt-4 border-t border-white/0 space-y-3">
                                        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                                            {/* Primary Enquiry Button */}
                                            <Link
                                                href="/contact"
                                                onClick={handleCloseMenu}
                                                className="flex-1 flex items-center justify-center gap-2 py-3 px-6 rounded-full bg-[#f17829] hover:bg-[#d9671e] text-white font-extrabold text-xs uppercase tracking-wider shadow-lg shadow-[#f17829]/25 transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] cursor-pointer text-center"
                                            >
                                                <span>Enquire Now</span>
                                                <svg className="w-3.5 h-3.5 stroke-[2.5]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M7 17L17 7M17 7H7M17 7V17" />
                                                </svg>
                                            </Link>

                                            {/* Direct Email Link */}
                                            <a
                                                href="mailto:info@aldaglobal.com"
                                                className="flex items-center justify-center gap-2 py-3 px-5 rounded-full border border-white/20 hover:border-[#f17829] bg-white/5 hover:bg-[#f17829]/10 text-stone-200 hover:text-[#f17829] text-xs font-semibold tracking-wide transition-colors"
                                            >
                                                <svg className="w-4 h-4 text-[#f17829]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <rect width="20" height="16" x="2" y="4" rx="2" strokeWidth="2" />
                                                    <path strokeWidth="2" d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                                                </svg>
                                                <span>info@aldaglobal.com</span>
                                            </a>
                                        </div>

                                        {/* Subtle Tagline */}

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}