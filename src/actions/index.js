export const addPokemonData = data => {
  return {
    type: 'ADD_POKEMON_DATA',
    data
  }
}

export const setLoading = bool => {
  return {
    type: 'SET_LOADING',
    bool
  }
}

export const setError = text => {
  return {
    type: "SET_ERROR",
    text
  }
}