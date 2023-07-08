import { combineReducers, configureStore } from '@reduxjs/toolkit';

import user from './slices/user';

const reducer = combineReducers({
  user,
});

export default configureStore({ reducer });
