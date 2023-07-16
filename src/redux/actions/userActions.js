import axios from 'axios';
import {
  setLoading,
  userLogin,
  setError,
  closeLoading,
  logout,
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
    } finally {
      dispatch(closeLoading(false));
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

    const { data } = await axios.post(
      'http://localhost:5000/api/users/login',
      { email, password },
      config
    );
    dispatch(userLogin(data));
    console.log('Login successful');

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
//This lowers in the database
export const decrementComplaint = userId => async dispatch => {
  try {
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };

    const { data } = await axios.post(
      `http://localhost:5000/api/users/decrementComplaint/${userId}`,
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

export const logoutUser = () => dispatch => {
  dispatch(logout());
};
