import errorReducer from './errorReducer'

describe('errorReducer', () => {
  it('should return the initial state', () => {
    const expected = '';

    const result = errorReducer(undefined, {})

    expect(result).toEqual(expected)
  })

  it('should return a new state when dispatched', () => {
    const expected = 'Failed to fetch';

    const action = { type: 'SET_ERROR', text: 'Failed to fetch' };

    const result = errorReducer(undefined, action);

    expect(result).toEqual(expected);
  })
})