import pokemonDataReducer from './pokemonDataReducer';
import mockPokemonData from '../util/mockData';

describe('pokemonDataReducer', () => {
  it('should return the initial state', () => {
    const expected = [];

    const result = pokemonDataReducer(undefined, {})

    expect(result).toEqual(expected)
  })

  it('should return a new state when dispatched', () => {
    const expected = mockPokemonData;

    const action = { type: 'ADD_POKEMON_DATA', data: mockPokemonData };

    const result = pokemonDataReducer(undefined, action);

    expect(result).toEqual(expected);
  })
})