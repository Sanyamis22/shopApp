import {ActionTypes} from '../constants/productConstants';
export const fetchProductDetailsAction = (productID) => {
  return {
    type: ActionTypes.FETCH_PRODUCT_DETAILS,
    payload: {productID: productID},
  };
};
