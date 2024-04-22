import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, } from "@react-three/drei";
import GltfModel from "./GltfModel";
import { Model } from "./Jerry_robot";
import ObjModel from "./ObjModel";
import Loader from "./Loader";
import { EffectComposer } from "@react-three/postprocessing";
import { Outline } from '@react-three/postprocessing'

export default function ModelViewer({ children, src, width, height, position = [10, 10, 10] }) {
  return (
    <Canvas style={{ width: width, height: height }} camera={{ position: position }}>
      <ambientLight intensity={2} />
      {/* <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} /> */}
      {/* <pointLight position={[-10, -10, -10]} /> */}
      <Suspense fallback={<Loader />}>
        {/* <GltfModel modelPath={src} scale={scale} position={position} /> */}
        {/* <EffectComposer>
          <Outline /> */}
        {children}
        {/* </EffectComposer> */}
        {/* <ObjModel scale={scale} position={position} /> */}
        <OrbitControls enableZoom={false} target={[0, 0, 0]} />
      </Suspense>
    </Canvas>
  );
};

