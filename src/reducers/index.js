import { combineReducers } from 'redux';

import DummyDataReducer from './dummy_items_data'
import AddToCartReducer from './reducer_add_item_to_cart'
import ItemCounterReducer from './reducer_item_counter'
import TotalPriceReducer from './reducer_total_price'

const rootReducer = combineReducers({
  items: DummyDataReducer,
  itemsInsideCart: AddToCartReducer,
  itemCounter: ItemCounterReducer,
  totalPrices: TotalPriceReducer
});

export default rootReducer;
