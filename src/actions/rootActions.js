import axios from 'axios';
import uuid from 'uuid';
import {
  RENDERED_ONCE, GET_DOG, GET_ERROR, TOOGLE_FAVORITES, TOOGLE_LOADING,
} from './actionTypes';

export const toogleRender = () => ({
  type: RENDERED_ONCE,
});

export const getDog = () => (dispatch) => {
  axios
    .get('https://dog.ceo/api/breeds/image/random/16')
    .then(response => dispatch({
      type: GET_DOG,
      data: response.data.message.map(src => ({
        id: uuid(),
        src,
        favorites: false,
      })),
    }))
    .catch(error => dispatch({
      type: GET_ERROR,
      error,
    }));
};

export const toogleFavorites = id => ({
  type: TOOGLE_FAVORITES,
  id,
});

export const toogleLoading = () => ({
  type: TOOGLE_LOADING,
});
