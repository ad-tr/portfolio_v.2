import Image from "next/image";

export default function AboutSection() {
    return (
        <section id="about" className="relative w-full h-screen bg-black overflow-hidden border-t border-white/20">

            {/* Background Grid */}
            <div className="absolute top-0 left-0 w-full h-full z-0 opacity-20 pointer-events-none">
                <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:100px_100px]" />
            </div>

            {/* Main Grid Layout - Asymmetric Blocks */}
            <div className="w-full max-w-[2500px] h-full mx-auto grid grid-cols-12 grid-rows-12 relative z-10">

                {/* BLOCK 1: Large Image - Top Left (6x8) */}
                <div className="col-span-12 lg:col-span-6 row-span-8 relative border-r border-b border-white/20 overflow-hidden group">
                    <Image
                        src="/images/about.jpg"
                        alt="Profile Portrait"
                        fill
                        className="object-cover object-center"
                    />

                    {/* Overlay gradient */}
                    <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.4),transparent)] z-20"></div>

                    {/* HUD Corner */}
                    <div className="absolute top-8 right-8 w-20 h-20 border-t border-r border-white/50 z-30"></div>

                    {/* Identity Tag */}
                    <div className="absolute bottom-8 left-8 z-30">
                        <div className="font-mono text-xs text-orange-400 mb-2">DEVELOPER & CREATOR</div>
                        <div className="text-white font-bold text-2xl lg:text-3xl font-chakra-petch">ADRIEN TRANCHANT</div>
                    </div>
                </div>

                {/* BLOCK 2: Main Content - Top Right (6x8) */}
                <div className="col-span-12 lg:col-span-6 row-span-8 relative border-b border-white/20 bg-black/40 backdrop-blur-sm flex flex-col justify-center px-8 lg:px-12 xl:px-16 py-12 lg:py-0">

                    {/* Main Heading */}
                    <div className="relative space-y-4">
                        <div className="flex items-center gap-3">
                            <span className="w-1.5 h-1.5 bg-orange-400 rounded-full animate-pulse"></span>
                            <span className="font-mono text-[10px] text-orange-400 uppercase tracking-widest">Selected Works</span>
                        </div>
                        <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-medium tracking-tighter text-white leading-[0.9] mb-8">
                            A PROPOS
                        </h2>
                    </div>

                    {/* Description */}
                    <div className="space-y-4 max-w-xl">
                        <p className="font-rajdhani text-base lg:text-lg text-gray-300 font-medium leading-relaxed">
                            I'm a <span className="text-white border-b border-white/30 pb-0.5">full-stack developer</span> passionate about creating beautiful, high-performance applications that solve real problems.
                        </p>
                        <p className="font-rajdhani text-base lg:text-lg text-gray-300 font-medium leading-relaxed">
                            From AI-powered tools to immersive web experiences, I love turning complex ideas into elegant solutions that people actually enjoy using.
                        </p>
                        <p className="font-mono text-xs lg:text-sm text-neutral-500 leading-relaxed">
                            Specialized in modern web development, artificial intelligence integration, and creating seamless user experiences.
                        </p>
                    </div>

                    {/* HUD Corner */}
                    <div className="absolute bottom-8 right-8 w-16 h-16 border-b border-r border-white/30"></div>
                </div>

                {/* BLOCK 3: Stat 1 - Bottom Left Quarter (3x4) */}
                <div className="col-span-6 lg:col-span-3 row-span-4 relative border-r border-white/20 bg-black/60 backdrop-blur-sm flex flex-col items-center justify-center group hover:bg-white/5 transition-colors cursor-help" title="4+ years of professional development experience">
                    <div className="text-center">
                        <div className="text-4xl lg:text-5xl font-bold text-white font-chakra-petch">04+</div>
                        <div className="text-[10px] font-mono text-gray-500 uppercase tracking-widest mt-2">Years Experience</div>
                    </div>
                    <div className="absolute top-4 left-4 w-8 h-8 border-t border-l border-white/20"></div>
                    {/* Tooltip */}
                    <div className="absolute bottom-full mb-2 px-3 py-2 bg-black/90 border border-white/20 text-white text-xs font-mono whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                        4+ years building apps
                    </div>
                </div>

                {/* BLOCK 4: Stat 2 - Bottom (3x4) */}
                <div className="col-span-6 lg:col-span-3 row-span-4 relative border-r border-white/20 bg-black/40 backdrop-blur-sm flex flex-col items-center justify-center group hover:bg-white/5 transition-colors cursor-help" title="25+ completed projects">
                    <div className="text-center">
                        <div className="text-4xl lg:text-5xl font-bold text-white font-chakra-petch">25+</div>
                        <div className="text-[10px] font-mono text-gray-500 uppercase tracking-widest mt-2">Projects Completed</div>
                    </div>
                    {/* Tooltip */}
                    <div className="absolute bottom-full mb-2 px-3 py-2 bg-black/90 border border-white/20 text-white text-xs font-mono whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                        25+ successful projects
                    </div>
                </div>

                {/* BLOCK 5: Stat 3 - Bottom (3x4) */}
                <div className="col-span-6 lg:col-span-3 row-span-4 relative border-r border-white/20 bg-black/60 backdrop-blur-sm flex flex-col items-center justify-center group hover:bg-white/5 transition-colors cursor-help" title="Commitment to quality and reliability">
                    <div className="text-center">
                        <div className="text-4xl lg:text-5xl font-bold text-white font-chakra-petch">100%</div>
                        <div className="text-[10px] font-mono text-gray-500 uppercase tracking-widest mt-2">Dedication</div>
                    </div>
                    {/* Tooltip */}
                    <div className="absolute bottom-full mb-2 px-3 py-2 bg-black/90 border border-white/20 text-white text-xs font-mono whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                        Fully committed to quality
                    </div>
                </div>

                {/* BLOCK 6: Status Info - Bottom Right (3x4) */}
                <div className="col-span-6 lg:col-span-3 row-span-4 relative bg-black/40 backdrop-blur-sm flex flex-col items-center justify-center group hover:bg-white/5 transition-colors cursor-help" title="Currently available for new projects">
                    <div className="text-center space-y-3">
                        <div className="flex items-center justify-center space-x-2">
                            <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                            <span className="font-mono text-xs text-gray-400 uppercase tracking-widest">Available for Work</span>
                        </div>
                        <div className="text-2xl lg:text-3xl font-bold text-white font-chakra-petch">PARIS</div>
                        <div className="text-[10px] font-mono text-gray-500 uppercase tracking-widest">France</div>
                    </div>
                    <div className="absolute bottom-4 right-4 w-8 h-8 border-b border-r border-white/20"></div>
                    {/* Tooltip */}
                    <div className="absolute bottom-full mb-2 px-3 py-2 bg-black/90 border border-white/20 text-white text-xs font-mono whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                        Open to new opportunities
                    </div>
                </div>

            </div>

        </section>
    );
}
