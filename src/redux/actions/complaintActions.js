import axios from 'axios';

import {
  setLoadingOn,
  setLoadingOff,
  setError,
  closeKreateComplaint,
  openKreateComplaint,
  refillComplaints,
  refillOneComplaint,
  resetAComplaint,
  cloudinarySecureUrlUpload,
  imageUrlReset,
  getMyComplaints,
} from '../slices/complaint';

export const setLoadingOffSwitch = () => dispatch => {
  dispatch(setLoadingOff());
  try {
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

export const removeCloudinaryUrl =
  (publicId, deletionToken) => async dispatch => {
    dispatch(setLoadingOn());
    try {
      const cloudinaryUrl = `https://api.cloudinary.com/v1_1/${process.env.REACT_APP_CLOUDNAME}/delete_by_token`;

      const response = await axios.post(cloudinaryUrl, {
        public_id: publicId,
        deletion_token: deletionToken,
      });

      console.log(response);
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

//CONSIDERING SETTING LOADING OFF IF ERROR ALSO OTHER ACTIONS
export const retrieveCloudinaryUrl =
  (cloudinaryUrl, delToken, publicId, signature) => dispatch => {
    dispatch(setLoadingOn());

    try {
      dispatch(
        cloudinarySecureUrlUpload({
          cloudinaryUrl,
          delToken,
          publicId,
          signature,
        })
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

export const deletingAssets = publicId => async dispatch => {
  try {
    const config = {
      headers: {
        'Content-Type': 'application/json',
        api_key: '365479561511973',
      },
    };

    const { data } = await axios.post(
      `${process.env.REACT_APP_DATABASE_URL}complaint/deleteAsset/${publicId}`,
      config
    );

    if (data.deleted) {
      console.log('Data was deleted');
      dispatch(imageUrlReset());
    } else {
      console.log('Stuff not deleted!');
    }
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
  }
};

export const openForm = () => async dispatch => {
  try {
    dispatch(openKreateComplaint());
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

export const closeForm = () => async dispatch => {
  try {
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

export const getAllComplaintsInDB = () => async dispatch => {
  dispatch(setLoadingOn());

  try {
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };

    const { data } = await axios.get(
      `${process.env.REACT_APP_DATABASE_URL}complaint/getComplaints`,
      config
    );

    dispatch(refillComplaints(data));
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

//Double check if this is active still!
export const getOneComplaintInDB = id => async dispatch => {
  dispatch(setLoadingOn());
  try {
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };

    const { data } = await axios.get(
      `${process.env.REACT_APP_DATABASE_URL}complaint/getComplaint/${id}`,
      config
    );

    dispatch(refillOneComplaint(data));
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

export const myDBComplaints = (token, refresh) => async dispatch => {
  dispatch(setLoadingOn());

  try {
    const config = {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}, Refresh ${refresh}`,
      },
    };

    const { data } = await axios.get(
      `${process.env.REACT_APP_DATABASE_URL}complaint/myComplaints`,
      config
    );

    dispatch(getMyComplaints(data));
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
  }
};

export const AddComplaint =
  (
    title,
    occurence,
    street,
    cross,
    complaintType,
    description,
    imageUrl,
    authorities,
    resolved,
    token,
    refresh,
    time
  ) =>
  async dispatch => {
    dispatch(setLoadingOn());

    try {
      const config = {
        headers: {
          'Content-Type': 'application/json',
        },
      };

      if (imageUrl === '') {
        imageUrl = '/assets/images/holder.jpg';
      }

      const { data } = await axios.post(
        `${process.env.REACT_APP_DATABASE_URL}complaint/createComplaint`,
        {
          title,
          occurence,
          street,
          cross,
          complaintType,
          description,
          imageUrl,
          authorities,
          resolved,
          time,
          token,
          refresh,
        },
        config
      );
      dispatch(setLoadingOff());

      dispatch(closeKreateComplaint());
      window.location.reload(false);
    } catch (error) {
      console.log(error);
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

//Is this still used?
export const deleteComplaint = complaintId => async dispatch => {
  dispatch(setLoadingOn());
  try {
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };

    const { data } = await axios.delete(
      `${process.env.REACT_APP_DATABASE_URL}complaint/removeComplaint/${complaintId}`,
      config
    );

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

export const resetOneComplaint = () => dispatch => {
  dispatch(setLoadingOn());
  dispatch(resetAComplaint());
};
