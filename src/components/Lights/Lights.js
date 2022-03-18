import React from "react"

const Lights = () => {
  return (
    <>
      <directionalLight
        color={"#ffffff"}
        intensity={1.5}
        castShadow={true}
        position={[1.5, 5.5, 2]}
        shadow-camera-near={0.1}
        shadow-mapSize-width={4096}
        shadow-mapSize-height={4096}
        shadow-camera-left={-10}
        shadow-camera-right={10}
        shadow-camera-top={20}
        shadow-camera-bottom={-20}
        shadow-bias={0.000000001}
        target-position={[0, 1, 0]}
        // shadowBias={-0.00001}
      />
      <ambientLight color={"#ffffff"} intensity={0.2} />
    </>
  )
}

export default Lights
