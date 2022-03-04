import {ActionTypes} from '../constants/productConstants';

export const loginState = {
  isLogin: false,
  userDetails: {},
};

const AuthReducers = (state = loginState, action) => {
  switch (action.type) {
    case ActionTypes.LOGIN_USER_SUCCESS:
      return {...state, isLogin: true, userDetails: action.productData};

    case ActionTypes.REGISTER_USER:
      return {...state, isLogin: action.productData};

    default:
      return state;
  }
};

export default AuthReducers;
