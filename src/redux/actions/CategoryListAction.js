import {ActionTypes} from '../constants/productConstants';
export const fetchCategoryListAction = (category) => {
   
// console.log('category=>', category)
  return {
    type: ActionTypes.FETCH_CATEGORY_LIST,
    payload: {category : category},
  
  };
};
