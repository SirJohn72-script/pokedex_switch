import styled from "styled-components"

export const ControlsContainer = styled.div`
  position: absolute;
  top: ${({ showControls }) =>
    showControls ? "0" : "-100%"};
  left: 0;
  width: 100%;
  height: 100vh;
  z-index: 20000000;
  transition: 0.3s all ease;
  background-color: #5c5c5c;
  transition: 0.3s all ease;
`
export const ControlsWrapper = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  display: flex;
  align-items: center;

  img {
    width: 100%;
  }
`
export const CloseControls = styled.div`
  position: absolute;
  height: 50px;
  line-height: 50px;
  padding: 0 1rem;
  border-radius: 20px;
  top: ${({ showControls }) =>
    showControls ? "0" : "100%"};
  left: 50%;
  transform: translateX(-50%);
  /* background-color: #393939; */
  color: #fff;
  font-family: sans-serif;
  transition: 0.3s all ease;
  cursor: pointer;
`
