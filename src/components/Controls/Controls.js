import React from "react"
import {
  CloseControls,
  ControlsContainer,
  ControlsWrapper,
} from "./Controls.elements"

const Controls = ({ showControls, setShowControls }) => {
  return (
    <ControlsContainer showControls={showControls}>
      <ControlsWrapper>
        <img src={"../../controls.png"} alt="controls" />
        <CloseControls
          showControls={showControls}
          onClick={() => setShowControls(!showControls)}
        >
          <p>Cerrar Controles </p>
        </CloseControls>
      </ControlsWrapper>
    </ControlsContainer>
  )
}

export default Controls
