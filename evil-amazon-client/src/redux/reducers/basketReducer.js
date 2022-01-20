import { ADD_TO_BASKET, REMOVE_FROM_BASKET } from "../actions/basketActions";

const initialState = {
  count: 0,
  items: [],
};

export const getCount = (state) => state.basket.count;
export const getBasket = (state) => state.basket.items;

const basketReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_BASKET:
      return {
        count: state.count + 1,
        items: [...state.items, action.payload],
      };
    case REMOVE_FROM_BASKET:
      return {
        count: state.count - 1,
        items: state.items.filter((i) => i.id !== action.payload.id),
      };
    default:
      return state;
  }
};

export default basketReducer;
