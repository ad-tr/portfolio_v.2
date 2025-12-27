"use client";

import Image from "next/image";

export default function ProjectsSection() {
    const projects = [
        {
            id: "001",
            title: "AI Vision System",
            category: "Computer Vision",
            year: "2024",
            description: "Intelligent image recognition platform for real-time visual analysis and automated quality control.",
            tech: ["Python", "TensorFlow", "OpenCV"],
            image: "/images/hero.jpg",
            link: "#"
        },
        {
            id: "002",
            title: "Smart Chat Assistant",
            category: "LLM Application",
            year: "2024",
            description: "Conversational AI with context understanding and intelligent responses for customer support.",
            tech: ["Next.js", "GPT-4", "Vector DB"],
            image: "/images/about.jpg",
            link: "#"
        },
        {
            id: "003",
            title: "Automation Agent",
            category: "AI Agents",
            year: "2023",
            description: "Autonomous system handling complex workflows automatically without human intervention.",
            tech: ["TypeScript", "LangChain", "Redis"],
            image: "/images/hero.jpg",
            link: "#"
        }
    ];

    return (
        <section id="projects" className="relative w-full h-screen bg-black overflow-hidden border-t border-white/20">
            {/* Background Grid */}
            <div className="absolute top-0 left-0 w-full h-full z-0 opacity-20 pointer-events-none">
                <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:100px_100px]" />
            </div>

            {/* Main Grid Layout - 12x12 Grid filling 100vh */}
            <div className="w-full max-w-[2500px] h-full mx-auto grid grid-cols-12 grid-rows-12 relative z-10">

                {/* HEADER BLOCK - Left Side (8x2) */}
                <div className="col-span-8 row-span-2 relative border-r border-b border-white/20 bg-black/40 backdrop-blur-sm flex items-center px-8 lg:px-12 xl:px-20">
                    <div className="space-y-3">
                        <div className="flex items-center gap-3">
                            <span className="w-1.5 h-1.5 bg-orange-400 rounded-full animate-pulse"></span>
                            <span className="font-mono text-[10px] text-orange-400 uppercase tracking-widest">Selected Works</span>
                        </div>
                        <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-medium tracking-tighter text-white leading-[0.9]">
                            MES PROJETS
                        </h2>
                    </div>
                </div>

                {/* HEADER INFO BLOCK - Right Side (4x2) */}
                <div className="col-span-4 row-span-2 relative border-b border-white/20 bg-black/60 backdrop-blur-sm flex items-center justify-center">
                    <div className="text-center space-y-2">
                        <div className="font-mono text-xs text-gray-500 uppercase tracking-widest">Portfolio</div>
                        <div className="text-3xl font-bold text-white font-chakra-petch">03</div>
                        <div className="font-mono text-[10px] text-gray-500 uppercase tracking-widest">Projects</div>
                    </div>
                    {/* HUD Corner */}
                    <div className="absolute top-4 right-4 w-10 h-10 border-t border-r border-white/30"></div>
                </div>

                {/* PROJECT CARDS - 3 Cards Side by Side (4x10 each) */}
                {projects.map((project, index) => (
                    <div
                        key={project.id}
                        className={`col-span-12 lg:col-span-4 row-span-10 relative ${index < 2 ? 'border-r' : ''
                            } border-white/20 ${index === 1 ? 'bg-black/60' : 'bg-black/40'
                            } backdrop-blur-sm group hover:bg-black/80 transition-all duration-500 overflow-hidden`}
                    >
                        {/* Project Image Background */}
                        <div className="absolute inset-0 opacity-20 group-hover:opacity-30 transition-opacity duration-500">
                            <Image
                                src={project.image}
                                alt={project.title}
                                fill
                                className="object-cover object-center group-hover:scale-110 transition-transform duration-700"
                            />
                            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/50 to-black"></div>
                        </div>

                        {/* Content */}
                        <div className="relative h-full flex flex-col justify-between p-6 lg:p-8">
                            {/* Top Section */}
                            <div>
                                {/* Project Number Badge */}
                                <div className="inline-block font-mono text-xs text-orange-400 tracking-widest bg-black/60 backdrop-blur-sm px-3 py-1.5 border border-orange-400/30 mb-4">
                                    {project.id}
                                </div>

                                {/* Category & Year */}
                                <div className="font-mono text-[10px] text-gray-500 uppercase tracking-widest mb-3">
                                    {project.category} • {project.year}
                                </div>

                                {/* Title */}
                                <h3 className="text-2xl lg:text-3xl font-bold text-white font-chakra-petch leading-tight mb-4 group-hover:text-orange-400 transition-colors duration-300">
                                    {project.title}
                                </h3>

                                {/* Description */}
                                <p className="font-rajdhani text-sm lg:text-base text-gray-300 font-medium leading-relaxed mb-6">
                                    {project.description}
                                </p>
                            </div>

                            {/* Bottom Section */}
                            <div>
                                {/* Tech Stack */}
                                <div className="mb-6">
                                    <div className="text-[10px] font-mono text-gray-500 uppercase tracking-widest mb-3">Tech Stack</div>
                                    <div className="flex flex-wrap gap-2">
                                        {project.tech.map((tech) => (
                                            <span
                                                key={tech}
                                                className="border border-white/20 px-2.5 py-1 bg-white/5 text-[11px] text-gray-300 font-mono hover:border-white/40 transition-all"
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                {/* View Project Link */}
                                <a
                                    href={project.link}
                                    className="inline-flex items-center gap-2 text-sm font-mono text-orange-400 hover:text-white transition-colors group/link"
                                >
                                    <span>View Project</span>
                                    <span className="group-hover/link:translate-x-1 transition-transform">→</span>
                                </a>
                            </div>
                        </div>
                    </div>
                ))}

            </div>
        </section>
    );
}
