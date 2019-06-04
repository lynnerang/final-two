import { App, mapStateToProps, mapDispatchToProps } from './App'
import mockPokemonData from '../../util/mockData';
import { addPokemonData, setLoading, setError } from '../../actions';

describe('App', () => {
  describe('App component', () => {

  })

  describe('mapStateToProps', () => {
    it('should return an object with the pokemon data, isLoading, and error properties', () => {

      const mockState = {
        pokemonData: mockPokemonData,
        isLoading: true,
        error: '',
        fakeProp: []
      }
      const expected = {
        pokemonData: mockPokemonData,
        isLoading: true,
        error: ''
      }

      const mappedProps = mapStateToProps(mockState)

      expect(mappedProps).toEqual(expected)
    })
  })

  describe('mapDispatchToProps', () => {
    it('calls dispatch with an addPokemonData action', () => {

      const mockDispatch = jest.fn();
      const actionToDispatch = addPokemonData(mockPokemonData);

      const mappedProps = mapDispatchToProps(mockDispatch);

      mappedProps.addPokemonData(mockPokemonData);

      expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch);
    })
  })

  it('calls dispatch with an setLoading action', () => {

    const mockDispatch = jest.fn();
    const actionToDispatch = setLoading(false);

    const mappedProps = mapDispatchToProps(mockDispatch);

    mappedProps.setLoading(false);

    expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch);
  })

  it('calls dispatch with an setError action', () => {

    const mockDispatch = jest.fn();
    const actionToDispatch = setError('Bummer');

    const mappedProps = mapDispatchToProps(mockDispatch);

    mappedProps.setError('Bummer');

    expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch);
  })
})

