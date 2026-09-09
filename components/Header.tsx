"use client";

import { useState } from "react";
import Link from "next/link";

// Type definitions for navigation items
interface SubItem {
    name: string;
    description: string;
}

interface NavItem {
    name: string;
    subItems?: SubItem[];
}

export default function Header() {
    // State for mobile menu open/closed toggle
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    // State to track which accordion dropdown is currently open on mobile
    const [openMobileDropdown, setOpenMobileDropdown] = useState<string | null>(null);

    // Navigation structure with titles and descriptions (no routing links)
    const navLinks: NavItem[] = [
        { name: "Home" },
        {
            name: "About Us",
            subItems: [
                {
                    name: "About ALDA",
                    description: "Experience that builds trust",
                },
                {
                    name: "Our Story & Legacy",
                    description: "A rich journey of craftsmanship",
                },
                {
                    name: "Our Team",
                    description: "The visionary people behind ALDA",
                },
                {
                    name: "Awards & Recognition",
                    description: "Honoring our construction excellence",
                },
                {
                    name: "Customer Testimonials",
                    description: "Trust built across generations",
                },
            ],
        },
        {
            name: "What We Do",
            subItems: [
                {
                    name: "Overview",
                    description: "One integrated ALDA approach",
                },
                {
                    name: "Contracting",
                    description: "Turnkey residential & commercial construction",
                },
                {
                    name: "Real Estate Development",
                    description: "Creating homes with enduring value",
                },
            ],
        },
        {
            name: "Projects",
            subItems: [
                {
                    name: "All Projects",
                    description: "Explore our completed & active developments",
                },
                {
                    name: "Upcoming Projects",
                    description: "The next chapter of landmark living",
                },
            ],
        },
        { name: "Locations" },
        { name: "NRI" },
        { name: "Insights" },
        { name: "Contact" },
    ];

    // Toggle mobile accordion for submenus
    const toggleMobileDropdown = (name: string) => {
        setOpenMobileDropdown(openMobileDropdown === name ? null : name);
    };

    return (
        <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-100 shadow-xs">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-20">

                    {/* =========================================
              1. BRAND LOGO (ALDA)
             ========================================= */}
                    <div className="flex-shrink-0">
                        <Link href="/" className="flex items-center gap-3 group">
                            {/* Architectural badge icon */}
                            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-amber-500 to-amber-700 flex items-center justify-center text-white shadow-sm group-hover:scale-105 group-hover:shadow-amber-500/25 transition-all duration-200">
                                <svg
                                    className="w-5 h-5"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                                    />
                                </svg>
                            </div>

                            {/* Brand Typography */}
                            <div className="flex flex-col">
                                <span className="text-xl font-bold tracking-tight text-gray-900 group-hover:text-amber-600 transition-colors">
                                    ALDA
                                </span>
                                <span className="text-[10px] tracking-widest text-gray-400 font-semibold uppercase -mt-0.5">
                                    Crafting Spaces
                                </span>
                            </div>
                        </Link>
                    </div>

                    {/* =========================================
              2. DESKTOP NAVIGATION & HOVER DROPDOWNS (No Links)
             ========================================= */}
                    <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
                        {navLinks.map((link) => (
                            <div key={link.name} className="relative group">
                                {link.subItems ? (
                                    <>
                                        {/* Dropdown Menu Header with Plus (+) Indicator */}
                                        <button
                                            type="button"
                                            className="flex items-center gap-1.5 px-3.5 py-2 rounded-full text-sm font-medium text-gray-700 hover:text-amber-600 hover:bg-amber-50/50 transition-colors focus:outline-none cursor-pointer"
                                        >
                                            <span>{link.name}</span>
                                            {/* Rotating plus badge indicator */}
                                            <span className="w-4 h-4 rounded-full bg-amber-50 text-amber-600 flex items-center justify-center group-hover:bg-amber-100 transition-colors">
                                                <svg
                                                    className="w-2.5 h-2.5 transition-transform duration-300 group-hover:rotate-45"
                                                    fill="none"
                                                    stroke="currentColor"
                                                    viewBox="0 0 24 24"
                                                >
                                                    <path
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        strokeWidth="2.5"
                                                        d="M12 4v16m8-8H4"
                                                    />
                                                </svg>
                                            </span>
                                        </button>

                                        {/* Redesigned Floating Submenu Card */}
                                        <div className="invisible opacity-0 translate-y-2 group-hover:visible group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-200 absolute left-1/2 -translate-x-1/2 top-full pt-2 w-[22rem] z-50">
                                            <div className="bg-white rounded-2xl border border-gray-100/90 shadow-2xl shadow-amber-950/10 p-3 space-y-1.5">
                                                {/* Amber accent line */}
                                                <div className="h-0.5 w-10 bg-amber-500 rounded-full mb-2 ml-1"></div>

                                                {link.subItems.map((sub) => (
                                                    <button
                                                        type="button"
                                                        key={sub.name}
                                                        className="group/item flex items-start gap-3 w-full text-left p-2.5 rounded-xl hover:bg-amber-50/70 border border-transparent hover:border-amber-100 transition-all duration-200 cursor-pointer"
                                                    >
                                                        {/* Visual indicator badge */}
                                                        <div className="w-8 h-8 rounded-lg bg-amber-50/80 group-hover/item:bg-amber-600 text-amber-600 group-hover/item:text-white flex items-center justify-center shrink-0 mt-0.5 transition-colors duration-200">
                                                            <span className="w-1.5 h-1.5 rounded-full bg-current"></span>
                                                        </div>

                                                        <div className="flex-1 min-w-0">
                                                            <div className="flex items-center justify-between">
                                                                <span className="block text-sm font-semibold text-gray-900 group-hover/item:text-amber-700 transition-colors">
                                                                    {sub.name}
                                                                </span>
                                                                {/* Up-right slide-in arrow */}
                                                                <svg
                                                                    className="w-3.5 h-3.5 text-amber-600 opacity-0 -translate-x-1 group-hover/item:opacity-100 group-hover/item:translate-x-0 transition-all duration-200 shrink-0 ml-1.5"
                                                                    fill="none"
                                                                    stroke="currentColor"
                                                                    viewBox="0 0 24 24"
                                                                >
                                                                    <path
                                                                        strokeLinecap="round"
                                                                        strokeLinejoin="round"
                                                                        strokeWidth="2"
                                                                        d="M7 17L17 7M17 7H7M17 7V17"
                                                                    />
                                                                </svg>
                                                            </div>
                                                            <span className="block text-xs text-gray-500 group-hover/item:text-gray-600 mt-0.5 leading-snug">
                                                                {sub.description}
                                                            </span>
                                                        </div>
                                                    </button>
                                                ))}
                                            </div>
                                        </div>
                                    </>
                                ) : (
                                    <button
                                        type="button"
                                        className="block px-3.5 py-2 rounded-full text-sm font-medium text-gray-700 hover:text-amber-600 hover:bg-amber-50/50 transition-colors cursor-pointer"
                                    >
                                        {link.name}
                                    </button>
                                )}
                            </div>
                        ))}
                    </nav>

                    {/* =========================================
              3. CALL TO ACTION BUTTON (Desktop)
             ========================================= */}
                    <div className="hidden lg:flex items-center shrink-0">
                        <button
                            type="button"
                            className="group inline-flex items-center gap-3 pl-5 pr-2 py-2 rounded-full text-xs font-semibold tracking-wide text-white bg-slate-900 hover:bg-black border border-slate-800 shadow-md hover:shadow-xl hover:shadow-amber-500/10 transition-all duration-300 hover:scale-105 active:scale-95 cursor-pointer"
                        >
                            <span>Enquire Now</span>
                            {/* Embedded amber badge with rotating arrow */}
                            <span className="w-7 h-7 rounded-full bg-amber-500 text-slate-950 flex items-center justify-center group-hover:bg-amber-400 group-hover:rotate-45 transition-all duration-300 shadow-xs">
                                <svg
                                    className="w-3.5 h-3.5 stroke-[2.5]"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M7 17L17 7M17 7H7M17 7V17"
                                    />
                                </svg>
                            </span>
                        </button>
                    </div>

                    {/* =========================================
              4. MOBILE MENU BUTTON (Hamburger/Close)
             ========================================= */}
                    <div className="flex lg:hidden items-center gap-2">
                        {/* Compact CTA for mobile header */}
                        <button
                            type="button"
                            className="inline-flex sm:hidden items-center gap-1.5 pl-3 pr-1.5 py-1.5 rounded-full text-xs font-semibold text-white bg-slate-900 hover:bg-black border border-slate-800 transition-colors cursor-pointer"
                        >
                            <span>Enquire</span>
                            <span className="w-5 h-5 rounded-full bg-amber-500 text-slate-950 flex items-center justify-center">
                                <svg className="w-2.5 h-2.5 stroke-[2.5]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M7 17L17 7M17 7H7M17 7V17" />
                                </svg>
                            </span>
                        </button>

                        <button
                            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                            type="button"
                            className="p-2 rounded-xl text-gray-600 hover:text-gray-900 hover:bg-gray-100 focus:outline-none transition-colors cursor-pointer"
                            aria-label="Toggle navigation menu"
                            aria-expanded={mobileMenuOpen}
                        >
                            {mobileMenuOpen ? (
                                // Close (X) Icon
                                <svg
                                    className="w-6 h-6"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M6 18L18 6M6 6l12 12"
                                    />
                                </svg>
                            ) : (
                                // Hamburger Icon
                                <svg
                                    className="w-6 h-6"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M4 6h16M4 12h16M4 18h16"
                                    />
                                </svg>
                            )}
                        </button>
                    </div>

                </div>
            </div>

            {/* =========================================
          5. MOBILE ACCORDION DRAWER (No Links)
         ========================================= */}
            {mobileMenuOpen && (
                <div className="lg:hidden border-t border-gray-100 bg-white px-4 pt-3 pb-6 space-y-3 max-h-[85vh] overflow-y-auto shadow-xl">
                    <nav className="flex flex-col space-y-1">
                        {navLinks.map((link) => (
                            <div key={link.name} className="border-b border-gray-50 last:border-0 pb-1">
                                {link.subItems ? (
                                    <div>
                                        {/* Accordion header button with Plus (+) indicator */}
                                        <button
                                            type="button"
                                            onClick={() => toggleMobileDropdown(link.name)}
                                            className="flex items-center justify-between w-full px-3.5 py-2.5 text-sm font-semibold text-gray-800 hover:text-amber-600 hover:bg-amber-50/50 rounded-xl transition-colors cursor-pointer"
                                        >
                                            <span>{link.name}</span>
                                            <span className={`w-5 h-5 rounded-full flex items-center justify-center transition-all duration-200 ${openMobileDropdown === link.name ? "bg-amber-100 text-amber-600" : "bg-gray-100 text-gray-500"
                                                }`}>
                                                <svg
                                                    className={`w-3 h-3 transition-transform duration-300 ${openMobileDropdown === link.name ? "rotate-45" : ""
                                                        }`}
                                                    fill="none"
                                                    stroke="currentColor"
                                                    viewBox="0 0 24 24"
                                                >
                                                    <path
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        strokeWidth="2.5"
                                                        d="M12 4v16m8-8H4"
                                                    />
                                                </svg>
                                            </span>
                                        </button>

                                        {/* Accordion expanded sub-items */}
                                        {openMobileDropdown === link.name && (
                                            <div className="pl-3 pr-2 py-2 space-y-1.5 bg-amber-50/40 border border-amber-100/60 rounded-xl mt-1">
                                                {link.subItems.map((sub) => (
                                                    <button
                                                        type="button"
                                                        key={sub.name}
                                                        onClick={() => setMobileMenuOpen(false)}
                                                        className="flex items-start gap-2.5 w-full text-left p-2 rounded-lg text-xs hover:bg-white hover:text-amber-600 transition-colors cursor-pointer"
                                                    >
                                                        <span className="w-1.5 h-1.5 rounded-full bg-amber-500 mt-1.5 shrink-0"></span>
                                                        <div>
                                                            <span className="block font-semibold text-gray-800">
                                                                {sub.name}
                                                            </span>
                                                            <span className="block text-[11px] text-gray-500 mt-0.5">
                                                                {sub.description}
                                                            </span>
                                                        </div>
                                                    </button>
                                                ))}
                                            </div>
                                        )}
                                    </div>
                                ) : (
                                    <button
                                        type="button"
                                        onClick={() => setMobileMenuOpen(false)}
                                        className="block w-full text-left px-3.5 py-2.5 text-sm font-semibold text-gray-800 hover:text-amber-600 hover:bg-amber-50/50 rounded-xl transition-colors cursor-pointer"
                                    >
                                        {link.name}
                                    </button>
                                )}
                            </div>
                        ))}
                    </nav>

                    {/* Mobile Enquire Now CTA */}
                    <div className="pt-2">
                        <button
                            type="button"
                            onClick={() => setMobileMenuOpen(false)}
                            className="group flex items-center justify-between w-full pl-6 pr-3 py-3 rounded-full text-sm font-semibold text-white bg-slate-900 hover:bg-black border border-slate-800 shadow-md transition-all duration-300 cursor-pointer"
                        >
                            <span className="tracking-wide">Enquire Now</span>
                            <span className="w-8 h-8 rounded-full bg-amber-500 text-slate-950 flex items-center justify-center group-hover:bg-amber-400 group-hover:rotate-45 transition-all duration-300 shadow-xs">
                                <svg
                                    className="w-4 h-4 stroke-[2.5]"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M7 17L17 7M17 7H7M17 7V17"
                                    />
                                </svg>
                            </span>
                        </button>
                    </div>
                </div>
            )}
        </header>
    );
}