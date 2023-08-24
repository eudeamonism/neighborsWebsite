import axios from 'axios';

import { userLogin } from '../slices/user';

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
        'api_key': '365479561511973',
      },
    };
    console.log('Before Waka');

    const { data } = await axios.post(
      `http://localhost:5000/api/complaint/deleteAsset/${publicId}`,
      config
    );

    console.log('After Waka');

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

//Create Complaint Action Needed

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

export const getOneComplaintInDB = id => async dispatch => {
  dispatch(setLoadingOn());
  try {
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };

    const { data } = await axios.get(
      `http://localhost:5000/api/complaint/getComplaint/${id}`,
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

export const resetOneComplaint = () => dispatch => {
  dispatch(setLoadingOn());
  dispatch(resetAComplaint());
};
