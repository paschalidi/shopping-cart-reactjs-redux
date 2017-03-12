import { ADD_ITEM_TO_CART } from './types';

export function addItemToCart(title) {
  return {
    type: ADD_ITEM_TO_CART,
    payload: { title }
  };
}