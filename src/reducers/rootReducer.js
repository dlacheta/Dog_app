import {
  RENDERED_ONCE,
  GET_DOG,
  GET_ERROR,
  TOOGLE_FAVORITES,
  TOOGLE_LOADING,
} from '../actions/actionTypes';

const rootReducer = (state = { dogData: [] }, action) => {
  switch (action.type) {
    case RENDERED_ONCE:
      return Object.assign({}, state, {
        renderedOnce: true,
      });
    case GET_DOG:
      return Object.assign({}, state, {
        dogData: [...state.dogData, ...action.data],
        loadingDog: false,
      });
    case GET_ERROR:
      return Object.assign({}, state, {
        loadingDog: false,
        error: action.error.message,
      });
    case TOOGLE_FAVORITES:
      return Object.assign({}, state, {
        dogData: state.dogData.map((dog) => {
          if (dog.id === action.id) {
            return {
              id: dog.id,
              src: dog.src,
              favorites: !dog.favorites,
            };
          }
          return dog;
        }),
      });
    case TOOGLE_LOADING:
      return Object.assign({}, state, {
        loadingDog: !state.loadingDog,
      });
    default:
      return state;
  }
};

export default rootReducer;
