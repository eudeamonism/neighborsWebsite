import { createSlice } from '@reduxjs/toolkit';

export const initialState = {
  loading: false,
  error: null,
  allComplaintData:
    JSON.parse(localStorage.getItem('allComplaintData')) ?? null,
  singleComplaintData:
    JSON.parse(localStorage.getItem('singleComplaintData')) ?? null,
  openSingleComplaint: false,
  openAllComplaints: false,
  open: false,
  openEditComplaint: false,
};

export const complaintSlice = createSlice({
  name: 'complaint',
  initialState,
  reducers: {
    setError: (state, { payload }) => {
      state.error = payload;
      state.loading = false;
    },

    setLoadingOn: state => {
      state.loading = true;
    },
    setLoadingOff: state => {
      state.loading = false;
    },
    openSingComplaintTrue: state => {
      state.openSingleComplaint = true;
    },
    closeSingComplaintFalse: state => {
      state.openSingleComplaint = false;
    },
    openAllComplaintsTrue: state => {
      state.openAllComplaints = true;
    },
    closeAllComplaintsFalse: state => {
      state.openAllComplaints = false;
    },
    openKreateComplaint: (state, { payload }) => {
      state.error = payload;
      state.open = true;
    },
    closeKreateComplaint: state => {
      state.open = false;
    },
    openEditAComplaint: state => {
      state.openEditComplaint = true;
    },
    closeEditAComplaint: state => {
      state.openEditComplaint = false;
    },
  },
});

export const {
  setError,
  setLoadingOn,
  setLoadingOff,
  openSingComplaintTrue,
  closeSingComplaintFalse,
  openAllComplaintsTrue,
  closeAllComplaintsFalse,
  openKreateComplaint,
  closeKreateComplaint,
  openEditAComplaint,
  closeEditAComplaint,
} = complaintSlice.actions;

export default complaintSlice.reducer;

export const complaintSelector = state => state.complaint;
