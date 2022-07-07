import {ActionTypes} from '../constants/productConstants';
export const cartItems = (item) => {
    return {type: ActionTypes.ADD_TO_CART, payload: item};
};