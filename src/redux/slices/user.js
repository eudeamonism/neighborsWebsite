import { createSlice } from '@reduxjs/toolkit';

export const initialState = {
  loading: false,
  error: null,
  userInfo: JSON.parse(localStorage.getItem('userInfo')) ?? null,
  complaints: [],
  numberOfComplaints: 0,
  formClose: false,
  complaint: null,
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    logout: state => {
      localStorage.removeItem('userInfo');
      state.userInfo = null;
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
    complaints: (state, { payload }) => {
      state.complaints = payload;
      state.error = null;

      state.numberOfComplaints = state.complaints.length;
    },

    complaint: (state, { payload }) => {
      state.complaint = payload;
      localStorage.setItem('complaint', JSON.stringify(payload));
    },

    removeComplaint: state => {
      state.complaint = null;
      localStorage.removeItem('complaint');
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
  complaint,
  complaintCount,
  formToggle,
  logout,
  removeComplaint,
} = userSlice.actions;

export default userSlice.reducer;

export const userSelector = state => state.user;
