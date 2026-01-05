import { notFound } from "next/navigation";
import Link from "next/link";
import { projectsData, type ProjectSlug } from "@/data/projects";
import Navbar from "@/components/Navbar";

export function generateStaticParams() {
    return Object.keys(projectsData).map((slug) => ({
        slug: slug,
    }));
}

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const project = projectsData[slug as ProjectSlug];

    if (!project) {
        notFound();
    }

    return (
        <>
            <Navbar />
            <main className="relative w-full min-h-screen bg-black">
                {/* Background Grid */}
                <div className="absolute top-0 left-0 w-full h-full z-0 opacity-20 pointer-events-none">
                    <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:100px_100px]" />
                </div>

                {/* Content */}
                <div className="relative z-10">
                    {/* Hero Section with Background Image */}
                    <section className="relative w-full h-screen flex items-center justify-center border-b border-white/20 overflow-hidden">
                        {/* Background Image */}
                        <div className="absolute inset-0 z-0">
                            <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black z-10"></div>
                            <img
                                src="/images/hero.jpg"
                                alt={project.title}
                                className="w-full h-full object-cover opacity-30"
                            />
                        </div>

                        {/* Content */}
                        <div className="relative z-20 max-w-5xl mx-auto px-8 py-20 text-center">

                            {/* Category Badge */}
                            <div className="flex items-center justify-center gap-3 mb-6">
                                <span className="w-1.5 h-1.5 bg-blue-300 rounded-full animate-pulse"></span>
                                <span className="font-mono text-xs text-blue-300 uppercase tracking-widest">{project.category} • {project.year}</span>
                                <span className="w-1.5 h-1.5 bg-blue-300 rounded-full animate-pulse"></span>
                            </div>

                            {/* Title */}
                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-medium tracking-tighter text-white leading-[0.9] mb-6 font-chakra-petch">
                                {project.title}
                            </h1>

                            {/* Short Description */}
                            <p className="font-rajdhani text-lg lg:text-2xl text-gray-300 font-medium max-w-3xl mx-auto mb-8">
                                {project.shortDescription}
                            </p>

                            {/* Technologies */}
                            <div className="flex flex-wrap items-center justify-center gap-3 mb-8">
                                {project.technologies.map((tech) => (
                                    <span
                                        key={tech}
                                        className="border border-white/20 px-4 py-2 bg-white/5 text-sm text-gray-300 font-mono hover:border-blue-300/50 transition-all"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>

                            {/* Links - GitHub & Kaggle */}
                            <div className="flex flex-wrap items-center justify-center gap-4">
                                {project.github && (
                                    <a
                                        href={project.github}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center gap-3 px-8 py-4 bg-white text-black font-bold tracking-widest hover:bg-gray-200 transition-all group"
                                    >
                                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                                        </svg>
                                        <span>Voir sur GitHub</span>
                                        <span className="group-hover:translate-x-1 transition-transform">→</span>
                                    </a>
                                )}

                                {project.kaggle && (
                                    <a
                                        href={project.kaggle}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center gap-3 px-8 py-4 bg-[#20BEFF] text-white font-bold tracking-widest hover:bg-[#20BEFF]/90 transition-all group"
                                    >
                                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M18.825 23.859c-.022.092-.117.141-.281.141h-3.139c-.187 0-.351-.082-.492-.248l-5.178-6.589-2.219 2.085v3.654a.78.78 0 0 1-.772.772H3.772a.78.78 0 0 1-.772-.772V.772C3 3.346 3.346 0 3.772 0h3.172c.427 0 .772.346.772.772v15.202l6.559-8.084a.81.81 0 0 1 .645-.316h3.691c.258 0 .41.222.304.445l-6.195 7.026 6.804 8.814z" />
                                        </svg>
                                        <span>Voir sur Kaggle</span>
                                        <span className="group-hover:translate-x-1 transition-transform">→</span>
                                    </a>
                                )}
                            </div>
                        </div>

                        {/* Scroll Indicator - Bottom Center */}
                        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-30">
                            <div className="w-10 h-10 border border-white/40 bg-white/5 flex items-center justify-center animate-bounce hover:bg-white hover:text-black transition-all cursor-pointer">
                                <span className="text-sm">↓</span>
                            </div>
                        </div>

                        {/* HUD Corners */}
                        <div className="absolute top-8 left-8 w-16 h-16 border-t border-l border-white/20 z-20"></div>
                        <div className="absolute top-8 right-8 w-16 h-16 border-t border-r border-white/20 z-20"></div>
                        <div className="absolute bottom-8 left-8 w-16 h-16 border-b border-l border-white/20 z-20"></div>
                        <div className="absolute bottom-8 right-8 w-16 h-16 border-b border-r border-white/20 z-20"></div>
                    </section>

                    {/* Content Sections */}
                    <section className="relative w-full py-20">
                        <div className="max-w-4xl mx-auto px-8 space-y-16">
                            {/* Context */}
                            {project.sections.context && (
                                <div className="space-y-4">
                                    <h2 className="text-2xl lg:text-3xl font-bold text-white font-chakra-petch flex items-center gap-3">
                                        <span className="w-2 h-2 bg-blue-300 rounded-full"></span>
                                        Contexte
                                    </h2>
                                    <p className="font-rajdhani text-base lg:text-lg text-gray-300 leading-relaxed">
                                        {project.sections.context}
                                    </p>
                                </div>
                            )}

                            {/* Architecture */}
                            {project.sections.architecture && (
                                <div className="space-y-4">
                                    <h2 className="text-2xl lg:text-3xl font-bold text-white font-chakra-petch flex items-center gap-3">
                                        <span className="w-2 h-2 bg-blue-300 rounded-full"></span>
                                        Architecture Technique
                                    </h2>
                                    <ul className="space-y-2">
                                        {project.sections.architecture.map((item, index) => (
                                            <li key={index} className="font-rajdhani text-base lg:text-lg text-gray-300 leading-relaxed pl-6 relative before:content-['▹'] before:absolute before:left-0 before:text-blue-300">
                                                <span dangerouslySetInnerHTML={{ __html: item.replace(/\*\*(.*?)\*\*/g, '<strong class="text-white">$1</strong>') }} />
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            )}

                            {/* Features */}
                            {project.sections.features && (
                                <div className="space-y-4">
                                    <h2 className="text-2xl lg:text-3xl font-bold text-white font-chakra-petch flex items-center gap-3">
                                        <span className="w-2 h-2 bg-blue-300 rounded-full"></span>
                                        Fonctionnalités
                                    </h2>
                                    <ul className="space-y-2">
                                        {project.sections.features.map((item, index) => (
                                            <li key={index} className="font-rajdhani text-base lg:text-lg text-gray-300 leading-relaxed pl-6 relative before:content-['▹'] before:absolute before:left-0 before:text-blue-300">
                                                <span dangerouslySetInnerHTML={{ __html: item.replace(/`(.*?)`/g, '<code class="text-blue-300 bg-white/5 px-1">$1</code>') }} />
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            )}

                            {/* Technical Decisions */}
                            {project.sections.technicalDecisions && (
                                <div className="space-y-4">
                                    <h2 className="text-2xl lg:text-3xl font-bold text-white font-chakra-petch flex items-center gap-3">
                                        <span className="w-2 h-2 bg-blue-300 rounded-full"></span>
                                        Décisions Techniques
                                    </h2>
                                    <ul className="space-y-2">
                                        {project.sections.technicalDecisions.map((item, index) => (
                                            <li key={index} className="font-rajdhani text-base lg:text-lg text-gray-300 leading-relaxed pl-6 relative before:content-['▹'] before:absolute before:left-0 before:text-blue-300">
                                                <span dangerouslySetInnerHTML={{ __html: item.replace(/\*\*(.*?)\*\*/g, '<strong class="text-white">$1</strong>').replace(/`(.*?)`/g, '<code class="text-blue-300 bg-white/5 px-1">$1</code>') }} />
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            )}

                            {/* Learnings */}
                            {project.sections.learnings && (
                                <div className="space-y-4">
                                    <h2 className="text-2xl lg:text-3xl font-bold text-white font-chakra-petch flex items-center gap-3">
                                        <span className="w-2 h-2 bg-blue-300 rounded-full"></span>
                                        Apprentissages
                                    </h2>
                                    <ul className="space-y-2">
                                        {project.sections.learnings.map((item, index) => (
                                            <li key={index} className="font-rajdhani text-base lg:text-lg text-gray-300 leading-relaxed pl-6 relative before:content-['▹'] before:absolute before:left-0 before:text-blue-300">
                                                <span dangerouslySetInnerHTML={{ __html: item.replace(/\*\*(.*?)\*\*/g, '<strong class="text-white">$1</strong>').replace(/`(.*?)`/g, '<code class="text-blue-300 bg-white/5 px-1">$1</code>') }} />
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            )}

                            {/* Challenges */}
                            {project.sections.challenges && (
                                <div className="space-y-4">
                                    <h2 className="text-2xl lg:text-3xl font-bold text-white font-chakra-petch flex items-center gap-3">
                                        <span className="w-2 h-2 bg-blue-300 rounded-full"></span>
                                        Défis Rencontrés
                                    </h2>
                                    <ul className="space-y-2">
                                        {project.sections.challenges.map((item, index) => (
                                            <li key={index} className="font-rajdhani text-base lg:text-lg text-gray-300 leading-relaxed pl-6 relative before:content-['▹'] before:absolute before:left-0 before:text-blue-300">
                                                <span dangerouslySetInnerHTML={{ __html: item.replace(/\*\*(.*?)\*\*/g, '<strong class="text-white">$1</strong>').replace(/`(.*?)`/g, '<code class="text-blue-300 bg-white/5 px-1">$1</code>') }} />
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            )}

                            {/* Results */}
                            {project.sections.results && (
                                <div className="space-y-4">
                                    <h2 className="text-2xl lg:text-3xl font-bold text-white font-chakra-petch flex items-center gap-3">
                                        <span className="w-2 h-2 bg-blue-300 rounded-full"></span>
                                        Résultats
                                    </h2>
                                    <ul className="space-y-2">
                                        {project.sections.results.map((item, index) => (
                                            <li key={index} className="font-rajdhani text-base lg:text-lg text-gray-300 leading-relaxed pl-6 relative before:content-['▹'] before:absolute before:left-0 before:text-blue-300">
                                                {item}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            )}

                            {/* Resources */}
                            {project.sections.resources && (
                                <div className="space-y-4">
                                    <h2 className="text-2xl lg:text-3xl font-bold text-white font-chakra-petch flex items-center gap-3">
                                        <span className="w-2 h-2 bg-blue-300 rounded-full"></span>
                                        Ressources
                                    </h2>
                                    <ul className="space-y-2">
                                        {project.sections.resources.map((item, index) => (
                                            <li key={index} className="font-rajdhani text-base lg:text-lg text-gray-300 leading-relaxed pl-6 relative before:content-['▹'] before:absolute before:left-0 before:text-blue-300">
                                                {item}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            )}

                            {/* Code Example */}
                            {project.sections.code && (
                                <div className="space-y-4">
                                    <h2 className="text-2xl lg:text-3xl font-bold text-white font-chakra-petch flex items-center gap-3">
                                        <span className="w-2 h-2 bg-blue-300 rounded-full"></span>
                                        Usage
                                    </h2>
                                    <pre className="bg-black/60 border border-white/20 p-6 overflow-x-auto">
                                        <code className="text-sm text-gray-300 font-mono">{project.sections.code}</code>
                                    </pre>
                                </div>
                            )}

                            {/* Back to Projects */}
                            <div className="pt-8 border-t border-white/20">
                                <Link
                                    href="/#projects"
                                    className="inline-flex items-center gap-2 text-sm font-mono text-blue-300 hover:text-white transition-colors group"
                                >
                                    <span className="group-hover:-translate-x-1 transition-transform">←</span>
                                    Retour aux projets
                                </Link>
                            </div>
                        </div>
                    </section>
                </div>
            </main>
        </>
    );
}
