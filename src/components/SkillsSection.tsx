"use client";

import { useScrollReveal } from "@/hooks/useScrollReveal";

export default function SkillsSection() {
    const skills = {
        deepLearning: [
            { name: "PyTorch", years: "2", projects: "4+" },
            { name: "Transformers", years: "1", projects: "2+" },
            { name: "Réseaux de Neurones", years: "3", projects: "5+" },
            { name: "NLP", years: "2", projects: "3+" }
        ],
        machineLearning: [
            { name: "Scikit-Learn", years: "2", projects: "3+" },
            { name: "Analyse de Données", years: "2", projects: "4+" },
            { name: "Feature Engineering", years: "2", projects: "3+" },
            { name: "Apprentissage Supervisé", years: "2", projects: "4+" }
        ],
        programmation: [
            { name: "Python", years: "3", projects: "10+" },
            { name: "JavaScript/TypeScript", years: "2", projects: "5+" },
            { name: "NumPy", years: "3", projects: "6+" },
            { name: "Pandas", years: "2", projects: "4+" }
        ],
        devWeb: [
            { name: "Next.js", years: "2", projects: "3+" },
            { name: "React", years: "2", projects: "4+" },
            { name: "Streamlit", years: "1", projects: "2+" },
            { name: "TailwindCSS", years: "2", projects: "3+" }
        ]
    };

    const headerReveal = useScrollReveal({ threshold: 0.2 });
    const deepLearningReveal = useScrollReveal({ threshold: 0.2 });
    const machineLearningReveal = useScrollReveal({ threshold: 0.2 });
    const programmationReveal = useScrollReveal({ threshold: 0.2 });
    const devWebReveal = useScrollReveal({ threshold: 0.2 });

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
                        <span className="w-1.5 h-1.5 bg-blue-300 rounded-full animate-pulse"></span>
                        <span className="font-mono text-xs text-blue-300 uppercase tracking-widest">Stack technique</span>
                        <span className="w-1.5 h-1.5 bg-blue-300 rounded-full animate-pulse"></span>
                    </div>
                    <h2 className="text-4xl md:text-5xl lg:text-6xl xl:text-5xl font-medium tracking-tighter text-white leading-[0.9] mb-6">
                        COMPÉTENCES
                    </h2>
                    <p className="font-rajdhani text-base lg:text-xl text-gray-400 font-medium max-w-2xl mx-auto mb-8">
                        Technologies que j'apprends et utilise pour mes projets en intelligence artificielle.
                    </p>

                    {/* Stats */}
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-8 lg:gap-12">
                        <div className="text-center">
                            <div className="text-2xl lg:text-3xl font-bold text-white font-chakra-petch">4+</div>
                            <div className="text-sm font-mono text-gray-500 uppercase tracking-widest mt-1">Années</div>
                        </div>
                        <div className="w-full sm:w-px h-px sm:h-8 bg-white/20"></div>
                        <div className="text-center">
                            <div className="text-2xl lg:text-3xl font-bold text-white font-chakra-petch">12</div>
                            <div className="text-sm font-mono text-gray-500 uppercase tracking-widest mt-1">Technologies</div>
                        </div>
                        <div className="w-full sm:w-px h-px sm:h-8 bg-white/20"></div>
                        <div className="text-center">
                            <div className="text-2xl lg:text-3xl font-bold text-blue-300 font-chakra-petch">25+</div>
                            <div className="text-sm font-mono text-gray-500 uppercase tracking-widest mt-1">Projets</div>
                        </div>
                    </div>
                </div>

                {/* Skills Grid - 2x2 */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 mb-12">


                    {/* Deep Learning */}
                    <div
                        ref={deepLearningReveal.ref}
                        className={`relative bg-black/40 backdrop-blur-sm border border-white/20 p-6 lg:p-8 hover:border-blue-300/50 transition-all duration-500 scroll-reveal scroll-reveal-delay-1 ${deepLearningReveal.isVisible ? 'visible' : ''}`}
                    >
                        <div className="flex items-center gap-3 mb-6">
                            <div className="w-2 h-2 bg-blue-300 rounded-full"></div>
                            <h3 className="font-mono text-base text-blue-300 uppercase tracking-widest">Deep Learning</h3>
                        </div>

                        <div className="space-y-4">
                            {skills.deepLearning.map((skill, index) => (
                                <div key={skill.name} className="group">
                                    <div className="flex items-center justify-between mb-2">
                                        <div className="flex items-center gap-3">
                                            <span className="font-mono text-gray-500">{""}</span>
                                            <span className="text-lg lg:text-2xl font-bold text-white font-chakra-petch group-hover:text-blue-300 transition-colors">
                                                {skill.name}
                                            </span>
                                        </div>
                                    </div>
                                    <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-4">
                                        <div className="flex items-center gap-2">
                                            <span className="font-mono text-gray-500 uppercase">Expérience:</span>
                                            <span className="font-mono text-base text-white">{skill.years} ans</span>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <span className="font-mono text-gray-500 uppercase">Projets:</span>
                                            <span className="font-mono text-base text-blue-300">{skill.projects}</span>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="absolute top-4 left-4 w-8 h-8 border-t border-l border-white/20"></div>
                        <div className="absolute bottom-4 right-4 w-8 h-8 border-b border-r border-white/20"></div>
                    </div>

                    {/* Machine Learning */}
                    <div
                        ref={machineLearningReveal.ref}
                        className={`relative bg-black/40 backdrop-blur-sm border border-white/20 p-6 lg:p-8 hover:border-blue-300/50 transition-all duration-500 scroll-reveal scroll-reveal-delay-2 ${machineLearningReveal.isVisible ? 'visible' : ''}`}
                    >
                        <div className="flex items-center gap-3 mb-6">
                            <div className="w-2 h-2 bg-blue-300 rounded-full"></div>
                            <h3 className="font-mono text-base text-blue-300 uppercase tracking-widest">Machine Learning</h3>
                        </div>

                        <div className="space-y-4">
                            {skills.machineLearning.map((skill, index) => (
                                <div key={skill.name} className="group">
                                    <div className="flex items-center justify-between mb-2">
                                        <div className="flex items-center gap-3">
                                            <span className="font-mono text-gray-500">{""}</span>
                                            <span className="text-lg lg:text-2xl font-bold text-white font-chakra-petch group-hover:text-blue-300 transition-colors">
                                                {skill.name}
                                            </span>
                                        </div>
                                    </div>
                                    <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-4">
                                        <div className="flex items-center gap-2">
                                            <span className="font-mono text-gray-500 uppercase">Expérience:</span>
                                            <span className="font-mono text-base text-white">{skill.years} ans</span>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <span className="font-mono text-gray-500 uppercase">Projets:</span>
                                            <span className="font-mono text-base text-blue-300">{skill.projects}</span>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="absolute top-4 left-4 w-8 h-8 border-t border-l border-white/20"></div>
                        <div className="absolute bottom-4 right-4 w-8 h-8 border-b border-r border-white/20"></div>
                    </div>

                    {/* Programmation */}
                    <div
                        ref={programmationReveal.ref}
                        className={`relative bg-black/40 backdrop-blur-sm border border-white/20 p-6 lg:p-8 hover:border-blue-300/50 transition-all duration-500 scroll-reveal scroll-reveal-delay-3 ${programmationReveal.isVisible ? 'visible' : ''}`}
                    >
                        <div className="flex items-center gap-3 mb-6">
                            <div className="w-2 h-2 bg-blue-300 rounded-full"></div>
                            <h3 className="font-mono text-base text-blue-300 uppercase tracking-widest">Programmation</h3>
                        </div>

                        <div className="space-y-4">
                            {skills.programmation.map((skill, index) => (
                                <div key={skill.name} className="group">
                                    <div className="flex items-center justify-between mb-2">
                                        <div className="flex items-center gap-3">
                                            <span className="font-mono text-gray-500">{""}</span>
                                            <span className="text-lg lg:text-2xl font-bold text-white font-chakra-petch group-hover:text-blue-300 transition-colors">
                                                {skill.name}
                                            </span>
                                        </div>
                                    </div>
                                    <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-4">
                                        <div className="flex items-center gap-2">
                                            <span className="font-mono text-gray-500 uppercase">Expérience:</span>
                                            <span className="font-mono text-base text-white">{skill.years} an{skill.years > '1' ? 's' : ''}</span>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <span className="font-mono text-gray-500 uppercase">Projets:</span>
                                            <span className="font-mono text-base text-blue-300">{skill.projects}</span>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="absolute top-4 left-4 w-8 h-8 border-t border-l border-white/20"></div>
                        <div className="absolute bottom-4 right-4 w-8 h-8 border-b border-r border-white/20"></div>
                    </div>

                    {/* Du00e9veloppement Web */}
                    <div
                        ref={devWebReveal.ref}
                        className={`relative bg-black/40 backdrop-blur-sm border border-white/20 p-6 lg:p-8 hover:border-blue-300/50 transition-all duration-500 scroll-reveal scroll-reveal-delay-4 ${devWebReveal.isVisible ? 'visible' : ''}`}
                    >
                        <div className="flex items-center gap-3 mb-6">
                            <div className="w-2 h-2 bg-blue-300 rounded-full"></div>
                            <h3 className="font-mono text-base text-blue-300 uppercase tracking-widest">Du00e9veloppement Web</h3>
                        </div>

                        <div className="space-y-4">
                            {skills.devWeb.map((skill, index) => (
                                <div key={skill.name} className="group">
                                    <div className="flex items-center justify-between mb-2">
                                        <div className="flex items-center gap-3">
                                            <span className="font-mono text-gray-500">{""}</span>
                                            <span className="text-lg lg:text-2xl font-bold text-white font-chakra-petch group-hover:text-blue-300 transition-colors">
                                                {skill.name}
                                            </span>
                                        </div>
                                    </div>
                                    <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-4">
                                        <div className="flex items-center gap-2">
                                            <span className="font-mono text-gray-500 uppercase">Expérience:</span>
                                            <span className="font-mono text-base text-white">{skill.years} ans</span>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <span className="font-mono text-gray-500 uppercase">Projets:</span>
                                            <span className="font-mono text-base text-blue-300">{skill.projects}</span>
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
