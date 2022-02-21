import {ActionTypes} from '../constants/productConstants';

export const ProductCategories = {};

const ProductCategorieReducers = (state = ProductCategories, action) => {
  switch (action.type) {
    case ActionTypes.SET_PRODUCT_CATEGORIES:
      return action.productData;
    default:
      return state;
  }
};

export default ProductCategorieReducers;
