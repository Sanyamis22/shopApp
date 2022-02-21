import axios from 'axios';
import {call, put} from 'redux-saga/effects';
import {ActionTypes} from '../constants/productConstants';

function* fetchCategoryList(action) {
  try {
    const category = action.payload.category;
    const {data} = yield call(
      axios.get,
      `https://fakestoreapi.com/products/category/${category}`,
    );
    yield put({type: ActionTypes.SET_CATEGORY_LIST, productData: data});
  } catch (e) {
    console.log(e.message);
  }
}
export default fetchCategoryList;
