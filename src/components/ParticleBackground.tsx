import { useEffect, useRef, useMemo } from 'react';
import * as THREE from 'three';

const ParticleBackground = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const mousePosition = useRef({ x: 0, y: 0 });

  // Memoize particle system configuration
  const particleConfig = useMemo(() => ({
    count: 1000,
    size: 0.2,
    color: 0x93c5fd, // blue-300
    opacity: 0.8,
  }), []);

  useEffect(() => {
    if (!containerRef.current) return;

    // Scene setup
    const scene = new THREE.Scene();

    // Camera setup with memoized parameters
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.z = 30;

    // Renderer setup with optimized parameters
    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
      powerPreference: 'high-performance'
    });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2)); // Limit pixel ratio for better performance
    containerRef.current.appendChild(renderer.domElement);

    // Optimized particle geometry creation
    const particlesGeometry = new THREE.BufferGeometry();
    const positions = new Float32Array(particleConfig.count * 3);

    for (let i = 0; i < particleConfig.count * 3; i += 3) {
      positions[i] = (Math.random() - 0.5) * 100;
      positions[i + 1] = (Math.random() - 0.5) * 100;
      positions[i + 2] = (Math.random() - 0.5) * 100;
    }

    particlesGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));

    // Optimized material with reduced transparency
    const particlesMaterial = new THREE.PointsMaterial({
      color: particleConfig.color,
      size: particleConfig.size,
      transparent: true,
      opacity: particleConfig.opacity,
      blending: THREE.AdditiveBlending,
      depthWrite: false // Optimize depth testing
    });

    const particleSystem = new THREE.Points(particlesGeometry, particlesMaterial);
    scene.add(particleSystem);

    // Throttled mouse movement handler
    let frameId: number;
    const handleMouseMove = (event: MouseEvent) => {
      cancelAnimationFrame(frameId);
      frameId = requestAnimationFrame(() => {
        mousePosition.current.x = (event.clientX / window.innerWidth) * 2 - 1;
        mousePosition.current.y = -(event.clientY / window.innerHeight) * 2 + 1;
      });
    };

    let resizeTimeout: ReturnType<typeof setTimeout>;
    const handleResize = () => {
      if (!containerRef.current) return;
      clearTimeout(resizeTimeout);
      resizeTimeout = setTimeout(() => {
        // Use container dimensions if possible, or window as fallback
        const width = containerRef.current?.clientWidth || window.innerWidth;
        const height = containerRef.current?.clientHeight || window.innerHeight;

        camera.aspect = width / height;
        camera.updateProjectionMatrix();

        renderer.setSize(width, height);
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
      }, 250);
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    window.addEventListener('resize', handleResize);

    // Initial resize to fit container
    handleResize();

    // Optimized animation loop with RAF
    let animationFrameId: number;
    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);

      particleSystem.rotation.x += 0.0003;
      particleSystem.rotation.y += 0.0003;

      particleSystem.rotation.x += mousePosition.current.y * 0.0002;
      particleSystem.rotation.y += mousePosition.current.x * 0.0002;

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationFrameId);
      cancelAnimationFrame(frameId);
      clearTimeout(resizeTimeout);

      if (containerRef.current) {
        if (containerRef.current.contains(renderer.domElement)) {
          containerRef.current.removeChild(renderer.domElement);
        }
      }
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);

      particlesGeometry.dispose();
      particlesMaterial.dispose();
      renderer.dispose();
    };
  }, [particleConfig]);

  return <div ref={containerRef} className="absolute inset-0 w-full h-full pointer-events-none -z-0" aria-hidden="true" />;
};

export default ParticleBackground;