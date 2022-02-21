import {combineReducers} from 'redux';
import productsReducer from './redux/reducers/productReducer';
import ProductDetailsReducer from './redux/reducers/ProductDetailReducers';
import ProductCategorieReducers from './redux/reducers/ProductCategorieReducers';
import CategoryListReducers from './redux/reducers/CategoryListReducers';
const rootReducer = combineReducers({
  products: productsReducer,
  ProductDetails: ProductDetailsReducer,
  ProductCategories: ProductCategorieReducers,
  CategoryList: CategoryListReducers,
});

export default rootReducer;
