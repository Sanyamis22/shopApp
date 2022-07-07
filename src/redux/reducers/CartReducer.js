import {ActionTypes} from '../constants/productConstants';

export const cartProducts = {
  addtoCartProducts: [],
};

const CartReducer = (state = cartProducts, action) => {
  switch (action.type) {
    case ActionTypes.ADD_TO_CART:
      return {
        ...state,
        addtoCartProducts: [...state.addtoCartProducts, action.payload],
      };

    case ActionTypes.INCREMENT:
      return {
        ...state,
        addtoCartProducts: [
          ...state.addtoCartProducts,
          state.addtoCartProducts.find(item => item.id === action.payload)
            .quantity + 1,
        ],
      };

    case ActionTypes.DECREMENT:
      return {
        ...state,
        addtoCartProducts: [
          ...state.addtoCartProducts,
          state.addtoCartProducts.find(item => item.id === action.payload)
            .quantity - 1,
        ],
      };
    default:
      return state;
  }
};

export default CartReducer;
