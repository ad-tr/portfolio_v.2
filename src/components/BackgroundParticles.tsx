"use client";

import { useEffect, useRef } from "react";

interface Particle {
    x: number;
    y: number;
    z: number;
    baseSize: number;
    rx: number; // Rotation X
    ry: number; // Rotation Y
    rz: number; // Rotation Z
    rsx: number; // Rotation Speed X
    rsy: number; // Rotation Speed Y
    rsz: number; // Rotation Speed Z
}

export default function BackgroundParticles() {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        let animationFrameId: number;
        let particles: Particle[] = [];

        // 3D Parameters
        const PARTICLE_COUNT = 10; // Fewer particles for cleaner look with line rendering
        const FOCAL_LENGTH = 400;
        const DEPTH = 2000;

        let mouseX = 0;
        let mouseY = 0;

        const resizeCanvas = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
            initParticles();
        };

        const initParticles = () => {
            particles = [];

            for (let i = 0; i < PARTICLE_COUNT; i++) {
                particles.push({
                    x: (Math.random() - 0.5) * canvas.width * 2,
                    y: (Math.random() - 0.5) * canvas.height * 2,
                    z: Math.random() * DEPTH,
                    baseSize: Math.random() * 40 + 20, // Much larger cubes
                    rx: Math.random() * Math.PI * 2,
                    ry: Math.random() * Math.PI * 2,
                    rz: Math.random() * Math.PI * 2,
                    rsx: (Math.random() - 0.5) * 0.05,
                    rsy: (Math.random() - 0.5) * 0.05,
                    rsz: (Math.random() - 0.5) * 0.05
                });
            }
        };

        const drawCube = (p: Particle, centerX: number, centerY: number, opacity: number) => {
            // Cube vertices relative to center (unscaled by perspective yet)
            // baseSize is half-width
            const s = p.baseSize;
            const vertices = [
                { x: -s, y: -s, z: -s }, { x: s, y: -s, z: -s }, { x: s, y: s, z: -s }, { x: -s, y: s, z: -s }, // Front face
                { x: -s, y: -s, z: s }, { x: s, y: -s, z: s }, { x: s, y: s, z: s }, { x: -s, y: s, z: s }  // Back face
            ];

            // Edges (indices of vertices)
            const edges = [
                [0, 1], [1, 2], [2, 3], [3, 0], // Front face
                [4, 5], [5, 6], [6, 7], [7, 4], // Back face
                [0, 4], [1, 5], [2, 6], [3, 7]  // Connecting lines
            ];

            // Rotate, Translate, Project
            const projectedVecs = vertices.map(v => {
                // Rotation
                let x = v.x, y = v.y, z = v.z;

                // Rotate X
                let tempY = y * Math.cos(p.rx) - z * Math.sin(p.rx);
                let tempZ = y * Math.sin(p.rx) + z * Math.cos(p.rx);
                y = tempY; z = tempZ;

                // Rotate Y
                let tempX = x * Math.cos(p.ry) + z * Math.sin(p.ry);
                tempZ = -x * Math.sin(p.ry) + z * Math.cos(p.ry);
                x = tempX; z = tempZ;

                // Rotate Z
                tempX = x * Math.cos(p.rz) - y * Math.sin(p.rz);
                tempY = x * Math.sin(p.rz) + y * Math.cos(p.rz);
                x = tempX; y = tempY;

                // World Position
                const wx = x + p.x;
                const wy = y + p.y;
                const wz = z + p.z; // Move into scene

                if (wz <= -FOCAL_LENGTH) return null; // Behind camera

                // Project
                const scale = FOCAL_LENGTH / (FOCAL_LENGTH + wz);
                return {
                    x: wx * scale + centerX,
                    y: wy * scale + centerY
                };
            });

            ctx.strokeStyle = `rgba(147, 197, 253, ${opacity})`; // blue-300
            ctx.lineWidth = 1;
            ctx.beginPath();

            edges.forEach(([start, end]) => {
                const v1 = projectedVecs[start];
                const v2 = projectedVecs[end];
                if (v1 && v2) {
                    ctx.moveTo(v1.x, v1.y);
                    ctx.lineTo(v2.x, v2.y);
                }
            });

            ctx.stroke();
        };

        const drawParticles = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            const centerX = canvas.width / 2;
            const centerY = canvas.height / 2;

            particles.forEach((p) => {
                // Move
                p.z -= 2;
                if (p.z <= 0) {
                    p.z = DEPTH;
                    p.x = (Math.random() - 0.5) * canvas.width * 2;
                    p.y = (Math.random() - 0.5) * canvas.height * 2;
                }

                // Rotate
                p.rx += p.rsx;
                p.ry += p.rsy;
                p.rz += p.rsz;

                // Opacity
                const opacity = Math.min(1, (1 - p.z / DEPTH)); // Simple linear fade

                drawCube(p, centerX, centerY, opacity);
            });

            animationFrameId = requestAnimationFrame(drawParticles);
        };

        const handleMouseMove = (e: MouseEvent) => {
            mouseX = e.clientX;
            mouseY = e.clientY;
        };

        window.addEventListener("resize", resizeCanvas);
        window.addEventListener("mousemove", handleMouseMove);

        resizeCanvas();
        drawParticles();

        return () => {
            window.removeEventListener("resize", resizeCanvas);
            window.removeEventListener("mousemove", handleMouseMove);
            cancelAnimationFrame(animationFrameId);
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            className="absolute inset-0 w-full h-full pointer-events-none z-0"
        />
    );
}
