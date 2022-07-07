import {ActionTypes} from '../constants/productConstants';
export const favoriteItems = (item) => {
    return {type: ActionTypes.Liked, payload: item};
};