import axios from 'axios';
import {call, put} from 'redux-saga/effects';
import {ActionTypes} from '../constants/productConstants';

function* fetchProductDetails(action) {
  
  try {
    const productID = action.payload.productID;
    const {data} = yield call(axios.get, `https://fakestoreapi.com/products/${productID}`);
 
    yield put({type: ActionTypes.SET_PRODUCT_DETAILS, productData: data});
  } catch (e) {
    console.log(e.message);
  }
}
export default fetchProductDetails;
