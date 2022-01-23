import {
  USER_LOGIN_FAILURE,
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
} from "../actions/userActions";

const initialState = {
  loggedInUser: null,
  loading: false,
  error: "",
};

export const selectUser = (state) => state.user.loggedInUser;

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case USER_LOGIN_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case USER_LOGIN_SUCCESS:
      return {
        loggedInUser: action.payload,
        loading: false,
        error: "",
      };
    case USER_LOGIN_FAILURE:
      return {
        loggedInUser: null,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default userReducer;
