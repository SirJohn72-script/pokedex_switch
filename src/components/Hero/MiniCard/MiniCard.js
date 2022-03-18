import React from "react"
import {
  MiniCardContainer,
  MiniCardWrapper,
  MiniCardItem,
  MiniCardItemName,
  MiniCardItemSprite,
} from "./MiniCard.elements"

const MiniCard = ({ listPokemons, pokeSelector }) => {
  return (
    <MiniCardContainer>
      <MiniCardWrapper>
        {listPokemons.map((item, id) => (
          <MiniCardItem
            key={id}
            className="item-card"
            currentPoke={pokeSelector}
          >
            <MiniCardItemSprite>
              <img src={item.sprite} alt={item.nombre} />
            </MiniCardItemSprite>

            <MiniCardItemName>
              {item.nombre}
            </MiniCardItemName>
          </MiniCardItem>
        ))}
      </MiniCardWrapper>
    </MiniCardContainer>
  )
}

export default MiniCard
