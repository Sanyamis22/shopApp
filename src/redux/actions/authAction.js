import {ActionTypes} from '../constants/productConstants';
export const LoginUser = value => {
  return {type: ActionTypes.LOGIN_USER, payload: value};
};
