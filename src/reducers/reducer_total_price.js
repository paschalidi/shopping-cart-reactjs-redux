import { TOTAL_PRICE } from '../actions/types'

const INITIAL_STATE = { totalPrice: 0, totalDiscountedPrice: 0 };

export default function (state = INITIAL_STATE, action) {
  switch (action.type) {
    case TOTAL_PRICE:
      let priceAfterDiscount = (action.payload.isDiscounted) ?
          action.payload.priceAfterDiscount : action.payload.price;

      return {
        totalPrice: state.totalPrice + action.payload.price,
        totalDiscountedPrice: state.totalDiscountedPrice + priceAfterDiscount
      };
  }
  return state
}