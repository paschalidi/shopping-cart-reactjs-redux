import {
  ADD_ITEM_TO_CART,
  CART_ITEM_COUNTER,
  TOTAL_PRICE
} from './types';

export function addItemToCart(title) {
  return {
    type: ADD_ITEM_TO_CART,
    payload: { title }
  };
}

export function calculateItemsQuantity() {
  return {
    type: CART_ITEM_COUNTER,
  };
}

export function calculateTotalPrices(price, priceAfterDiscount, isDiscounted) {
  return {
    type: TOTAL_PRICE,
    payload: {price, priceAfterDiscount, isDiscounted}
  };
}