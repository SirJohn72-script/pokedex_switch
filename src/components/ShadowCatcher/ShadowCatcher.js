import React from "react"

const ShadowCatcher = () => {
  return (
    <mesh
      position-y={-3}
      rotation-x={Math.PI * -0.5}
      receiveShadow={true}
    >
      <planeBufferGeometry args={[20, 20]} />
      <shadowMaterial opacity={0.2} />
    </mesh>
  )
}

export default ShadowCatcher
