import React, { useEffect, useState, useRef, useLayoutEffect } from 'react';
import { useFrame, useLoader } from '@react-three/fiber';
// import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { useGLTF } from '@react-three/drei';
import { Html } from '@react-three/drei';
import { Object3D } from 'three/src/core/Object3D';
import { AnimationMixer } from 'three';
import { AnimationClip } from 'three/src/animation/AnimationClip';
import { PerspectiveCamera } from '@react-three/drei';
import { Vector3 } from '@react-three/fiber';

// type modelProps = {
//   scenePath: string;
//   // position: Vector3;
//   // rotation: number[];
// };

// export default function Model({ url }: { url: string }) {
//   const gltf = useGLTF(url, true);
//   const group = useRef()
//   return (
//     <group ref={group} {...props} dispose={null}>
//       <group rotation={[-Math.PI / 2, 0, 0]}>
//         <mesh geometry={gltf.nodes.Mesh_0.geometry} material={gltf.materials.color133_0} position={[2.01, 13.52, 0.6]} />
//         <mesh geometry={gltf.nodes.Mesh_1.geometry} material={gltf.materials.color133_1} position={[2.01, 13.52, 0.6]} />
//         <mesh geometry={gltf.nodes.Mesh_2.geometry} material={gltf.materials.color133_2} position={[2.01, 13.52, 0.6]} />
//         <mesh geometry={gltf.nodes.Mesh_3.geometry} material={gltf.materials.color133_3} position={[2.01, 13.52, 0.6]} />
//         <mesh geometry={gltf.nodes.Mesh_4.geometry} material={gltf.materials.color133_4} position={[2.01, 13.52, 0.6]} />
//       </group>
//     </group>
//   )
// }

// const Model = ({ scenePath, position, rotation, ...rest }: modelProps) => {
//   const gltf = useGLTF(scenePath, true);
//   const mesh = React.useRef();
//   useFrame(() =>
//     rotation && mesh.current
//       ? ((mesh.current.rotation.x += rotation[0]),
//         (mesh.current.rotation.y += rotation[1]),
//         (mesh.current.rotation.z += rotation[2]))
//       : null
//   );
//   return (
//     <mesh castShadow ref={mesh} {...rest} position={position}>
//       <primitive object={gltf.scene} dispose={null} />
//     </mesh>
//   );
// };

// interface group {
//   current: {
//     rotation: {
//       x: number;
//       y: number;
//     };
//   };
// }

interface actions {
  current: {
    idle: {
      play: () => void;
    };
  };
}

// export default function Model() {
//   const group: any = useRef();
//   const actions: any = useRef();

//   const [model, setModel] = useState<Object3D | null>(null);
//   const [animation, setAnimation] = useState<AnimationClip[] | null>(null);

//   const [mixer] = useState(() => new AnimationMixer(null));

//   useEffect(() => {
//     const loader = new GLTFLoader();
//     loader.load('/gltf/scene.gltf', async (gltf) => {
//       const nodes = await gltf.parser.getDependencies('node');
//       const animations = await gltf.parser.getDependencies('animation');
//       setModel(nodes[0]);
//       setAnimation(animations);
//     });
//   }, []);

//   // useEffect(() => {
//   //   if (animation && typeof group.current != 'undefined') {
//   //     actions.current = {
//   //       idle:
//   //         mixer && mixer.clipAction(animation[0], group.current as Object3D),
//   //     };
//   //     actions.current.idle.play();
//   //     return () => animation.forEach((clip) => mixer.uncacheClip(clip));
//   //   }
//   // }, [animation, mixer]);

//   useFrame((_, delta) => mixer.update(delta));
//   useFrame(() => {
//     if (typeof group.current != 'undefined')
//       return (group.current.rotation.y += 0.01);
//   });

//   return (
//     <>
//       {model ? (
//         <group ref={group} position={[0, -150, 0]} dispose={null}>
//           <primitive ref={group} name='object1' object={model} scale={1} />
//         </group>
//       ) : (
//         <Html>Loading...</Html>
//       )}
//     </>
//   );
// }
