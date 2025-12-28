export default function TransitionCurve() {
    return (
        <section className="relative w-full h-24 lg:h-32 bg-black overflow-visible">
            <div className="w-full max-w-[2500px] mx-auto relative h-full">
                <div className="absolute top-0 left-[24.95%] w-px h-[12%] bg-white/20"></div>
                <div className="absolute top-0 left-[74.95%] w-px h-[12%] bg-white/20"></div>

                {/* Aura orange qui sort de dessous l'arc */}
                <div
                    className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 pointer-events-none"
                    style={{
                        background: 'radial-gradient(circle at center top, rgba(251, 146, 60, 0.15) 0%, rgba(251, 146, 60, 0.08) 25%, rgba(251, 146, 60, 0.03) 50%, transparent 70%)',
                        filter: 'blur(20px)',
                    }}
                ></div>

                <svg
                    className="absolute top-0 left-0 w-full h-full"
                    viewBox="0 0 1000 100"
                    preserveAspectRatio="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M 0,50 Q 500,-50 1000,50"
                        fill="none"
                        stroke="rgba(255, 255, 255, 0.2)"
                        strokeWidth="1"
                    />
                </svg>
            </div>
        </section>
    );
}
