"use client";

import Image from "next/image";
import Navbar from "./Navbar";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { useParallax } from "@/hooks/useParallax";

export default function HeroSection() {
    const contentReveal = useScrollReveal({ threshold: 0.2 });
    const imageParallax = useParallax({ speed: 0.2 });

    return (
        <section className="relative w-full h-screen overflow-hidden bg-black flex flex-col">

            {/* Background Grid - Global */}
            <div className="absolute top-0 left-0 w-full h-full z-0 opacity-20 pointer-events-none">
                <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:100px_100px]" />
            </div>

            {/* Main Content Wrapper restricted to Max Width - Flex 1 to take available space */}
            <div className="w-full max-w-[2500px] flex-1 mx-auto flex flex-col lg:flex-row relative z-10 min-h-0">

                {/* LEFT COLUMN: Content + Navbar */}
                <div className="w-full lg:w-1/2 h-full flex flex-col relative z-20 border-r border-white/10 glass-panel lg:border-none lg:bg-transparent">

                    {/* Navbar constrained to left side */}
                    <div className="w-full pt-4 lg:pt-6 pl-6 pr-6 lg:pl-10 lg:pr-8 xl:pl-20 xl:pr-20">
                        <Navbar />
                    </div>

                    <div ref={contentReveal.ref} className={`flex-1 flex flex-col justify-center items-start pl-6 pr-6 lg:pl-10 lg:pr-8 xl:pl-20 xl:pr-20 space-y-6 lg:space-y-6 scroll-reveal ${contentReveal.isVisible ? 'visible' : ''}`}>
                        <div className="relative space-y-4">
                            <div className="flex items-center gap-3">
                                <span className="w-1.5 h-1.5 bg-orange-400 rounded-full animate-pulse"></span>
                                <span className="font-mono text-xs text-orange-400 uppercase tracking-widest">Selected Works</span>
                            </div>
                            <h1 className="text-4xl md:text-5xl lg:text-5xl xl:text-6xl font-medium tracking-tighter leading-[0.9] text-white z-20">
                                ADRIEN TRANCHANT
                            </h1>
                        </div>

                        <div className="max-w-xl pt-4">
                            <p className="font-rajdhani text-base md:text-lg lg:text-xl xl:text-xl text-gray-300 font-medium tracking-wide leading-relaxed text-left">
                                <span className="text-white border-b border-white/30 pb-0.5">Designing intelligence.</span> Building the future of digital interactions through advanced neural networks and generative systems.
                            </p>
                        </div>

                        {/* Action Button */}
                        <button className="group relative px-6 py-3 md:px-8 md:py-3 lg:px-8 lg:py-4 xl:px-10 xl:py-4 bg-white text-black font-bold tracking-widest transition-all hover:bg-gray-200 mt-4 md:mt-8 overflow-hidden text-sm md:text-base">
                            <span className="relative z-10 flex items-center gap-3">
                                INITIALIZE_PROTOCOL <span className="group-hover:translate-x-1 transition-transform">→</span>
                            </span>
                        </button>

                    </div>

                </div>

                <div ref={imageParallax.ref} className="w-full lg:w-1/2 h-full right-0 top-0 lg:relative flex items-center justify-center border-l border-white/20 lg:justify-end overflow-hidden z-10 opacity-30 lg:opacity-100 mix-blend-screen lg:mix-blend-normal pointer-events-none lg:pointer-events-auto">
                    <div
                        style={{
                            transform: `translateY(${imageParallax.transform.y}px) scale(${imageParallax.transform.scale})`,
                            transition: 'transform 0.1s ease-out'
                        }}
                        className="relative w-full h-full"
                    >
                        <Image
                            src="/images/hero.jpg"
                            alt="Futuristic Abstract Structure"
                            fill
                            className="object-cover object-center z-10 contrast-125"
                            priority
                        />

                        <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.5),transparent)] z-20"></div>

                        <div className="absolute top-10 right-10 w-24 h-24 border-t border-r border-white/50 z-30"></div>
                        <div className="absolute bottom-10 left-10 w-24 h-24 border-b border-l border-white/50 z-30"></div>
                    </div>
                </div>

            </div>

            <div className="w-full border-t border-white/20 z-50 bg-black/60 backdrop-blur-sm">
                <div className="w-full max-w-[2500px] mx-auto flex flex-col lg:flex-row h-auto lg:h-28 xl:h-40 pl-6 lg:pl-10 xl:pl-10">
                    <div className="w-full lg:w-1/3 border-b lg:border-b-0 lg:border-r border-white/20 p-6 lg:p-6 xl:p-12 flex flex-col justify-between group cursor-default hover:bg-white/5 transition-colors">
                        <div>
                            <div className="flex items-center space-x-2 text-white text-xs lg:text-sm font-mono tracking-widest mb-1 lg:mb-2">
                                <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"></span>
                                <span>SYSTEM_READY</span>
                            </div>
                            <h3 className="text-2xl md:text-3xl lg:text-3xl xl:text-2xl font-black text-white font-chakra-petch uppercase tracking-tight">
                                NEURAL_CORE
                            </h3>
                        </div>
                        <div className="text-xs lg:text-sm font-mono text-gray-500 mt-2 lg:mt-0">
                            ID: AT-890 // V2.0.4 ACTIVE
                        </div>
                    </div>

                    <div className="w-full lg:w-1/3 border-b lg:border-b-0 lg:border-r border-white/20 p-6 lg:p-8 xl:p-12 flex flex-col justify-center space-y-4 hover:bg-white/5 transition-colors">
                        <span className="text-xs lg:text-sm font-mono text-gray-500 uppercase tracking-widest">Active Modules</span>
                        <div className="flex flex-wrap gap-2 lg:gap-3">
                            {['GEN_AI', 'LLM_OPS', 'COMPUTER_VISION', 'AGENTS'].map((tag) => (
                                <span key={tag} className="border border-white/10 px-2 py-1 lg:px-3 lg:py-1.5 bg-white/5 text-2xs lg:text-xs text-gray-300 font-mono hover:border-white/40 hover:text-white transition-all cursor-crosshair">
                                    [{tag}]
                                </span>
                            ))}
                        </div>
                    </div>

                    <div className="w-full lg:w-1/3 p-6 lg:p-8 xl:p-12 flex flex-col justify-between hover:bg-white/5 transition-colors">
                        <div className="flex justify-between items-start">
                            <span className="text-xs lg:text-sm font-mono text-gray-500 uppercase tracking-widest">DATA_STREAM</span>
                            <div className="flex space-x-1">
                                {[...Array(3)].map((_, i) => (
                                    <div key={i} className={`w-1 h-1 bg-white/20 animate-pulse`} style={{ animationDelay: `${i * 100}ms` }}></div>
                                ))}
                            </div>
                        </div>

                        <div className="flex items-end justify-between mt-6 lg:mt-0">
                            <div className="text-right">
                                <div className="text-white font-chakra-petch font-bold text-lg lg:text-xl">SCROLL TO EXPLORE</div>
                            </div>
                            <div className="w-10 h-10 border border-white/20 flex items-center justify-center rounded-full animate-bounce">
                                <span className="text-white text-lg">↓</span>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

        </section>
    );
}
