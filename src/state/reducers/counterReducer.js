import * as types from '../actions/actionTypes';

export function counterReducer(state = 0, action) {
  switch (action.type) {
    case (types.COUNTER_INCREASE):
      return (state + 1);
    case (types.COUNTER_DECREASE):
      return (state - 1);
    default:
      return state;
  }
}