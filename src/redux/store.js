import { combineReducers, configureStore } from '@reduxjs/toolkit';


import user from './slices/user';
import complaint from './slices/complaint'


const reducer = combineReducers({
  user,
  complaint
});

export default configureStore({ reducer });
