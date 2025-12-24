import Image from "next/image";
import Navbar from "./Navbar";

export default function HeroSection() {
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
                    <div className="w-full pt-8 pl-20 pr-12 lg:pl-40 lg:pr-20">
                        <Navbar />
                    </div>

                    <div className="flex-1 flex flex-col justify-center items-start pl-20 pr-12 lg:pl-40 lg:pr-20 space-y-8">
                        {/* Decorative Top Tag */}
                        <div className="flex items-center space-x-2 text-white font-mono text-sm tracking-widest border border-white/20 px-3 py-1 bg-white/5 rounded-sm mb-4">
                            <span className="w-2 h-2 bg-white"></span>
                            <span>SYSTEM_ONLINE // V2.0</span>
                        </div>

                        <div className="relative">
                            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter leading-[0.9] text-white z-20">
                                ADRIEN <br />
                                <span className="text-white">TRANCHANT</span>
                            </h1>
                        </div>

                        <div className="max-w-xl pt-4">
                            <p className="font-rajdhani text-lg md:text-2xl text-gray-300 font-medium tracking-wide leading-relaxed text-left uppercase">
                                <span className="text-white font-bold">Designing intelligence.</span> Building the future of digital interactions through advanced neural networks and generative systems.
                            </p>
                        </div>

                        {/* Action Button */}
                        <button className="group relative px-10 py-4 bg-white text-black font-bold tracking-widest transition-all hover:bg-gray-200 mt-8 overflow-hidden">
                            <span className="relative z-10 flex items-center gap-3">
                                INITIALIZE_PROTOCOL <span className="group-hover:translate-x-1 transition-transform">→</span>
                            </span>
                        </button>

                    </div>

                </div>

                {/* RIGHT COLUMN: Full Height Image Area */}
                <div className="w-full lg:w-1/2 h-full right-0 top-0 lg:relative flex items-center justify-center lg:justify-end overflow-hidden z-10 opacity-30 lg:opacity-100 mix-blend-screen lg:mix-blend-normal pointer-events-none lg:pointer-events-auto">
                    <div className="relative w-full h-full">
                        {/* Image taking full height, covering the right side */}
                        <Image
                            src="/images/hero.png"
                            alt="Futuristic Abstract Structure"
                            fill
                            className="object-cover object-center z-10 contrast-125"
                            priority
                        />

                        {/* Overlay Mesh/Lines to integrate it better */}
                        <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.5),transparent)] z-20"></div>

                        {/* HUD Elements over image */}
                        <div className="absolute top-10 right-10 w-24 h-24 border-t border-r border-white/50 z-30"></div>
                        <div className="absolute bottom-32 left-10 w-24 h-24 border-b border-l border-white/50 z-30"></div>
                    </div>
                </div>

            </div>

            {/* BOTTOM STRIP: Massive Dashboard Footer */}
            <div className="w-full border-t border-white/20 z-50 bg-black/60 backdrop-blur-sm">
                <div className="w-full max-w-[2500px] mx-auto flex flex-col lg:flex-row h-auto lg:h-40 pl-20">

                    {/* SECTION 1: Identity & Core Status */}
                    <div className="w-full lg:w-1/3 border-b lg:border-b-0 lg:border-r border-white/10 p-8 lg:p-12 flex flex-col justify-between group cursor-default hover:bg-white/5 transition-colors">
                        <div>
                            <div className="flex items-center space-x-2 text-white text-xs font-mono tracking-widest mb-2">
                                <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"></span>
                                <span>SYSTEM_READY</span>
                            </div>
                            <h3 className="text-3xl lg:text-4xl font-black text-white font-chakra-petch uppercase tracking-tight">
                                NEURAL_CORE
                            </h3>
                        </div>
                        <div className="text-xs font-mono text-gray-500 mt-4 lg:mt-0">
                            ID: AT-890 // V2.0.4 ACTIVE
                        </div>
                    </div>

                    {/* SECTION 2: Active Modules (Tags) */}
                    <div className="w-full lg:w-1/3 border-b lg:border-b-0 lg:border-r border-white/10 p-8 lg:p-12 flex flex-col justify-center space-y-4 hover:bg-white/5 transition-colors">
                        <span className="text-xs font-mono text-gray-500 uppercase tracking-widest">Active Modules</span>
                        <div className="flex flex-wrap gap-3">
                            {['GEN_AI', 'LLM_OPS', 'COMPUTER_VISION', 'AGENTS'].map((tag) => (
                                <span key={tag} className="border border-white/10 px-3 py-1.5 bg-white/5 text-xs text-gray-300 font-mono hover:border-white/40 hover:text-white transition-all cursor-crosshair">
                                    [{tag}]
                                </span>
                            ))}
                        </div>
                    </div>

                    {/* SECTION 3: Data Stream & Scroll */}
                    <div className="w-full lg:w-1/3 p-8 lg:p-12 flex flex-col justify-between hover:bg-white/5 transition-colors">
                        <div className="flex justify-between items-start">
                            <span className="text-xs font-mono text-gray-500 uppercase tracking-widest">DATA_STREAM</span>
                            <div className="flex space-x-1">
                                {[...Array(3)].map((_, i) => (
                                    <div key={i} className={`w-1 h-1 bg-white/20 animate-pulse`} style={{ animationDelay: `${i * 100}ms` }}></div>
                                ))}
                            </div>
                        </div>

                        <div className="flex items-end justify-between mt-6 lg:mt-0">
                            <div className="text-right">
                                <div className="text-white font-chakra-petch font-bold text-xl">SCROLL TO EXPLORE</div>
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
