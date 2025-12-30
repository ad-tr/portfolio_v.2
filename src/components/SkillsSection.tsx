"use client";

import { useScrollReveal } from "@/hooks/useScrollReveal";

export default function SkillsSection() {
    const skills = {
        webDev: [
            { name: "Next.js", years: "2", projects: "10+" },
            { name: "React", years: "3", projects: "18+" },
            { name: "TypeScript", years: "3", projects: "20+" },
            { name: "JavaScript", years: "4", projects: "25+" }
        ],
        backend: [
            { name: "Python", years: "4", projects: "15+" },
            { name: "Node.js", years: "3", projects: "12+" },
            { name: "PostgreSQL", years: "3", projects: "12+" },
            { name: "SQL", years: "3", projects: "12+" }
        ],
        ai: [
            { name: "TensorFlow", years: "2", projects: "8+" },
            { name: "LangChain", years: "1", projects: "5+" },
            { name: "OpenAI API", years: "1", projects: "6+" },
            { name: "Machine Learning", years: "2", projects: "10+" }
        ],
        devops: [
            { name: "Git", years: "4", projects: "25+" },
            { name: "Docker", years: "3", projects: "15+" },
            { name: "AWS", years: "2", projects: "10+" },
            { name: "CI/CD", years: "2", projects: "8+" }
        ]
    };

    const headerReveal = useScrollReveal({ threshold: 0.2 });
    const webReveal = useScrollReveal({ threshold: 0.2 });
    const backendReveal = useScrollReveal({ threshold: 0.2 });
    const aiReveal = useScrollReveal({ threshold: 0.2 });
    const devopsReveal = useScrollReveal({ threshold: 0.2 });

    return (
        <section id="skills" className="relative w-full min-h-screen bg-black py-20 lg:py-20">
            {/* Background Grid */}
            <div className="absolute top-0 left-0 w-full h-full z-0 opacity-20 pointer-events-none">
                <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:100px_100px]" />
            </div>

            <div className="w-full max-w-[2500px] mx-auto px-6 lg:px-10 xl:px-20 relative z-10">

                {/* Header - Centré */}
                <div ref={headerReveal.ref} className={`text-center mb-16 lg:mb-24 scroll-reveal ${headerReveal.isVisible ? 'visible' : ''}`}>
                    <div className="flex items-center justify-center gap-3 mb-4">
                        <span className="w-1.5 h-1.5 bg-orange-400 rounded-full animate-pulse"></span>
                        <span className="font-mono text-xs text-orange-400 uppercase tracking-widest">Technical Stack</span>
                        <span className="w-1.5 h-1.5 bg-orange-400 rounded-full animate-pulse"></span>
                    </div>
                    <h2 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-medium tracking-tighter text-white leading-[0.9] mb-6">
                        COMPÉTENCES
                    </h2>
                    <p className="font-rajdhani text-base lg:text-lg text-gray-400 font-medium max-w-2xl mx-auto mb-8">
                        Technologies et outils que je maîtrise pour créer des solutions innovantes.
                    </p>

                    {/* Stats */}
                    <div className="flex items-center justify-center gap-8 lg:gap-12">
                        <div className="text-center">
                            <div className="text-2xl lg:text-3xl font-bold text-white font-chakra-petch">4+</div>
                            <div className="text-xs font-mono text-gray-500 uppercase tracking-widest mt-1">Années</div>
                        </div>
                        <div className="w-px h-8 bg-white/20"></div>
                        <div className="text-center">
                            <div className="text-2xl lg:text-3xl font-bold text-white font-chakra-petch">12</div>
                            <div className="text-xs font-mono text-gray-500 uppercase tracking-widest mt-1">Technologies</div>
                        </div>
                        <div className="w-px h-8 bg-white/20"></div>
                        <div className="text-center">
                            <div className="text-2xl lg:text-3xl font-bold text-orange-400 font-chakra-petch">25+</div>
                            <div className="text-xs font-mono text-gray-500 uppercase tracking-widest mt-1">Projets</div>
                        </div>
                    </div>
                </div>

                {/* Skills Grid - 2x2 */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 mb-12">


                    {/* Web Development */}
                    <div
                        ref={webReveal.ref}
                        className={`relative bg-black/40 backdrop-blur-sm border border-white/20 p-6 lg:p-8 hover:border-orange-400/50 transition-all duration-500 scroll-reveal scroll-reveal-delay-1 ${webReveal.isVisible ? 'visible' : ''}`}
                    >
                        <div className="flex items-center gap-3 mb-6">
                            <div className="w-2 h-2 bg-orange-400 rounded-full"></div>
                            <h3 className="font-mono text-sm text-orange-400 uppercase tracking-widest">Web Development</h3>
                        </div>

                        <div className="space-y-4">
                            {skills.webDev.map((skill, index) => (
                                <div key={skill.name} className="group">
                                    <div className="flex items-center justify-between mb-2">
                                        <div className="flex items-center gap-3">
                                            <span className="font-mono text-sm text-gray-500">{String(index + 1).padStart(2, '0')}</span>
                                            <span className="text-lg lg:text-xl font-bold text-white font-chakra-petch group-hover:text-orange-400 transition-colors">
                                                {skill.name}
                                            </span>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-4 ml-8">
                                        <div className="flex items-center gap-2">
                                            <span className="font-mono text-xs text-gray-500 uppercase">Exp:</span>
                                            <span className="font-mono text-sm text-white">{skill.years} ans</span>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <span className="font-mono text-xs text-gray-500 uppercase">Projects:</span>
                                            <span className="font-mono text-sm text-orange-400">{skill.projects}</span>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="absolute top-4 left-4 w-8 h-8 border-t border-l border-white/20"></div>
                        <div className="absolute bottom-4 right-4 w-8 h-8 border-b border-r border-white/20"></div>
                    </div>

                    {/* Backend Development */}
                    <div
                        ref={backendReveal.ref}
                        className={`relative bg-black/40 backdrop-blur-sm border border-white/20 p-6 lg:p-8 hover:border-orange-400/50 transition-all duration-500 scroll-reveal scroll-reveal-delay-2 ${backendReveal.isVisible ? 'visible' : ''}`}
                    >
                        <div className="flex items-center gap-3 mb-6">
                            <div className="w-2 h-2 bg-orange-400 rounded-full"></div>
                            <h3 className="font-mono text-sm text-orange-400 uppercase tracking-widest">Backend Development</h3>
                        </div>

                        <div className="space-y-4">
                            {skills.backend.map((skill, index) => (
                                <div key={skill.name} className="group">
                                    <div className="flex items-center justify-between mb-2">
                                        <div className="flex items-center gap-3">
                                            <span className="font-mono text-sm text-gray-500">{String(index + 1).padStart(2, '0')}</span>
                                            <span className="text-lg lg:text-xl font-bold text-white font-chakra-petch group-hover:text-orange-400 transition-colors">
                                                {skill.name}
                                            </span>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-4 ml-8">
                                        <div className="flex items-center gap-2">
                                            <span className="font-mono text-xs text-gray-500 uppercase">Exp:</span>
                                            <span className="font-mono text-sm text-white">{skill.years} ans</span>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <span className="font-mono text-xs text-gray-500 uppercase">Projects:</span>
                                            <span className="font-mono text-sm text-orange-400">{skill.projects}</span>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="absolute top-4 left-4 w-8 h-8 border-t border-l border-white/20"></div>
                        <div className="absolute bottom-4 right-4 w-8 h-8 border-b border-r border-white/20"></div>
                    </div>

                    {/* AI & Machine Learning */}
                    <div
                        ref={aiReveal.ref}
                        className={`relative bg-black/40 backdrop-blur-sm border border-white/20 p-6 lg:p-8 hover:border-orange-400/50 transition-all duration-500 scroll-reveal scroll-reveal-delay-3 ${aiReveal.isVisible ? 'visible' : ''}`}
                    >
                        <div className="flex items-center gap-3 mb-6">
                            <div className="w-2 h-2 bg-orange-400 rounded-full"></div>
                            <h3 className="font-mono text-sm text-orange-400 uppercase tracking-widest">AI & Machine Learning</h3>
                        </div>

                        <div className="space-y-4">
                            {skills.ai.map((skill, index) => (
                                <div key={skill.name} className="group">
                                    <div className="flex items-center justify-between mb-2">
                                        <div className="flex items-center gap-3">
                                            <span className="font-mono text-sm text-gray-500">{String(index + 1).padStart(2, '0')}</span>
                                            <span className="text-lg lg:text-xl font-bold text-white font-chakra-petch group-hover:text-orange-400 transition-colors">
                                                {skill.name}
                                            </span>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-4 ml-8">
                                        <div className="flex items-center gap-2">
                                            <span className="font-mono text-xs text-gray-500 uppercase">Exp:</span>
                                            <span className="font-mono text-sm text-white">{skill.years} an{skill.years > '1' ? 's' : ''}</span>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <span className="font-mono text-xs text-gray-500 uppercase">Projects:</span>
                                            <span className="font-mono text-sm text-orange-400">{skill.projects}</span>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="absolute top-4 left-4 w-8 h-8 border-t border-l border-white/20"></div>
                        <div className="absolute bottom-4 right-4 w-8 h-8 border-b border-r border-white/20"></div>
                    </div>

                    {/* DevOps & Tools */}
                    <div
                        ref={devopsReveal.ref}
                        className={`relative bg-black/40 backdrop-blur-sm border border-white/20 p-6 lg:p-8 hover:border-orange-400/50 transition-all duration-500 scroll-reveal scroll-reveal-delay-4 ${devopsReveal.isVisible ? 'visible' : ''}`}
                    >
                        <div className="flex items-center gap-3 mb-6">
                            <div className="w-2 h-2 bg-orange-400 rounded-full"></div>
                            <h3 className="font-mono text-sm text-orange-400 uppercase tracking-widest">DevOps & Tools</h3>
                        </div>

                        <div className="space-y-4">
                            {skills.devops.map((skill, index) => (
                                <div key={skill.name} className="group">
                                    <div className="flex items-center justify-between mb-2">
                                        <div className="flex items-center gap-3">
                                            <span className="font-mono text-sm text-gray-500">{String(index + 1).padStart(2, '0')}</span>
                                            <span className="text-lg lg:text-xl font-bold text-white font-chakra-petch group-hover:text-orange-400 transition-colors">
                                                {skill.name}
                                            </span>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-4 ml-8">
                                        <div className="flex items-center gap-2">
                                            <span className="font-mono text-xs text-gray-500 uppercase">Exp:</span>
                                            <span className="font-mono text-sm text-white">{skill.years} ans</span>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <span className="font-mono text-xs text-gray-500 uppercase">Projects:</span>
                                            <span className="font-mono text-sm text-orange-400">{skill.projects}</span>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="absolute top-4 left-4 w-8 h-8 border-t border-l border-white/20"></div>
                        <div className="absolute bottom-4 right-4 w-8 h-8 border-b border-r border-white/20"></div>
                    </div>

                </div>

            </div>
        </section>
    );
}
