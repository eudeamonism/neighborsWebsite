import axios from 'axios';

import {
  setError,
  complaints,
  resetComplaints,
  formToggle,
  setLoading,
  closeLoading,
} from '../slices/user';

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
    dispatch(setLoading());
    try {
      const config = {
        headers: {
          'Content-Type': 'application/json',
          Authorization: userInfo.token,
        },
      };

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
      dispatch(closeLoading());
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

export const getComplaints = () => async dispatch => {
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

    dispatch(complaints(data));
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

export const complaintsReset = () => dispatch => {
  dispatch(resetComplaints());
};

export const closingForm = () => dispatch => {
  dispatch(formToggle());
};
