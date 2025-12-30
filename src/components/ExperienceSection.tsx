"use client";

import Image from "next/image";
import { useParallax } from "@/hooks/useParallax";
import { useScrollReveal } from "@/hooks/useScrollReveal";

function ExperienceItem({ exp, index }: { exp: any, index: number }) {
    const reveal = useScrollReveal({ threshold: 0.2 });

    return (
        <div
            ref={reveal.ref}
            className={`col-span-12 grid grid-cols-12 border-b border-white/20 scroll-reveal scroll-reveal-delay-${(index % 3) + 1} ${reveal.isVisible ? 'visible' : ''}`}
        >
            {/* Date Block - Always on left */}
            <div className={`col-span-12 lg:col-span-3 relative border-r border-white/20 ${index % 2 === 0 ? 'bg-black/40' : 'bg-black/60'
                } backdrop-blur-sm p-8 lg:p-12 flex items-center justify-center overflow-hidden`}>

                {/* Background Large Year */}
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden">
                    <span className="text-[6rem] font-bold text-white/9 font-chakra-petch leading-none blur-[2px] transform scale-150">
                        {exp.year}
                    </span>
                </div>

                <div className="text-center relative z-10">
                    <div className="text-5xl lg:text-6xl font-bold text-orange-400 font-chakra-petch">
                        {exp.year}
                    </div>
                </div>
                <div className="absolute top-4 left-4 w-8 h-8 border-t border-l border-white/20"></div>
            </div>

            {/* Content Block - Always on right */}
            <div className={`col-span-12 lg:col-span-9 relative ${index % 2 === 0 ? 'bg-black/60' : 'bg-black/40'
                } backdrop-blur-sm p-8 lg:p-12 flex flex-col justify-center`}>
                <h3 className="text-2xl lg:text-3xl font-bold text-white font-chakra-petch leading-tight mb-3 hover:text-orange-400 transition-colors">
                    {exp.title}
                </h3>
                <div className="font-rajdhani text-lg lg:text-xl text-gray-300 font-medium mb-2">
                    {exp.company || exp.school}
                </div>
                <div className="font-mono text-sm text-gray-500 mb-4">
                    📍 {exp.location}
                </div>
                <p className="font-rajdhani text-lg text-gray-400 leading-relaxed mb-6">
                    {exp.description}
                </p>
                <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech: string) => (
                        <span
                            key={tech}
                            className="border border-white/20 px-3 py-1.5 bg-white/5 text-sm text-gray-300 font-mono hover:border-orange-400/50 transition-all"
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
    const imageParallax = useParallax({ speed: 0.3 });
    const experiences = [
        {
            year: "2024",
            title: "Senior Full-Stack Developer",
            company: "Tech Innovation Lab",
            location: "Paris, France",
            description: "Leading AI integration projects and developing scalable web applications.",
            technologies: ["Next.js", "Python", "AWS", "TensorFlow"]
        },
        {
            year: "2023",
            title: "Full-Stack Developer",
            company: "Digital Solutions Inc",
            location: "Remote",
            description: "Developed responsive web applications and RESTful APIs.",
            technologies: ["React", "Node.js", "PostgreSQL"]
        },
        {
            year: "2022",
            title: "Master in Computer Science",
            school: "École Polytechnique",
            location: "Paris, France",
            description: "Specialized in AI and Machine Learning.",
            technologies: ["Python", "TensorFlow", "PyTorch"]
        },
        {
            year: "2021",
            title: "Junior Developer",
            company: "Startup Ventures",
            location: "Paris, France",
            description: "Built MVPs and prototypes for various clients.",
            technologies: ["JavaScript", "React", "Firebase"]
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
                <div ref={imageParallax.ref} className="col-span-12 lg:col-span-5 lg:row-span-6 relative border-r border-b border-white/20 bg-black/40 backdrop-blur-sm overflow-hidden h-[70vh]">
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
                <div className="col-span-12 lg:col-span-7 lg:row-span-6 relative border-b border-white/20 bg-black/60 backdrop-blur-sm p-8 lg:p-12 xl:p-20 flex flex-col justify-center">
                    <div className="font-mono text-xs text-orange-400 uppercase tracking-widest mb-4">Professional Journey</div>
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-medium tracking-tighter text-white leading-[0.9] mb-6">
                        PARCOURS
                    </h2>
                    <p className="font-rajdhani text-base lg:text-lg text-gray-300 font-medium leading-relaxed mb-8">
                        Mon parcours professionnel reflète ma passion pour le développement et l'innovation technologique.
                        De mes débuts en tant que développeur junior à mon rôle actuel de senior full-stack,
                        j'ai acquis une expertise solide en développement web et en intelligence artificielle.
                    </p>
                    <div className="grid grid-cols-3 gap-6">
                        <div>
                            <div className="text-3xl lg:text-4xl font-bold text-orange-400 font-chakra-petch">4+</div>
                            <div className="text-sm font-mono text-gray-500 uppercase tracking-widest mt-1">Années</div>
                        </div>
                        <div>
                            <div className="text-3xl lg:text-4xl font-bold text-orange-400 font-chakra-petch">4</div>
                            <div className="text-sm font-mono text-gray-500 uppercase tracking-widest mt-1">Entreprises</div>
                        </div>
                        <div>
                            <div className="text-3xl lg:text-4xl font-bold text-orange-400 font-chakra-petch">25+</div>
                            <div className="text-sm font-mono text-gray-500 uppercase tracking-widest mt-1">Projets</div>
                        </div>
                    </div>
                    <div className="absolute top-4 right-4 w-12 h-12 border-t border-r border-white/20"></div>
                </div>

                {/* EXPERIENCE BLOCKS - Alternating layout */}
                {experiences.map((exp, index) => (
                    <ExperienceItem key={index} exp={exp} index={index} />
                ))}

            </div>
        </section>
    );
}
