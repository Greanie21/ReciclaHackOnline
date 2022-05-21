import { takeLatest } from "redux-saga/effects";
import { START_APP } from "./app";
import SplashScreen from "react-native-splash-screen";

function* _startApp(_action) {
  yield SplashScreen.hide();
}

function* appSaga() {
  yield takeLatest(START_APP, _startApp);
}

export default (sagaMiddleware) => {
  sagaMiddleware.run(appSaga);
};
