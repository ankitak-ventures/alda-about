"use client";

import { useEffect, useRef, useState } from "react";

export default function ContactForm() {
    const sectionRef = useRef<HTMLElement>(null);
    const [isVisible, setIsVisible] = useState(false);
    const [submitted, setSubmitted] = useState(false);
    const [agreed, setAgreed] = useState(true);
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        message: "",
    });

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                }
            },
            {
                threshold: 0.15,
                rootMargin: "0px 0px -40px 0px",
            }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => observer.disconnect();
    }, []);

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Client-side demo interaction (no database / email yet)
        setSubmitted(true);
    };

    return (
        <section
            id="contact-form"
            ref={sectionRef}
            aria-label="Contact and Enquiry Form"
            className="relative w-full bg-white text-[#0B1528] py-14 sm:py-18 md:py-24 px-4 sm:px-6 lg:px-8 overflow-hidden"
        >
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
                    {/* =========================================================================
                        LEFT SIDE: High-Impact Heading & Introductory Content
                       ========================================================================= */}
                    <div
                        className={`lg:col-span-5 space-y-5 transition-all duration-700 ease-out transform ${
                            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
                        }`}
                    >
                        {/* Eyebrow badge */}
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#f17829]/10 border border-[#f17829]/30 text-[#f17829] text-[11px] font-bold uppercase tracking-[0.2em]">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#f17829] animate-pulse" />
                            <span>REACH OUT</span>
                        </div>

                        {/* Bold Prominent Heading */}
                        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[42px] font-black text-[#0B1528] tracking-tight leading-[1.15]">
                            Connect with Us,
                            <br />
                            <span className="text-[#f17829]">Anytime, Anywhere.</span>
                        </h2>

                        {/* Subtitle / Description */}
                        <p className="text-sm sm:text-base text-slate-600 font-normal leading-relaxed max-w-md pt-1">
                            Fill out the form, and we’ll be in touch shortly to help you find your perfect home.
                        </p>

                        {/* Quick Trust Highlights */}
                        <div className="pt-6 border-t border-slate-100 space-y-3">
                            <div className="flex items-center gap-3 text-xs sm:text-sm text-slate-700 font-medium">
                                <span className="flex-shrink-0 w-5 h-5 rounded-full bg-[#f17829]/15 text-[#f17829] flex items-center justify-center">
                                    <svg className="w-3 h-3 stroke-[2.5]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                                    </svg>
                                </span>
                                <span>Dedicated Property Advisory Support</span>
                            </div>
                            <div className="flex items-center gap-3 text-xs sm:text-sm text-slate-700 font-medium">
                                <span className="flex-shrink-0 w-5 h-5 rounded-full bg-[#f17829]/15 text-[#f17829] flex items-center justify-center">
                                    <svg className="w-3 h-3 stroke-[2.5]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                                    </svg>
                                </span>
                                <span>Fast Response Within 24 Business Hours</span>
                            </div>
                            <div className="flex items-center gap-3 text-xs sm:text-sm text-slate-700 font-medium">
                                <span className="flex-shrink-0 w-5 h-5 rounded-full bg-[#f17829]/15 text-[#f17829] flex items-center justify-center">
                                    <svg className="w-3 h-3 stroke-[2.5]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                                    </svg>
                                </span>
                                <span>100% Privacy Guaranteed</span>
                            </div>
                        </div>
                    </div>

                    {/* =========================================================================
                        RIGHT SIDE: Structured Real Estate Grid Form (Inspired by DRA)
                       ========================================================================= */}
                    <div
                        className={`lg:col-span-7 transition-all duration-700 delay-150 ease-out transform ${
                            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                        }`}
                    >
                        {submitted ? (
                            <div className="border border-slate-200 p-8 sm:p-12 text-center space-y-4 bg-slate-50/50 rounded-sm">
                                <div className="w-14 h-14 rounded-full bg-emerald-50 text-emerald-600 border border-emerald-200 flex items-center justify-center mx-auto mb-2">
                                    <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7" />
                                    </svg>
                                </div>
                                <h3 className="text-2xl font-bold text-[#0B1528]">
                                    Thank You for Your Enquiry!
                                </h3>
                                <p className="text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
                                    We have received your details. An ALDA representative will get in touch with you shortly.
                                </p>
                                <div className="pt-3">
                                    <button
                                        type="button"
                                        onClick={() => {
                                            setSubmitted(false);
                                            setFormData({ name: "", email: "", phone: "", message: "" });
                                        }}
                                        className="px-6 py-2.5 text-xs font-bold uppercase tracking-wider text-white bg-[#f17829] hover:bg-[#d9671e] transition-colors cursor-pointer"
                                    >
                                        Submit Another Enquiry
                                    </button>
                                </div>
                            </div>
                        ) : (
                            <form onSubmit={handleSubmit} className="space-y-5">
                                {/* Grid Fields Box with Yellow/Orange Dividers */}
                                <div className="border border-slate-300 bg-white">
                                    {/* 1. Name Row (Full Width) */}
                                    <div className="border-b-2 border-[#f17829] flex items-center px-4 sm:px-6 py-3.5 bg-white">
                                        <label
                                            htmlFor="name"
                                            className="w-20 sm:w-24 text-xs sm:text-sm font-bold text-[#0B1528] shrink-0"
                                        >
                                            Name
                                        </label>
                                        <input
                                            type="text"
                                            id="name"
                                            name="name"
                                            required
                                            value={formData.name}
                                            onChange={handleChange}
                                            placeholder="Name"
                                            className="w-full text-xs sm:text-sm text-[#0B1528] placeholder:text-slate-400 bg-transparent focus:outline-none"
                                        />
                                    </div>

                                    {/* 2. Email & Phone Row (Two Columns) */}
                                    <div className="border-b-2 border-[#f17829] grid grid-cols-1 sm:grid-cols-2 bg-white">
                                        {/* Email Cell */}
                                        <div className="flex items-center px-4 sm:px-6 py-3.5 sm:border-r border-slate-300 border-b sm:border-b-0 border-[#f17829]">
                                            <label
                                                htmlFor="email"
                                                className="w-16 sm:w-20 text-xs sm:text-sm font-bold text-[#0B1528] shrink-0"
                                            >
                                                Email
                                            </label>
                                            <input
                                                type="email"
                                                id="email"
                                                name="email"
                                                required
                                                value={formData.email}
                                                onChange={handleChange}
                                                placeholder="Email"
                                                className="w-full text-xs sm:text-sm text-[#0B1528] placeholder:text-slate-400 bg-transparent focus:outline-none"
                                            />
                                        </div>

                                        {/* Phone Cell */}
                                        <div className="flex items-center px-4 sm:px-6 py-3.5 gap-2">
                                            <label
                                                htmlFor="phone"
                                                className="text-xs sm:text-sm font-bold text-[#0B1528] shrink-0"
                                            >
                                                Phone
                                            </label>
                                            {/* Flag / Country Indicator */}
                                            <div className="flex items-center gap-1 text-xs text-slate-500 font-medium px-1 shrink-0">
                                                <span>🇮🇳</span>
                                                <svg className="w-3 h-3 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                                                </svg>
                                            </div>
                                            <input
                                                type="tel"
                                                id="phone"
                                                name="phone"
                                                required
                                                value={formData.phone}
                                                onChange={handleChange}
                                                placeholder="Phone"
                                                className="w-full text-xs sm:text-sm text-[#0B1528] placeholder:text-slate-400 bg-transparent focus:outline-none"
                                            />
                                        </div>
                                    </div>

                                    {/* 3. Message Row */}
                                    <div className="flex items-start px-4 sm:px-6 py-3.5 bg-white">
                                        <label
                                            htmlFor="message"
                                            className="w-20 sm:w-24 text-xs sm:text-sm font-bold text-[#0B1528] shrink-0 pt-0.5"
                                        >
                                            Message
                                        </label>
                                        <textarea
                                            id="message"
                                            name="message"
                                            required
                                            rows={3}
                                            value={formData.message}
                                            onChange={handleChange}
                                            placeholder="Write your requirements or questions here..."
                                            className="w-full text-xs sm:text-sm text-[#0B1528] placeholder:text-slate-400 bg-transparent focus:outline-none resize-none"
                                        />
                                    </div>
                                </div>

                                {/* 4. Disclaimer / Authorization Box */}
                                <div className="border border-slate-300 p-3.5 sm:p-4 bg-white text-[11px] sm:text-xs text-slate-600 leading-relaxed space-y-2">
                                    <p>
                                        I authorize ALDA and its representatives to call, SMS, RCS, email, or WhatsApp me about its products and offers. This consent overrides any registration for DNC/NDNC.
                                    </p>
                                    <label className="flex items-center gap-2 cursor-pointer select-none text-slate-800 font-medium pt-1">
                                        <input
                                            type="checkbox"
                                            checked={agreed}
                                            onChange={(e) => setAgreed(e.target.checked)}
                                            required
                                            className="w-4 h-4 text-[#f17829] border-slate-300 rounded focus:ring-[#f17829] cursor-pointer accent-[#f17829]"
                                        />
                                        <span>I Agree</span>
                                    </label>
                                </div>

                                {/* 5. Submit Button */}
                                <div>
                                    <button
                                        type="submit"
                                        disabled={!agreed}
                                        className="px-10 py-3 text-xs sm:text-sm font-bold tracking-widest uppercase text-white bg-[#f17829] hover:bg-[#d9671e] disabled:opacity-50 disabled:cursor-not-allowed shadow-md shadow-[#f17829]/20 transition-all duration-200 cursor-pointer"
                                    >
                                        SUBMIT
                                    </button>
                                </div>
                            </form>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
}
