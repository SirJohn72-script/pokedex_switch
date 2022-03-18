import axios from "axios"

// Initial Data
const pokeData = {
  pokemones: [],
  offset: 0,
  showPokemonCard: false,
  pokemon: {
    sprite: "",
    nombre: "",
    numero: "",
    base_exp: "",
    peso: "",
    altura: "",
    base_stat: "",
    tipo: "",
    movimientos: "",
  },
}

// Constants
const GET_ONE_POKEMON = "GET_0NE_POKEMON"
const GET_NEXT_LIST_POKEMONS = "GET_NEXT_LIST_POKEMONS"
const GET_PREV_LIST_POKEMONS = "GET_PREV_LIST_POKEMONS"
const SHOW_POKEMON_CARDS = "SHOW_POKEMON_CARDS"
const MOVE_SELECTOR = "SHOW_POKEMON_CARDS"

//Reducer
export const pokemonReducer = (
  state = pokeData,
  action
) => {
  switch (action.type) {
    case GET_ONE_POKEMON:
      return { ...state, pokemon: action.payload }

    case SHOW_POKEMON_CARDS:
      return { ...state, showPokemonCard: action.payload }

    default:
      return state
  }
}

// Actions
export const get_one_pokemon =
  (pokeId) => async (dispatch, getState) => {
    try {
      const res = await axios.get(
        `https://pokeapi.co/api/v2/pokemon/${pokeId}/`
      )
      const data = res.data

      // Filter the moves
      const moves = []
      if (data.moves.length > 0 && data.moves.length > 3) {
        for (let i = 0; i < 7; i++) {
          moves.push(data.moves[i].move.name)
        }
      } else {
        for (let i = 0; i < data.moves.length; i++) {
          moves.push(data.moves[i].move.name)
        }
      }

      console.log(data)
      dispatch({
        action: GET_ONE_POKEMON,
        payload: {
          pokemon: {
            sprite: data.sprites.front_default,
            nombre: data.name,
            numero: data.order,
            base_exp: data.base_exp,
            peso: data.weight,
            altura: data.height,
            base_stat: data.stats[0].base_stat,
            tipo: data.types[0].type.name,
            movimientos: moves,
          },
        },
      })
    } catch (error) {}
  }

export const showPokemonCard =
  (dispatch, getState) => async () => {
    try {
      const showPokemonCard = getState().pokemones
      dispatch({
        action: SHOW_POKEMON_CARDS,
        payload: !showPokemonCard,
      })
    } catch (error) {}
  }
