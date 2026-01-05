"use client";

import Image from "next/image";
import { useParallax } from "@/hooks/useParallax";
import { useScrollReveal } from "@/hooks/useScrollReveal";

function ExperienceItem({ exp, index }: { exp: any, index: number }) {
    const reveal = useScrollReveal({ threshold: 0.2 });

    return (
        <div
            ref={reveal.ref}
            className={`col-span-12 group grid grid-cols-12 border border-white/20 lg:border-0 lg:border-b scroll-reveal scroll-reveal-delay-${(index % 3) + 1} ${reveal.isVisible ? 'visible' : ''} hover:border-blue-300/50 lg:hover:border-white/20 transition-all duration-500`}
        >
            {/* Date Block - Always on left */}
            <div className={`col-span-12 lg:col-span-3 relative lg:border-r border-b border-white/20 ${index % 2 === 0 ? 'bg-black/40' : 'bg-black/60'
                } backdrop-blur-sm p-6 sm:p-8 lg:p-12 flex items-center justify-center overflow-hidden`}>

                {/* Background Large Year */}
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden">
                    <span className="text-[4rem] sm:text-[6rem] font-bold text-white/9 font-chakra-petch leading-none blur-[2px] transform scale-150">
                        {exp.year}
                    </span>
                </div>

                <div className="text-center relative z-10">
                    <div className="text-5xl lg:text-6xl font-bold text-blue-300 font-chakra-petch">
                        {exp.year}
                    </div>
                </div>
                <div className="absolute top-4 left-4 w-8 h-8 border-t border-l border-white/20"></div>
            </div>

            {/* Content Block - Always on right */}
            <div className={`col-span-12 lg:col-span-9 relative ${index % 2 === 0 ? 'bg-black/60' : 'bg-black/40'
                } backdrop-blur-sm p-6 sm:p-8 lg:p-12 flex flex-col justify-center`}>
                <h3 className="text-2xl lg:text-3xl font-bold text-white font-chakra-petch leading-tight mb-3 group-hover:text-blue-300 lg:group-hover:text-white lg:hover:text-blue-300 transition-colors">
                    {exp.title}
                </h3>
                <div className="font-rajdhani text-lg lg:text-xl text-gray-300 font-medium mb-2">
                    {exp.company || exp.school}
                </div>
                <div className="font-mono text-sm text-gray-500 mb-4">
                    📍 {exp.location}
                </div>
                <p className="font-rajdhani text-lg lg:text-xl text-gray-400 leading-relaxed mb-6">
                    {exp.description}
                </p>
                <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech: string) => (
                        <span
                            key={tech}
                            className="border border-white/20 px-3 py-1.5 bg-white/5 text-base text-gray-300 font-mono hover:border-blue-300/50 transition-all"
                        >
                            {tech}
                        </span>
                    ))}
                </div>
                <div className="absolute bottom-4 right-4 w-8 h-8 border-b border-r border-white/20"></div>
            </div>
        </div>
    );
}

export default function ExperienceSection() {
    const imageParallax = useParallax({ speed: 1.5 });
    const experiences = [
        {
            year: "2025",
            title: "Projets d'Apprentissage en IA",
            company: "Projets personnels",
            location: "Remote",
            description: "J'apprends le deep learning en réimplémentant des concepts : modèle type GPT, tokenizer BPE, réseaux de neurones. Mon objectif est de comprendre comment tout fonctionne en profondeur.",
            technologies: ["Python", "PyTorch", "Transformers", "NumPy"]
        },
        {
            year: "2023",
            title: "Challenges Kaggle",
            company: "Apprentissage pratique",
            location: "Remote",
            description: "Je participe à des compétitions machine learning pour pratiquer l'analyse de données et l'optimisation de modèles. C'est une bonne façon d'apprendre en résolvant des problèmes réels.",
            technologies: ["Python", "Scikit-Learn", "Pandas", "NumPy"]
        },
        {
            year: "2022",
            title: "Bachelor Architecture des Logiciels",
            school: "ESGI Reims",
            location: "Reims, France",
            description: "Formation en développement logiciel, bases de données et systèmes d'information. Une base solide pour comprendre l'ingénierie derrière l'IA.",
            technologies: ["JavaScript", "TypeScript", "Next.js", "SQL"]
        },
        {
            year: "2022",
            title: "Baccalauréat",
            school: "Lycée",
            location: "France",
            description: "Spécialités Physique-Chimie et NSI (Numérique Sciences Informatiques). Mes premiers pas en programmation et algorithmique.",
            technologies: ["Python", "Algorithmes", "Mathématiques"]
        }
    ];

    return (
        <section id="experience" className="relative w-full min-h-screen bg-black overflow-hidden">
            {/* Background Grid */}
            <div className="absolute top-0 left-0 w-full h-full z-0 opacity-20 pointer-events-none">
                <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:100px_100px]" />
            </div>

            {/* Main Grid Layout - 12x12 */}
            <div className="w-full max-w-[2500px] h-full mx-auto grid grid-cols-12 auto-rows-auto relative z-10">

                {/* IMAGE BLOCK (5x6) - Like About Section */}
                {/* IMAGE BLOCK (5x6) - Like About Section */}
                <div ref={imageParallax.ref} className="col-span-12 lg:col-span-5 lg:row-span-6 relative lg:border-r border-b border-white/20 bg-black/40 backdrop-blur-sm overflow-hidden h-[50vh] lg:h-[70vh]">
                    <div
                        style={{
                            transform: `translateY(${imageParallax.transform.y}px) scale(${imageParallax.transform.scale})`,
                            transition: 'transform 0.1s ease-out'
                        }}
                        className="w-full h-full"
                    >
                        <Image
                            src="/images/experience.jpg"
                            alt="Professional Journey"
                            fill
                            className="object-cover object-center"
                        />
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-br from-black/60 via-black/40 to-transparent pointer-events-none"></div>
                    <div className="absolute top-4 left-4 w-12 h-12 border-t border-l border-white/20 pointer-events-none"></div>
                </div>

                {/* TEXT BLOCK (7x6) - Like About Section */}
                <div className="col-span-12 lg:col-span-7 lg:row-span-6 relative border-b border-white/20 bg-black/60 backdrop-blur-sm p-6 sm:p-8 lg:p-12 xl:p-20 flex flex-col justify-center">
                    <div className="font-mono text-xs text-blue-300 uppercase tracking-widest mb-4">Professional Journey</div>
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-medium tracking-tighter text-white leading-[0.9] mb-6">
                        PARCOURS
                    </h2>
                    <p className="font-rajdhani text-base lg:text-xl text-gray-300 font-medium leading-relaxed mb-8">
                        Je passe du développement logiciel à l'ingénierie IA avec une conviction : pour comprendre, il faut construire. Je déconstruis et recode les architectures modernes pour maîtriser ce qui se passe sous le capot, au-delà des simples abstractions.
                    </p>
                    <div className="absolute top-4 right-4 w-12 h-12 border-t border-r border-white/20"></div>
                </div>

                {/* EXPERIENCE BLOCKS - Alternating layout */}
                <div className="col-span-12 grid grid-cols-12 lg:contents gap-y-6 px-6 lg:px-0 lg:gap-0 mt-6 lg:mt-0">
                    {experiences.map((exp, index) => (
                        <ExperienceItem key={index} exp={exp} index={index} />
                    ))}
                </div>

            </div>
        </section>
    );
}
