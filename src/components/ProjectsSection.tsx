"use client";

import Image from "next/image";
import { useScrollReveal } from "@/hooks/useScrollReveal";

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
        },
        {
            id: "004",
            title: "Data Analytics Dashboard",
            category: "Data Visualization",
            year: "2023",
            description: "Real-time analytics platform with interactive charts and predictive insights.",
            tech: ["React", "D3.js", "Python"],
            image: "/images/about.jpg",
            link: "#"
        },
        {
            id: "005",
            title: "E-commerce Platform",
            category: "Full Stack",
            year: "2023",
            description: "Modern e-commerce solution with AI-powered recommendations and seamless checkout.",
            tech: ["Next.js", "Stripe", "PostgreSQL"],
            image: "/images/hero.jpg",
            link: "#"
        },
        {
            id: "006",
            title: "Mobile Fitness App",
            category: "Mobile Development",
            year: "2023",
            description: "Cross-platform fitness tracking app with personalized workout plans.",
            tech: ["React Native", "Firebase", "TensorFlow"],
            image: "/images/about.jpg",
            link: "#"
        }
    ];

    return (
        <section id="projects" className="relative w-full min-h-screen bg-black py-20 lg:py-20">
            {/* Background Grid */}
            <div className="absolute top-0 left-0 w-full h-full z-0 opacity-20 pointer-events-none">
                <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:100px_100px]" />
            </div>

            <div className="w-full max-w-[2500px] mx-auto px-6 lg:px-10 xl:px-20 relative z-10">

                {/* Header - Centré */}
                <div className="text-center mb-16 lg:mb-24">
                    <div className="flex items-center justify-center gap-3 mb-4">
                        <span className="w-1.5 h-1.5 bg-orange-400 rounded-full animate-pulse"></span>
                        <span className="font-mono text-xs text-orange-400 uppercase tracking-widest">Selected Works</span>
                        <span className="w-1.5 h-1.5 bg-orange-400 rounded-full animate-pulse"></span>
                    </div>
                    <h2 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-medium tracking-tighter text-white leading-[0.9] mb-6">
                        MES PROJETS
                    </h2>
                    <p className="font-rajdhani text-base lg:text-lg text-gray-400 font-medium max-w-2xl mx-auto mb-8">
                        Une sélection de mes réalisations récentes en IA et développement web.
                    </p>

                    {/* Stats */}
                    <div className="flex items-center justify-center gap-8 lg:gap-12">
                        <div className="text-center">
                            <div className="text-2xl lg:text-3xl font-bold text-white font-chakra-petch">{String(projects.length).padStart(2, '0')}</div>
                            <div className="text-xs font-mono text-gray-500 uppercase tracking-widest mt-1">Projects</div>
                        </div>
                        <div className="w-px h-8 bg-white/20"></div>
                        <div className="text-center">
                            <div className="text-2xl lg:text-3xl font-bold text-white font-chakra-petch">2024</div>
                            <div className="text-xs font-mono text-gray-500 uppercase tracking-widest mt-1">Latest</div>
                        </div>
                        <div className="w-px h-8 bg-white/20"></div>
                        <div className="text-center">
                            <div className="flex items-center gap-2">
                                <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                                <span className="text-2xl lg:text-3xl font-bold text-white font-chakra-petch">Active</span>
                            </div>
                            <div className="text-xs font-mono text-gray-500 uppercase tracking-widest mt-1">Status</div>
                        </div>
                    </div>
                </div>

                {/* Projects Grid - 3 colonnes */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
                    {projects.map((project, index) => {
                        const cardReveal = useScrollReveal({ threshold: 0.2 });
                        return (
                            <div
                                key={project.id}
                                ref={cardReveal.ref}
                                className={`group relative bg-black/40 backdrop-blur-sm border border-white/20 overflow-hidden hover:border-orange-400/50 transition-all duration-500 flex flex-col scroll-reveal scroll-reveal-delay-${(index % 4) + 1} ${cardReveal.isVisible ? 'visible' : ''}`}
                            >
                                {/* Project Image Background */}
                                <div className="relative h-64 lg:h-72 overflow-hidden">
                                    <Image
                                        src={project.image}
                                        alt={project.title}
                                        fill
                                        className="object-cover object-center group-hover:scale-110 transition-transform duration-700"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/50 to-black"></div>

                                    {/* Project Number Badge */}
                                    <div className="absolute top-4 left-4 font-mono text-xs text-orange-400 tracking-widest bg-black/60 backdrop-blur-sm px-3 py-1.5 border border-orange-400/30">
                                        {project.id}
                                    </div>

                                    {/* HUD Corner */}
                                    <div className="absolute top-4 right-4 w-8 h-8 border-t border-r border-white/30 group-hover:border-orange-400/50 transition-colors"></div>
                                </div>

                                {/* Content */}
                                <div className="relative flex-1 flex flex-col p-6 lg:p-8">
                                    {/* Category & Year */}
                                    <div className="font-mono text-xs text-gray-500 uppercase tracking-widest mb-3">
                                        {project.category} • {project.year}
                                    </div>

                                    {/* Title */}
                                    <h3 className="text-2xl lg:text-3xl font-bold text-white font-chakra-petch leading-tight mb-4 group-hover:text-orange-400 transition-colors duration-300">
                                        {project.title}
                                    </h3>

                                    {/* Description */}
                                    <p className="font-rajdhani text-base text-gray-300 font-medium leading-relaxed mb-6 flex-1">
                                        {project.description}
                                    </p>

                                    {/* Tech Stack */}
                                    <div className="mb-6">
                                        <div className="text-xs font-mono text-gray-500 uppercase tracking-widest mb-3">Tech Stack</div>
                                        <div className="flex flex-wrap gap-2">
                                            {project.tech.map((tech) => (
                                                <span
                                                    key={tech}
                                                    className="border border-white/20 px-2.5 py-1 bg-white/5 text-xs text-gray-300 font-mono hover:border-white/40 transition-all"
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

                                    {/* Bottom HUD Corner */}
                                    <div className="absolute bottom-4 left-4 w-8 h-8 border-b border-l border-white/20 group-hover:border-orange-400/30 transition-colors"></div>
                                </div>
                            </div>
                        );
                    })}
                </div>

            </div>
        </section>
    );
}
