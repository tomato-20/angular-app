import { createReducer, on } from '@ngrx/store';
import * as counterActions from './counter.actions';

export const COUNTER_STATE = 'COUNTER_STATE'

export const intialState: number = 0;

export const CounterReducer = createReducer(
  intialState,
  on(counterActions.increment, (currentState) => currentState + 1),
  on(counterActions.decrement, (currentState) => currentState - 1),
  on(counterActions.reset, (currentState) => 0)
);
