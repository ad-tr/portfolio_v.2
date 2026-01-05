"use client";

import Link from "next/link";
import Image from "next/image";

export default function NotFound() {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-black text-white relative overflow-hidden">
            {/* Background Image - Same as Homepage */}
            <div className="absolute inset-0 w-full h-full z-0">
                <Image
                    src="/images/hero.jpg"
                    alt="Background"
                    fill
                    className="object-cover opacity-60"
                    priority
                />
                <div className="absolute inset-0 bg-black/50" /> {/* Overlay for readability */}
            </div>

            {/* Background Grid */}
            <div className="absolute top-0 left-0 w-full h-full z-0 opacity-20 pointer-events-none">
                <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:100px_100px]" />
            </div>

            <div className="relative z-10 text-center px-4">
                <div className="mb-8 relative inline-block">
                    <h1 className="text-9xl font-bold font-chakra-petch text-white tracking-tighter">
                        404
                    </h1>
                    <div className="absolute -inset-4 bg-blue-500/20 blur-3xl rounded-full -z-10"></div>
                </div>

                <h2 className="text-2xl md:text-3xl font-rajdhani font-medium text-gray-300 mb-6 tracking-wide">
                    SYSTEM_ERROR: PAGE_NOT_FOUND
                </h2>

                <p className="font-mono text-gray-300 mb-10 max-w-md mx-auto">
                    La page que vous recherchez semble avoir disparu dans le néant ou n'a jamais existé.
                </p>

                <Link
                    href="/"
                    className="inline-flex items-center gap-3 px-8 py-3 bg-white text-black font-bold font-chakra-petch tracking-widest"
                >
                    RETOUR À LA BASE
                </Link>
            </div>
        </div>
    );
}
