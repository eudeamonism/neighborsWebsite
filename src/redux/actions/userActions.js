import axios from 'axios';
import { setLoading, userLogin, setError } from '../slices/user';

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
      dispatch(setLoading(false)); // Stop the loading state here
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
      dispatch(setLoading(false)); // Stop the loading state in case of error
    }
  };
