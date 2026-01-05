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
        { name: "LinkedIn", href: "https://www.linkedin.com/in/adrien-tranchant-a42754235/" },
        { name: "GitHub", href: "https://github.com/ad-tr" },
    ];

    return (
        <footer className="relative w-full bg-black border-t border-white/20">
            {/* Background Grid */}
            <div className="absolute top-0 left-0 w-full h-full z-0 opacity-20 pointer-events-none">
                <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:50px_50px]" />
            </div>

            <div className="w-full max-w-[2500px] mx-auto relative z-10 px-6 lg:px-20 py-16 lg:py-24">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-8">

                    {/* Column 1: Brand & Identity */}
                    <div className="space-y-6">
                        <div>
                            <h2 className="text-3xl lg:text-4xl font-bold text-white font-chakra-petch tracking-tight mb-2">
                                ADRIEN TRANCHANT
                            </h2>

                            <p className="font-rajdhani text-lg text-gray-300 font-medium max-w-sm">
                                Étudiant en architecture logicielle, aspirant chercheur. Mon objectif : contribuer aux futures avancées de l'IA à travers un doctorat.
                            </p>
                        </div>

                        <div className="border-t border-white/10 pt-2 mt-4">
                            <div className="font-mono text-xs text-blue-300 uppercase tracking-widest mb-2">Me contacter</div>
                            <a href="mailto:adrien@tranchant.ai" className="group flex items-center gap-3 w-fit">
                                <span className="text-xl lg:text-2xl font-chakra-petch font-bold text-white group-hover:text-blue-400 transition-colors">
                                    adrien@tranchant.ai
                                </span>
                                <span className="text-white group-hover:translate-x-1 group-hover:text-blue-400 transition-all">→</span>
                            </a>
                        </div>
                    </div>

                    {/* Column 2: Navigation */}
                    <div className="lg:pl-12">
                        <div className="font-mono text-base text-blue-300 uppercase tracking-widest mb-6">Explorer</div>
                        <nav className="flex flex-col space-y-3">
                            {navigation.map((item) => (
                                <a
                                    key={item.name}
                                    href={item.href}
                                    className="text-lg font-rajdhani font-medium text-gray-300 hover:text-white transition-colors w-fit group flex items-center gap-2"
                                >
                                    <span className="w-0 group-hover:w-2 h-px bg-blue-300 transition-all duration-300"></span>
                                    {item.name}
                                </a>
                            ))}
                        </nav>
                    </div>

                    {/* Column 3: Socials */}
                    <div>
                        <div className="font-mono text-base text-blue-300 uppercase tracking-widest mb-6">Mes réseaux</div>
                        <div className="flex flex-col space-y-3">
                            {socials.map((social) => (
                                <a
                                    key={social.name}
                                    href={social.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-lg font-rajdhani font-medium text-gray-300 hover:text-white transition-colors w-fit group flex items-center gap-2"
                                >
                                    <span className="w-0 group-hover:w-2 h-px bg-blue-300 transition-all duration-300"></span>
                                    {social.name}
                                </a>
                            ))}
                        </div>
                    </div>

                </div>
            </div>

            {/* Bottom Bar */}
            <div className="border-t border-white/10 bg-black/50 backdrop-blur-sm">
                <div className="w-full max-w-[2500px] mx-auto px-6 lg:px-20 py-6 flex flex-col md:flex-row items-center justify-between gap-4">
                    <p className="font-mono text-xs text-gray-600">
                        © {currentYear} Adrien Tranchant. All rights reserved.
                    </p>
                    <div className="flex items-center gap-6">
                        <a href="#" className="font-mono text-xs text-gray-600 hover:text-gray-300 transition-colors">
                            Mentions Légales
                        </a>
                        <a href="#" className="font-mono text-xs text-gray-600 hover:text-gray-300 transition-colors">
                            Politique de Confidentialité
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
