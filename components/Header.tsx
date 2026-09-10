"use client";

import { useState, useEffect } from "react";
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
    // State for DRA-style full side drawer / mobile menu
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    // State for hover-delayed dropdowns on desktop
    const [activeDesktopDropdown, setActiveDesktopDropdown] = useState<string | null>(null);

    // State for mobile accordion toggle
    const [openMobileSection, setOpenMobileSection] = useState<string | null>(null);

    // Filter tab state inside Projects Mega Menu
    const [projectFilter, setProjectFilter] = useState<"All" | "Ongoing" | "Upcoming">("All");

    // Close menu when ESC key is pressed or screen resizes
    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === "Escape") {
                setIsMenuOpen(false);
                setActiveDesktopDropdown(null);
            }
        };

        window.addEventListener("keydown", handleKeyDown);
        return () => window.removeEventListener("keydown", handleKeyDown);
    }, []);

    // Prevent body scroll when side drawer is open
    useEffect(() => {
        if (isMenuOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "unset";
        }
        return () => {
            document.body.style.overflow = "unset";
        };
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

    // Filtered projects for the mega menu
    const displayedProjects = aldaProjects.filter((p) => {
        if (projectFilter === "All") return true;
        return p.status === projectFilter;
    });

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

    const toggleMobileSection = (section: string) => {
        setOpenMobileSection(openMobileSection === section ? null : section);
    };

    return (
        <header className="sticky top-0 z-50 w-full bg-[#FAF8F5]/98 backdrop-blur-md border-b border-stone-200/80 transition-all duration-300">
            {/* =========================================================================
                1. DRA-STYLE TOP UTILITY BAR (Header Top)
               ========================================================================= */}
            <div className="hidden md:block bg-[#171a23] text-stone-300 text-[11px] py-1.5 px-4 sm:px-6 lg:px-8 border-b border-white/5">
                <div className="max-w-7xl mx-auto flex items-center justify-between">
                    <div className="flex items-center gap-6">
                        <a
                            href="mailto:info@aldaglobal.com"
                            className="flex items-center gap-1.5 hover:text-[#f17829] transition-colors"
                        >
                            <svg className="w-3.5 h-3.5 text-[#f17829]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <rect width="20" height="16" x="2" y="4" rx="2" strokeWidth="2" />
                                <path strokeWidth="2" d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                            </svg>
                            <span>Email: info@aldaglobal.com</span>
                        </a>
                        <a
                            href="tel:+918939960009"
                            className="flex items-center gap-1.5 hover:text-[#f17829] transition-colors"
                        >
                            <svg className="w-3.5 h-3.5 text-[#f17829]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                            </svg>
                            <span>Call Us: +91 89399 60009</span>
                        </a>
                    </div>
                    <div className="flex items-center gap-6">
                        <Link href="/nri" className="hover:text-[#f17829] transition-colors">
                            NRI Desk
                        </Link>
                        <Link href="/careers" className="hover:text-[#f17829] transition-colors">
                            Careers
                        </Link>
                        <span className="text-stone-500">|</span>
                        <span className="text-stone-400 font-medium">Chennai, Tamil Nadu</span>
                    </div>
                </div>
            </div>

            {/* =========================================================================
                2. MAIN NAVIGATION BAR (DRA Spacing & Layout + ALDA Branding)
               ========================================================================= */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-20 sm:h-22">
                    {/* Brand Logo */}
                    <div className="flex-shrink-0">
                        <Link href="/" aria-label="ALDA Home" className="inline-flex items-center group">
                            <span className="inline-flex items-center rounded-lg bg-[#FAF8F5] px-2 py-1">
                                <Image
                                    src="/brand/alda-logo.png"
                                    alt="ALDA — Crafting Spaces"
                                    width={180}
                                    height={46}
                                    priority
                                    className="h-9 sm:h-11 md:h-12 w-auto object-contain transition-transform duration-300 group-hover:scale-[1.02]"
                                />
                            </span>
                        </Link>
                    </div>

                    {/* Desktop Navigation Links */}
                    <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
                        {/* 1. Home */}
                        <Link
                            href="/"
                            className="px-3.5 py-2 text-sm font-semibold text-slate-800 hover:text-[#f17829] transition-colors rounded-lg"
                        >
                            Home
                        </Link>

                        {/* 2. About Us (DRA-style Dropdown) */}
                        <div
                            className="group/about relative h-full flex items-center"
                            onMouseEnter={() => setActiveDesktopDropdown("about")}
                            onMouseLeave={() => setActiveDesktopDropdown(null)}
                        >
                            <Link
                                href="/about"
                                className="flex items-center gap-1.5 px-3.5 py-2 text-sm font-semibold text-slate-800 hover:text-[#f17829] transition-colors rounded-lg group-hover/about:text-[#f17829]"
                            >
                                <span>About Us</span>
                                {/* DRA-style 3-lines indicator */}
                                <span
                                    className="flex flex-col justify-center items-center gap-[2.5px] w-3 h-3 shrink-0 ml-0.5"
                                    aria-hidden="true"
                                >
                                    <span
                                        className={`h-[1.5px] rounded-full transition-all duration-300 ${
                                            activeDesktopDropdown === "about"
                                                ? "w-3 bg-[#f17829]"
                                                : "w-2.5 bg-stone-400 group-hover/about:w-3 group-hover/about:bg-[#f17829]"
                                        }`}
                                    />
                                    <span
                                        className={`h-[1.5px] rounded-full transition-all duration-300 ${
                                            activeDesktopDropdown === "about"
                                                ? "w-2.5 bg-[#f17829]"
                                                : "w-1.5 bg-stone-400 group-hover/about:w-2.5 group-hover/about:bg-[#f17829]"
                                        }`}
                                    />
                                    <span
                                        className={`h-[1.5px] rounded-full transition-all duration-300 ${
                                            activeDesktopDropdown === "about"
                                                ? "w-3 bg-[#f17829]"
                                                : "w-2.5 bg-stone-400 group-hover/about:w-3 group-hover/about:bg-[#f17829]"
                                        }`}
                                    />
                                </span>
                            </Link>

                            {/* Dropdown Menu - Smooth Transition */}
                            <div
                                className={`absolute left-0 top-[calc(100%-8px)] pt-3 w-[460px] z-50 transition-all duration-300 ease-out before:content-[''] before:absolute before:-top-3 before:left-0 before:right-0 before:h-3 ${
                                    activeDesktopDropdown === "about"
                                        ? "opacity-100 visible translate-y-0 pointer-events-auto"
                                        : "opacity-0 invisible translate-y-2 pointer-events-none group-hover/about:opacity-100 group-hover/about:visible group-hover/about:translate-y-0 group-hover/about:pointer-events-auto"
                                }`}
                            >
                                <div className="relative">
                                    {/* DRA-style upward arrow pointer */}
                                    <div className="absolute -top-1.5 left-7 w-3 h-3 bg-[#f17829] rotate-45 rounded-[2px] z-10" />
                                    <div className="bg-white rounded-2xl border-t-2 border-[#f17829] border-x border-b border-stone-200/90 shadow-[0_20px_50px_rgba(0,0,0,0.12)] overflow-hidden">
                                        <div className="p-3.5 grid grid-cols-1 gap-1">
                                            {aboutSubItems.map((item) => (
                                                <Link
                                                    key={item.name}
                                                    href={item.href}
                                                    className="group/item flex items-start gap-3 p-2.5 rounded-xl hover:bg-[#f17829]/5 border-l-2 border-transparent hover:border-[#f17829] transition-all duration-200"
                                                >
                                                    <div className="flex-1">
                                                        <div className="flex items-center justify-between">
                                                            <h4 className="text-sm font-bold text-slate-900 group-hover/item:text-[#f17829] transition-colors">
                                                                {item.name}
                                                            </h4>
                                                            <svg
                                                                className="w-3.5 h-3.5 text-[#f17829] opacity-0 -translate-x-1 group-hover/item:opacity-100 group-hover/item:translate-x-0 transition-all duration-200 shrink-0"
                                                                fill="none"
                                                                stroke="currentColor"
                                                                viewBox="0 0 24 24"
                                                            >
                                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 17L17 7M17 7H7M17 7V17" />
                                                            </svg>
                                                        </div>
                                                        <p className="text-xs text-stone-500 mt-0.5 leading-relaxed font-normal">
                                                            {item.description}
                                                        </p>
                                                    </div>
                                                </Link>
                                            ))}
                                        </div>

                                        {/* DRA-style Bottom ViewAll bar */}
                                        <div className="bg-[#FAF8F5] border-t border-stone-100 px-5 py-2.5 text-center">
                                            <Link
                                                href="/about"
                                                className="inline-flex items-center gap-1.5 text-xs font-bold text-[#f17829] uppercase tracking-wider hover:underline"
                                            >
                                                <span>Explore Full About ALDA Overview</span>
                                                <svg className="w-3 h-3 stroke-[2.5]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                                                </svg>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* 3. What We Do (DRA-style Dropdown) */}
                        <div
                            className="group/whatwedo relative h-full flex items-center"
                            onMouseEnter={() => setActiveDesktopDropdown("whatwedo")}
                            onMouseLeave={() => setActiveDesktopDropdown(null)}
                        >
                            <Link
                                href="/what-we-do"
                                className="flex items-center gap-1.5 px-3.5 py-2 text-sm font-semibold text-slate-800 hover:text-[#f17829] transition-colors rounded-lg group-hover/whatwedo:text-[#f17829]"
                            >
                                <span>What We Do</span>
                                {/* DRA-style 3-lines indicator */}
                                <span
                                    className="flex flex-col justify-center items-center gap-[2.5px] w-3 h-3 shrink-0 ml-0.5"
                                    aria-hidden="true"
                                >
                                    <span
                                        className={`h-[1.5px] rounded-full transition-all duration-300 ${
                                            activeDesktopDropdown === "whatwedo"
                                                ? "w-3 bg-[#f17829]"
                                                : "w-2.5 bg-stone-400 group-hover/whatwedo:w-3 group-hover/whatwedo:bg-[#f17829]"
                                        }`}
                                    />
                                    <span
                                        className={`h-[1.5px] rounded-full transition-all duration-300 ${
                                            activeDesktopDropdown === "whatwedo"
                                                ? "w-2.5 bg-[#f17829]"
                                                : "w-1.5 bg-stone-400 group-hover/whatwedo:w-2.5 group-hover/whatwedo:bg-[#f17829]"
                                        }`}
                                    />
                                    <span
                                        className={`h-[1.5px] rounded-full transition-all duration-300 ${
                                            activeDesktopDropdown === "whatwedo"
                                                ? "w-3 bg-[#f17829]"
                                                : "w-2.5 bg-stone-400 group-hover/whatwedo:w-3 group-hover/whatwedo:bg-[#f17829]"
                                        }`}
                                    />
                                </span>
                            </Link>

                            {/* Dropdown Menu - Smooth Transition */}
                            <div
                                className={`absolute left-0 top-[calc(100%-8px)] pt-3 w-[450px] z-50 transition-all duration-300 ease-out before:content-[''] before:absolute before:-top-3 before:left-0 before:right-0 before:h-3 ${
                                    activeDesktopDropdown === "whatwedo"
                                        ? "opacity-100 visible translate-y-0 pointer-events-auto"
                                        : "opacity-0 invisible translate-y-2 pointer-events-none group-hover/whatwedo:opacity-100 group-hover/whatwedo:visible group-hover/whatwedo:translate-y-0 group-hover/whatwedo:pointer-events-auto"
                                }`}
                            >
                                <div className="relative">
                                    {/* DRA-style upward arrow pointer */}
                                    <div className="absolute -top-1.5 left-8 w-3 h-3 bg-[#f17829] rotate-45 rounded-[2px] z-10" />
                                    <div className="bg-white rounded-2xl border-t-2 border-[#f17829] border-x border-b border-stone-200/90 shadow-[0_20px_50px_rgba(0,0,0,0.12)] overflow-hidden">
                                        <div className="p-3.5 grid grid-cols-1 gap-1">
                                            {whatWeDoSubItems.map((item) => (
                                                <Link
                                                    key={item.name}
                                                    href={item.href}
                                                    className="group/item flex items-start gap-3 p-2.5 rounded-xl hover:bg-[#f17829]/5 border-l-2 border-transparent hover:border-[#f17829] transition-all duration-200"
                                                >
                                                    <div className="flex-1">
                                                        <div className="flex items-center justify-between">
                                                            <h4 className="text-sm font-bold text-slate-900 group-hover/item:text-[#f17829] transition-colors">
                                                                {item.name}
                                                            </h4>
                                                            <svg
                                                                className="w-3.5 h-3.5 text-[#f17829] opacity-0 -translate-x-1 group-hover/item:opacity-100 group-hover/item:translate-x-0 transition-all duration-200 shrink-0"
                                                                fill="none"
                                                                stroke="currentColor"
                                                                viewBox="0 0 24 24"
                                                            >
                                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 17L17 7M17 7H7M17 7V17" />
                                                            </svg>
                                                        </div>
                                                        <p className="text-xs text-stone-500 mt-0.5 leading-relaxed font-normal">
                                                            {item.description}
                                                        </p>
                                                    </div>
                                                </Link>
                                            ))}
                                        </div>

                                        {/* Bottom ViewAll bar */}
                                        <div className="bg-[#FAF8F5] border-t border-stone-100 px-5 py-2.5 text-center">
                                            <Link
                                                href="/what-we-do"
                                                className="inline-flex items-center gap-1.5 text-xs font-bold text-[#f17829] uppercase tracking-wider hover:underline"
                                            >
                                                <span>Explore Contracting & Development Capabilities</span>
                                                <svg className="w-3 h-3 stroke-[2.5]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                                                </svg>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* 4. PROJECTS (DRA-STYLE PREMIUM MEGA-MENU) */}
                        <div
                            className="group/projects relative h-full flex items-center"
                            onMouseEnter={() => setActiveDesktopDropdown("projects")}
                            onMouseLeave={() => setActiveDesktopDropdown(null)}
                        >
                            <Link
                                href="/projects"
                                className="flex items-center gap-1.5 px-3.5 py-2 text-sm font-semibold text-slate-800 hover:text-[#f17829] transition-colors rounded-lg group-hover/projects:text-[#f17829]"
                            >
                                <span>Projects</span>
                                {/* DRA-style 3-lines indicator */}
                                <span
                                    className="flex flex-col justify-center items-center gap-[2.5px] w-3 h-3 shrink-0 ml-0.5"
                                    aria-hidden="true"
                                >
                                    <span
                                        className={`h-[1.5px] rounded-full transition-all duration-300 ${
                                            activeDesktopDropdown === "projects"
                                                ? "w-3 bg-[#f17829]"
                                                : "w-2.5 bg-stone-400 group-hover/projects:w-3 group-hover/projects:bg-[#f17829]"
                                        }`}
                                    />
                                    <span
                                        className={`h-[1.5px] rounded-full transition-all duration-300 ${
                                            activeDesktopDropdown === "projects"
                                                ? "w-2.5 bg-[#f17829]"
                                                : "w-1.5 bg-stone-400 group-hover/projects:w-2.5 group-hover/projects:bg-[#f17829]"
                                        }`}
                                    />
                                    <span
                                        className={`h-[1.5px] rounded-full transition-all duration-300 ${
                                            activeDesktopDropdown === "projects"
                                                ? "w-3 bg-[#f17829]"
                                                : "w-2.5 bg-stone-400 group-hover/projects:w-3 group-hover/projects:bg-[#f17829]"
                                        }`}
                                    />
                                </span>
                            </Link>

                            {/* Large Mega-Menu Container - Smooth Transition */}
                            <div
                                className={`absolute left-1/2 -translate-x-[36%] xl:-translate-x-1/2 top-[calc(100%-8px)] pt-3 w-[880px] xl:w-[940px] max-w-[calc(100vw-2rem)] z-50 transition-all duration-300 ease-out before:content-[''] before:absolute before:-top-3 before:left-0 before:right-0 before:h-3 ${
                                    activeDesktopDropdown === "projects"
                                        ? "opacity-100 visible translate-y-0 pointer-events-auto"
                                        : "opacity-0 invisible translate-y-2 pointer-events-none group-hover/projects:opacity-100 group-hover/projects:visible group-hover/projects:translate-y-0 group-hover/projects:pointer-events-auto"
                                }`}
                            >
                                <div className="relative">
                                    {/* DRA-style upward arrow pointer */}
                                    <div className="absolute -top-1.5 left-[36%] xl:left-1/2 -translate-x-1/2 w-3.5 h-3.5 bg-[#f17829] rotate-45 rounded-[2px] z-10" />
                                    <div className="bg-white rounded-2xl border-t-2 border-[#f17829] border-x border-b border-stone-200/90 shadow-[0_25px_60px_rgba(0,0,0,0.15)] overflow-hidden">
                                        {/* Top Filter Bar (DRA style buttons) */}
                                        <div className="bg-[#FAF8F5] border-b border-stone-200 px-6 py-3 flex items-center justify-between">
                                            <div className="flex items-center gap-2">
                                                <span className="text-xs font-bold uppercase tracking-wider text-stone-500 mr-2">
                                                    Filter By:
                                                </span>
                                                {(["All", "Ongoing", "Upcoming"] as const).map((filter) => (
                                                    <button
                                                        key={filter}
                                                        type="button"
                                                        onClick={() => setProjectFilter(filter)}
                                                        className={`px-3 py-1 rounded-full text-xs font-bold transition-all duration-200 cursor-pointer ${
                                                            projectFilter === filter
                                                                ? "bg-[#f17829] text-white shadow-xs"
                                                                : "bg-white text-stone-700 hover:bg-stone-100 border border-stone-200"
                                                        }`}
                                                    >
                                                        {filter} Projects
                                                    </button>
                                                ))}
                                            </div>

                                            <div className="text-xs font-semibold text-stone-500">
                                                Chennai Residential & Contracting
                                            </div>
                                        </div>

                                        {/* Main Mega-Menu Content Grid */}
                                        <div className="p-6 grid grid-cols-12 gap-6">
                                            {/* Column 1 & 2: Project Listings (8 cols) */}
                                            <div className="col-span-8 grid grid-cols-2 gap-4">
                                                {displayedProjects.map((project) => (
                                                    <Link
                                                        key={project.name}
                                                        href={project.href}
                                                        className="group/card p-4 rounded-xl border border-stone-100 hover:border-[#f17829]/40 bg-stone-50/40 hover:bg-[#f17829]/5 transition-all duration-200 flex flex-col justify-between"
                                                    >
                                                        <div>
                                                            <div className="flex items-center justify-between gap-2 mb-1.5">
                                                                <h4 className="text-sm font-bold text-slate-900 group-hover/card:text-[#f17829] transition-colors">
                                                                    {project.name}
                                                                </h4>
                                                                <span
                                                                    className={`px-2 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider ${
                                                                        project.status === "Ongoing"
                                                                            ? "bg-[#f17829]/15 text-[#f17829]"
                                                                            : "bg-blue-50 text-blue-600 border border-blue-200"
                                                                    }`}
                                                                >
                                                                    {project.status}
                                                                </span>
                                                            </div>

                                                            <p className="text-xs font-semibold text-stone-600 flex items-center gap-1 mb-2">
                                                                <svg className="w-3 h-3 text-[#f17829]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                                                </svg>
                                                                {project.location}
                                                            </p>

                                                            <p className="text-xs text-stone-500 line-clamp-2 leading-relaxed font-normal">
                                                                {project.description}
                                                            </p>
                                                        </div>

                                                        <div className="mt-3 pt-2.5 border-t border-stone-200/60 flex items-center justify-between text-[11px] font-bold text-[#f17829]">
                                                            <span>View Details</span>
                                                            <svg className="w-3 h-3 group-hover/card:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                                            </svg>
                                                        </div>
                                                    </Link>
                                                ))}
                                            </div>

                                            {/* Column 3: Featured Showcase Card (4 cols) */}
                                            <div className="col-span-4 bg-gradient-to-br from-slate-900 to-[#18212e] text-white p-5 rounded-2xl flex flex-col justify-between shadow-md">
                                                <div>
                                                    <span className="inline-block px-2 py-0.5 rounded-full text-[10px] font-mono font-semibold uppercase tracking-wider bg-[#f17829] text-white mb-2.5">
                                                        Signature Project
                                                    </span>
                                                    <h4 className="text-base font-extrabold text-white tracking-tight leading-snug">
                                                        ALDA Ayan, Thiruvanmiyur
                                                    </h4>
                                                    <p className="text-xs text-stone-300 mt-2 leading-relaxed">
                                                        3 BHK residences designed for bespoke living near coastal Chennai. Engineered with 1,357+ quality checkpoints.
                                                    </p>
                                                </div>

                                                <div className="mt-4 pt-3 border-t border-white/10 flex items-center justify-between">
                                                    <Link
                                                        href="/projects/alda-ayan"
                                                        className="inline-flex items-center gap-1.5 text-xs font-bold text-[#f17829] hover:text-white transition-colors"
                                                    >
                                                        <span>Explore ALDA Ayan</span>
                                                        <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 17L17 7M17 7H7M17 7V17" />
                                                        </svg>
                                                    </Link>
                                                    <span className="text-[10px] text-stone-400 font-mono">ALDA HOMES</span>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Bottom Full-Width Banner (DRA Style `viewAll`) */}
                                        <div className="bg-[#FAF8F5] border-t border-stone-200 px-6 py-3 flex items-center justify-between">
                                            <span className="text-xs text-stone-600 font-medium">
                                                Looking for customized land development or joint ventures?
                                            </span>
                                            <Link
                                                href="/projects"
                                                className="inline-flex items-center gap-2 text-xs font-bold text-[#f17829] uppercase tracking-wider hover:underline"
                                            >
                                                <span>View All Projects in Chennai</span>
                                                <svg className="w-3.5 h-3.5 stroke-[2.5]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                                </svg>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* 5. Locations */}
                        <Link
                            href="/locations"
                            className="px-3.5 py-2 text-sm font-semibold text-slate-800 hover:text-[#f17829] transition-colors rounded-lg"
                        >
                            Locations
                        </Link>

                        {/* 6. NRI */}
                        <Link
                            href="/nri"
                            className="px-3.5 py-2 text-sm font-semibold text-slate-800 hover:text-[#f17829] transition-colors rounded-lg"
                        >
                            NRI
                        </Link>

                        {/* 7. Insights */}
                        <Link
                            href="/insights"
                            className="px-3.5 py-2 text-sm font-semibold text-slate-800 hover:text-[#f17829] transition-colors rounded-lg"
                        >
                            Insights
                        </Link>

                        {/* 8. Contact */}
                        <Link
                            href="/contact"
                            className="px-3.5 py-2 text-sm font-semibold text-slate-800 hover:text-[#f17829] transition-colors rounded-lg"
                        >
                            Contact
                        </Link>
                    </nav>

                    {/* Right Side: CTA Button (Desktop) + Mobile Menu Toggle (lg:hidden) */}
                    <div className="flex items-center gap-3">
                        {/* Enquire CTA Button (Desktop & Tablet) */}
                        <Link
                            href="/contact"
                            className="hidden sm:inline-flex items-center gap-2.5 pl-4 pr-1.5 py-1.5 rounded-full text-xs font-bold text-white bg-slate-900 hover:bg-black border border-slate-800 shadow-md hover:shadow-xl hover:shadow-[#f17829]/15 transition-all duration-300 hover:scale-105 active:scale-95"
                        >
                            <span>Enquire Now</span>
                            <span className="w-7 h-7 rounded-full bg-[#f17829] text-white flex items-center justify-center shadow-xs">
                                <svg className="w-3.5 h-3.5 stroke-[2.5]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M7 17L17 7M17 7H7M17 7V17" />
                                </svg>
                            </span>
                        </Link>

                        {/* Mobile Menu Button - ONLY visible on mobile/tablet (< lg), hidden completely on desktop */}
                        <button
                            type="button"
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            className="lg:hidden relative flex flex-col items-center justify-center w-11 h-11 rounded-xl bg-white border border-stone-300 hover:border-[#f17829] text-slate-900 hover:text-[#f17829] shadow-2xs transition-all duration-200 cursor-pointer focus:outline-none"
                            aria-label="Toggle Navigation Menu"
                            aria-expanded={isMenuOpen}
                        >
                            {/* Animated 3-line bars */}
                            <span
                                className={`w-4.5 h-0.5 bg-current rounded-full transition-all duration-300 ${
                                    isMenuOpen ? "rotate-45 translate-y-1.5" : ""
                                }`}
                            />
                            <span
                                className={`w-4.5 h-0.5 bg-current rounded-full my-1 transition-all duration-300 ${
                                    isMenuOpen ? "opacity-0" : "opacity-100"
                                }`}
                            />
                            <span
                                className={`w-4.5 h-0.5 bg-current rounded-full transition-all duration-300 ${
                                    isMenuOpen ? "-rotate-45 -translate-y-1.5" : ""
                                }`}
                            />
                            <span className="text-[8px] font-extrabold uppercase tracking-widest mt-0.5 leading-none">
                                {isMenuOpen ? "Close" : "Menu"}
                            </span>
                        </button>
                    </div>
                </div>
            </div>

            {/* =========================================================================
                3. DRA-STYLE FULL SIDE-MENU DRAWER (Desktop & Tablet & Mobile)
               ========================================================================= */}
            {isMenuOpen && (
                <div className="fixed inset-0 z-[100] overflow-hidden">
                    {/* Dark Backdrop */}
                    <div
                        className="absolute inset-0 bg-slate-950/70 backdrop-blur-sm transition-opacity duration-300"
                        onClick={() => setIsMenuOpen(false)}
                    />

                    {/* Slide-in Container from Right */}
                    <div className="absolute inset-y-0 right-0 max-w-full flex">
                        <div className="relative w-screen max-w-2xl bg-[#FAF8F5] text-slate-900 shadow-2xl flex flex-col justify-between overflow-y-auto border-l border-stone-200">
                            {/* Drawer Header */}
                            <div className="p-6 sm:p-8 flex items-center justify-between border-b border-stone-200 bg-white">
                                <Link href="/" onClick={() => setIsMenuOpen(false)}>
                                    <Image
                                        src="/brand/alda-logo.png"
                                        alt="ALDA Logo"
                                        width={160}
                                        height={40}
                                        className="h-9 w-auto object-contain"
                                    />
                                </Link>

                                <button
                                    type="button"
                                    onClick={() => setIsMenuOpen(false)}
                                    className="flex items-center gap-2 px-3 py-1.5 rounded-full border border-stone-300 hover:border-[#f17829] text-xs font-bold uppercase tracking-wider text-slate-800 hover:text-[#f17829] transition-colors cursor-pointer"
                                >
                                    <span>Close</span>
                                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                                    </svg>
                                </button>
                            </div>

                            {/* Drawer Body: 2 Columns on sm+, Single Column on mobile */}
                            <div className="p-6 sm:p-8 flex-1 grid grid-cols-1 sm:grid-cols-2 gap-8 divide-y sm:divide-y-0 sm:divide-x divide-stone-200">
                                {/* Left Column: Major Project Categories (DRA menu-remover style) */}
                                <div className="space-y-6 pt-2 sm:pt-0 sm:pr-6">
                                    <div>
                                        <span className="text-[11px] font-bold uppercase tracking-widest text-[#f17829] block mb-2">
                                            Projects & Living
                                        </span>
                                        <h3 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight mb-3">
                                            ALDA Communities
                                        </h3>
                                        <ul className="space-y-2.5 text-sm font-semibold text-slate-700">
                                            <li>
                                                <Link
                                                    href="/projects/alda-ayan"
                                                    onClick={() => setIsMenuOpen(false)}
                                                    className="flex items-center justify-between p-2 rounded-lg hover:bg-white hover:text-[#f17829] transition-colors"
                                                >
                                                    <span>ALDA Ayan — Thiruvanmiyur</span>
                                                    <span className="text-[10px] px-2 py-0.5 rounded-full bg-[#f17829]/15 text-[#f17829] font-bold">
                                                        Ongoing
                                                    </span>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link
                                                    href="/projects/alda-aran"
                                                    onClick={() => setIsMenuOpen(false)}
                                                    className="flex items-center justify-between p-2 rounded-lg hover:bg-white hover:text-[#f17829] transition-colors"
                                                >
                                                    <span>ALDA Aran — Chennai</span>
                                                    <span className="text-[10px] px-2 py-0.5 rounded-full bg-[#f17829]/15 text-[#f17829] font-bold">
                                                        Ongoing
                                                    </span>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link
                                                    href="/upcoming-projects"
                                                    onClick={() => setIsMenuOpen(false)}
                                                    className="flex items-center justify-between p-2 rounded-lg hover:bg-white hover:text-[#f17829] transition-colors"
                                                >
                                                    <span>Upcoming Projects</span>
                                                    <span className="text-[10px] px-2 py-0.5 rounded-full bg-blue-50 text-blue-600 font-bold border border-blue-200">
                                                        Pipeline
                                                    </span>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link
                                                    href="/what-we-do/contracting"
                                                    onClick={() => setIsMenuOpen(false)}
                                                    className="flex items-center justify-between p-2 rounded-lg hover:bg-white hover:text-[#f17829] transition-colors"
                                                >
                                                    <span>Contracting & Turnkey Build</span>
                                                    <span className="text-xs text-stone-400">→</span>
                                                </Link>
                                            </li>
                                        </ul>
                                    </div>

                                    {/* Direct Call Box (DRA style `makeaCall`) */}
                                    <div className="bg-white p-4 rounded-xl border border-stone-200 shadow-2xs">
                                        <h5 className="text-[11px] font-bold uppercase tracking-wider text-stone-500 mb-1">
                                            Make a Direct Call
                                        </h5>
                                        <a
                                            href="tel:+918939960009"
                                            className="text-base sm:text-lg font-black text-slate-900 hover:text-[#f17829] transition-colors block"
                                        >
                                            +91 89399 60009
                                        </a>
                                        <p className="text-xs text-stone-500 mt-1">
                                            Adyar, Chennai · Mon to Sat, 9am - 6pm
                                        </p>
                                    </div>

                                    {/* Social Links */}
                                    <div>
                                        <h5 className="text-[11px] font-bold uppercase tracking-wider text-stone-500 mb-2">
                                            Connect with ALDA
                                        </h5>
                                        <div className="flex items-center gap-3">
                                            <a
                                                href="https://facebook.com"
                                                target="_blank"
                                                rel="noreferrer"
                                                className="w-9 h-9 rounded-full bg-white border border-stone-200 hover:border-[#f17829] text-slate-700 hover:text-[#f17829] flex items-center justify-center transition-colors shadow-2xs"
                                                aria-label="Facebook"
                                            >
                                                f
                                            </a>
                                            <a
                                                href="https://instagram.com"
                                                target="_blank"
                                                rel="noreferrer"
                                                className="w-9 h-9 rounded-full bg-white border border-stone-200 hover:border-[#f17829] text-slate-700 hover:text-[#f17829] flex items-center justify-center transition-colors shadow-2xs"
                                                aria-label="Instagram"
                                            >
                                                in
                                            </a>
                                            <a
                                                href="https://linkedin.com"
                                                target="_blank"
                                                rel="noreferrer"
                                                className="w-9 h-9 rounded-full bg-white border border-stone-200 hover:border-[#f17829] text-slate-700 hover:text-[#f17829] flex items-center justify-center transition-colors shadow-2xs"
                                                aria-label="LinkedIn"
                                            >
                                                li
                                            </a>
                                        </div>
                                    </div>
                                </div>

                                {/* Right Column: Full Nav Links (DRA side-navbar-nav style) */}
                                <div className="pt-6 sm:pt-0 sm:pl-6 flex flex-col justify-between">
                                    <ul className="space-y-1 text-sm font-bold text-slate-800">
                                        <li>
                                            <Link
                                                href="/"
                                                onClick={() => setIsMenuOpen(false)}
                                                className="block p-2 rounded-lg hover:bg-white hover:text-[#f17829] transition-colors"
                                            >
                                                Home
                                            </Link>
                                        </li>
                                        <li>
                                            <div className="flex items-center justify-between p-2 rounded-lg hover:bg-white">
                                                <Link
                                                    href="/about"
                                                    onClick={() => setIsMenuOpen(false)}
                                                    className="hover:text-[#f17829] transition-colors"
                                                >
                                                    About Us
                                                </Link>
                                                <button
                                                    type="button"
                                                    onClick={() => toggleMobileSection("about")}
                                                    className="text-xs text-stone-500 font-normal px-2 py-0.5 rounded border border-stone-200 hover:border-[#f17829]"
                                                >
                                                    {openMobileSection === "about" ? "−" : "+"}
                                                </button>
                                            </div>
                                            {openMobileSection === "about" && (
                                                <ul className="pl-4 py-1.5 space-y-1 text-xs font-medium text-stone-600">
                                                    {aboutSubItems.map((s) => (
                                                        <li key={s.name}>
                                                            <Link
                                                                href={s.href}
                                                                onClick={() => setIsMenuOpen(false)}
                                                                className="block py-1 hover:text-[#f17829] transition-colors"
                                                            >
                                                                {s.name}
                                                            </Link>
                                                        </li>
                                                    ))}
                                                </ul>
                                            )}
                                        </li>
                                        <li>
                                            <div className="flex items-center justify-between p-2 rounded-lg hover:bg-white">
                                                <Link
                                                    href="/what-we-do"
                                                    onClick={() => setIsMenuOpen(false)}
                                                    className="hover:text-[#f17829] transition-colors"
                                                >
                                                    What We Do
                                                </Link>
                                                <button
                                                    type="button"
                                                    onClick={() => toggleMobileSection("whatwedo")}
                                                    className="text-xs text-stone-500 font-normal px-2 py-0.5 rounded border border-stone-200 hover:border-[#f17829]"
                                                >
                                                    {openMobileSection === "whatwedo" ? "−" : "+"}
                                                </button>
                                            </div>
                                            {openMobileSection === "whatwedo" && (
                                                <ul className="pl-4 py-1.5 space-y-1 text-xs font-medium text-stone-600">
                                                    {whatWeDoSubItems.map((s) => (
                                                        <li key={s.name}>
                                                            <Link
                                                                href={s.href}
                                                                onClick={() => setIsMenuOpen(false)}
                                                                className="block py-1 hover:text-[#f17829] transition-colors"
                                                            >
                                                                {s.name}
                                                            </Link>
                                                        </li>
                                                    ))}
                                                </ul>
                                            )}
                                        </li>
                                        <li>
                                            <Link
                                                href="/projects"
                                                onClick={() => setIsMenuOpen(false)}
                                                className="block p-2 rounded-lg hover:bg-white hover:text-[#f17829] transition-colors"
                                            >
                                                All Projects
                                            </Link>
                                        </li>
                                        <li>
                                            <Link
                                                href="/locations"
                                                onClick={() => setIsMenuOpen(false)}
                                                className="block p-2 rounded-lg hover:bg-white hover:text-[#f17829] transition-colors"
                                            >
                                                Locations
                                            </Link>
                                        </li>
                                        <li>
                                            <Link
                                                href="/nri"
                                                onClick={() => setIsMenuOpen(false)}
                                                className="block p-2 rounded-lg hover:bg-white hover:text-[#f17829] transition-colors"
                                            >
                                                NRI Services
                                            </Link>
                                        </li>
                                        <li>
                                            <Link
                                                href="/insights"
                                                onClick={() => setIsMenuOpen(false)}
                                                className="block p-2 rounded-lg hover:bg-white hover:text-[#f17829] transition-colors"
                                            >
                                                Insights & News
                                            </Link>
                                        </li>
                                        <li>
                                            <Link
                                                href="/careers"
                                                onClick={() => setIsMenuOpen(false)}
                                                className="block p-2 rounded-lg hover:bg-white hover:text-[#f17829] transition-colors"
                                            >
                                                Careers
                                            </Link>
                                        </li>
                                        <li>
                                            <Link
                                                href="/contact"
                                                onClick={() => setIsMenuOpen(false)}
                                                className="block p-2 rounded-lg hover:bg-white hover:text-[#f17829] transition-colors"
                                            >
                                                Contact Us
                                            </Link>
                                        </li>
                                    </ul>

                                    <div className="pt-6">
                                        <Link
                                            href="/contact"
                                            onClick={() => setIsMenuOpen(false)}
                                            className="w-full flex items-center justify-center gap-2 py-3 px-6 rounded-full bg-[#f17829] hover:bg-[#d9671e] text-white font-bold text-xs uppercase tracking-wider shadow-md shadow-[#f17829]/25 transition-all duration-200 cursor-pointer"
                                        >
                                            <span>Enquire Now</span>
                                            <svg className="w-3.5 h-3.5 stroke-[2.5]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M7 17L17 7M17 7H7M17 7V17" />
                                            </svg>
                                        </Link>
                                    </div>
                                </div>
                            </div>

                            {/* Drawer Footer */}
                            <div className="p-4 bg-white border-t border-stone-200 text-center text-xs text-stone-500">
                                © {new Date().getFullYear()} ALDA Homes · Crafting Spaces with Pride
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </header>
    );
}