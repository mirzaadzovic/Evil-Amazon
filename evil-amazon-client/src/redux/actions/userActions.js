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

export const fetchLoggedInUser = () => {
  return (dispatch) => {
    dispatch(userLoginRequest);
    AuthService.getLoggedInUser()
      .then((data) => dispatch(userLoginSuccess(data)))
      .catch((err) => {
        dispatch(userLoginFaulire(err));
        console.error(err);
      });
    console.clear();
  };
};

export const logInUser = (email, password) => {
  return (dispatch) => {
    dispatch(userLoginRequest);
    AuthService.logIn(email, password)
      .then((data) => userLoginSuccess(data))
      .catch((err) => {
        const mute = err;
        userLoginFaulire(err);
        console.error(err);
      });
    console.clear();
  };
};
