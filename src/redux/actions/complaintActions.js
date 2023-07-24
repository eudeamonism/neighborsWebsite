import axios from 'axios';

import { userLogin } from '../slices/user';

import {
  setLoadingOn,
  setLoadingOff,
  setError,
  retrieveAllComplaints,
  retrieveSingleComplaint,
  openSingComplaintTrue,
  closeSingComplaintFalse,
  openAllComplaintsTrue,
  closeAllComplaintsFalse,
  openKreateComplaint,
  closeKreateComplaint,
  openEditAComplaint,
  closeEditAComplaint,
} from '../slices/complaint';

export const getAllComplaintsInDB = () => async dispatch => {
  dispatch(setLoadingOn());
  try {
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };

    const { data } = await axios.get(
      'http://localhost:5000/api/complaint/getComplaints',
      config
    );

    dispatch(retrieveAllComplaints(data));
    dispatch(setLoadingOff());
  } catch (error) {
    dispatch(
      setError(
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message
          ? error.message
          : 'An unexpected error has occured. Please try again later.'
      )
    );
  }
};

export const getCurrentComplaint =
  ({ userId, complaintId }) =>
  async dispatch => {
    dispatch(setLoadingOn());
    try {
      const config = {
        headers: {
          'Content-Type': 'application/json',
        },
      };

      const params = {
        userId,
        complaintId,
      };

      const { data } = await axios.get(
        `http://localhost:5000/api/complaint/getComplaint/${params}`,
        config
      );

      console.log(data)
      /* dispatch(retrieveSingleComplaint(data)); */
      dispatch(setLoadingOff());
    } catch (error) {
      dispatch(
        setError(
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message
            ? error.message
            : 'An unexpected error has occured. Please try again later.'
        )
      );
    }
  };

export const AddComplaint =
  (
    title,
    occurence,
    crossStreet1,
    crossStreet2,
    complaintType,
    description,
    imageUrl,
    authoritiesNotified,
    resolved,
    userInfo
  ) =>
  async dispatch => {
    dispatch(setLoadingOn());
    try {
      const config = {
        headers: {
          'Content-Type': 'application/json',
          Authorization: userInfo.token,
        },
      };

      if (imageUrl === '') {
        imageUrl = '/assets/images/holder.jpg';
      }

      const { data } = await axios.post(
        'http://localhost:5000/api/complaint/create',
        {
          title,
          occurence,
          crossStreet1,
          crossStreet2,
          complaintType,
          description,
          imageUrl,
          authoritiesNotified,
          resolved,
          userId: userInfo._id,
        },
        config
      );
      dispatch(setLoadingOff());
      dispatch(userLogin(data.user));
      localStorage.setItem('userInfo', JSON.stringify(data.user));

      dispatch(closeKreateComplaint());
    } catch (error) {
      dispatch(
        setError(
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message
            ? error.message
            : 'An unexpected error has occured. Please try again later.'
        )
      );
    }
  };

export const deleteComplaint = complaintId => async dispatch => {
  try {
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };

    const { data } = await axios.delete(
      `http://localhost:5000/api/complaint/removeComplaint/${complaintId}`,
      config
    );
  } catch (error) {
    dispatch(
      setError(
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message
          ? error.message
          : 'An unexpected error has occured. Please try again later.'
      )
    );
  }
};
