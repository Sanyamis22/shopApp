import {ActionTypes} from '../constants/productConstants';

export const productsInitialState = {
  products: [],
  isFetching: false,
  pageNumber: 1,
};

const productsReducer = (state = productsInitialState, action) => {
  switch (action.type) {
    case ActionTypes.IS_FETCHING:
        return {...state, isFetching:true};
    case ActionTypes.SET_PRODUCTS:
      return {...state, products: action.productData, isFetching:false};
    default:
      return state;
  }
};

export default productsReducer;
