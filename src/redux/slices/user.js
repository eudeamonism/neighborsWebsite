import { createSlice } from '@reduxjs/toolkit';

export const initialState = {
  loading: false,
  error: null,
  userInfo: JSON.parse(localStorage.getItem('userInfo')) ?? null,
  complaints: [],
  numberOfComplaints: 0,
  formClose: false,
  complaint: JSON.parse(localStorage.getItem('complaint')) ?? null,
  userComplaints: JSON.parse(localStorage.getItem('userComplaints')) ?? null,
  editForm: false,
  complaintSwitch: false,
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
    onlyUserComplaints: (state, { payload }) => {
      state.userComplaints = payload;
      localStorage.setItem('userComplaints', JSON.stringify(payload));
    },
    removeAllUserComplaints: (state, { payload }) => {
      state.userComplaints = null;
      localStorage.removeItem('userComplaints');
    },

    complaintSwitch: state => {
      state.complaintSwitch = !state.complaintSwitch;
    },

    removeComplaint: state => {
      state.complaint = null;
      localStorage.removeItem('complaint');
    },

    formToggle: state => {
      state.formClose = !state.formClose;
    },
    editFormToggle: state => {
      state.editForm = !state.editForm;
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
  editFormToggle,
  complaintSwitch,
  onlyUserComplaints,
  removeAllUserComplaints,
} = userSlice.actions;

export default userSlice.reducer;

export const userSelector = state => state.user;
