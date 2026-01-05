"use client";

import { useState } from "react";

export default function ContactSection() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: ""
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // TODO: Implement form submission logic
        console.log("Form submitted:", formData);
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    return (
        <section id="contact" className="relative w-full min-h-screen lg:h-screen bg-black overflow-hidden border-t border-white/20">
            {/* Background Grid */}
            <div className="absolute top-0 left-0 w-full h-full z-0 opacity-20 pointer-events-none">
                <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:100px_100px]" />
            </div>

            {/* Main Grid Layout - 12x12 */}
            <div className="w-full max-w-[2500px] h-full mx-auto grid grid-cols-12 auto-rows-auto relative z-10">

                {/* HEADER - Centré (12x2) */}
                <div className="col-span-12 relative border-b border-white/20 bg-black/40 backdrop-blur-sm flex flex-col items-center justify-center px-6 sm:px-8 py-8 sm:py-12 text-center">
                    <div className="flex items-center gap-3 mb-3">
                        <span className="w-1.5 h-1.5 bg-blue-400 rounded-full animate-pulse"></span>
                        <span className="font-mono text-sm text-blue-400 uppercase tracking-widest">Restons en contact</span>
                        <span className="w-1.5 h-1.5 bg-blue-400 rounded-full animate-pulse"></span>
                    </div>
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-medium tracking-tighter text-white leading-[0.9]">
                        CONTACTEZ-MOI
                    </h2>

                    {/* HUD Corners */}
                    <div className="absolute top-4 left-8 w-12 h-12 border-t border-l border-white/20"></div>
                    <div className="absolute top-4 right-8 w-12 h-12 border-t border-r border-white/20"></div>
                </div>

                {/* FORM BLOCK (7x10) */}
                <div className="col-span-12 lg:col-span-7 relative lg:border-r border-b lg:border-b-0 border-white/20 bg-black/40 backdrop-blur-sm p-6 sm:p-8 lg:p-12">
                    <form onSubmit={handleSubmit} className="h-full flex flex-col justify-center max-w-2xl mx-auto lg:mx-0">
                        {/* Name Input */}
                        <div className="mb-6">
                            <label className="block font-mono text-xs text-gray-500 uppercase tracking-widest mb-3">
                                Nom
                            </label>
                            <input
                                type="text"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                                className="w-full bg-black/60 border border-white/20 px-4 py-3 text-white font-rajdhani text-xl focus:border-blue-400 focus:outline-none transition-colors"
                                placeholder="Votre nom"
                            />
                        </div>

                        {/* Email Input */}
                        <div className="mb-6">
                            <label className="block font-mono text-xs text-gray-500 uppercase tracking-widest mb-3">
                                Email
                            </label>
                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                                className="w-full bg-black/60 border border-white/20 px-4 py-3 text-white font-rajdhani text-xl focus:border-blue-400 focus:outline-none transition-colors"
                                placeholder="votre@email.com"
                            />
                        </div>

                        {/* Message Textarea */}
                        <div className="mb-8">
                            <label className="block font-mono text-xs text-gray-500 uppercase tracking-widest mb-3">
                                Message
                            </label>
                            <textarea
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                required
                                rows={6}
                                className="w-full bg-black/60 border border-white/20 px-4 py-3 text-white font-rajdhani text-xl focus:border-blue-400 focus:outline-none transition-colors resize-none"
                                placeholder="Votre message..."
                            />
                        </div>

                        {/* Submit Button */}
                        <button
                            type="submit"
                            className="group relative bg-blue-400 text-black font-mono text-sm uppercase tracking-widest px-8 py-4 hover:bg-white transition-all duration-300 overflow-hidden"
                        >
                            <span className="relative z-10">Envoyer le message</span>
                            <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-blue-400 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                        </button>
                    </form>

                    {/* HUD Corners */}
                    <div className="absolute top-8 left-8 w-12 h-12 border-t border-l border-white/20"></div>
                    <div className="absolute bottom-8 left-8 w-12 h-12 border-b border-l border-white/20"></div>
                </div>

                {/* CONTACT INFO BLOCK (5x10) */}
                <div className="col-span-12 lg:col-span-5 relative bg-black/60 backdrop-blur-sm p-6 sm:p-8 lg:p-12 flex flex-col justify-center">
                    <div className="space-y-8">
                        {/* Email */}
                        <div className="group">
                            <div className="flex items-center gap-3 mb-2">
                                <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                                <h3 className="font-mono text-sm text-blue-400 uppercase tracking-widest">Email</h3>
                            </div>
                            <a
                                href="mailto:adrien.tranchant@edu.esiea.fr"
                                className="text-base sm:text-xl lg:text-2xl font-bold text-white font-chakra-petch hover:text-blue-400 transition-colors block break-all"
                            >
                                adrien.tranchant@edu.esiea.fr
                            </a>
                        </div>

                        {/* LinkedIn */}
                        <div className="group">
                            <div className="flex items-center gap-3 mb-2">
                                <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                                <h3 className="font-mono text-sm text-blue-400 uppercase tracking-widest">LinkedIn</h3>
                            </div>
                            <a
                                href="https://linkedin.com/in/adrien-tranchant"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-base sm:text-xl lg:text-2xl font-bold text-white font-chakra-petch hover:text-blue-400 transition-colors block"
                            >
                                /in/adrien-tranchant
                            </a>
                        </div>

                        {/* GitHub */}
                        <div className="group">
                            <div className="flex items-center gap-3 mb-2">
                                <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                                <h3 className="font-mono text-sm text-blue-400 uppercase tracking-widest">GitHub</h3>
                            </div>
                            <a
                                href="https://github.com/ad-tr"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-base sm:text-xl lg:text-2xl font-bold text-white font-chakra-petch hover:text-blue-400 transition-colors block"
                            >
                                @ad-tr
                            </a>
                        </div>

                        {/* Location */}
                        <div className="group">
                            <div className="flex items-center gap-3 mb-2">
                                <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                                <h3 className="font-mono text-sm text-blue-400 uppercase tracking-widest">Location</h3>
                            </div>
                            <div className="text-base sm:text-xl lg:text-3xl font-bold text-white font-chakra-petch">
                                Paris, France
                            </div>
                        </div>

                        {/* Availability */}
                        <div className="group">
                            <div className="flex items-center gap-3 mb-2">
                                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                                <h3 className="font-mono text-xs text-green-400 uppercase tracking-widest">Status</h3>
                            </div>
                            <div className="text-base sm:text-xl lg:text-3xl font-bold text-white font-chakra-petch">
                                Ouvert aux collaborations
                            </div>
                        </div>
                    </div>

                    {/* HUD Corners */}
                    <div className="absolute top-8 right-8 w-12 h-12 border-t border-r border-white/20"></div>
                    <div className="absolute bottom-8 right-8 w-12 h-12 border-b border-r border-white/20"></div>
                </div>

            </div>
        </section>
    );
}
