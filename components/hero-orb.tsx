'use client'

import { Canvas, useFrame } from '@react-three/fiber'
import { Float, MeshDistortMaterial, Sparkles } from '@react-three/drei'
import { useRef } from 'react'
import type { Mesh } from 'three'

function Orb() {
  const mesh = useRef<Mesh>(null)

  useFrame((_, delta) => {
    if (!mesh.current) return
    mesh.current.rotation.x += delta * 0.12
    mesh.current.rotation.y += delta * 0.18
  })

  return (
    <Float speed={1.8} rotationIntensity={0.5} floatIntensity={1.3}>
      <mesh ref={mesh} scale={2.1}>
        <icosahedronGeometry args={[1.2, 18]} />
        <MeshDistortMaterial
          color="#8b5cf6"
          distort={0.42}
          speed={1.8}
          roughness={0.22}
          metalness={0.78}
          transparent
          opacity={0.78}
        />
      </mesh>
    </Float>
  )
}

export function HeroOrb() {
  return (
    <div className="pointer-events-none absolute inset-x-0 top-10 z-0 mx-auto h-[620px] max-w-6xl opacity-70">
      <Canvas camera={{ position: [0, 0, 6], fov: 45 }} dpr={[1, 1.5]}>
        <ambientLight intensity={0.7} />
        <directionalLight position={[4, 5, 5]} intensity={1.2} />
        <pointLight position={[-4, -3, 3]} intensity={2.2} color="#38bdf8" />
        <Sparkles count={80} scale={7} size={1.2} speed={0.35} opacity={0.45} />
        <Orb />
      </Canvas>
    </div>
  )
}
