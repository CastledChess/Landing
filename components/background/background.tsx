"use client";

import { Canvas } from "@react-three/fiber";
import React, { useMemo, useRef } from "react";
import { useThree, useFrame } from "@react-three/fiber";
import { Vector2 } from "three";
import * as THREE from "three";
import vertexShader from "!!raw-loader!@/components/background/vertex.glsl";
import fragmentShader from "!!raw-loader!@/components/background/fragment.glsl";
import { motion } from "framer-motion";

const ShaderObject = () => {
  const mesh = useRef<THREE.Mesh>(null);

  const { size } = useThree();

  const uniforms = useMemo(
    () => ({
      iTime: { type: "f", value: 1.0 },
      iResolution: { type: "v2", value: new Vector2(4, 3) },
    }),
    [],
  );

  useFrame((_state, delta) => {
    if (!mesh.current) return;

    const material = mesh.current.material as THREE.ShaderMaterial;
    material.uniforms.iTime.value += delta;
    material.uniforms.iResolution.value.set(size.width, size.height, 1);
  });

  return (
    <mesh ref={mesh}>
      <planeGeometry args={[size.width, size.height]} />
      <shaderMaterial
        uniforms={uniforms}
        vertexShader={vertexShader}
        fragmentShader={fragmentShader}
      />
    </mesh>
  );
};

const Background = () => {
  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { duration: 2, delay: 1 } }}
        className="absolute top-0 left-0 h-full [mask-image:url(/images/grain.svg)] w-full"
      >
        <Canvas
          orthographic={true}
          dpr={typeof window === "undefined" ? 1 : window.devicePixelRatio}
        >
          <ShaderObject />
        </Canvas>
      </motion.div>
      <div className="h-full w-full absolute top-0 left-0 bg-radial from-transparent via-background via-60% to-background" />
    </>
  );
};

export default Background;
