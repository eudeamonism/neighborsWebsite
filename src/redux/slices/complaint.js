import { createSlice } from '@reduxjs/toolkit';

export const initialState = {
  loading: false,
  error: null,
  userInfo: JSON.parse(localStorage.getItem('userInfo')) ?? null,
};

export const complaintSlice = createSlice({
  name: 'complaint',
  initialState,
  reducers: {
    setComplaints: (state, { payload }) => {
      state.loading = false;
      state.error = null;
      state.complaints = payload;
    },
    setComplaint: (state, { payload }) => {
      state.loading = false;
      state.error = null;
      state.userInfo = payload;
    },
    setLoading: state => {
      state.loading = true;
    },
    closeLoading: state => {
      state.loading = false;
    },
    setError: (state, { payload }) => {
      state.error = payload;
      state.loading = false;
    },
  },
});

export const {
  setComplaint,
  setComplaints,
  setLoading,
  closeLoading,
  setError,
} = complaintSlice.actions;

export default complaintSlice.reducer;

export const complaintSelector = state => state.user;
