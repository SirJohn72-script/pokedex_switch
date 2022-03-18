import axios from "axios"

export const getPokemon = async (
  url = "https://pokeapi.co/api/v2/pokemon/1/"
) => {
  try {
    const res = await axios.get(url)
    const data = await res.data
    const moves = []
    // copy the movements
    if (data.moves.length > 0 && data.moves.length > 7) {
      for (let i = 0; i < 7; i++) {
        moves.push(data.moves[i].move.name)
      }
    } else {
      for (let i = 0; i < data.moves.length; i++) {
        moves.push(data.moves[i].move.name)
      }
    }
    const pokemon = {
      sprite: data.sprites.front_default,
      nombre: data.name,
      numero: data.order,
      base_exp: data.base_experience,
      base_stat: data.stats[0].base_stat,
      peso: data.weight,
      altura: data.height,
      tipo: data.types[0].type.name,
      movimientos: moves,
    }
    return pokemon
  } catch (error) {
    return error
  }
}
