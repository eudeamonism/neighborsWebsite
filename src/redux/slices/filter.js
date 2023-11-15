import { createSlice } from '@reduxjs/toolkit';

export const initialState = {
  hideButtons: true,
  filterOn: false,
  loading: false,
  error: null,
  firstResults: [],
  secondResults: [],
};

export const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    hideB: state => {
      state.hideButtons = state.hideButtons === true ? false : true;
    },
    filterOn: state => {
      state.filterOn = state.filterOn === false ? true : false;
      state.loading = false;
    },
    setError: (state, { payload }) => {
      state.error = payload;
      state.loading = false;
    },
    loadingOn: state => {
      state.loading = true;
    },
    getFirstResults: (state, { payload }) => {
      state.firstResults = payload;
      state.error = null;
      state.loading = false;
    },
    getSecondResults: (state, { payload }) => {
      state.secondResults = payload;
      state.error = null;
      state.loading = false;
    },
  },
});

export const {
  getFirstResults,
  getSecondResults,
  loadingOn,
  setError,
  filterOn,
  hideB,
} = filterSlice.actions;

export default filterSlice.reducer;

export const filterSelector = state => state.filter;
