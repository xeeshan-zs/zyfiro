'use client';

import { useEffect, useRef } from 'react';
import * as THREE from 'three';

export function ThreeBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    // ── Renderer ──────────────────────────────────────────────────────────
    const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(canvas.offsetWidth, canvas.offsetHeight);
    renderer.setClearColor(0x000000, 0);

    // ── Scene & Camera ────────────────────────────────────────────────────
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, canvas.offsetWidth / canvas.offsetHeight, 0.1, 100);
    camera.position.z = 4;

    // ── Particles ─────────────────────────────────────────────────────────
    const particleCount = 1200;
    const positions = new Float32Array(particleCount * 3);
    const colors = new Float32Array(particleCount * 3);

    const palette = [
      new THREE.Color('#7C3AED'), // violet
      new THREE.Color('#3B82F6'), // blue
      new THREE.Color('#06B6D4'), // cyan
      new THREE.Color('#10B981'), // emerald
    ];

    for (let i = 0; i < particleCount; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 12;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 12;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 8;

      const color = palette[Math.floor(Math.random() * palette.length)];
      colors[i * 3] = color.r;
      colors[i * 3 + 1] = color.g;
      colors[i * 3 + 2] = color.b;
    }

    const particleGeo = new THREE.BufferGeometry();
    particleGeo.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    particleGeo.setAttribute('color', new THREE.BufferAttribute(colors, 3));

    const particleMat = new THREE.PointsMaterial({
      size: 0.025,
      vertexColors: true,
      transparent: true,
      opacity: 0.75,
      sizeAttenuation: true,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    });

    const particles = new THREE.Points(particleGeo, particleMat);
    scene.add(particles);

    // ── Floating Geometric Meshes ─────────────────────────────────────────
    const meshGroup = new THREE.Group();
    scene.add(meshGroup);

    const meshData = [
      { geo: new THREE.IcosahedronGeometry(0.4, 1), pos: [-2.5, 1.2, -1], color: 0x7C3AED },
      { geo: new THREE.OctahedronGeometry(0.3, 0), pos: [2.8, -0.8, -2], color: 0x06B6D4 },
      { geo: new THREE.TetrahedronGeometry(0.35, 0), pos: [-1.2, -1.8, -0.5], color: 0x10B981 },
      { geo: new THREE.IcosahedronGeometry(0.25, 0), pos: [3.2, 1.5, -1.5], color: 0x3B82F6 },
    ];

    const meshes: THREE.Mesh[] = [];
    meshData.forEach(({ geo, pos, color }) => {
      const mat = new THREE.MeshStandardMaterial({
        color,
        wireframe: true,
        transparent: true,
        opacity: 0.3,
      });
      const mesh = new THREE.Mesh(geo, mat);
      mesh.position.set(...(pos as [number, number, number]));
      meshGroup.add(mesh);
      meshes.push(mesh);
    });

    // ── Lights ────────────────────────────────────────────────────────────
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    scene.add(ambientLight);
    const pointLight = new THREE.PointLight(0x7C3AED, 2, 10);
    pointLight.position.set(2, 2, 2);
    scene.add(pointLight);
    const pointLight2 = new THREE.PointLight(0x06B6D4, 1.5, 10);
    pointLight2.position.set(-2, -1, 1);
    scene.add(pointLight2);

    // ── Mouse Parallax ────────────────────────────────────────────────────
    const mouse = { x: 0, y: 0 };
    const target = { x: 0, y: 0 };

    const handleMouseMove = (e: MouseEvent) => {
      mouse.x = (e.clientX / window.innerWidth - 0.5) * 2;
      mouse.y = -(e.clientY / window.innerHeight - 0.5) * 2;
    };
    window.addEventListener('mousemove', handleMouseMove);

    // ── Resize ────────────────────────────────────────────────────────────
    const handleResize = () => {
      const w = canvas.offsetWidth;
      const h = canvas.offsetHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };
    window.addEventListener('resize', handleResize);

    // ── Animation Loop ────────────────────────────────────────────────────
    let rafId: number;
    const clock = new THREE.Clock();

    function animate() {
      rafId = requestAnimationFrame(animate);
      const elapsed = clock.getElapsedTime();

      // Lerp mouse parallax
      target.x += (mouse.x - target.x) * 0.05;
      target.y += (mouse.y - target.y) * 0.05;

      // Rotate particles
      particles.rotation.y = elapsed * 0.04 + target.x * 0.15;
      particles.rotation.x = elapsed * 0.02 + target.y * 0.08;

      // Animate each mesh
      meshes.forEach((mesh, i) => {
        mesh.rotation.x = elapsed * (0.3 + i * 0.1);
        mesh.rotation.y = elapsed * (0.2 + i * 0.15);
        mesh.position.y = meshData[i].pos[1] + Math.sin(elapsed * 0.6 + i * 1.2) * 0.15;
      });

      // Gentle camera drift
      camera.position.x = target.x * 0.3;
      camera.position.y = target.y * 0.2;

      renderer.render(scene, camera);
    }

    animate();

    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      renderer.dispose();
      scene.clear();
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none"
      aria-hidden="true"
    />
  );
}
