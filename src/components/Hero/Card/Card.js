import React from "react"
import {
  CardContainer,
  CardImage,
  CardInfo,
  CardProfile,
  CardStats,
  CardWrapper,
  Stat,
} from "./Card.elements"

const Card = ({
  sprite,
  nombre,
  numero,
  base_exp,
  peso,
  altura,
  base_stat,
  tipo,
  movimientos,
  showPokemonCard,
  scrollTop,
}) => {
  return (
    <CardContainer
      showPokemonCard={showPokemonCard}
      scrollTop={scrollTop}
    >
      <CardWrapper>
        <CardProfile>
          <CardImage>
            <img src={sprite} alt="poke-sprite" />
          </CardImage>
          <CardInfo>
            <h3>{nombre}</h3>
            <h4>#{numero}</h4>
          </CardInfo>
        </CardProfile>

        <CardStats>
          <h4 className="stats">STATS</h4>
          <Stat>
            <p className="stat-title">Base level</p>
            <p className="stat-data ">{base_exp}</p>
          </Stat>
          <Stat>
            <p className="stat-title">Altura</p>
            <p className="stat-data ">{altura}</p>
          </Stat>
          <Stat>
            <p className="stat-title">Peso</p>
            <p className="stat-data ">{peso}</p>
          </Stat>
          <Stat>
            <p className="stat-title">Base</p>
            <p className="stat-data ">{base_stat}</p>
          </Stat>
          <Stat>
            <p className="stat-title">Tipo</p>
            <p className="stat-data ">{tipo}</p>
          </Stat>

          <h4 className="movements">Movimientos</h4>
          {movimientos.map((item, id) => (
            <Stat key={id}>
              <p className="stat-move">{item}</p>
            </Stat>
          ))}
        </CardStats>
      </CardWrapper>
    </CardContainer>
  )
}

export default Card
