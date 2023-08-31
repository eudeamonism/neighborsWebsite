import { createSlice } from '@reduxjs/toolkit';

export const initialState = {
  loading: false,
  error: null,
  userInfo: JSON.parse(localStorage.getItem('userInfo')) ?? null,
  resetTokenEmail: null,
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    forgotPasswordToken: (state, { payload }) => {
      state.resetTokenEmail = payload;
      state.error = null;
      state.loading = false;
    },
    logout: state => {
      localStorage.removeItem('userInfo');
      state.userInfo = null;
      state.loading = false;
    },

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
  },
});

export const { setLoading, userLogin, setError, closeLoading, logout, forgotPasswordToken } =
  userSlice.actions;

export default userSlice.reducer;

export const userSelector = state => state.user;
