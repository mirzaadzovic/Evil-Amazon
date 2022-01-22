import APIService from "../../services/APIService";

export const FETCH_PRODUCTS_REQUEST = "FETCH_PRODUCTS_REQUEST";
export const fetchProductsRequest = () => {
  return {
    type: FETCH_PRODUCTS_REQUEST,
  };
};

export const FETCH_PRODUCTS_SUCCESS = "FETCH_PRODUCTS_SUCCESS";
export const fetchProductsSuccess = (data) => {
  return {
    type: FETCH_PRODUCTS_SUCCESS,
    payload: data,
  };
};

export const FETCH_PRODUCTS_FAILURE = "FETCH_PRODUCTS_FAILURE";
export const fetchProductsFailure = (error) => {
  return {
    type: FETCH_PRODUCTS_FAILURE,
    payload: error,
  };
};

export const fetchProducts = () => {
  return (dispatch) => {
    dispatch(fetchProductsRequest());
    APIService.getAll("/api/products")
      .then((response) => dispatch(fetchProductsSuccess(response)))
      .catch((err) => dispatch(fetchProductsFailure(err)));
  };
};
