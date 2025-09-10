import { createAction, createReducer } from '@reduxjs/toolkit';

const initialState = { value: 0 };

export const incrementCounterAction = createAction<void>('counter/increment');
export const decrementCounterAction = createAction<void>('counter/decrement');

export const counterReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(incrementCounterAction, (state) => {
      state.value = state.value + 1;
    })
    .addCase(decrementCounterAction, (state) => {
      state.value = state.value - 1;
    })
});
