import {ActionTypes} from '../constants/productConstants';

export const loginState = {
  isLogin: false,
  isRegistered : false,
  userDetails: {},
};

const AuthReducers = (state = loginState, action) => {
  switch (action.type) {
    case ActionTypes.LOGIN_USER_SUCCESS:
      return {...state, isLogin: true, userDetails: action.productData};

    case ActionTypes.REGISTER_USER_SUCCESS:
      return {...state, isRegistered : true };

      case ActionTypes.RESET_REGISER_STATE:
      return {...state, isRegistered:false};

    case ActionTypes.LOGOUT:
      return {...state, isLogin: false, isRegistered: false, userDetails: {}}



    default:
      return state;
  }
};

export default AuthReducers;
