import {combineReducers} from 'redux';
import productsReducer from './redux/reducers/productReducer';
import ProductDetailsReducer from './redux/reducers/ProductDetailReducers';
import ProductCategorieReducers from './redux/reducers/ProductCategorieReducers';
import CategoryListReducers from './redux/reducers/CategoryListReducers';
import AuthReducers from './redux/reducers/AuthReducers';
import favoriteReducers from './redux/reducers/favoriteReducers';
import CartReducer from './redux/reducers/CartReducer';
const rootReducer = combineReducers({
  products: productsReducer,
  ProductDetails: ProductDetailsReducer,
  ProductCategories: ProductCategorieReducers,
  CategoryList: CategoryListReducers,
  Auth: AuthReducers,
  Favorite : favoriteReducers,
  AddToCart : CartReducer,


});

export default rootReducer;
