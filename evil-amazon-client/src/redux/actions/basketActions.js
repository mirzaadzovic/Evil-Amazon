// Add to basket
export const ADD_TO_BASKET = "ADD_TO_BASEKT";

export const addToBasket = (item) => ({
  type: ADD_TO_BASKET,
  payload: item,
});

// Remove from basket
export const REMOVE_FROM_BASKET = "REMOVE_FROM_BASEKT";

export const removeFromBasket = (item) => ({
  type: REMOVE_FROM_BASKET,
  payload: item,
});
