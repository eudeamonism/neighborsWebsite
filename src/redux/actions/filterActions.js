import axios from 'axios';

import {
  getFirstResults,
  getSecondResults,
  loadingOn,
  setError,
  filterOn,
} from '../slices/filter';

export const filterMode = () => dispatch => {
  dispatch(loadingOn());
  dispatch(filterOn());
};

export const getData2 = data => dispatch => {
  dispatch(getSecondResults(data))
};

export const getData1 = incoming => async dispatch => {
  dispatch(loadingOn());
  try {
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };
    const { data } = await axios.get(
      `${process.env.REACT_APP_DATABASE_URL}filter/first-round/${JSON.stringify(
        incoming
      )}`,
      config
    );
    dispatch(getFirstResults(data));
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
