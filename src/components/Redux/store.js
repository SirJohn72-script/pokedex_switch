import {
  createStore,
  combineReducers,
  applyMiddleware,
} from "redux"
import thunk from "redux-thunk"
import { composeWithDevTools } from "redux-devtools-extension"
import { pokemonReducer } from "./pokeReducer"

const rootReducer = combineReducers({
  pokemones: pokemonReducer,
})

export const generateStore = () => {
  const store = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(thunk))
  )
  return store
}
