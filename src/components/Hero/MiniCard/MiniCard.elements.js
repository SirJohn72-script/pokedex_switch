import styled from "styled-components"

export const MiniCardContainer = styled.div`
  width: 100%;
  height: fit-content;
`

export const MiniCardWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  padding-top: 0.5rem;

  /* .item-card {
    background-color: #393939;
  } */
`

export const MiniCardItem = styled.div`
  width: 90px;
  height: 120px;
  margin-bottom: 0.5rem;
  border-radius: 20px;
  background-color: #019ac2;
  cursor: pointer;
  transition: 0.3s all ease;

  &:nth-child(${({ currentPoke }) => currentPoke}) {
    background-color: #393939;
    transition: 0.3s all ease;
  }
`
export const MiniCardItemSprite = styled.div`
  width: 100%;
  img {
    width: 100%;
  }
`

export const MiniCardItemName = styled.h3`
  width: 100%;
  font-size: 0.7rem;
  color: white;
  text-align: center;
  font-weight: 400;
  font-family: sans-serif;
  text-transform: uppercase;
  padding-bottom: 1rem;
`
