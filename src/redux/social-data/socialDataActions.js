import axios from 'axios';
import {
  FETCH_SOCIAL_DATA_REQUEST,
  FETCH_SOCIAL_DATA_SUCCESS,
  FETCH_SOCIAL_DATA_FAILURE,
} from './socialDataTypes';

export const fetchSocialDataRequest = () => {
  return {
    type: FETCH_SOCIAL_DATA_REQUEST,
  };
};

export const fetchSocialDataSuccess = (socialData) => {
  return {
    type: FETCH_SOCIAL_DATA_SUCCESS,
    payload: socialData,
  };
};

export const fetchSocialDataFailure = (error) => {
  return {
    type: FETCH_SOCIAL_DATA_FAILURE,
    payload: error,
  };
};

export const fetchSocialData = () => {
  return (dispatch) => {
    dispatch(fetchSocialDataRequest);
    axios
      .get('https://social-media-stats-backend.cvallejoec.vercel.app')
      .then((response) => {
        const socialData = response.data;
        dispatch(fetchSocialDataSuccess(socialData));
      })
      .catch((error) => {
        const errorMsg = error.message;
        dispatch(fetchSocialDataFailure(errorMsg));
      });
  };
};
