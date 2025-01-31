import { useEffect, useRef } from "react";
import * as THREE from "three";

interface SandstormProps {
  className?: string;
}

const Sandstorm = ({ className }: SandstormProps) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    // Scene setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      120,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });

    const { width, height } = containerRef.current.getBoundingClientRect();
    renderer.setSize(width, height);
    renderer.setClearColor(0xe7dbc6, 0.3);
    containerRef.current.appendChild(renderer.domElement);

    // Create particles with larger spread
    const particleCount = 15000;
    const particles = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3);
    const velocities: { x: number; y: number; z: number }[] = [];

    for (let i = 0; i < particleCount; i++) {
      positions[i * 3] = Math.random() * 120 - 60;
      positions[i * 3 + 1] = Math.random() * 120 - 60;
      positions[i * 3 + 2] = Math.random() * 120 - 60;

      velocities.push({
        x: (Math.random() - 0.5) * 0.15,
        y: (Math.random() - 0.5) * 0.15 - 0.08,
        z: (Math.random() - 0.5) * 0.15,
      });
    }

    particles.setAttribute("position", new THREE.BufferAttribute(positions, 3));

    // Create particle material with adjusted properties
    const particleMaterial = new THREE.PointsMaterial({
      color: 0x8b4513,
      size: 0.12,
      transparent: true,
      opacity: 0.5,
      blending: THREE.AdditiveBlending,
      sizeAttenuation: true,
      alphaMap: (() => {
        // Create canvas for circular alpha map
        const canvas = document.createElement("canvas");
        canvas.width = 32;
        canvas.height = 32;
        const ctx = canvas.getContext("2d")!;

        // Draw gradient circle
        const gradient = ctx.createRadialGradient(16, 16, 0, 16, 16, 16);
        gradient.addColorStop(0, "white");
        gradient.addColorStop(1, "rgba(255, 255, 255, 0)");
        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(16, 16, 16, 0, Math.PI * 2);
        ctx.fill();

        return new THREE.CanvasTexture(canvas);
      })(),
    });

    const particleSystem = new THREE.Points(particles, particleMaterial);
    scene.add(particleSystem);

    camera.position.z = 70;

    // Animation
    const animate = () => {
      requestAnimationFrame(animate);

      const positions = particles.attributes.position.array as Float32Array;
      const bounds = 60;

      for (let i = 0; i < particleCount; i++) {
        const i3 = i * 3;
        positions[i3] += velocities[i].x;
        positions[i3 + 1] += velocities[i].y;
        positions[i3 + 2] += velocities[i].z;

        if (positions[i3 + 1] < -bounds) positions[i3 + 1] = bounds;
        if (positions[i3] < -bounds) positions[i3] = bounds;
        if (positions[i3] > bounds) positions[i3] = -bounds;
        if (positions[i3 + 2] < -bounds) positions[i3 + 2] = bounds;
        if (positions[i3 + 2] > bounds) positions[i3 + 2] = -bounds;
      }

      particles.attributes.position.needsUpdate = true;
      renderer.render(scene, camera);
    };

    // Handle container resize
    const handleResize = () => {
      const { width, height } = containerRef.current!.getBoundingClientRect();
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
    };

    window.addEventListener("resize", handleResize);
    animate();

    // Cleanup
    return () => {
      window.removeEventListener("resize", handleResize);
      containerRef.current?.removeChild(renderer.domElement);
      renderer.dispose();
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className={`absolute top-0 left-0 w-full h-full -z-10 ${className || ""}`}
    />
  );
};

export default Sandstorm;
