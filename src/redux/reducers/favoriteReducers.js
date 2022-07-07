import {ActionTypes} from '../constants/productConstants';

export const favProducts = {
  favoriteProducts: [],
};

const favoriteReducers = (state = favProducts, action) => {
  switch (action.type) {
    case ActionTypes.Liked:
      return {
        ...state,
        favoriteProducts: [...state.favoriteProducts, action.payload],
      };
    default:
      return state;
  }
};

export default favoriteReducers;
