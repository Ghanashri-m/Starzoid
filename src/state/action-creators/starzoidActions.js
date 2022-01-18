import axios from 'axios';
import {
  FETCH_ALL_PHOTOS,
  LIKE_IMAGE,
  SHUFFLE
} from './types';

export const fetchAllData = () => async (dispatch) => {
  axios.get('https://api.nasa.gov/planetary/apod?api_key=vGxsksq1DAI4kT767RmtcSOr7eFpAZmimbLypuv5&count=10')
   .then((response) => {
     const latest = response.data.map((item) => {
       return {...item, liked: false}
     })
      dispatch({
        type: FETCH_ALL_PHOTOS,
        payload: latest,
      });
    })
    .catch((err) => {
      alert(err);
    });
};

export const likeImage = (data) => async (dispatch) => {
  dispatch({
    type:   LIKE_IMAGE,
    payload: data,
  })
}

export const shuffle = () => async (dispatch) => {
  dispatch({
    type:   SHUFFLE,
    payload: [],
  })
}
