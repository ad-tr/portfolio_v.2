"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Close mobile menu when clicking on a link
    const handleLinkClick = () => {
        setMobileMenuOpen(false);
    };

    return (
        <>
            <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 pointer-events-none flex justify-center pt-6 px-4`}>
                <div className={`pointer-events-auto transition-all duration-500 rounded-full border bg-black/60 backdrop-blur-xl border-white/20 shadow-2xl py-3 px-6 sm:px-8`}>
                    <div className="flex items-center gap-6 sm:gap-8 md:gap-12">

                        {/* Branding */}
                        <Link href="/" className="group relative">
                            <span className="font-chakra-petch font-bold text-white tracking-widest text-base sm:text-lg md:text-xl">
                                tranchant.ai
                            </span>
                        </Link>

                        {/* Navigation Links - Desktop */}
                        <div className="hidden md:flex items-center gap-6">
                            {['PROJECTS', 'EXPERIENCE', 'SKILLS', 'ABOUT', 'CONTACT'].map((item) => (
                                <Link
                                    key={item}
                                    href={`/#${item.toLowerCase()}`}
                                    className="relative group"
                                >
                                    <span className="font-mono text-xs font-bold text-gray-400 group-hover:text-white transition-colors duration-300 tracking-[0.15em] uppercase">
                                        {item}
                                    </span>
                                    <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-blue-400 scale-0 group-hover:scale-100 transition-all duration-300"></div>
                                </Link>
                            ))}
                        </div>

                        {/* Mobile Menu Icon */}
                        <button
                            className="md:hidden text-white cursor-pointer p-2 hover:bg-white/10 rounded transition-colors"
                            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                            aria-label="Toggle mobile menu"
                        >
                            <div className="space-y-1.5">
                                <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${mobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
                                <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${mobileMenuOpen ? 'opacity-0' : ''}`}></span>
                                <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${mobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
                            </div>
                        </button>
                    </div>
                </div>
            </nav>

            {/* Mobile Menu Overlay */}
            <div className={`fixed inset-0 z-40 md:hidden transition-all duration-500 ${mobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}>
                {/* Backdrop */}
                <div
                    className="absolute inset-0 bg-black/95 backdrop-blur-xl"
                    onClick={() => setMobileMenuOpen(false)}
                ></div>

                {/* Menu Content */}
                <div className="relative h-full flex flex-col items-center justify-center gap-8 p-8">
                    {['PROJECTS', 'EXPERIENCE', 'SKILLS', 'ABOUT', 'CONTACT'].map((item, index) => (
                        <Link
                            key={item}
                            href={`/#${item.toLowerCase()}`}
                            onClick={handleLinkClick}
                            className="group relative"
                            style={{
                                animation: mobileMenuOpen ? `slideIn 0.5s ease-out ${index * 0.1}s both` : 'none'
                            }}
                        >
                            <span className="font-mono text-2xl font-bold text-gray-400 group-hover:text-white transition-colors duration-300 tracking-[0.15em] uppercase">
                                {item}
                            </span>
                            <div className="absolute -bottom-2 left-0 right-0 h-0.5 bg-blue-400 scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
                        </Link>
                    ))}
                </div>
            </div>

            {/* Animation keyframes */}
            <style jsx>{`
                @keyframes slideIn {
                    from {
                        opacity: 0;
                        transform: translateY(20px);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }
            `}</style>
        </>
    );
}
