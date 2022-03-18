import styled from "styled-components"

export const CardContainer = styled.div`
  width: 100%;
  height: 100%;
  background-color: white;
  position: absolute;
  top: ${({ scrollTop }) =>
    scrollTop > 0 || scrollTop ? `${scrollTop}px` : "0px"};
  left: ${({ showPokemonCard }) =>
    showPokemonCard ? "0" : "120%"};
  transition: 0.5s all ease;
`

export const CardWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-evenly;
`

export const CardProfile = styled.div`
  padding: 0.5rem;
  width: calc(50% - 1rem);
  height: calc(100% - 1rem);
  display: flex;
  flex-wrap: wrap;
  border-radius: 20px;
  background-color: #019ac2;
`

export const CardImage = styled.div`
  width: 100%;
  height: 100px;
  background-color: white;
  border-radius: 20px;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`

export const CardInfo = styled.div`
  width: 100%;

  h3 {
    width: 100%;
    text-align: center;
    color: white;
    font-size: 1rem;
    font-family: sans-serif;
    text-transform: uppercase;
  }

  h4 {
    width: 100%;
    text-align: center;
    color: white;
    font-size: 0.9rem;
    font-family: sans-serif;
    text-transform: uppercase;
  }
`

export const CardStats = styled.div`
  width: calc(50% - 1rem);
  height: calc(100% - 1rem);
  border: 2px solid #019ac2;
  border-radius: 20px;

  h4 {
    text-align: center;
    color: white;
    font-size: 0.7rem;
    font-family: sans-serif;
    text-transform: uppercase;
    background-color: #019ac2;
    border-top-left-radius: 20px;
    border-top-right-radius: 20px;
  }

  .stats {
    margin-bottom: 0.2rem;
  }

  .movements {
    margin-top: 0.2rem;
    margin-bottom: 0.2rem;
  }
`

export const Stat = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;

  p {
    color: #393939;
    font-size: 0.5rem;
    font-family: sans-serif;
  }
  .stat-title {
    width: 40%;
    padding-left: 0.2rem;
  }

  .stat-data {
    width: 60%;
    text-transform: capitalize;
  }

  .stat-move {
    width: 100%;
    text-transform: capitalize;
    padding-left: 0.2rem;
  }
`
