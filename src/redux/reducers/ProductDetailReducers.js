import { ActionTypes } from "../constants/productConstants";

export const productDetails = {};

const ProductDetailReducers = (state = productDetails, action) => {
    switch (action.type) {
        case ActionTypes.SET_PRODUCT_DETAILS:
            return action.productData;
        default:
            return state;
    }
};

export default ProductDetailReducers;