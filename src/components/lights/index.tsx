export default function Lights() {
  return (
    <>
      <ambientLight intensity={0.5} />
      {/* <directionalLight
        position={[40, 10, 5]}
        intensity={0.5}
        // color='#FF8A66'
      />
      <directionalLight castShadow position={[10, 20, -100]} intensity={1.3} /> */}
      <spotLight intensity={0.5} position={[90, 100, 50]} castShadow />
    </>
  );
}
