const pokemonDataReducer = (state = [], action) => {
  switch (action.type) {
    case 'ADD_POKEMON_DATA':
      return action.data
    default:
      return state
  }
}

export default pokemonDataReducer;