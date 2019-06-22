import * as types from '../../actions/counter/actionTypes';

export function increaseCounter() {
  return { type: types.COUNTER_INCREASE, payload: 1 };
}

export function decreaseCounter() {
  return { type: types.COUNTER_DECREASE, payload: -1 };
}