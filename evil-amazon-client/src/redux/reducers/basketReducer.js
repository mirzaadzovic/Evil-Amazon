import { ADD_TO_BASKET, REMOVE_FROM_BASKET } from "../actions/basketActions";

const initialState = {
  count: 0,
  items: [],
};

export const getCount = (state) => state.basket.count;
export const getBasket = (state) => state.basket.items;

const basketReducer = (state = initialState, action) => {
  switch (action) {
    case ADD_TO_BASKET:
      return {
        count: state.count++,
        items: state.items.push(action.payload),
      };
    case REMOVE_FROM_BASKET:
      return {
        count: state.count--,
        items: state.items.filter((i) => i.id !== action.payload.id),
      };
    default:
      return state;
  }
};

export default basketReducer;
