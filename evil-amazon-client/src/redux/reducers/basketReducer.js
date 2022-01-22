import { ADD_TO_BASKET, REMOVE_FROM_BASKET } from "../actions/basketActions";

const initialState = {
  items: [],
};

const executeRemoveFromBasket = (state, action) => {
  const index = state.items.findIndex((item) => item.id === action.payload.id);
  const newBasket = [...state.items];
  newBasket.splice(index, 1);

  return {
    items: newBasket,
  };
};

const basketReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_BASKET:
      return {
        items: [...state.items, action.payload],
      };
    case REMOVE_FROM_BASKET:
      return executeRemoveFromBasket(state, action);

    default:
      return state;
  }
};

export const getCount = (state) => state.basket.items.length;

export const getSubtotal = (state) =>
  state.basket.items.reduce((amount, item) => amount + Number(item.price), 0);

export const getBasket = (state) => state.basket.items;

export default basketReducer;
