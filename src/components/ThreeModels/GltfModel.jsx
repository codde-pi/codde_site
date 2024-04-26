import React, { useRef, useState } from "react";
import { useLoader, useFrame } from "@react-three/fiber";
// import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { useGLTF } from "@react-three/drei";
import { AnimationMixer, ObjectLoader } from "three";
export default function GltfModel({ modelPath, scale = 0, position = [0, 0, 0] }) {
  const ref = useRef();
  const gltf = useGLTF(modelPath);
  const [hovered, hover] = useState(false);
  // Here's the animation part
  // ************************* 
  /* let mixer
  if (gltf.animations.length) {
    mixer = new AnimationMixer(gltf.scene);
    gltf.animations.forEach(clip => {
      const action = mixer.clipAction(clip)
      action.play();
    });
  }

  useFrame((state, delta) => {
    mixer?.update(delta)
  }) */
  // *************************
  // Subscribe this component to the render-loop, rotate the mesh every frame
  useFrame((state, delta) => (ref.current.rotation.y += 0.003));
  return (
    <>
      <primitive
        ref={ref}
        object={gltf.scene}
        position={position}
        scale={hovered ? scale * 1.2 : scale}
        onPointerOver={(event) => hover(true)}
        onPointerOut={(event) => hover(false)}
      />
    </>
  );
};

