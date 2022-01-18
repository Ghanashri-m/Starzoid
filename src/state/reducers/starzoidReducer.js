import {
  FETCH_ALL_PHOTOS,
  LIKE_IMAGE,
  SHUFFLE
} from '../action-creators/types';

const initialState = {
  allPhotos: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_ALL_PHOTOS:
      return {
        ...state,
        allPhotos: action.payload,
      };
    case LIKE_IMAGE:
      return {
        ...state,
        allPhotos: action.payload,
      }
    case SHUFFLE:
      return {
        ...state,
        allPhotos: action.payload,
      }
    default:
      return state;
  }
};

export default reducer;
