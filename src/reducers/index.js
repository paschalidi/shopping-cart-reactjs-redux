import { combineReducers } from 'redux';

import DummyDataReducer from './dummy_items_data'

const rootReducer = combineReducers({
  items: DummyDataReducer,
});

export default rootReducer;
