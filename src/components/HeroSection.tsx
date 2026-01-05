"use client";

import Image from "next/image";
// import Navbar from "./Navbar"; // Removed to use custom vertical nav
import Link from "next/link";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { useParallax } from "@/hooks/useParallax";

export default function HeroSection() {
    const contentReveal = useScrollReveal({ threshold: 0.2 });
    const imageParallax = useParallax({ speed: 4, scale: 1 });

    return (
        <section className="relative w-full h-screen overflow-hidden bg-black flex flex-col justify-between">

            {/* Background Grid - Global */}
            <div className="absolute top-0 left-0 w-full h-full z-0 opacity-20 pointer-events-none">
                <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:100px_100px]" />
            </div>

            {/* Image Panels - Split Layout with Concave Curved Edges (Inverted) */}
            {/* Full Width Background Image with Parallax */}
            <div ref={imageParallax.ref} className="absolute inset-0 w-full h-full z-0 overflow-hidden">
                <div
                    className="relative w-full h-full will-change-transform"
                    style={{ transform: `translateY(${imageParallax.transform.y}px) scale(${imageParallax.transform.scale})` }}
                >
                    <Image
                        src="/images/hero.jpg"
                        alt="Hero Background"
                        fill
                        className="object-cover opacity-100"
                        priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-black/20" />
                </div>
            </div>

            {/* Main Content - Centered */}
            <div className="flex-1 flex flex-col justify-center items-center relative z-10 w-full max-w-5xl mx-auto px-4 sm:px-6 mt-16 sm:mt-20 lg:mt-0">

                <div ref={contentReveal.ref} className={`flex flex-col items-center text-center space-y-6 lg:space-y-8 scroll-reveal ${contentReveal.isVisible ? 'visible' : ''}`}>

                    {/* Branding */}
                    <div className="relative">
                        {/* Decorative 'Scanline' or Glow behind text */}
                        <div className="absolute -inset-4 bg-blue-400/10 blur-3xl rounded-full z-0 opacity-50"></div>
                    </div>

                    <h1 className="text-5xl md:text-7xl lg:text-7xl xl:text-7xl font-bold tracking-tighter text-white font-chakra-petch mb-2 relative z-10">
                        ADRIEN <br />TRANCHANT
                    </h1>
                    {/* Description */}
                    <div className="max-w-2xl pt-2">
                        <p className="font-rajdhani text-lg md:text-xl lg:text-2xl text-gray-300 font-medium tracking-wide leading-relaxed">
                            <span className="text-white border-b border-white/30 pb-0.5">Passionné par l'intelligence artificielle.</span> J'apprends le deep learning en réimplémentant des concepts et en participant à des challenges pour continuer à apprendre et à m'améliorer.
                        </p>
                    </div>

                    {/* Action Button */}
                    <button className="group relative px-8 py-3 bg-white text-black font-bold tracking-widest transition-all hover:bg-gray-200 mt-6 overflow-hidden rounded-none" onClick={() => window.location.href = '/#about'}>
                        <span className="relative z-10 flex items-center gap-3">
                            DÉCOUVRIR MON PORTFOLIO <span className="group-hover:translate-x-1 transition-transform">→</span>
                        </span>
                    </button>

                </div>
            </div>

            {/* Bottom Status Bar */}
            <div className="w-full border-t border-white/20 z-20 bg-black/60 backdrop-blur-sm relative">
                <div className="w-full max-w-[2500px] mx-auto flex h-16 sm:h-20 md:h-30 items-center px-4 sm:px-6 lg:px-12">

                    {/* Left Stat */}
                    <div className="hidden md:flex flex-1 flex-col items-center justify-center">
                        <div className="flex items-center gap-2 text-xs font-mono text-white/80 font-bold mb-1 tracking-wider">
                            <span className="w-1.5 h-1.5 bg-blue-300 shadow-[0_0_8px_rgba(34,197,94,0.8)]"></span>
                            SYSTEM STATS
                        </div>
                        <span className="font-chakra-petch text-lg font-bold text-white tracking-wide">NEURAL_CORE V.2.0</span>
                    </div>

                    {/* Divider */}
                    <div className="hidden md:block w-px h-10 bg-white/20 mx-8"></div>

                    {/* Center Modules List - Visible on all screens now */}
                    <div className="flex flex-1 justify-center items-center gap-2 md:gap-4">
                        {['MACHINE_LEARNING', 'LLM', 'CNN'].map((tag) => (
                            <span key={tag} className="text-[10px] md:text-xs font-mono font-bold text-white border border-white/20 px-3 py-1.5 md:px-5 md:py-2 bg-white/5 hover:bg-white/20 hover:border-white/40 transition-all cursor-crosshair tracking-wider">
                                {tag}
                            </span>
                        ))}
                    </div>

                    {/* Divider */}
                    <div className="hidden lg:block w-px h-10 bg-white/20 mx-8"></div>

                    {/* Right Scroll Indicator */}
                    <div className="hidden md:flex flex-1 justify-center items-center gap-4 group cursor-pointer">
                        <span className="hidden md:block text-xs font-mono font-bold text-white tracking-[0.2em] group-hover:text-white/80 transition-colors">SCROLL TO EXPLORE</span>
                        <div className="w-10 h-10 border border-white/40 bg-white/5 flex items-center justify-center animate-bounce group-hover:bg-white group-hover:text-black transition-all" onClick={() => window.location.href = '/#about'}>
                            <span className="text-sm">↓</span>
                        </div>
                    </div>

                </div>
            </div>

        </section>
    );
}
