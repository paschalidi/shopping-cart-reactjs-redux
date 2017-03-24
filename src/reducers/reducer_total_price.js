import { TOTAL_PRICE } from '../actions/types';

const INITIAL_STATE = { originalPrice: 0, finalPrice: 0 };

export default function (state = INITIAL_STATE, action) {
  switch (action.type) {
    case TOTAL_PRICE:
      return {
        originalPrice: state.originalPrice + action.payload.totalPrice,
        finalPrice: state.finalPrice + action.payload.discountedPrice
      };
  }
  return state
}