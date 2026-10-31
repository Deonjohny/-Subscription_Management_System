import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { Sparkles, ArrowRight, ShieldCheck, Zap, BarChart3, Layers, Compass } from 'lucide-react';

interface CinematicEntryProps {
  onEnter: () => void;
}

export const CinematicEntry: React.FC<CinematicEntryProps> = ({ onEnter }) => {
  const mountRef = useRef<HTMLDivElement>(null);
  const [isExiting, setIsExiting] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    // 1. Scene & Camera Setup
    const scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(0x160306, 0.04);

    const camera = new THREE.PerspectiveCamera(
      45,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    camera.position.set(0, 0, 11);

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true, powerPreference: 'high-performance' });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.25;
    container.appendChild(renderer.domElement);

    // 2. Lighting setup (Burgundy & Gold)
    const ambientLight = new THREE.AmbientLight(0x2C060C, 2.0);
    scene.add(ambientLight);

    const keyGoldLight = new THREE.PointLight(0xF1D885, 4.0, 50);
    keyGoldLight.position.set(6, 6, 8);
    scene.add(keyGoldLight);

    const fillBurgundyLight = new THREE.PointLight(0x9E1B32, 3.5, 50);
    fillBurgundyLight.position.set(-7, -5, 6);
    scene.add(fillBurgundyLight);

    const backRimLight = new THREE.DirectionalLight(0xD4AF37, 2.5);
    backRimLight.position.set(0, 10, -6);
    scene.add(backRimLight);

    // 3. Central 3D Geometry: The Brightloop Golden Torus Knot
    const knotGeometry = new THREE.TorusKnotGeometry(2.3, 0.52, 220, 32, 2, 3);
    const knotMaterial = new THREE.MeshStandardMaterial({
      color: 0xD4AF37,
      metalness: 0.92,
      roughness: 0.18,
      emissive: 0x4E0C17,
      emissiveIntensity: 0.28,
    });
    const knotMesh = new THREE.Mesh(knotGeometry, knotMaterial);
    scene.add(knotMesh);

    // 4. Outer Celestial Orbiting Rings (Recurring cycles)
    const ring1Geo = new THREE.TorusGeometry(4.3, 0.035, 16, 120);
    const ringMat1 = new THREE.MeshStandardMaterial({
      color: 0xF1D885,
      metalness: 0.85,
      roughness: 0.2,
      emissive: 0xD4AF37,
      emissiveIntensity: 0.4,
    });
    const ring1 = new THREE.Mesh(ring1Geo, ringMat1);
    ring1.rotation.x = Math.PI / 3;
    scene.add(ring1);

    const ring2Geo = new THREE.TorusGeometry(3.6, 0.025, 16, 120);
    const ringMat2 = new THREE.MeshStandardMaterial({
      color: 0xE5C365,
      metalness: 0.9,
      roughness: 0.25,
      emissive: 0x7B1123,
      emissiveIntensity: 0.3,
    });
    const ring2 = new THREE.Mesh(ring2Geo, ringMat2);
    ring2.rotation.y = Math.PI / 4;
    scene.add(ring2);

    // 5. Floating Gold Stardust Particles
    const particleCount = 1400;
    const particleGeo = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3);
    const scales = new Float32Array(particleCount);

    for (let i = 0; i < particleCount * 3; i += 3) {
      positions[i] = (Math.random() - 0.5) * 30;
      positions[i + 1] = (Math.random() - 0.5) * 20;
      positions[i + 2] = (Math.random() - 0.5) * 25;
      scales[i / 3] = Math.random() * 0.05 + 0.015;
    }

    particleGeo.setAttribute('position', new THREE.BufferAttribute(positions, 3));

    const particleMat = new THREE.PointsMaterial({
      color: 0xF1D885,
      size: 0.08,
      transparent: true,
      opacity: 0.75,
      blending: THREE.AdditiveBlending,
    });
    const particleSystem = new THREE.Points(particleGeo, particleMat);
    scene.add(particleSystem);

    // 6. Interactive Mouse Parallax
    let mouseX = 0;
    let mouseY = 0;
    let targetX = 0;
    let targetY = 0;

    const handleMouseMove = (event: MouseEvent) => {
      mouseX = (event.clientX / window.innerWidth - 0.5) * 2;
      mouseY = (event.clientY / window.innerHeight - 0.5) * 2;
    };
    window.addEventListener('mousemove', handleMouseMove);

    // Handle Resize
    const handleResize = () => {
      if (!container) return;
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    window.addEventListener('resize', handleResize);

    // 7. Render Loop & Warp Transition
    let animationFrameId: number;
    let clock = new THREE.Clock();
    let exitingStartTime: number | null = null;

    setIsLoaded(true);

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      const elapsedTime = clock.getElapsedTime();

      // Smooth mouse follow
      targetX += (mouseX - targetX) * 0.05;
      targetY += (mouseY - targetY) * 0.05;

      // Base rotations
      knotMesh.rotation.x = elapsedTime * 0.28 + targetY * 0.35;
      knotMesh.rotation.y = elapsedTime * 0.35 + targetX * 0.45;
      knotMesh.rotation.z = Math.sin(elapsedTime * 0.2) * 0.15;

      ring1.rotation.z = elapsedTime * 0.18;
      ring1.rotation.x = Math.PI / 3 + targetY * 0.2;
      ring2.rotation.z = -elapsedTime * 0.22;
      ring2.rotation.y = Math.PI / 4 + targetX * 0.2;

      // Particle floating drift
      particleSystem.rotation.y = elapsedTime * 0.03;
      particleSystem.rotation.x = Math.sin(elapsedTime * 0.05) * 0.05;

      // Warp exit camera fly-through
      if (isExiting) {
        if (exitingStartTime === null) exitingStartTime = elapsedTime;
        const exitDelta = elapsedTime - exitingStartTime;

        // Exponential zoom into the heart of the golden loop
        camera.position.z -= exitDelta * exitDelta * 18;
        knotMesh.rotation.z += exitDelta * 0.4;
        knotMaterial.emissiveIntensity = THREE.MathUtils.lerp(knotMaterial.emissiveIntensity, 3.5, 0.1);

        if (camera.position.z <= -2) {
          cancelAnimationFrame(animationFrameId);
          onEnter();
          return;
        }
      } else {
        camera.position.x = targetX * 1.2;
        camera.position.y = -targetY * 0.8;
        camera.lookAt(0, 0, 0);
      }

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
      knotGeometry.dispose();
      knotMaterial.dispose();
      ring1Geo.dispose();
      ringMat1.dispose();
      ring2Geo.dispose();
      ringMat2.dispose();
      particleGeo.dispose();
      particleMat.dispose();
      renderer.dispose();
    };
  }, [isExiting, onEnter]);

  const handleStartWarp = () => {
    setIsExiting(true);
  };

  // Keyboard shortcut: Press Enter or Escape to enter
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Enter' || e.key === 'Escape' || e.key === ' ') {
        handleStartWarp();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <div className={`fixed inset-0 z-50 overflow-hidden bg-[#160306] select-none transition-opacity duration-1000 ${isExiting ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}>
      {/* 3D WebGL Canvas Mount */}
      <div ref={mountRef} className="absolute inset-0 cursor-grab active:cursor-grabbing" />

      {/* Cinematic Vignette & Radial Ambient Light */}
      <div className="absolute inset-0 pointer-events-none bg-radial-gradient from-transparent via-[#2C060C]/35 to-[#160306]/95" />

      {/* Foreground UI Layer */}
      <div className="relative z-10 flex flex-col justify-between h-full p-8 md:p-14 max-w-7xl mx-auto">
        {/* Top Header & Monogram */}
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3.5">
            <div className="w-10 h-10 rounded-full border border-gold-400/40 bg-burgundy-900/80 flex items-center justify-center shadow-gold-glow">
              <span className="font-serif font-black text-sm text-gold-300">BL</span>
            </div>
            <div>
              <div className="text-[10px] tracking-[0.3em] font-serif uppercase text-gold-400 font-bold">
                EST. 2026 • BRIGHTLOOP
              </div>
              <div className="text-xs text-cream-200/70 font-sans tracking-wide">
                Unified Subscription Infrastructure
              </div>
            </div>
          </div>

          <div className="hidden md:flex items-center space-x-3 text-xs text-gold-400/80 bg-burgundy-950/80 px-4 py-1.5 rounded-full border border-gold-500/20 backdrop-blur-md">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="font-medium tracking-wide">System Online • Zero Double-Billing Engine Active</span>
          </div>
        </div>

        {/* Center Title Card & Cinematic Typography */}
        <div className="my-auto max-w-3xl text-center md:text-left pt-12 md:pt-0">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-burgundy-900/70 border border-gold-500/30 text-gold-300 text-xs font-serif tracking-widest uppercase mb-5 backdrop-blur-md shadow-gold-subtle">
            <Sparkles className="w-3.5 h-3.5 text-gold-300" />
            <span>Autonomous Recurring Architecture</span>
          </div>

          <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-cream-100 leading-[1.08] mb-6 drop-shadow-2xl">
            BRIGHTLOOP <br />
            <span className="gold-gradient-text drop-shadow-[0_4px_25px_rgba(212,175,55,0.35)]">
              SOFTWARE
            </span>
          </h1>

          <p className="text-cream-200/85 text-base sm:text-lg md:text-xl font-normal leading-relaxed max-w-2xl mb-8 font-sans drop-shadow">
            Experience complete subscription autonomy. From quote templates and dynamic product variants to idempotent daily billing runs and instant financial intelligence.
          </p>

          {/* Key Value Feature Pills */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-10">
            <div className="bg-burgundy-950/60 border border-gold-500/20 p-3 rounded-xl backdrop-blur-md hover:border-gold-400/50 transition">
              <Zap className="w-4 h-4 text-gold-400 mb-1" />
              <div className="text-[11px] font-bold text-cream-100">Idempotent Runs</div>
              <div className="text-[10px] text-cream-200/60">Zero Skip Guarantee</div>
            </div>
            <div className="bg-burgundy-950/60 border border-gold-500/20 p-3 rounded-xl backdrop-blur-md hover:border-gold-400/50 transition">
              <Layers className="w-4 h-4 text-gold-400 mb-1" />
              <div className="text-[11px] font-bold text-cream-100">Odoo Brand Edition</div>
              <div className="text-[10px] text-cream-200/60">+$560 Dynamic Tier</div>
            </div>
            <div className="bg-burgundy-950/60 border border-gold-500/20 p-3 rounded-xl backdrop-blur-md hover:border-gold-400/50 transition">
              <BarChart3 className="w-4 h-4 text-gold-400 mb-1" />
              <div className="text-[11px] font-bold text-cream-100">Financial Suite</div>
              <div className="text-[10px] text-cream-200/60">&lt; 2s MRR/ARR Ledger</div>
            </div>
            <div className="bg-burgundy-950/60 border border-gold-500/20 p-3 rounded-xl backdrop-blur-md hover:border-gold-400/50 transition">
              <ShieldCheck className="w-4 h-4 text-gold-400 mb-1" />
              <div className="text-[11px] font-bold text-cream-100">Enterprise RBAC</div>
              <div className="text-[10px] text-cream-200/60">Admin &bull; Staff &bull; Portal</div>
            </div>
          </div>

          {/* Interactive Call to Action */}
          <div className="flex flex-col sm:flex-row items-center space-y-3 sm:space-y-0 sm:space-x-5">
            <button
              onClick={handleStartWarp}
              className="w-full sm:w-auto relative group px-8 py-4 rounded-xl bg-gradient-to-r from-gold-500 via-gold-400 to-gold-600 text-burgundy-950 font-serif font-bold text-base tracking-wider uppercase shadow-gold-glow hover:shadow-[0_0_35px_rgba(212,175,55,0.6)] transform hover:-translate-y-0.5 active:translate-y-0 transition-all flex items-center justify-center space-x-3 cursor-pointer overflow-hidden"
            >
              <div className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
              <Compass className="w-5 h-5 text-burgundy-950 group-hover:rotate-45 transition-transform" />
              <span>Enter Command Center</span>
              <ArrowRight className="w-5 h-5 text-burgundy-950 group-hover:translate-x-1 transition-transform" />
            </button>

            <button
              onClick={handleStartWarp}
              className="text-xs font-serif uppercase tracking-widest text-gold-400/80 hover:text-gold-300 transition flex items-center space-x-1.5 py-2 cursor-pointer"
            >
              <span>Press [Enter] or [Esc] to quick enter</span>
            </button>
          </div>
        </div>

        {/* Footer info & 3D Interactive notice */}
        <div className="flex flex-col sm:flex-row items-center justify-between text-[11px] text-cream-200/50 border-t border-gold-500/15 pt-4">
          <div>
            Move your cursor across the screen to interact with the 3D Gold Möbius loop.
          </div>
          <div className="mt-2 sm:mt-0 font-serif tracking-widest text-gold-400/70">
            CINEMATIC THREE.JS &bull; POWERED BY FASTAPI & REACT
          </div>
        </div>
      </div>
    </div>
  );
};
