import axios from 'axios';
import {
  setLoading,
  userLogin,
  setError,
  closeLoading,
  setUserComplaints,
} from '../slices/user';

export const register =
  (firstName, lastName, displayName, email, password) => async dispatch => {
    dispatch(setLoading(true));
    try {
      const config = {
        headers: {
          'Content-Type': 'application/json',
        },
      };

      const { data } = await axios.post(
        'http://localhost:5000/api/users/register',
        { firstName, lastName, displayName, email, password },
        config
      );

      dispatch(userLogin(data));
      localStorage.setItem('userInfo', JSON.stringify(data));
      dispatch(closeLoading(false)); // Stop the loading state here
    } catch (error) {
      dispatch(
        setError(
          error.response && error.response.data
            ? error.response.data
            : error.message
            ? error.message
            : 'An unexpected error occurred. Please try again later.'
        )
      );
      dispatch(closeLoading(false)); // Stop the loading state in case of error
    }
  };

export const login = (email, password) => async dispatch => {
  dispatch(setLoading(true));
  try {
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };

    //API REQUEST --- with email and password arguments only
    const { data } = await axios.post(
      'http://localhost:5000/api/users/login',
      { email, password },
      config
    );
    dispatch(userLogin(data));
    localStorage.setItem('userInfo', JSON.stringify(data));
  } catch (error) {
    dispatch(
      setError(
        error.response && error.response.data
          ? error.response.data
          : error.message
          ? error.message
          : 'An unexpected error has occured. Please try again later.'
      )
    );
  }
};

export const getUserComplaints = id => async dispatch => {
  try {
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };

    const { data } = await axios.get(
      'http://localhost:5000/api/users/getComplaintsForUser',
      id,
      config
    );

    dispatch(setUserComplaints(data));
    console.log(data);
  } catch (error) {
    dispatch(
      setError(
        error.response && error.response.data
          ? error.response.data
          : error.message
          ? error.message
          : 'An unexpected error has occured. Please try again later.'
      )
    );
  }
};
