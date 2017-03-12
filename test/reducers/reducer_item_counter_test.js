import { expect } from '../test_helper'
import itemCounterReducer  from '../../src/reducers/reducer_item_counter'
import { CART_ITEM_COUNTER } from '../../src/actions/types'

describe('addItemToCartReducer', () => {
  it('handles unknown action type', () => {
    expect(itemCounterReducer(undefined, {})).to.be.eql(0)
  });

  it('handles the action it supposed to', () => {
    const acton = { type: CART_ITEM_COUNTER };
    expect(itemCounterReducer(0, acton)).to.be.eql(1)
  });
});