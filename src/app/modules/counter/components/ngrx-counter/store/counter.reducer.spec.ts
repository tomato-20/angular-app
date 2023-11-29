import * as counterReducer from './counter.reducers';
import * as counterActions from './counter.actions';

describe('CounterReducer', () => {
  describe('unknown action', () => {
    it('should return previous state on unknown action', () => {
      const initialState = 0;

      const action = {
        type: 'Unknown',
        payload: {},
      };

      const state = counterReducer.CounterReducer(initialState, action);
      expect(state).toEqual(0);
    });
  });

  describe('increment action', () => {
    it('should increment count and update state immutably', () => {
      const initialState = 0;

      const state = counterReducer.CounterReducer(
        initialState,
        counterActions.increment()
      );

      expect(state).toEqual(1);
    });
  });

  describe('decrement action', () => {
    it('should decrement count and update state immutably', () => {
      const initialState = 0;

      const state = counterReducer.CounterReducer(
        initialState,
        counterActions.decrement()
      );

      expect(state).toEqual(-1);
    });
  });

  describe('reset action', () => {
    it('should reset count and update state immutably', () => {
      const initialState = 12;

      const state = counterReducer.CounterReducer(
        initialState,
        counterActions.reset()
      );

      expect(state).toEqual(0);
    });
  });
});
