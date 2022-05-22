// Saga
import userSaga from "./user.saga";
export { userSaga };

// Actions
export const DO_LOGIN = "user/DO_LOGIN";
export const DO_LOGIN_SUCCESS = "user/DO_LOGIN_SUCCESS";
export const DO_LOGIN_FAILED = "user/DO_LOGIN_FAILED";
export const GET_USER = "user/GET_USER";
export const GET_USER_SUCCESS = "user/GET_USER_SUCCESS";
export const GET_USER_FAILED = "user/GET_USER_FAILED";
export const DO_LOGOUT = "user/DO_LOGOUT";
export const REGISTER = "user/REGISTER";
export const REGISTER_COMPLETE = "user/REGISTER_COMPLETE";
export const IS_ON_LOGIN_PAGE = "user/IS_ON_LOGIN_PAGE";
export const IS_NOT_ON_LOGIN_PAGE = "user/IS_NOT_ON_LOGIN_PAGE";
// Reducer
const initialState = {
  token: "",
  isOnLoginPage: true,
  current: {},
  isLoading: false,
};

export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case DO_LOGIN: {
      return {
        ...state,
        email: action.payload.email,
        password: action.payload.password,
        isLoading: true,
      };
    }
    case DO_LOGIN_SUCCESS: {
      return {
        ...state,
        token: action.payload.token,
        isLoading: false,
      };
    }
    case DO_LOGIN_FAILED: {
      return {
        ...state,
        token: "",
        isLoading: false,
      };
    }
    case GET_USER: {
      return { ...state, isLoading: true };
    }
    case GET_USER_SUCCESS: {
      return {
        ...state,
        current: action.payload.user,
        isLoading: false,
      };
    }
    case GET_USER_FAILED: {
      return { ...state, isLoading: false };
    }
    case IS_ON_LOGIN_PAGE: {
      return { ...state, isOnLoginPage: true };
    }
    case IS_NOT_ON_LOGIN_PAGE: {
      return { ...state, isOnLoginPage: false };
    }
    default:
      return state;
  }
}

// Action Creators
export function doLoginSuccess(token) {
  return { type: DO_LOGIN_SUCCESS, payload: { token } };
}
export function doLogin({ email, password }) {
  return { type: DO_LOGIN, payload: { email, password } };
}
export function doLoginFailed() {
  return { type: DO_LOGIN_FAILED };
}
export function doLogout() {
  return { type: DO_LOGOUT };
}
export function getUser() {
  return { type: GET_USER };
}
export function getUserSuccess(user) {
  return { type: GET_USER_SUCCESS, payload: { user } };
}
export function getUserFailed() {
  return { type: GET_USER_FAILED };
}
export function register(data) {
  return { type: REGISTER, payload: { data } };
}
export function registerComplete() {
  return { type: REGISTER_COMPLETE };
}
export function isOnLoginPage() {
  return { type: IS_ON_LOGIN_PAGE };
}
export function isNotOnLoginPage() {
  return { type: IS_NOT_ON_LOGIN_PAGE };
}
