import { useEffect, useRef } from 'react';
import styled from 'styled-components';
import * as THREE from 'three';
import { gsap } from 'gsap';

const Scene = styled.div`
  position: absolute;
  inset: 0;
  pointer-events: none;
  opacity: 0.62;
`;

function HeroScene() {
  const mountRef = useRef(null);

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return undefined;

    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(42, mount.clientWidth / mount.clientHeight, 0.1, 100);
    camera.position.z = 8;

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true, powerPreference: 'low-power' });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5));
    renderer.setSize(mount.clientWidth, mount.clientHeight);
    mount.appendChild(renderer.domElement);

    const group = new THREE.Group();
    group.position.set(2.8, 0, 0);
    scene.add(group);

    const shape = new THREE.IcosahedronGeometry(2.25, 1);
    const wire = new THREE.LineBasicMaterial({ color: 0xe8b45d, transparent: true, opacity: 0.12 });
    const mesh = new THREE.LineSegments(new THREE.WireframeGeometry(shape), wire);
    group.add(mesh);

    const particleCount = 90;
    const positions = new Float32Array(particleCount * 3);
    for (let index = 0; index < particleCount; index += 1) {
      positions[index * 3] = (Math.random() - 0.5) * 16;
      positions[index * 3 + 1] = (Math.random() - 0.5) * 10;
      positions[index * 3 + 2] = (Math.random() - 0.5) * 5;
    }
    const particlesGeometry = new THREE.BufferGeometry();
    particlesGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    const particlesMaterial = new THREE.PointsMaterial({ color: 0x6f91ad, size: 0.025, transparent: true, opacity: 0.45 });
    const particles = new THREE.Points(particlesGeometry, particlesMaterial);
    scene.add(particles);

    let frameId;
    const render = () => {
      renderer.render(scene, camera);
      if (!reducedMotion) {
        particles.rotation.y += 0.00025;
        frameId = window.requestAnimationFrame(render);
      }
    };
    render();

    const rotationTween = reducedMotion ? null : gsap.to(mesh.rotation, {
      y: Math.PI * 2,
      x: Math.PI * 0.35,
      duration: 28,
      repeat: -1,
      ease: 'none',
    });

    const handlePointer = event => {
      if (reducedMotion) return;
      const x = (event.clientX / window.innerWidth - 0.5) * 0.32;
      const y = (event.clientY / window.innerHeight - 0.5) * 0.2;
      gsap.to(group.position, { x: 2.8 + x, y: -y, duration: 1.2, ease: 'power3.out', overwrite: true });
    };

    const handleResize = () => {
      if (!mount.clientWidth || !mount.clientHeight) return;
      camera.aspect = mount.clientWidth / mount.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(mount.clientWidth, mount.clientHeight);
    };

    window.addEventListener('pointermove', handlePointer, { passive: true });
    window.addEventListener('resize', handleResize);

    return () => {
      window.cancelAnimationFrame(frameId);
      window.removeEventListener('pointermove', handlePointer);
      window.removeEventListener('resize', handleResize);
      rotationTween?.kill();
      gsap.killTweensOf(group.position);
      shape.dispose();
      mesh.geometry.dispose();
      wire.dispose();
      particlesGeometry.dispose();
      particlesMaterial.dispose();
      renderer.dispose();
      renderer.domElement.remove();
    };
  }, []);

  return <Scene ref={mountRef} aria-hidden="true" />;
}

export default HeroScene;
