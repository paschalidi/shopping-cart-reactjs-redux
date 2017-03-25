import { expect } from '../test_helper'
import updateCardReducer from '../../src/reducers/reducer_update_card';
import { UPDATE_CARD } from '../../src/actions/types';

describe('updateCardReducer', () => {
  it('handles unknown action type', () => {
    expect(updateCardReducer(undefined, {})).to.be.eql({
      0: {
        id: null,
        isDiscounted: false,
        priceAfterDiscount: 0,
        itemsUntilDiscount: 0,
      }
    })
  });

  it('handles the action it supposed to', () => {
    const acton = {
      type: UPDATE_CARD,
      payload: { id: 5, price: 50, discount: 40, itemsUntilDiscount: 7 }
    };

    expect(updateCardReducer({
      0: {
        id: null,
        isDiscounted: false,
        priceAfterDiscount: 0,
        itemsUntilDiscount: 0,
      }
    }, acton))
      .to.be.eql({
      0: {
        id: null,
        isDiscounted: false,
        priceAfterDiscount: 0,
        itemsUntilDiscount: 0,
      },
      5: {
        id: 5,
        isDiscounted: false,
        priceAfterDiscount: 30,
        itemsUntilDiscount: 6,
      }
    });

    const acton2 = {
      type: UPDATE_CARD,
      payload: { id: 5, price: 50, discount: 40, itemsUntilDiscount: 0 }
    };

    expect(updateCardReducer({
      0: {
        id: null,
        isDiscounted: false,
        priceAfterDiscount: 0,
        itemsUntilDiscount: 0,
      }
    }, acton2))
      .to.be.eql({
      0: {
        id: null,
        isDiscounted: false,
        priceAfterDiscount: 0,
        itemsUntilDiscount: 0,
      },
      5: {
        id: 5,
        isDiscounted: true,
        priceAfterDiscount: 30,
        itemsUntilDiscount: -1,
      }
    })
  })
});