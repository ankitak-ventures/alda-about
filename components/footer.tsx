"use client";

import React from "react";

import Link from "next/link";
import Image from "next/image";

export default function Footer() {
    return (
        <footer className="w-full bg-[#11141c] text-slate-300 border-t border-slate-800">
            {/* Main Footer Content */}
            <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-16 sm:py-20">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 items-start">

                    {/* Column 1: Brand & Contact Info (Left - 5 columns) */}
                    <div className="lg:col-span-5 space-y-6">
                        {/* ALDA Official Brand Logo matching live site */}
                        <Link href="/" aria-label="ALDA home" className="inline-block group">
                            <span className="inline-flex items-center transition-all duration-300 rounded-lg bg-white px-3 py-2 shadow-sm border border-slate-200/80 group-hover:shadow-md">
                                <Image
                                    src="/brand/alda-logo.png"
                                    alt="ALDA — Crafting Spaces"
                                    width={160}
                                    height={50}
                                    className="h-10 md:h-11 w-auto object-contain"
                                />
                            </span>
                        </Link>

                        {/* Company Tagline Description */}
                        <p className="text-xs sm:text-sm text-white leading-relaxed max-w-sm">
                            A Chennai-based contractor and real estate development brand bringing construction expertise and a long-standing family legacy together under one name.
                        </p>

                        {/* Contact Details List */}
                        <div className="space-y-3.5 pt-2">
                            {/* Address */}
                            <div className="flex items-start gap-3 text-xs sm:text-sm text-white">
                                <div className="w-5 h-5 text-[#f17829] flex-shrink-0 mt-0.5">
                                    <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                    </svg>
                                </div>
                                <span className="leading-relaxed">
                                    No. 72, 28th Cross Street, Indira Nagar,<br className="hidden sm:inline" />
                                    {" "}Adyar, Chennai, Tamil Nadu – 600020, India
                                </span>
                            </div>

                            {/* Phone */}
                            <div>
                                <a
                                    href="tel:+918939960009"
                                    className="inline-flex items-center gap-3 text-xs sm:text-sm text-white hover:text-[#f17829] transition-colors"
                                >
                                    <div className="w-5 h-5 text-[#f17829] flex-shrink-0">
                                        <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                        </svg>
                                    </div>
                                    <span>+91 89399 60009</span>
                                </a>
                            </div>

                            {/* Email */}
                            <div>
                                <a
                                    href="mailto:info@aldaglobal.com"
                                    className="inline-flex items-center gap-3 text-xs sm:text-sm text-slate-300 hover:text-[#f17829] transition-colors"
                                >
                                    <div className="w-5 h-5 text-[#f17829] flex-shrink-0">
                                        <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                        </svg>
                                    </div>
                                    <span>info@aldaglobal.com</span>
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Column 2: COMPANY */}
                    <div className="lg:col-span-2 sm:pl-4">
                        <h3 className="text-xs font-bold uppercase tracking-[0.25em] text-[#f17829] mb-5">
                            Company
                        </h3>
                        <ul className="space-y-3 text-xs sm:text-sm text-white">
                            <li>
                                <a href="#about" className="hover:text-white transition-colors">
                                    About ALDA
                                </a>
                            </li>
                            <li>
                                <a href="#story" className="hover:text-white transition-colors">
                                    Our Story &amp; Legacy
                                </a>
                            </li>
                            <li>
                                <a href="#team" className="hover:text-white transition-colors">
                                    Our Team
                                </a>
                            </li>
                            <li>
                                <a href="#careers" className="hover:text-white transition-colors">
                                    Careers
                                </a>
                            </li>
                            <li>
                                <a href="#awards" className="hover:text-white transition-colors">
                                    Awards &amp; Recognition
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Column 3: WHAT WE DO */}
                    <div className="lg:col-span-3">
                        <h3 className="text-xs font-bold uppercase tracking-[0.25em] text-[#f17829] mb-5">
                            What We Do
                        </h3>
                        <ul className="space-y-3 text-xs sm:text-sm text-white">
                            <li>
                                <a href="#contracting" className="hover:text-white transition-colors">
                                    Contracting
                                </a>
                            </li>
                            <li>
                                <a href="#development" className="hover:text-white transition-colors">
                                    Real Estate Development
                                </a>
                            </li>
                            <li>
                                <a href="#projects" className="hover:text-white transition-colors">
                                    All Projects
                                </a>
                            </li>
                            <li>
                                <a href="#upcoming" className="hover:text-white transition-colors">
                                    Upcoming Projects
                                </a>
                            </li>
                            <li>
                                <a href="#locations" className="hover:text-white transition-colors">
                                    Locations
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Column 4: CONNECT */}
                    <div className="lg:col-span-2">
                        <h3 className="text-xs font-bold uppercase tracking-[0.25em] text-[#f17829] mb-5">
                            Connect
                        </h3>
                        <ul className="space-y-3 text-xs sm:text-sm text-white">
                            <li>
                                <a href="#nri" className="hover:text-white transition-colors">
                                    NRI Enquiries
                                </a>
                            </li>
                            <li>
                                <a href="#insights" className="hover:text-white transition-colors">
                                    Insights
                                </a>
                            </li>
                            <li>
                                <a href="#testimonials" className="hover:text-white transition-colors">
                                    Testimonials
                                </a>
                            </li>
                            <li>
                                <a href="#contact" className="hover:text-white transition-colors">
                                    Contact Us
                                </a>
                            </li>
                        </ul>
                    </div>

                </div>
            </div>

            {/* Bottom Copyright Bar */}
            <div className="border-t border-slate-800/80 bg-[#0c0e14] py-5">
                <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
                    <p>
                        {"©"} {new Date().getFullYear()} <span className="text-slate-400 font-medium">ALDA</span>. All rights reserved.
                    </p>
                    <div className="flex items-center gap-6">
                        <a href="#privacy" className="hover:text-slate-400 transition-colors">
                            Privacy Policy
                        </a>
                        <span>•</span>
                        <a href="#terms" className="hover:text-slate-400 transition-colors">
                            Terms of Service
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
