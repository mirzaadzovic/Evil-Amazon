// Add to basket
export const ADD_TO_BASKET = "ADD_TO_BASEKT";

export const addToBasket = (item) => ({
  action: ADD_TO_BASKET,
  payload: item,
});

// Remove from basket
export const REMOVE_FROM_BASKET = "REMOVE_FROM_BASEKT";

export const removeFromBasket = (item) => ({
  action: REMOVE_FROM_BASKET,
  payload: item,
});
