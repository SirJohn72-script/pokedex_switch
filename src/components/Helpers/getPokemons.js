import axios from "axios"
import { getPokemon } from "../Helpers/GetPokemon"

export const getListPokemons = async (offset = 0) => {
  const url = `https://pokeapi.co/api/v2/pokemon/?limit=21&offset=${offset}`

  try {
    const res = await axios.get(url)
    const pokemons = await res.data.results
    let pokemosList = []
    for (let poke of pokemons) {
      await getPokemon(poke.url).then((data) => {
        pokemosList.push(data)
      })
    }
    return pokemosList
  } catch (error) {
    return error
  }
}
