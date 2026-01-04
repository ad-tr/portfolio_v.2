"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 pointer-events-none flex justify-center pt-6`}>
            <div className={`pointer-events-auto transition-all duration-500 rounded-full border bg-black/60 backdrop-blur-xl border-white/20 shadow-2xl py-3 px-8`}>
                <div className="flex items-center gap-8 md:gap-12">

                    {/* Branding */}
                    <Link href="/" className="group relative">
                        <span className="font-chakra-petch font-bold text-white tracking-widest text-lg md:text-xl">
                            TRANCHANT.AI
                        </span>
                        <div className="absolute -bottom-1 left-0 w-0 h-px bg-orange-400 group-hover:w-full transition-all duration-300"></div>
                    </Link>

                    {/* Navigation Links */}
                    <div className="hidden md:flex items-center gap-6">
                        {['PROJECTS', 'EXPERIENCE', 'SKILLS', 'ABOUT', 'CONTACT'].map((item) => (
                            <Link
                                key={item}
                                href={`#${item.toLowerCase()}`}
                                className="relative group"
                            >
                                <span className="font-mono text-xs font-bold text-gray-400 group-hover:text-white transition-colors duration-300 tracking-[0.15em] uppercase">
                                    {item}
                                </span>
                                <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-orange-500 scale-0 group-hover:scale-100 transition-all duration-300"></div>
                            </Link>
                        ))}
                    </div>

                    {/* Mobile Menu Icon (Simple placeholder) */}
                    <div className="md:hidden text-white cursor-pointer">
                        <div className="space-y-1.5">
                            <span className="block w-6 h-0.5 bg-white"></span>
                            <span className="block w-6 h-0.5 bg-white"></span>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
}
