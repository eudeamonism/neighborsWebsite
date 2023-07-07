import axios from 'axios';

import { setLoading, setError, closeLoading, setComplaint } from '../slices/complaint';

export const createComplaint =
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
    token
  ) =>
  async (dispatch) => {
    dispatch(setLoading(true));
   
    try {
      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
      };

      const { data } = await axios.post(
        `http://localhost:5000/api/complaint/createComplaint`,
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
        },
        config
      );
      localStorage.setItem('userInfo', JSON.stringify(data));
      dispatch(setComplaint(data));
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
