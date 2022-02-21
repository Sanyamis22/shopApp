import {ActionTypes} from '../constants/productConstants';

export const CategoryList = {
  products: [],
  isFetching: false,
  pageNumber: 1,
};

const CategoryListReducers = (state = CategoryList, action) => {
  switch (action.type) {
    case ActionTypes.IS_FETCHING:
      return {...state, isFetching:true};
    case ActionTypes.SET_CATEGORY_LIST:
      return {...state,products: action.productData, isFetching:false};
    default:
      return state;
  }
};

export default CategoryListReducers;
