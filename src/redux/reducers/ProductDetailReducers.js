import { ActionTypes } from "../constants/productConstants";

export const productDetails = {
    productDetails: {},
    isFetching: false,
    pageNumber: 1,
};

const ProductDetailReducers = (state = productDetails, action) => {
    switch (action.type) {
        case ActionTypes.IS_FETCHING:
      return {...state, isFetching:true};
        case ActionTypes.SET_PRODUCT_DETAILS:
            return{...state,productDetails: action.productData, isFetching:false};
        default:
            return state;
    }
};

export default ProductDetailReducers;