import { UPDATE_CARD } from '../actions/types'

const INITIAL_STATE =
  {
    0: {
      id: null,
      isDiscounted: false,
      priceAfterDiscount: 0,
      itemsUntilDiscount: 0,
    }
  };

export default function (state = INITIAL_STATE, action) {

  switch (action.type) {
    case UPDATE_CARD:
      let
        nextState = {},
        priceAfterDiscount,
        discountedPrice,
        itemsUntilDiscount,
        isDiscounted;

      discountedPrice = parseInt((action.payload.discount / 100) * action.payload.price)
      priceAfterDiscount = action.payload.price - discountedPrice;
      itemsUntilDiscount = action.payload.itemsUntilDiscount - 1;
      isDiscounted = itemsUntilDiscount <= 0;

      nextState = Object.assign(
        {},
        state,
        {
          [action.payload.id]: {
            id: action.payload.id,
            isDiscounted,
            itemsUntilDiscount,
            priceAfterDiscount,
          }
        });
      return nextState;
  }
  return state
}
