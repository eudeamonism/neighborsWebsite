import { combineReducers, configureStore } from '@reduxjs/toolkit';

import user from './slices/user';
import complaint from './slices/complaint';
import filter from './slices/filter';

const reducer = combineReducers({
  user,
  complaint,
  filter,
});

export default configureStore({ reducer });
