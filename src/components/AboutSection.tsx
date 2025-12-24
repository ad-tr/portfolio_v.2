import Image from "next/image";

export default function AboutSection() {
    return (
        <section id="about" className="relative w-full min-h-screen bg-black overflow-hidden flex flex-col border-t border-white/20 justify-center py-16 lg:py-20 xl:py-40">

            {/* Background Texture - Noise/Grain */}
            <div className="absolute inset-0 opacity-20 pointer-events-none z-0">
                <div className="absolute inset-0 bg-[url('/noise.png')] opacity-10"></div> {/* Assuming noise texture or just keep it simple */}
            </div>

            <div className="container max-w-[2000px] mx-auto px-6 lg:px-8 xl:px-20 relative z-10 flex flex-col lg:flex-row items-center">

                {/* VISUAL LAYOUT: Asymmetric & Smooth */}

                {/* 1. Large Background Typography (Parallax-ish feel) */}
                <div className="absolute top-10 left-0 w-full overflow-hidden select-none pointer-events-none opacity-[0.03]">
                    <h2 className="text-[20vw] lg:text-[15vw] xl:text-[20vw] leading-none font-black text-white whitespace-nowrap -ml-20">
                        ARCHITECT
                    </h2>
                </div>

                {/* 2. LEFT SIDE: Content (Overlapping) */}
                <div className="w-full lg:w-1/2 relative z-20 space-y-8 lg:space-y-8 lg:pr-8 xl:pr-20">

                    {/* Header */}
                    <div>
                        {/* Decorative Top Tag */}
                        <div className="flex items-center space-x-2 text-white font-mono text-xs lg:text-sm tracking-widest border border-white/20 px-2 py-1 lg:px-3 lg:py-1 bg-white/5 rounded-sm mb-4">
                            <span>Profile Data</span>
                        </div>
                        <h2 className="text-5xl md:text-6xl lg:text-5xl xl:text-8xl font-medium tracking-tighter text-white mix-blend-difference">
                            BEYOND <br />
                            <span className="font-thin text-gray-400">THE CODE.</span>
                        </h2>
                    </div>

                    {/* Bio Text */}
                    <div className="space-y-6 lg:space-y-8 text-base md:text-lg lg:text-xl text-gray-300 font-light leading-relaxed max-w-lg">
                        <p>
                            I don't just build websites; I engineer <span className="text-white border-b border-white/30 pb-0.5">digital ecosystems</span>. Driven by the philosophy that form and function are one, my work explores the minimalist beauty of complex systems.
                        </p>
                        <p className="text-gray-500">
                            From generative AI to immersive WebGL interfaces, every pixel serves a purpose. No clutter. No noise. Just pure, unadulterated interaction.
                        </p>
                    </div>

                    {/* Stats / Signature - Horizontal Flow */}
                    <div className="flex items-center gap-8 md:gap-12 pt-6 lg:pt-8 px-0">
                        <div>
                            <span className="block text-3xl md:text-4xl font-bold text-white font-chakra-petch">04+</span>
                            <span className="text-[10px] md:text-xs font-mono text-gray-600 uppercase tracking-widest leading-none">Years Exp.</span>
                        </div>
                        <div className="w-px h-12 bg-white/10"></div>
                        <div>
                            <span className="block text-3xl md:text-4xl font-bold text-white font-chakra-petch">25+</span>
                            <span className="text-[10px] md:text-xs font-mono text-gray-600 uppercase tracking-widest leading-none">Projects</span>
                        </div>
                        <div className="w-px h-12 bg-white/10"></div>
                        <div className="font-mono text-[10px] lg:text-xs text-gray-500">
                            STATUS: <span className="text-green-500 animate-pulse">ONLINE</span> <br />
                            LOC: PARIS
                        </div>
                    </div>
                </div>

                {/* 3. RIGHT SIDE: The Image (Floating Monolith Style) */}
                <div className="w-full lg:w-1/2 relative mt-12 lg:mt-0 flex justify-center lg:justify-end">

                    {/* The Image Container - Rounded, tilted or smooth */}
                    <div className="relative w-full max-w-lg lg:max-w-lg xl:max-w-xl aspect-[3/4] group">

                        {/* 1. Main Image - Grayscale & High Contrast */}
                        <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-[0_0_100px_rgba(255,255,255,0.05)] border border-white/10 transition-transform duration-700 ease-out group-hover:-translate-y-2">
                            <Image
                                src="/images/about.jpg"
                                alt="Abstract Architecture"
                                fill
                                className="object-cover brightness-90 group-hover:scale-105 transition-transform duration-1000"
                            />

                            {/* Inner Glow/Vignette */}
                            <div className="absolute inset-0 bg-gradient-to-tr from-black/60 via-transparent to-black/20 pointer-events-none"></div>
                        </div>

                        {/* 2. Decorative Elements floating around image */}

                        {/* Bottom Left: Glass Card */}
                        <div className="absolute -bottom-10 -left-10 w-48 p-4 bg-black/80 backdrop-blur-md border border-white/10 rounded-lg shadow-2xl z-30 hidden md:block">
                            <div className="flex justify-between items-center mb-2">
                                <span className="text-[10px] font-mono text-gray-500 uppercase">SYS_LOAD</span>
                                <span className="text-[10px] font-mono text-white">98%</span>
                            </div>
                            <div className="w-full h-1 bg-white/10 rounded-full overflow-hidden">
                                <div className="w-[98%] h-full bg-white rounded-full"></div>
                            </div>
                        </div>

                        {/* Top Right: Accent Line */}
                        <div className="absolute -top-10 -right-10 w-20 h-20 border-t border-r border-white/20 rounded-tr-3xl z-0"></div>

                        {/* Behind Glow */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-white/5 blur-[100px] -z-10 rounded-full"></div>

                    </div>
                </div>

            </div>
        </section>
    );
}
