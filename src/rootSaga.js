import  fetchallProducts  from './redux/sagas/productSaga';
import { ActionTypes } from './redux/constants/productConstants';
import { takeLatest } from 'redux-saga/effects';
import fetchProductDetails from './redux/sagas/ProductDetailSaga';
import fetchProductCategories from './redux/sagas/ProductCategorieSaga';
import fetchCategoryList from './redux/sagas/CategoryListSaga'
import { loginSaga, registerSaga } from './redux/sagas/AuthSaga';

export default function* rootSaga() {
    yield takeLatest(ActionTypes.FETCH_PRODUCTS, fetchallProducts);
    yield takeLatest(ActionTypes.FETCH_PRODUCT_DETAILS, fetchProductDetails);
    yield takeLatest(ActionTypes.FETCH_PRODUCT_CATEGORIES,fetchProductCategories); 
    yield takeLatest(ActionTypes.FETCH_CATEGORY_LIST,fetchCategoryList);  
    yield takeLatest(ActionTypes.LOGIN_USER, loginSaga);  
    yield takeLatest(ActionTypes.REGISTER_USER, registerSaga);  
    

    
}