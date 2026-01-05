"use client";

import Image from "next/image";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { useParallax } from "@/hooks/useParallax";

export default function AboutSection() {
    // Animation hooks
    const contentReveal = useScrollReveal({ threshold: 0.2 });
    const imageParallax = useParallax({ speed: 1.5 });

    return (
        <section id="about" className="relative w-full min-h-screen lg:h-screen bg-black overflow-hidden border-t border-white/20">

            {/* Background Grid */}
            <div className="absolute top-0 left-0 w-full h-full z-0 opacity-20 pointer-events-none">
                <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:100px_100px]" />
            </div>

            {/* Main Grid Layout - Asymmetric Blocks */}
            <div className="w-full max-w-[2500px] h-full mx-auto grid grid-cols-12 auto-rows-auto relative z-10">

                {/* BLOCK 1: Large Image - Top Left (6x8) */}
                <div ref={imageParallax.ref} className="col-span-12 lg:col-span-6 lg:row-span-8 relative lg:border-r border-b border-white/20 overflow-hidden group min-h-[50vh] lg:min-h-0">
                    <div
                        style={{
                            transform: `translateY(${imageParallax.transform.y}px) scale(${imageParallax.transform.scale})`,
                            transition: 'transform 0.1s ease-out'
                        }}
                        className="w-full h-full"
                    >
                        <Image
                            src="/images/about.jpg"
                            alt="Profile Portrait"
                            fill
                            className="object-cover object-center"
                        />
                    </div>

                    {/* Overlay gradient */}
                    <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.4),transparent)] z-20"></div>

                    {/* HUD Corner */}
                    <div className="absolute top-8 right-8 w-20 h-20 border-t border-r border-white/50 z-30"></div>
                </div>

                {/* BLOCK 2: Main Content - Top Right (6x8) */}
                <div ref={contentReveal.ref} className={`col-span-12 lg:col-span-6 lg:row-span-8 relative border-b border-white/20 bg-black/40 backdrop-blur-sm flex flex-col justify-center px-6 sm:px-8 lg:px-12 xl:px-16 py-12 lg:py-0 scroll-reveal ${contentReveal.isVisible ? 'visible' : ''}`}>

                    {/* Main Heading */}
                    <div className="relative space-y-4">
                        <div className="flex items-center gap-3">
                            <span className="w-1.5 h-1.5 bg-blue-300 rounded-full animate-pulse"></span>
                            <span className="font-mono text-xs text-blue-300 uppercase tracking-widest">Qui suis-je</span>
                        </div>
                        <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-5xl font-medium tracking-tighter text-white leading-[0.9] mb-8">
                            À PROPOS
                        </h2>
                    </div>

                    {/* Description */}
                    <div className="space-y-4 max-w-xl">
                        <p className="font-rajdhani text-base lg:text-xl text-gray-300 font-medium leading-relaxed">
                            Je suis étudiant en <span className="text-white border-b border-white/30 pb-0.5">architecture logicielle à l'ESGI Reims</span>, passionné par l'intelligence artificielle. Sur mon temps libre, j'apprends le deep learning en réimplémentant des concepts pour comprendre comment ils fonctionnent.
                        </p>
                        <p className="font-rajdhani text-base lg:text-xl text-gray-300 font-medium leading-relaxed">
                            Mon objectif est de poursuivre un PhD en IA pour contribuer à la recherche. J'aime apprendre en faisant, que ce soit de la recherche ou des compétition.
                        </p>
                    </div>

                    {/* HUD Corner */}
                    <div className="absolute bottom-8 right-8 w-16 h-16 border-b border-r border-white/30"></div>
                </div>

                {/* BLOCK 3: Stat 1 - Bottom Left Quarter (3x4) */}
                <div className="col-span-6 md:col-span-3 relative border-r border-white/20 bg-black/60 backdrop-blur-sm flex flex-col items-center justify-center group transition-colors cursor-default py-8 md:py-12" title="Kaggle Ranking">
                    <div className="text-center">
                        <div className="flex items-center gap-2">
                            <div className="w-1.5 h-1.5 bg-blue-300 rounded-full animate-pulse"></div>
                            <div className="text-2xl lg:text-3xl font-bold text-white font-chakra-petch">Actif</div>
                        </div>
                        <div className="text-sm font-mono text-blue-300 uppercase tracking-widest mt-2">Kaggle</div>
                    </div>
                    <div className="absolute top-4 left-4 w-8 h-8 border-t border-l border-white/20"></div>
                </div>

                {/* BLOCK 4: Stat 2 - Bottom (3x4) */}
                <div className="col-span-6 md:col-span-3 relative border-r border-white/20 bg-black/40 backdrop-blur-sm flex flex-col items-center justify-center group transition-colors cursor-default py-8 md:py-12" title="Education">
                    <div className="text-center">
                        <div className="text-2xl lg:text-3xl font-bold text-white font-chakra-petch">03+</div>
                        <div className="text-sm font-mono text-blue-300 uppercase tracking-widest mt-2">Année d'études</div>
                    </div>
                </div>

                {/* BLOCK 5: Stat 3 - Bottom (3x4) */}
                <div className="col-span-6 md:col-span-3 relative border-r border-white/20 bg-black/60 backdrop-blur-sm flex flex-col items-center justify-center group transition-colors cursor-default py-8 md:py-12" title="Goal">
                    <div className="text-center">
                        <div className="text-2xl lg:text-3xl font-bold text-white font-chakra-petch">PhD</div>
                        <div className="text-sm font-mono text-blue-300 uppercase tracking-widest mt-2">Objectif</div>
                    </div>
                </div>

                {/* BLOCK 6: Status Info - Bottom Right (3x4) */}
                <div className="col-span-6 md:col-span-3 relative bg-black/40 backdrop-blur-sm flex flex-col items-center justify-center group transition-colors cursor-default py-8 md:py-12" title="Basé à Reims, France">
                    <div className="text-center space-y-3">
                        <div className="text-2xl lg:text-3xl font-bold text-white font-chakra-petch">REIMS</div>
                        <div className="text-sm font-mono text-blue-300 uppercase tracking-widest">France</div>
                    </div>
                    <div className="absolute bottom-4 right-4 w-8 h-8 border-b border-r border-white/20"></div>
                </div>

            </div>

        </section>
    );
}
