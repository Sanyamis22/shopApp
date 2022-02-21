import {ActionTypes} from '../constants/productConstants';
export const fetchCategoryAction = () => {
   
 //console.log('category=>', category)
  return {
    type: ActionTypes.FETCH_PRODUCT_CATEGORIES,
    //payload: {category : category},
  
  };
};
