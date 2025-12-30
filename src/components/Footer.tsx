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
                            <p className="font-rajdhani text-lg text-gray-400 font-medium max-w-sm">
                                Creating digital experiences at the intersection of design and artificial intelligence.
                            </p>
                        </div>

                        <div className="flex items-center gap-3">
                            <span className="relative flex h-3 w-3">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                            </span>
                            <span className="font-mono text-sm text-gray-300 uppercase tracking-widest">
                                Available for Work
                            </span>
                        </div>

                        <div className="font-mono text-xs text-gray-600">
                            PARIS_FRANCE // 48.8566° N
                        </div>
                    </div>

                    {/* Column 2: Navigation */}
                    <div className="lg:pl-12">
                        <div className="font-mono text-sm text-orange-400 uppercase tracking-widest mb-6">Explore</div>
                        <nav className="flex flex-col space-y-3">
                            {navigation.map((item) => (
                                <a
                                    key={item.name}
                                    href={item.href}
                                    className="text-lg font-rajdhani font-medium text-gray-300 hover:text-white transition-colors w-fit group flex items-center gap-2"
                                >
                                    <span className="w-0 group-hover:w-2 h-px bg-orange-400 transition-all duration-300"></span>
                                    {item.name}
                                </a>
                            ))}
                        </nav>
                    </div>

                    {/* Column 3: Socials */}
                    <div>
                        <div className="font-mono text-sm text-orange-400 uppercase tracking-widest mb-6">Connect</div>
                        <div className="flex flex-col space-y-3">
                            {socials.map((social) => (
                                <a
                                    key={social.name}
                                    href={social.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-lg font-rajdhani font-medium text-gray-300 hover:text-white transition-colors w-fit group flex items-center gap-2"
                                >
                                    <span className="w-0 group-hover:w-2 h-px bg-orange-400 transition-all duration-300"></span>
                                    {social.name}
                                </a>
                            ))}
                        </div>

                        <div className="mt-8 pt-8 border-t border-white/10">
                            <a href="mailto:contact@adrien-tranchant.com" className="text-xl lg:text-2xl font-chakra-petch font-bold text-white hover:text-orange-400 transition-colors">
                                contact@adrien.com
                            </a>
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
                        <a href="#" className="font-mono text-xs text-gray-600 hover:text-gray-400 transition-colors">
                            Mentions Légales
                        </a>
                        <a href="#" className="font-mono text-xs text-gray-600 hover:text-gray-400 transition-colors">
                            Politique de Confidentialité
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
