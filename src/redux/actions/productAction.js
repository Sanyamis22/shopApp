import {ActionTypes} from '../constants/productConstants';
export const fetchProducts = () => {
    return {type: ActionTypes.FETCH_PRODUCTS};
};