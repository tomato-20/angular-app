import { createAction, props } from '@ngrx/store';

export const increment = createAction('[counter component] increment');

export const decrement = createAction('Counter Component decrement');

export const reset = createAction('[Counter Component] reset');
