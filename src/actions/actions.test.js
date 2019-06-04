import * as actions from '../actions';
import * as mockData from '../util/mockData';

describe('actions', () => {
  it('should have a type of ADD_POKEMON_DATA', () => {
    const expectedAction = {
      type: 'ADD_POKEMON_DATA',
      data: mockData.mockPokemonData
    }

    const result = actions.addPokemonData(mockData.mockPokemonData);

    expect(result).toEqual(expectedAction);
  })

  it('should have a type of SET_LOADING', () => {
    const expectedAction = {
      type: 'SET_LOADING',
      bool: false
    }

    const result = actions.setLoading(false);

    expect(result).toEqual(expectedAction);
  })

  it('should have a type of SET_ERROR', () => {
    const expectedAction = {
      type: 'SET_ERROR',
      text: 'Unable to fetch'
    }

    const result = actions.setError('Unable to fetch');

    expect(result).toEqual(expectedAction);
  })
})