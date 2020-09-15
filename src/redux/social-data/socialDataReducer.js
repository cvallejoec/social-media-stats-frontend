import {
  FETCH_SOCIAL_DATA_REQUEST,
  FETCH_SOCIAL_DATA_SUCCESS,
  FETCH_SOCIAL_DATA_FAILURE,
} from './socialDataTypes';

const initialState = {
  loading: true,
  socialData: {},
  error: '',
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_SOCIAL_DATA_REQUEST:
      return {
        ...state,
        loading: true,
      };

    case FETCH_SOCIAL_DATA_SUCCESS:
      return {
        loading: false,
        socialData: action.payload,
        error: '',
      };

    case FETCH_SOCIAL_DATA_FAILURE:
      return {
        loading: false,
        socialData: {},
        error: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
