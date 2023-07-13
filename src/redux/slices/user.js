import { createSlice } from '@reduxjs/toolkit';

export const initialState = {
  loading: false,
  error: null,
  userInfo: JSON.parse(localStorage.getItem('userInfo')) ?? null,
  complaints: [],
  formClose: true,
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setLoading: state => {
      state.loading = true;
    },
    closeLoading: state => {
      state.loading = false;
    },
    userLogin: (state, { payload }) => {
      state.userInfo = payload;
      state.error = null;
      state.loading = false;
    },

    setError: (state, { payload }) => {
      state.error = payload;
      state.loading = false;
    },
    complaints: (state, { payload }) => {
      state.complaints = payload;
      state.error = null;
    },
    resetComplaints: state => {
      state.complaints = [];
    },

    formToggle: state => {
      state.formClose = !state.formClose;
    },
  },
});

export const {
  setLoading,
  userLogin,
  setError,
  closeLoading,
  complaints,
  resetComplaints,
  formToggle,
} = userSlice.actions;

export default userSlice.reducer;

export const userSelector = state => state.user;
