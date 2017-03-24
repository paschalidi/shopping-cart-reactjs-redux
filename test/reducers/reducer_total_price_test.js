import { expect } from '../test_helper'
import totalPriceReducer  from '../../src/reducers/reducer_total_price'
import { TOTAL_PRICE } from '../../src/actions/types'

describe('addItemToCartReducer', () => {
  it('handles unknown action type', () => {
    expect(totalPriceReducer(undefined, {})).to.be.eql({ originalPrice: 0, finalPrice: 0 })
  });

  it('handles the action it supposed to', () => {
    const acton = { type: TOTAL_PRICE, payload: { totalPrice: 50, discountedPrice: 40 } };
    expect(totalPriceReducer({ originalPrice: 0, finalPrice: 0 }, acton))
      .to.be.eql({ originalPrice: 50, finalPrice: 40 })
  })
});