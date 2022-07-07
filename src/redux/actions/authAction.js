import {ActionTypes} from '../constants/productConstants';
export const LoginUser = value => {
  return {type: ActionTypes.LOGIN_USER, payload: value};
};

export const RegisterUser = value => {
  return {type: ActionTypes.REGISTER_USER, payload: value};
};

export const Logout = () => {
  return {type: ActionTypes.LOGOUT};
};
