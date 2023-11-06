import { createSlice } from '@reduxjs/toolkit';

export const initialState = {
  loading: false,
  error: null,
  myComplaints: [],
  allComplaintData: [] ?? null,
  singleComplaintData: [] ?? null,
  openSingleComplaint: false,
  openAllComplaints: false,
  open: false,
  openEditComplaint: false,
  imageUrl: '/assets/images/holder.jpg',
  deleteToken: null,
  publicId: null,
  signature: null,
};

export const complaintSlice = createSlice({
  name: 'complaint',
  initialState,
  reducers: {
    setError: (state, { payload }) => {
      state.error = payload;
      state.loading = false;
    },
    imageUrlReset: state => {
      state.imageUrl = '/assets/images/holder.jpg';
      state.loading = false;
    },
    cloudinarySecureUrlUpload: (state, { payload }) => {
      state.imageUrl = payload.cloudinaryUrl;
      state.deleteToken = payload.delToken;
      state.publicId = payload.publicId;
      state.signature = payload.signature;
      state.loading = false;
    },
    getMyComplaints: (state, { payload }) => {
      state.myComplaints = payload;
      state.loading = false;
    },
    refillComplaints: (state, { payload }) => {
      state.allComplaintData = payload;
      state.loading = false;
    },
    refillOneComplaint: (state, { payload }) => {
      state.singleComplaintData = payload;
      state.loading = false;
    },
    resetAComplaint: state => {
      state.singleComplaintData = [];
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
    openKreateComplaint: state => {
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
  imageUrlReset,
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
  getMyComplaints,
  refillComplaints,
  refillOneComplaint,
  resetAComplaint,
  cloudinarySecureUrlUpload,
  resetCloudinaryDeletionToken,
  cloudinaryDeletionToken,
} = complaintSlice.actions;

export default complaintSlice.reducer;

export const complaintSelector = state => state.complaint;
