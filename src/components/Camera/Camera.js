import { PerspectiveCamera } from "@react-three/drei"
import React from "react"

const Camera = ({ cameraPosition }) => {
  return (
    <PerspectiveCamera
      makeDefault
      position={cameraPosition}
      fov={75}
    />
  )
}

export default Camera
