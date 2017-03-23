import {
  ADD_ITEM_TO_CART,
  CART_ITEM_COUNTER,
  TOTAL_PRICE,
  UPDATE_CARD
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
  if (!isDiscounted)
    priceAfterDiscount = price;

  return {
    type: TOTAL_PRICE,
    payload: {
      totalPrice: price,
      discountedPrice: priceAfterDiscount
    }
  };
}

export function updateCard(id, price, discount, itemsUntilDiscount) {
  return {
    type: UPDATE_CARD,
    payload: { id, price, discount, itemsUntilDiscount }
  };
}