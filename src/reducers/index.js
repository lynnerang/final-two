import { combineReducers } from 'redux'
import pokemonDataReducer from './pokemonDataReducer';
import isLoadingReducer from './isLoadingReducer'
import errorReducer from './errorReducer'

const rootReducer = combineReducers({
  pokemonData: pokemonDataReducer,
  isLoading: isLoadingReducer,
  error: errorReducer
})

export default rootReducer