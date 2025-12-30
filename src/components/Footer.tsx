export default function Footer() {
    const currentYear = new Date().getFullYear();

    const navigation = [
        { name: "Accueil", href: "#hero" },
        { name: "À Propos", href: "#about" },
        { name: "Projets", href: "#projects" },
        { name: "Compétences", href: "#skills" },
        { name: "Parcours", href: "#experience" }
    ];

    const socials = [
        { name: "LinkedIn", href: "https://linkedin.com/in/adrien-tranchant" },
        { name: "GitHub", href: "https://github.com/ad-tr" },
        { name: "Twitter", href: "https://twitter.com/adrien_tr" }
    ];

    return (
        <footer className="relative w-full h-screen bg-black overflow-hidden">
            {/* Background Grid */}
            <div className="absolute top-0 left-0 w-full h-full z-0 opacity-20 pointer-events-none">
                <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:100px_100px]" />
            </div>

            {/* Main Grid Layout - 12x12 */}
            <div className="w-full max-w-[2500px] h-full mx-auto grid grid-cols-12 grid-rows-12 relative z-10">

                {/* HEADER BLOCK (12x3) */}
                <div className="col-span-12 row-span-3 relative border-b border-white/20 bg-black/40 backdrop-blur-sm flex flex-col items-center justify-center px-8 text-center">
                    <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white font-chakra-petch mb-4">
                        ADRIEN TRANCHANT
                    </h2>
                    <p className="font-rajdhani text-lg text-gray-400 font-medium">
                        Full-Stack Developer & AI Specialist
                    </p>
                    <div className="flex items-center gap-2 mt-4">
                        <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                        <span className="font-mono text-xs text-gray-500 uppercase tracking-widest">
                            Available for Work
                        </span>
                    </div>
                    <div className="absolute top-4 left-8 w-12 h-12 border-t border-l border-white/20"></div>
                    <div className="absolute top-4 right-8 w-12 h-12 border-t border-r border-white/20"></div>
                </div>

                {/* NAVIGATION BLOCK (6x6) */}
                <div className="col-span-12 lg:col-span-6 row-span-6 relative border-r border-b border-white/20 bg-black/60 backdrop-blur-sm p-6 lg:p-10 flex flex-col justify-center">
                    <div className="font-mono text-xs text-orange-400 uppercase tracking-widest mb-6">Navigation</div>
                    <nav className="space-y-4">
                        {navigation.map((item) => (
                            <a
                                key={item.name}
                                href={item.href}
                                className="group flex items-center gap-3 font-rajdhani text-2xl lg:text-3xl text-white hover:text-orange-400 transition-colors"
                            >
                                <span className="w-2 h-2 bg-white/20 group-hover:bg-orange-400 transition-colors"></span>
                                {item.name}
                            </a>
                        ))}
                    </nav>
                    <div className="absolute top-4 left-4 w-8 h-8 border-t border-l border-white/20"></div>
                </div>

                {/* SOCIAL BLOCK (6x6) */}
                <div className="col-span-12 lg:col-span-6 row-span-6 relative border-b border-white/20 bg-black/40 backdrop-blur-sm p-6 lg:p-10 flex flex-col justify-center">
                    <div className="font-mono text-xs text-orange-400 uppercase tracking-widest mb-6">Connect</div>
                    <div className="space-y-4">
                        {socials.map((social) => (
                            <a
                                key={social.name}
                                href={social.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group flex items-center gap-3 font-rajdhani text-2xl lg:text-3xl text-white hover:text-orange-400 transition-colors"
                            >
                                <span className="w-2 h-2 bg-white/20 group-hover:bg-orange-400 transition-colors"></span>
                                {social.name}
                            </a>
                        ))}
                    </div>
                    <div className="absolute top-4 right-4 w-8 h-8 border-t border-r border-white/20"></div>
                </div>

                {/* COPYRIGHT BLOCK (12x3) */}
                <div className="col-span-12 row-span-3 relative bg-black/60 backdrop-blur-sm flex items-center justify-between px-8 lg:px-20">
                    <p className="font-mono text-xs text-gray-500">
                        © {currentYear} Adrien Tranchant. All rights reserved.
                    </p>
                    <div className="flex items-center gap-6">
                        <a href="#" className="font-mono text-xs text-gray-500 hover:text-orange-400 transition-colors">
                            Mentions Légales
                        </a>
                        <a href="#" className="font-mono text-xs text-gray-500 hover:text-orange-400 transition-colors">
                            Politique de Confidentialité
                        </a>
                    </div>
                    <div className="absolute bottom-4 left-8 w-12 h-12 border-b border-l border-white/20"></div>
                    <div className="absolute bottom-4 right-8 w-12 h-12 border-b border-r border-white/20"></div>
                </div>

            </div>
        </footer>
    );
}
