import AuthService from "../../services/AuthService";

export const USER_LOGIN_REQUEST = "USER_LOGIN_REQUEST";
export const userLoginRequest = () => ({
  type: USER_LOGIN_REQUEST,
});

export const USER_LOGIN_SUCCESS = "USER_LOGIN_SUCCESS";
export const userLoginSuccess = (data) => ({
  type: USER_LOGIN_SUCCESS,
  payload: data,
});

export const USER_LOGIN_FAILURE = "USER_LOGIN_FAILURE";
export const userLoginFaulire = (error) => ({
  type: USER_LOGIN_FAILURE,
  payload: error,
});

export const USER_LOGOUT = "USER_LOGOUT_SUCCESS";
export const userLogoutSucces = () => ({
  type: USER_LOGOUT,
});

export const fetchLoggedInUser = () => {
  return (dispatch) => {
    dispatch(userLoginRequest);
    AuthService.getLoggedInUser()
      .then((data) => dispatch(userLoginSuccess(data)))
      .catch((err) => {
        dispatch(userLoginFaulire(err));
      });
    console.clear();
  };
};

export const logInUser = (email, password) => {
  return async (dispatch) => {
    dispatch(userLoginRequest);
    await AuthService.logIn(email, password)
      .then((data) => dispatch(userLoginSuccess(data)))
      .catch((err) => {
        dispatch(userLoginFaulire(err));
      });
  };
};

export const logoutUser = () => {
  return async (dispatch) => {
    dispatch(userLoginRequest());
    await AuthService.logOut();
    dispatch(userLogoutSucces());
  };
};
