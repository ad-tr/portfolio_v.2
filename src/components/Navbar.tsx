import Link from "next/link";

export default function Navbar() {
    return (
        <nav className="w-full py-4 lg:py-6">
            <div className="flex justify-between items-center w-full">
                <Link href="/" className="text-xl lg:text-2xl font-bold tracking-tight text-white font-chakra-petch uppercase">
                    TRANCHANT.AI
                </Link>

                <div className="flex items-center space-x-4 lg:space-x-6 font-mono text-xs tracking-widest text-gray-400">
                    <Link href="#projects" className="hover:text-white transition-colors uppercase">projects</Link>
                    <Link href="#about" className="hover:text-white transition-colors uppercase">about</Link>
                    <Link href="#contact" className="hover:text-white transition-colors uppercase">contact</Link>
                </div>
            </div>
        </nav>
    );
}
