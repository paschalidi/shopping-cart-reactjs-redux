import { expect } from '../test_helper'
import {
  ADD_ITEM_TO_CART,
  CART_ITEM_COUNTER,
  TOTAL_PRICE
} from '../../src/actions/types'
import {
  addItemToCart,
  calculateItemsQuantity,
  calculateTotalPrices
} from '../../src/actions/index'

describe('Actions', () => {

  describe('addItemToCart', () => {
    it('must have correct type', () => {
      const action = addItemToCart();
      expect(action.type).to.equal(ADD_ITEM_TO_CART)
    });
    it('must have correct payload', () => {
      const action = addItemToCart('a new title');
      expect(action.payload).to.eql({ title: 'a new title' })
    });
  });

  describe('calculateItemQuantity', () => {
    it('must have correct type', () => {
      const action = calculateItemsQuantity();
      expect(action.type).to.equal(CART_ITEM_COUNTER)
    });
    it('must have correct payload', () => {
      const action = calculateItemsQuantity();
      expect(action.payload).to.eql(undefined)
    });

  });

  describe('calculateTotalPrices', () => {
    it('must have correct type', () => {
      const action = calculateTotalPrices();
      expect(action.type).to.eql(TOTAL_PRICE)
    });
    it('must have correct payload', () => {
      let action;
      action = calculateTotalPrices(50, 40, false);
      expect(action.payload).to.eql({
        totalPrice: 50,
        discountedPrice: 50
      });
      action = calculateTotalPrices(50, 40, true);
      expect(action.payload).to.eql({
        totalPrice: 50,
        discountedPrice: 40
      })
    });
  });
});