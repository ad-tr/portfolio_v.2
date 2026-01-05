"use client";

import Image from "next/image";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { projectsData } from "@/data/projects";

export default function ProjectsSection() {
    // Convert projectsData object to array format for display
    const projects = Object.entries(projectsData).map(([slug, project], index) => ({
        id: String(index + 1).padStart(3, '0'),
        title: project.title,
        category: project.category,
        year: project.year,
        description: project.shortDescription,
        tech: project.technologies,
        image: index % 2 === 0 ? "/images/hero.jpg" : "/images/about.jpg",
        github: project.github,
        kaggle: project.kaggle
    }));

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
                        <span className="w-1.5 h-1.5 bg-blue-300 rounded-full animate-pulse"></span>
                        <span className="font-mono text-xs text-blue-300 uppercase tracking-widest">Mes réalisations</span>
                        <span className="w-1.5 h-1.5 bg-blue-300 rounded-full animate-pulse"></span>
                    </div>
                    <h2 className="text-4xl md:text-5xl lg:text-6xl xl:text-5xl font-medium tracking-tighter text-white leading-[0.9] mb-6">
                        MES PROJETS
                    </h2>
                    <p className="font-rajdhani text-base lg:text-xl text-gray-300 font-medium max-w-2xl mx-auto mb-8">
                        Ce qui me motive, c'est de pouvoir repousser les limites de l'état de l'art et de participer aux prochaines avancées du domaine. Pour cela, je fais des projets sur lesquels je peux découvrir de nouvelles technologies et approches.
                    </p>

                    {/* Stats */}
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-8 lg:gap-12">
                        <div className="text-center">
                            <div className="text-2xl lg:text-3xl font-bold text-white font-chakra-petch">03</div>
                            <div className="text-sm font-mono text-gray-500 uppercase tracking-widest mt-1">Modèles entrainés</div>
                        </div>
                        <div className="w-full sm:w-px h-px sm:h-8 bg-white/20"></div>
                        <div className="text-center">
                            <div className="text-2xl lg:text-3xl font-bold text-white font-chakra-petch">{String(projects.length).padStart(2, '0')}</div>
                            <div className="text-sm font-mono text-gray-500 uppercase tracking-widest mt-1">Projets</div>
                        </div>
                        <div className="w-full sm:w-px h-px sm:h-8 bg-white/20"></div>
                        <div className="text-center">
                            <div className="flex items-center justify-center gap-2">
                                <span className="text-2xl lg:text-3xl font-bold text-white font-chakra-petch">01</span>
                            </div>
                            <div className="text-sm font-mono text-gray-500 uppercase tracking-widest mt-1">Modèle Fine-Tuné</div>
                        </div>
                    </div>
                </div>

                {/* Projets Grid - 3 colonnes */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
                    {projects.map((project, index) => {
                        const cardReveal = useScrollReveal({ threshold: 0.2 });
                        return (
                            <div
                                key={project.id}
                                ref={cardReveal.ref}
                                className={`group relative bg-black/40 backdrop-blur-sm border border-white/20 overflow-hidden hover:border-blue-400/50 transition-all duration-500 flex flex-col scroll-reveal scroll-reveal-delay-${(index % 4) + 1} ${cardReveal.isVisible ? 'visible' : ''}`}
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
                                    <div className="absolute top-4 left-4 font-mono text-xs text-blue-300 tracking-widest bg-black/60 backdrop-blur-sm px-3 py-1.5 border border-blue-300/30">
                                        {project.id}
                                    </div>

                                    {/* HUD Corner */}
                                    <div className="absolute top-4 right-4 w-8 h-8 border-t border-r border-white/30 group-hover:border-blue-400/50 transition-colors"></div>
                                </div>

                                {/* Content */}
                                <div className="relative flex-1 flex flex-col p-6 lg:p-8">
                                    {/* Category & Year */}
                                    <div className="font-mono text-xs text-gray-300 uppercase tracking-widest mb-3">
                                        {project.category} • {project.year}
                                    </div>

                                    {/* Title */}
                                    <h3 className="text-2xl lg:text-3xl font-bold text-white font-chakra-petch leading-tight mb-4 group-hover:text-blue-300 transition-colors duration-300">
                                        {project.title}
                                    </h3>

                                    {/* Description */}
                                    <p className="font-rajdhani text-lg text-gray-300 font-medium leading-relaxed mb-6 flex-1">
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

                                    {/* Action Links */}
                                    <div className="flex flex-col gap-2">
                                        {project.kaggle && (
                                            <a
                                                href={project.kaggle}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="inline-flex items-center gap-2 text-sm font-mono text-blue-300 hover:text-white transition-colors group/link"
                                            >
                                                <span>Voir sur Kaggle</span>
                                                <span className="group-hover/link:translate-x-1 transition-transform">→</span>
                                            </a>
                                        )}
                                        {project.github && (
                                            <a
                                                href={project.github}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="inline-flex items-center gap-2 text-sm font-mono text-blue-300 hover:text-white transition-colors group/link"
                                            >
                                                <span>Voir sur Github</span>
                                                <span className="group-hover/link:translate-x-1 transition-transform">→</span>
                                            </a>
                                        )}
                                    </div>

                                    {/* Bottom HUD Corner */}
                                    <div className="absolute bottom-4 left-4 w-8 h-8 border-b border-l border-white/20 group-hover:border-blue-400/30 transition-colors"></div>
                                </div>
                            </div>
                        );
                    })}
                </div>

            </div>
        </section>
    );
}
