import axios from 'axios';
import {
  setLoading,
  userLogin,
  setError,
  closeLoading,
  logout,
  forgotPasswordToken,
  resetForgotSlice,
} from '../slices/user';

export const resetForgot = () => dispatch => {
  dispatch(resetForgotSlice());
};

export const resetPassword = (password, email) => async dispatch => {
  dispatch(setLoading(true));
  try {
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };

    const { data } = await axios.put(
      `${process.env.REACT_APP_DATABASE_URL}users/resetPassword/${password}/${email}`,
      config
    );
    alert(data);
    dispatch(forgotPasswordToken(data));
  } catch (error) {
    console.log(error);
  }
};

export const otpMatch = (entry, email) => async dispatch => {
  dispatch(setLoading(true));
  try {
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };

    const { data } = await axios.get(
      `${process.env.REACT_APP_DATABASE_URL}users/matchotp/${entry}/${email}`,
      config
    );

    dispatch(forgotPasswordToken(data));
  } catch (error) {
    console.log(error);
  }
};

export const forgotTokenPassword = email => async dispatch => {
  dispatch(setLoading(true));

  try {
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };
    const { data } = await axios.get(
      `${process.env.REACT_APP_DATABASE_URL}users/forgotPassword/${email}`,
      config
    );
    setTimeout(() => {
      dispatch(forgotPasswordToken(data));
    }, 1000);
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
  }
};

export const register =
  (firstName, lastName, displayName, email, password) => async dispatch => {
    dispatch(setLoading(true));
    console.log('Inside!');
    console.log(process.env.REACT_APP_DATABASE_URL);

    try {
      const config = {
        headers: {
          'Content-Type': 'application/json',
        },
      };
      console.log("checkpoint 221");
      const { data } = await axios.post(
        `${process.env.REACT_APP_DATABASE_URL}users/register`,
        { firstName, lastName, displayName, email, password },
        config
      );

      console.log("checkpoint 22");
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
      '${process.env.REACT_APP_DATABASE_URL}users/login',
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
  } finally {
    dispatch(closeLoading(false));
  }
};

//This lowers in the database
export const decrementComplaint = userId => async dispatch => {
  dispatch(setLoading(true));
  try {
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };

    const { data } = await axios.post(
      `${process.env.REACT_APP_DATABASE_URL}users/decrementComplaint/${userId}`,
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
  } finally {
    dispatch(closeLoading(false));
  }
};

export const logoutUser = () => dispatch => {
  try {
    dispatch(setLoading());
    dispatch(logout());
  } catch (error) {
  } finally {
    dispatch(closeLoading(false));
  }
};

export const resetUserId = userId => async dispatch => {
  dispatch(setLoading(true));
  try {
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };

    const { data } = await axios.get(
      `${process.env.REACT_APP_DATABASE_URL}users/resetUserId/${userId}`,
      config
    );
    dispatch(userLogin(data));
    localStorage.setItem('userInfo', JSON.stringify(data));
    console.log(data);
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
  } finally {
    dispatch(closeLoading(false));
  }
};
