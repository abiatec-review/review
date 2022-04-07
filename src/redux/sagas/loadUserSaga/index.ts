import { LOAD_USER_REQUEST,SIGN_IN_REQUEST, LOAD_USER_SUCCESS, SIGN_UP_REQUEST, LOG_OUT_REQUEST, LOAD_ANY_ERROR, LOAD_USER_LOADING } from './../../actions/UserActions/index';
import { call, put, takeEvery } from "redux-saga/effects";
import { login, logout, signup } from './api';

function* signIn({payload}: any): Generator<any, any, any> {
  try {
    yield call(login, payload);
   
  } catch (e: any) {
    yield put({
      type: LOAD_ANY_ERROR,
      payload: e.message
    })
  }
}
function* logOut(): Generator<any, any, any> {
  try {
    yield call(logout);
  } catch (e: any) {
    console.log(e)
  }
}
function* signUp({payload}: any): Generator<any, any, any> {
  try {
    yield call(signup, payload);
  } catch (e: any) {
    yield put({
      type: LOAD_ANY_ERROR,
      payload: e.message
    }) 
  }
}

function* loadUser({payload}: any): Generator<any, any, any> {
  try {
    yield put({
      type: LOAD_USER_LOADING
    })
    yield put({
      type: LOAD_USER_SUCCESS,
      payload: payload?.email
    })
   
  } catch (e) {
    console.log(e)
  }
}

export default function* loadUserSaga() {
  yield takeEvery(LOAD_USER_REQUEST, loadUser);
  yield takeEvery(SIGN_UP_REQUEST, signUp);
  yield takeEvery(SIGN_IN_REQUEST, signIn);
  yield takeEvery(LOG_OUT_REQUEST, logOut);
}