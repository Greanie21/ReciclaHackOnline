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
export const GET_NOTIFICATIONS = "user/GET_NOTIFICATIONS";
export const GET_NOTIFICATIONS_SUCCESS = "user/GET_NOTIFICATIONS_SUCCESS";
export const GET_LEADS = "user/GET_LEADS";
export const GET_LEADS_SUCCESS = "user/GET_LEADS_SUCCESS";
export const REGISTER = "user/REGISTER";
export const REGISTER_COMPLETE = "user/REGISTER_COMPLETE";
export const UPDATE_USER_INFORMATION = "user/UPDATE_USER_INFORMATION";
export const CHANGE_PASSWORD = "user/CHANGE_PASSWORD";
export const DO_ADIANTAMENTO = "user/DO_ADIANTAMENTO";
export const SET_NOTIFICATION_TOKEN = "user/SET_NOTIFICATION_TOKEN";
export const CLEAN_LEADS = "user/CLEAN_LEADS";
export const QRCODE = "user/QRCODE";
export const FILE_UPLOAD = "user/FILE_UPLOAD";
export const FILE_UPLOAD_SUCCESS = "user/FILE_UPLOAD_SUCCESS";
export const GET_FILE_FOR_UPLOAD = "user/GET_FILE_FOR_UPLOAD";
export const GET_FILE_FOR_UPLOAD_SUCCESS = "user/GET_FILE_FOR_UPLOAD_SUCCESS";
export const GET_FILE_FOR_UPLOAD_FAILED = "user/GET_FILE_FOR_UPLOAD_FAILED";
export const DO_CODE_FOR_EXTRACT = "lead/DO_CODE_FOR_EXTRACT";
export const FETCH_MY_VISITS = "user/FETCH_MY_VISITS";
export const FETCH_MY_VISITS_SUCCESS = "user/FETCH_MY_VISITS_SUCCESS";
export const FETCH_MY_VISITS_FAILED = "user/FETCH_MY_VISITS_FAILED";
export const FLIGHT_PLAN_UPDATE = "user/FLIGHT_PLAN_UPDATE";
export const FLIGHT_PLAN_UPDATE_SUCCESS = "user/FLIGHT_PLAN_UPDATE_SUCCESS";
export const GET_SUBORDINATED_USERS = "user/GET_SUBORDINATED_USERS";
export const GET_SUBORDINATED_USERS_SUCCESS =
  "user/GET_SUBORDINATED_USERS_SUCCESS";
export const GET_SUBORDINATED_USERS_FAILED =
  "user/GET_SUBORDINATED_USERS_FAILED";
export const GET_PARTNER_DETAILS = "user/GET_PARTNER_DETAILS";
export const GET_PARTNER_DETAILS_SUCCESS = "user/GET_PARTNER_DETAILS_SUCCESS";
export const GET_PARTNER_DETAILS_FAILED = "user/GET_PARTNER_DETAILS_FAILED";

// Reducer
const initialState = {
  token: "",
  notifications: [],
  leads: [],
  current: {},
  email: "",
  password: "",
  deviceId: "",
  isLoading: false,
  files: [],
  loadingUpload: false,
  loadingFlightPlan: false,
  myVisits: {},
  isLoadingFetchVisits: false,
  isLoadingLogin: false,
  subordinatedUsers: [],
  isLoadingGetUser: false,
  isLoadingRegister: false,
  partnerResume: {},
  partnerDetails: {},
};

export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case DO_LOGIN: {
      return {
        ...state,
        email: action.payload.email,
        password: action.payload.password,
        isLoadingLogin: true,
      };
    }
    case DO_LOGIN_SUCCESS: {
      return {
        ...state,
        token: action.payload.token,
        isLoadingLogin: false,
      };
    }
    case DO_LOGIN_FAILED: {
      return {
        ...state,
        isLoadingLogin: false,
      };
    }
    case GET_NOTIFICATIONS_SUCCESS: {
      return { ...state, notifications: action.payload.notifications };
    }
    case GET_USER: {
      return { ...state, isLoadingGetUser: true };
    }
    case GET_USER_SUCCESS: {
      return {
        ...state,
        current: action.payload.user,
        isLoadingGetUser: false,
      };
    }
    case GET_USER_FAILED: {
      return { ...state, isLoadingGetUser: false };
    }
    case GET_LEADS_SUCCESS: {
      return { ...state, leads: action.payload.leads };
    }
    case DO_LOGOUT: {
      return { ...state, token: "" };
    }
    case REGISTER: {
      return { ...state, isLoadingRegister: true };
    }
    case REGISTER_COMPLETE: {
      return { ...state, isLoadingRegister: false };
    }
    case FILE_UPLOAD: {
      return {
        ...state,
        loadingUpload: true,
      };
    }
    case FILE_UPLOAD_SUCCESS: {
      return {
        ...state,
        loadingUpload: false,
      };
    }
    case GET_FILE_FOR_UPLOAD: {
      return {
        ...state,
        isLoading: true,
      };
    }
    case GET_FILE_FOR_UPLOAD_SUCCESS: {
      return {
        ...state,
        isLoading: false,
        files: action.payload.files,
      };
    }
    case GET_FILE_FOR_UPLOAD_FAILED: {
      return {
        ...state,
        isLoading: false,
      };
    }
    case FETCH_MY_VISITS: {
      return {
        ...state,
        isLoadingFetchVisits: true,
      };
    }
    case FETCH_MY_VISITS_SUCCESS: {
      return {
        ...state,
        isLoadingFetchVisits: false,
        myVisits: action.payload.myVisits,
      };
    }
    case FETCH_MY_VISITS_FAILED: {
      return {
        ...state,
        isLoadingFetchVisits: false,
      };
    }
    case FLIGHT_PLAN_UPDATE: {
      return { ...state, loadingFlightPlan: true };
    }
    case FLIGHT_PLAN_UPDATE_SUCCESS: {
      return {
        ...state,
        loadingFlightPlan: false,
        current: action.payload.user,
      };
    }
    case GET_SUBORDINATED_USERS: {
      return { ...state, isLoading: true };
    }
    case GET_SUBORDINATED_USERS_SUCCESS: {
      return {
        ...state,
        isLoading: false,
        subordinatedUsers: action.payload.data,
      };
    }
    case GET_SUBORDINATED_USERS_FAILED: {
      return { ...state, isLoading: true };
    }
    case GET_PARTNER_DETAILS: {
      return { ...state, isLoading: true };
    }
    case GET_PARTNER_DETAILS_SUCCESS: {
      return {
        ...state,
        isLoading: false,
        partnerResume: action.payload.data.resumo,
        partnerDetails: action.payload.data.detalhes,
      };
    }
    case GET_PARTNER_DETAILS_FAILED: {
      return {
        ...state,
        isLoading: false,
        partnerResume: {},
        partnerDetails: {},
      };
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
export function getNotifications() {
  return { type: GET_NOTIFICATIONS };
}
export function getNotificationsSuccess(notifications) {
  return { type: GET_NOTIFICATIONS_SUCCESS, payload: { notifications } };
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
export function getLeads(id) {
  return { type: GET_LEADS, payload: { id } };
}
export function getLeadsSuccess(leads) {
  return { type: GET_LEADS_SUCCESS, payload: { leads } };
}
export function register(data) {
  return { type: REGISTER, payload: { data } };
}
export function registerComplete() {
  return { type: REGISTER_COMPLETE };
}
export function readQrcode(data) {
  return { type: QRCODE, payload: { data } };
}
export function updateUserInformation(data) {
  return { type: UPDATE_USER_INFORMATION, payload: { data } };
}
export function changePassword(data) {
  return { type: CHANGE_PASSWORD, payload: { data } };
}
export function doAdiantamento(data) {
  return { type: DO_ADIANTAMENTO, payload: { data } };
}

export function setNotificationToken(deviceId) {
  return { type: SET_NOTIFICATION_TOKEN, payload: { deviceId } };
}
export function cleanLeads() {
  return { type: CLEAN_LEADS };
}
export function fileUpload({ file, typeId, filename, type }) {
  return { type: FILE_UPLOAD, payload: { file, typeId, filename, type } };
}
export function fileUploadSuccess() {
  return { type: FILE_UPLOAD_SUCCESS };
}
export function fileForUpload() {
  return { type: GET_FILE_FOR_UPLOAD };
}
export function fileForUploadSuccess(files) {
  return { type: GET_FILE_FOR_UPLOAD_SUCCESS, payload: { files } };
}
export function fileForUploadFailed() {
  return { type: GET_FILE_FOR_UPLOAD_FAILED };
}
export function doCodeSent(data) {
  return { type: DO_CODE_FOR_EXTRACT, payload: { data } };
}
export function fetchMyVisits(month) {
  return { type: FETCH_MY_VISITS, payload: { month } };
}
export function fetchMyVisitsSuccess(myVisits) {
  return { type: FETCH_MY_VISITS_SUCCESS, payload: { myVisits } };
}
export function fetchMyVisitsFailed() {
  return { type: FETCH_MY_VISITS_FAILED };
}
export function flightPlanUpdate(status) {
  return { type: FLIGHT_PLAN_UPDATE, payload: { status } };
}
export function flightPlanUpdateSuccess(user) {
  return { type: FLIGHT_PLAN_UPDATE_SUCCESS, payload: { user } };
}
export function getSubordinatedUsers(id) {
  return { type: GET_SUBORDINATED_USERS, payload: { id } };
}
export function getSubordinatedUsersSuccess(data) {
  return { type: GET_SUBORDINATED_USERS_SUCCESS, payload: { data } };
}
export function getSubordinatedUsersFailed() {
  return { type: GET_SUBORDINATED_USERS_FAILED };
}
export function getPartnerDetails(cpf) {
  return { type: GET_PARTNER_DETAILS, payload: { cpf } };
}
export function getPartnerDetailsSuccess(data) {
  return { type: GET_PARTNER_DETAILS_SUCCESS, payload: { data } };
}
export function getPartnerDetailsFailed() {
  return { type: GET_PARTNER_DETAILS_FAILED };
}
