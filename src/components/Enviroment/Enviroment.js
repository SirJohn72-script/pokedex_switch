import { Environment } from "@react-three/drei"
import React, { Suspense } from "react"

const Enviroment = () => {
  return (
    <>
      <Suspense fallback={null}>
        <Environment
          files={"./hdr/spaichingen_hill_1k.hdr"}
        />
      </Suspense>
    </>
  )
}

export default Enviroment
