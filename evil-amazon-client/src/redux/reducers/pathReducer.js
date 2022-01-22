import { SET_LOGIN_FALSE, SET_LOGIN_TRUE } from "../actions/pathActions";

const initialState = {
  isLoginOrRegister: false,
};

export const selectPath = (state) => state.path.isLoginOrRegister;

const pathReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_LOGIN_TRUE:
      return {
        isLoginOrRegister: true,
      };
    case SET_LOGIN_FALSE:
      return {
        isLoginOrRegister: false,
      };
    default:
      return state;
  }
};

export default pathReducer;
