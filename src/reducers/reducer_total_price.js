import { TOTAL_PRICE } from '../actions/types';

const INITIAL_STATE = { summurizedPrice: 0, summurizedFinalPrice: 0 };

export default function (state = INITIAL_STATE, action) {
  switch (action.type) {
    case TOTAL_PRICE:
      return {
        summurizedPrice: state.summurizedPrice + action.payload.totalPrice,
        summurizedFinalPrice: state.summurizedFinalPrice + action.payload.discountedPrice
      };
  }
  return state
}