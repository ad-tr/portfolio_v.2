"use client";
import { useEffect, useState, useCallback } from 'react';
import { motion, useSpring } from 'framer-motion';

const CustomCursor = () => {
    const [isPointer, setIsPointer] = useState(false);

    const springConfig = { stiffness: 500, damping: 28, mass: 0.5 };
    const dotX = useSpring(0, springConfig);
    const dotY = useSpring(0, springConfig);
    const ringX = useSpring(0, { ...springConfig, stiffness: 250, damping: 20 });
    const ringY = useSpring(0, { ...springConfig, stiffness: 250, damping: 20 });

    const updateCursor = useCallback((e: MouseEvent) => {
        const { clientX, clientY } = e;
        dotX.set(clientX - 4);
        dotY.set(clientY - 4);
        ringX.set(clientX - 16);
        ringY.set(clientY - 16);

        const target = e.target as HTMLElement;
        const computedStyle = window.getComputedStyle(target);
        setIsPointer(computedStyle.cursor === 'pointer' || target.tagName === 'A' || target.tagName === 'BUTTON');
    }, [dotX, dotY, ringX, ringY]);

    useEffect(() => {
        window.addEventListener('mousemove', updateCursor, { passive: true });
        return () => window.removeEventListener('mousemove', updateCursor);
    }, [updateCursor]);

    return (
        <>
            <motion.div
                className="fixed top-0 left-0 w-2 h-2 bg-blue-300 rounded-full pointer-events-none z-[9999]"
                style={{
                    x: dotX,
                    y: dotY,
                    scale: isPointer ? 1.5 : 1,
                }}
            />
            <motion.div
                className="fixed top-0 left-0 w-8 h-8 border border-blue-300 rounded-full pointer-events-none z-[9999]"
                style={{
                    x: ringX,
                    y: ringY,
                    scale: isPointer ? 1.5 : 1,
                }}
            />
        </>
    );
};

export default CustomCursor;
