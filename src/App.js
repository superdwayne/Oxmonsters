// App.js
import React , { useState} from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls , useGLTF } from '@react-three/drei';
import './App.css'


function Monstertwo() {
  const { nodes, materials } = useGLTF('/3-smile.glb')
  return (
    <group dispose={null}>
      <group position={[0, 0.5, 0]} scale={0.3}>
        <mesh geometry={nodes.BezierCurve328.geometry} material={materials['Material.008']} />
        <mesh geometry={nodes.BezierCurve328_1.geometry} material={materials['Material.011']} />
        <mesh geometry={nodes.BezierCurve328_2.geometry} material={materials['Material.012']} />
        <mesh geometry={nodes.BezierCurve328_3.geometry} material={materials.Material} />
        <mesh geometry={nodes.BezierCurve328_4.geometry} material={materials.material_78} />
        <mesh geometry={nodes.BezierCurve328_5.geometry} material={materials['Material.001']} />
        <mesh geometry={nodes.BezierCurve328_6.geometry} material={materials.PURPLE} />
      </group>
    </group>
  )
}

function Monsterone() {
  const { nodes, materials } = useGLTF('/v1-mesh.glb')
  return (
    <group dispose={null}>
      <group position={[0, 0, 0]}>
        <mesh geometry={nodes.BezierCurve016.geometry} material={materials.Material} />
        <mesh geometry={nodes.BezierCurve016_1.geometry} material={materials['Material.014']} />
        <mesh geometry={nodes.BezierCurve016_2.geometry} material={materials['Material.003']} />
        <mesh geometry={nodes.BezierCurve016_3.geometry} material={materials['Material.001']} />
        <mesh geometry={nodes.BezierCurve016_4.geometry} material={materials['Material.002']} />
        <mesh geometry={nodes.BezierCurve016_5.geometry} material={materials['teeth.003']} />
        <mesh geometry={nodes.BezierCurve016_6.geometry} material={materials['Material.009']} />
        <mesh geometry={nodes.BezierCurve016_7.geometry} material={materials['Material.006']} />
        <mesh geometry={nodes.BezierCurve016_8.geometry} material={materials['Material.008']} />
        <mesh geometry={nodes.BezierCurve016_9.geometry} material={materials['Material.007']} />
      </group>
    </group>
  )
}


function App() {
  // State to manage which model is displayed
  const [selectedModel, setSelectedModel] = useState('monsterone');

  return (
    <div>
      {/* Buttons to switch between models */}
      <div style={{ position: 'absolute', top: 20, left: 20 }}>
        <button onClick={() => setSelectedModel('monsterone')}>Model One</button>
        <button onClick={() => setSelectedModel('monstertwo')}>Model Two</button>
      </div>

      {/* Canvas to display the 3D scene */}
      <Canvas  shadowMap camera={{ fov: 1.9, position: [0, 10, 50] }} style={{ width: '100vw', height: '100vh', position: 'static' }}>
        <OrbitControls />
        <ambientLight intensity={0.5} />
        <directionalLight position={[5, 5, 5]} intensity={1} />

        {/* Conditionally render the selected model */}
        {selectedModel === 'monsterone' && <Monsterone />}
        {selectedModel === 'monstertwo' && <Monstertwo />}
      </Canvas>
    </div>
  );
}


export default App;
