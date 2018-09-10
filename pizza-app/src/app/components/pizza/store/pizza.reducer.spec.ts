import { pizzaReducer, initialState } from './pizza.reducer';

describe('Pizza Reducer', () => {
  describe('unknown action', () => {
    it('should return the initial state', () => {
      const action = {} as any;

      const result = pizzaReducer(initialState, action);

      expect(result).toBe(initialState);
    });
  });
});
