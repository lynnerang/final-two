import isLoadingReducer from './isLoadingReducer'

describe('isLoadingReducer', () => {
  it('should return the initial state', () => {
    const expected = true;

    const result = isLoadingReducer(undefined, {})

    expect(result).toEqual(expected)
  })

  it('should return a new state when dispatched', () => {
    const expected = false;

    const action = { type: 'SET_LOADING', bool: false };

    const result = isLoadingReducer(undefined, action);

    expect(result).toEqual(expected);
  })
})