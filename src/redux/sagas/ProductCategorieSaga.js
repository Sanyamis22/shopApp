import axios from 'axios';
import {call, put} from 'redux-saga/effects';
import { ActionTypes } from '../constants/productConstants';

function* fetchProductCategories() {
    try {
        //const category = action.payload.category;
        //console.log('category ==>', category)

        const {data} = yield call(axios.get, 'https://fakestoreapi.com/products/categories');

        yield put ({type: ActionTypes.SET_PRODUCT_CATEGORIES, productData: data});
    } catch (e) {
        console.log(e.message);
    }
}
export default fetchProductCategories;