import { ADD_ITEM_TO_CART } from '../actions/types'

const INITIAL_STATE = [{ title: null }];

export default function (state = INITIAL_STATE, action) {
  switch (action.type) {
    case ADD_ITEM_TO_CART:
      return [...state, action.payload];
  }
  return state
}