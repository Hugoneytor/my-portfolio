import React from 'react'
import Tilt from 'react-tilt';
import { motion } from 'framer-motion';
import { fadeIn } from '../../utils/motion';

const BallCanvas = ({icon, index}) => {
  return (
    <Tilt>
      <motion.div
        variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
        className="w-full green-pink-gradient p-[1px] rounded-full shadow-card "
      >
        <div 
          options={{
            max: 45,
            scale: 1,
            speed: 450,
          }}
          className="bg-tertiary py-5 flex justify-evenly items-center flex-col rounded-full "
        >
          <img src={icon} className="w-16 h-16 object-contain"/>
        </div>
      </motion.div>
    </Tilt>
  )
}

export default BallCanvas;



// import React, {Suspense} from 'react';
// import { Canvas }from '@react-three/fiber';
// import {
//   Decal, Float, OrbitControls, Preload, useTexture
// } from '@react-three/drei';

// import CanvasLoader from '../Loader';

// const Ball = ( props ) => {
//   const [ decal ] = useTexture([props.imgUrl])
//   return (
//     <Float speed={1.75} rotationIntensity={1} floatIntensity={2}>
//       <ambientLight intensity={0.25}/>
//       <directionalLight position={[0, 0, 0.05]}/>
//       <mesh castShadow receiveShadow scale={2.75}> 
//         <icosahedronGeometry args={ [1,1] }/>
//         <meshStandardMaterial 
//           color="#fff8eb"
//           polygonOffset
//           polygonOffsetFactor={-5}
//           flatShading
//         />
//         <Decal
//           position={[0, 0, 1]}
//           rotation={[2 * Math.PI, 0, 6.25]}
//           map={decal}
//           flatShading
//         >

//         </Decal>
//       </mesh>
//     </Float>
//   )
// }

// const BallCanvas = ( { icon } ) => {
//   return(
//     <Canvas
//       frameloop="demand"
//       gl = { { preserverDrawingBuffer: true } }
//     >
//       <Suspense fallback={ <CanvasLoader /> }>
//         <OrbitControls 
//           autoRotate
//           autoRotateSpeed={5}
//           enableZoom={false}
//         />
//         <Ball imgUrl={icon}/>
//       </Suspense>
//       <Preload all/>
//     </Canvas>
//   )
// }

// export default BallCanvas