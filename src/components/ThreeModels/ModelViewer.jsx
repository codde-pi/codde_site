import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, } from "@react-three/drei";
import Loader from "./Loader";

export default function ModelViewer({ children, src, width, height, position = [10, 10, 10], title }) {
  return (
    <Canvas style={{ width: width, height: height }} camera={{ position: position }} title={
      title + ", &lt;https://creativecommons.org/licenses/by-nc-nd/4.0/&gt; Creative Commons Mathis Lecomte"
    }>
      <ambientLight intensity={2} />
      <Suspense fallback={<Loader />}>
        {children}
        <OrbitControls enableZoom={false} target={[0, 0, 0]} />
      </Suspense>
    </Canvas>
  );
};

