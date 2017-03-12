import { combineReducers } from 'redux';

import DummyDataReducer from './dummy_items_data'
import AddToCartReducer from './reducer_add_item_to_cart'

const rootReducer = combineReducers({
  items: DummyDataReducer,
  itemsInsideCart: AddToCartReducer,
});

export default rootReducer;
