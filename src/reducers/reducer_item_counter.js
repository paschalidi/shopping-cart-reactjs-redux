import { CART_ITEM_COUNTER } from '../actions/types'

const INITIAL_STATE = 0;

export default function (state = INITIAL_STATE, action) {
  switch (action.type) {
    case CART_ITEM_COUNTER:
      return state + 1
  }
  return state
}