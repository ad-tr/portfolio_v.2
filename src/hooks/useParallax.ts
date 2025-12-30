"use client";

import { useEffect, useState, useRef } from "react";

interface UseParallaxOptions {
    speed?: number;
    scale?: number;
}

export function useParallax(options: UseParallaxOptions = {}) {
    const { speed = 0.5, scale = 1.3 } = options;
    const [transform, setTransform] = useState({ y: 0, scale: 1 });
    const elementRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleScroll = () => {
            const element = elementRef.current;
            if (!element) return;

            const rect = element.getBoundingClientRect();
            const elementTop = rect.top;
            const elementHeight = rect.height;
            const windowHeight = window.innerHeight;

            // Calculate if element is in viewport
            if (elementTop < windowHeight && elementTop + elementHeight > 0) {
                // Calculate scroll progress (0 to 1) as element moves through viewport
                // 0 = element just entering from bottom, 1 = element just leaving from top
                const scrollProgress = (windowHeight - elementTop) / (windowHeight + elementHeight);

                // Calculate parallax offset (centered around 0)
                const parallaxY = (scrollProgress - 0.5) * 100 * speed;

                // Calculate scale (starts larger, gets smaller as you scroll)
                // This creates depth by making the image appear to recede
                const currentScale = scale - (scrollProgress * (scale - 1));

                setTransform({ y: parallaxY, scale: currentScale });
            }
        };

        handleScroll(); // Initial calculation
        window.addEventListener("scroll", handleScroll, { passive: true });

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, [speed, scale]);

    return { ref: elementRef, transform };
}
