import { expect } from '../test_helper'
import addItemToCartReducer  from '../../src/reducers/reducer_add_item_to_cart'
import { ADD_ITEM_TO_CART } from '../../src/actions/types'

describe('addItemToCartReducer', () => {
  it('handles unknown action type', () => {
    expect(addItemToCartReducer(undefined, {})).to.be.eql([{ title: null }])
  });

  it('handles the action it supposed to', () => {
    const acton = { type: ADD_ITEM_TO_CART, payload: { title: 'a new title' } };
    expect(addItemToCartReducer([], acton)).to.be.eql([{ title: 'a new title' }])
  })
});