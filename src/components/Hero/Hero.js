import Card from "./Card/Card"
import { HeroContainer, HeroWrapper } from "./Hero.elements"
import MiniCard from "./MiniCard/MiniCard"
import Loader from "../Loader/Loader"

const Hero = ({
  showPokemonCard,
  currentPokemon,
  listPokemons,
  pokeSelector,
  heroScroll,
  scrollTop,
  currentPokemonIndex,
  showLoader,
}) => {
  return (
    <HeroContainer
      className="hero-container"
      ref={heroScroll}
    >
      <HeroWrapper>
        {showLoader && <Loader />}
        {!showLoader && (
          <MiniCard
            listPokemons={listPokemons}
            pokeSelector={pokeSelector}
          />
        )}

        <Card
          sprite={currentPokemon.sprite}
          nombre={currentPokemon.nombre}
          numero={currentPokemon.numero}
          base_exp={currentPokemon.base_exp}
          altura={currentPokemon.altura}
          peso={currentPokemon.peso}
          base_stat={currentPokemon.base_stat}
          tipo={currentPokemon.tipo}
          movimientos={currentPokemon.movimientos}
          showPokemonCard={showPokemonCard}
          scrollTop={scrollTop}
        />
      </HeroWrapper>
    </HeroContainer>
  )
}

export default Hero
