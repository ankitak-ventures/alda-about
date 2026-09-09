"use client";

import { useState } from "react";

export default function About() {
    // State to track the currently selected tab
    const [activeTab, setActiveTab] = useState("PROFILE");

    // Tab options matching the reference
    const tabs = [
        { id: "PROFILE", label: "PROFILE" },
        { id: "TEAM", label: "TEAM" },
        { id: "VALUES", label: "OUR TEAM, OUR PRIDE" },
        { id: "AWARDS", label: "AWARDS & RECOGNITION" },
    ];

    return (
        <section className="pt-16 md:pt-24 pb-8 md:pb-12 bg-white text-slate-900">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* =========================================
            1. SEGMENTED TAB NAVIGATION (Centered Top)
           ========================================= */}
                <div className="flex justify-center mb-12 sm:mb-16">
                    <div className="inline-flex flex-wrap items-center justify-center border border-gray-300 rounded-lg overflow-hidden bg-white shadow-xs divide-x divide-gray-200">
                        {tabs.map((tab) => (
                            <button
                                key={tab.id}
                                type="button"
                                onClick={() => setActiveTab(tab.id)}
                                className={`px-4 sm:px-6 py-2.5 sm:py-3 text-xs sm:text-xs font-bold tracking-wider uppercase transition-all duration-200 cursor-pointer ${activeTab === tab.id
                                    ? "bg-amber-500 text-slate-950 shadow-inner"
                                    : "text-gray-700 hover:text-black hover:bg-gray-50"
                                    }`}
                            >
                                {tab.label}
                            </button>
                        ))}
                    </div>
                </div>

                {/* =========================================
            2. TAB CONTENT: PROFILE (Main Showcase)
           ========================================= */}
                {activeTab === "PROFILE" && (
                    <div className="max-w-4xl mx-auto text-center space-y-8 sm:space-y-10">
                        {/* Title Centered Directly Under Tab */}
                        <h2 className="text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight leading-[1.15]">
                            <span className="text-[#f5a623]">From Vision to </span>
                            <span className="text-slate-950">Reality,</span>
                            <span className="block text-slate-950 mt-1">Built with Pride</span>
                        </h2>

                        {/* Content Centered Directly Under Title */}
                        <p className="text-sm sm:text-base md:text-base text-gray-700 leading-relaxed font-normal">
                            With over 40 years of expertise, ALDA Homes has established itself as a trusted name in
                            real estate, shaping over 10 million square feet into vibrant communities and delighting
                            more than 12,000 happy customers, supported by 1,357+ quality checks that ensure
                            uncompromised standards at every stage. Each project reflects a passion for excellence and
                            precision, inspiring pride in homeowners. ALDA&rsquo;s unwavering commitment to customer
                            satisfaction is exemplified through its unique Customer Delightmeter, designed to enhance
                            happiness at every milestone, ensuring that homeownership is a deeply rewarding experience.
                        </p>

                        {/* Standout Quote Centered Below Content (Clean text, no box) */}
                        <p className="text-base sm:text-lg md:text-xl font-bold text-slate-900 leading-relaxed tracking-tight max-w-3xl mx-auto">
                            Pride is more than an emotion here; it&rsquo;s the foundation of ALDA&rsquo;s success,
                            reflected in every detail and every connection with our valued homeowners.
                        </p>
                    </div>
                )}

                {/* =========================================
            3. TAB CONTENT: TEAM
           ========================================= */}
                {activeTab === "TEAM" && (
                    <div className="max-w-4xl mx-auto text-center space-y-8 sm:space-y-10">
                        <h2 className="text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight leading-[1.15]">
                            <span className="text-[#f5a623]">The Minds Behind </span>
                            <span className="text-slate-950">ALDA Homes</span>
                        </h2>
                        <p className="text-sm sm:text-base md:text-base text-gray-700 leading-relaxed font-normal">
                            Guided by four decades of construction leadership, our executive team brings together
                            senior civil engineers, master architects, and customer success specialists committed to
                            delivering benchmark quality across Chennai.
                        </p>
                        <p className="text-base sm:text-lg md:text-xl font-bold text-slate-900 leading-relaxed tracking-tight max-w-3xl mx-auto">
                            Engineered by experts, built with unwavering dedication, and delivered with genuine pride.
                        </p>
                    </div>
                )}

                {/* =========================================
            4. TAB CONTENT: OUR VALUES & PRIDE
           ========================================= */}
                {activeTab === "VALUES" && (
                    <div className="max-w-4xl mx-auto text-center space-y-8 sm:space-y-10">
                        <h2 className="text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight leading-[1.15]">
                            <span className="text-[#f5a623]">Our Principles, </span>
                            <span className="text-slate-950">Built on Pride</span>
                        </h2>
                        <p className="text-sm sm:text-base md:text-base text-gray-700 leading-relaxed font-normal">
                            Pride is embedded in every foundation we lay. It inspires us to be transparent in our
                            dealings, relentless about material quality, and deeply accountable to every family we welcome
                            home.
                        </p>
                        <p className="text-base sm:text-lg md:text-xl font-bold text-slate-900 leading-relaxed tracking-tight max-w-3xl mx-auto">
                            Uncompromising standards, ethical business conduct, and lifetime customer trust.
                        </p>
                    </div>
                )}

                {/* =========================================
            5. TAB CONTENT: AWARDS & RECOGNITION
           ========================================= */}
                {activeTab === "AWARDS" && (
                    <div className="max-w-4xl mx-auto text-center space-y-8 sm:space-y-10">
                        <h2 className="text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight leading-[1.15]">
                            <span className="text-[#f5a623]">Honored with </span>
                            <span className="text-slate-950">Excellence</span>
                        </h2>
                        <p className="text-sm sm:text-base md:text-base text-gray-700 leading-relaxed font-normal">
                            Recognized with prestigious regional and national real estate honors for punctual delivery,
                            superior architectural integrity, and exceptional customer delight across four decades.
                        </p>
                        <p className="text-base sm:text-lg md:text-xl font-bold text-slate-900 leading-relaxed tracking-tight max-w-3xl mx-auto">
                            Over 35+ industry recognitions celebrating benchmark residential achievements.
                        </p>
                    </div>
                )}

                {/* Floating "ENQUIRE NOW" side tab matching the reference */}


            </div>
        </section>
    );
}
