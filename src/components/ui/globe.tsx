"use client";

import React, { useEffect, useMemo, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import * as THREE from "three";
import ThreeGlobe from "three-globe";

type ArcDatum = {
  startLat: number;
  startLng: number;
  endLat: number;
  endLng: number;
  color?: string;
};

function GlobeObject({ arcs }: { arcs: ArcDatum[] }) {
  const globeRef = useRef<ThreeGlobe | null>(null);

  const globe = useMemo(() => {
    const g = new ThreeGlobe()
      .globeImageUrl("//unpkg.com/three-globe/example/img/earth-dark.jpg")
      .bumpImageUrl("//unpkg.com/three-globe/example/img/earth-topology.png")
      .showAtmosphere(true)
      .atmosphereColor("#3b82f6")
      .atmosphereAltitude(0.18);

    const material = g.globeMaterial() as THREE.MeshPhongMaterial;
    material.color = new THREE.Color("#0b1220");
    material.emissive = new THREE.Color("#050a14");
    material.emissiveIntensity = 0.15;
    material.shininess = 0.7;

    return g;
  }, []);

  useEffect(() => {
    globeRef.current = globe;

    globe
      .arcsData(arcs)
      .arcColor((d: any) => d.color ?? "#60a5fa")
      .arcAltitude(0.2)
      .arcStroke(0.8)
      .arcDashLength(0.5)
      .arcDashGap(1.2)
      .arcDashAnimateTime(2200);
  }, [arcs, globe]);

  useFrame(() => {
    globe.rotation.y += 0.0018;
  });

  return <primitive object={globe} />;
}

export function Globe({
  className,
  arcs,
}: {
  className?: string;
  arcs: ArcDatum[];
}) {
  return (
    <div className={className}>
      <Canvas camera={{ position: [0, 0, 320], fov: 45 }}>
        <ambientLight intensity={0.6} />
        <directionalLight position={[200, 200, 200]} intensity={1.2} />
        <pointLight position={[-200, -200, -200]} intensity={0.6} />

        <GlobeObject arcs={arcs} />
        <OrbitControls
          enableZoom={false}
          enablePan={false}
          rotateSpeed={0.6}
          minPolarAngle={Math.PI / 4}
          maxPolarAngle={(3 * Math.PI) / 4}
        />
      </Canvas>
    </div>
  );
}

