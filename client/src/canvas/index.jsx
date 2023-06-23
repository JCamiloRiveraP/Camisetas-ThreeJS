import { Canvas } from '@react-three/fiber';
import { Environment, Center } from '@react-three/drei';
import Camisa from './Camisa';
import Camara from './CamaraVision';
import Fondo from './Fondo';

const CanvasModel = () => {
  return (
      <Canvas shadows camera={{position:[0, 0, 0], fov:25 }} gl={{preserveDrawingBuffer:true}} className='w-full max-w-full h-full transition-all ease-in' >
        <ambientLight intensity={0.5} />
        <Environment preset='city' />
        
        <Camara>
          <Fondo />
          <Center>
            <Camisa />
          </Center>
        </Camara>
      </Canvas>
  )
}

export default CanvasModel