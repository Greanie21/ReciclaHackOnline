import { Alert } from "react-native";
import { put, takeLatest } from "redux-saga/effects";
import { showAlert } from "../ducks/alert";
import { pop } from "../navigation/core";
import { UserService } from "../services/user.service";
import {
  doLoginSuccess,
  DO_LOGIN,
  DO_LOGOUT,
  getUser,
  getUserSuccess,
  GET_USER,
  REGISTER,
  setNotificationToken,
  doLoginFailed,
  getUserFailed,
  registerComplete,
} from "./user";

function* _doLogin(action) {
  const { email, password } = action.payload;

  //const userService = new UserService();

  //const { token, error } = yield userService.doLogin(email, password);
  //
  //if (token) {
  //yield put(doLoginSuccess(`Bearer  ${token}`));
  //  yield put(getUser());
  //} else {
  //  yield put(doLoginFailed());
  //  Alert.alert("Atenção!", error, [{ text: "Entendi" }]);
  //}
  yield put(doLoginSuccess(true));
}

function* _getUser() {
  const userService = new UserService();

  //const { user } = yield userService.getUsuario();
  //if (user) {
  //  yield put(getUserSuccess(user));
  //} else {
  //  yield put(getUserFailed());
  //  _doLogout();
  //}
}

function* _register(action) {
  const userService = new UserService();
  const { data } = action.payload;

  //const { success, error } = yield userService.register(data);
  //
  //if (success) {
  //  yield put(registerComplete());
  //  yield put(
  //    showAlert({
  //      body: {
  //        text: success,
  //      },
  //      buttons: [
  //        {
  //          text: "Ok",
  //          bold: true,
  //          onPress: () => pop(),
  //        },
  //      ],
  //    })
  //  );
  //}
  //if (error) {
  //  yield put(registerComplete());
  //  yield put(
  //    showAlert({
  //      title: "Atenção!",
  //      body: {
  //        text: error,
  //      },
  //      buttons: [
  //        {
  //          text: "Ok",
  //          bold: true,
  //        },
  //      ],
  //    })
  //  );
  //}
}

function* _doLogout() {
  //const httpService = new HttpService();
  //yield httpService.removeToken();
  //yield put(setNotificationToken(""));
}

function* userSaga() {
  yield takeLatest(DO_LOGIN, _doLogin);
  //yield takeLatest(DO_LOGOUT, _doLogout);
  //yield takeLatest(GET_USER, _getUser);
  //yield takeLatest(REGISTER, _register);
}

export default (sagaMiddleware) => {
  sagaMiddleware.run(userSaga);
};
