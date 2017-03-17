import { TOTAL_PRICE } from '../actions/types'

const INITIAL_STATE = { totalPrice: 0, totalDiscountedPrice: 0 };

export default function (state = INITIAL_STATE, action) {
  switch (action.type) {
    case TOTAL_PRICE:
      return {
        totalPrice: state.totalPrice + action.payload.totalPrice,
        totalDiscountedPrice: state.totalDiscountedPrice + action.payload.discountedPrice
      };
  }
  return state
}