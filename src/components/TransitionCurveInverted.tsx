export default function TransitionCurveInverted() {
    return (
        <section className="relative w-full h-24 lg:h-32 overflow-visible">
            <div className="w-full max-w-[2500px] mx-auto relative h-full">
                {/* Vertical borders */}
                <div className="absolute top-0 left-[24.95%] w-px h-[12%] bg-white/20"></div>
                <div className="absolute top-0 left-[74.95%] w-px h-[12%] bg-white/20"></div>
 
                <svg
                    className="absolute top-0 left-0 w-full h-full"
                    viewBox="0 0 1000 100"
                    preserveAspectRatio="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    {/* Courbe convexe (bosse) inversée */}
                    <path
                        d="M 0,50 Q 500,150 1000,50"
                        fill="none"
                        stroke="rgba(255, 255, 255, 0.2)"
                        strokeWidth="1"
                    />
                </svg>
            </div>
        </section>
    );
}
