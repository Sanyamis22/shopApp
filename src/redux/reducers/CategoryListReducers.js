import {ActionTypes} from '../constants/productConstants';

export const CategoryList = [];

const CategoryListReducers = (state = CategoryList, action) => {
  switch (action.type) {
    case ActionTypes.SET_CATEGORY_LIST:
      return action.productData;
    default:
      return state;
  }
};

export default CategoryListReducers;
