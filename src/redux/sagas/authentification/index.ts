import {all, call, put, takeEvery} from 'redux-saga/effects';
import {
  getUser,
  signIn,
  signUp,
  updateUser,
} from '../../../Components/firebase';
import {actionsTypes} from '../../actions/actionsType';
import {
  authSignInSuccess,
  authSignUpError,
  authSignUpSuccess,
  userLoadAvatarSuccess,
} from '../../actions/authentification';
import {FirebaseAuthTypes} from '@react-native-firebase/auth';
import {setModalType} from '../../actions/modal';

function* authentificationSignUp({payload}: any) {
  try {
    const {_auth} = yield call(
      signUp,
      payload.userName,
      payload.email,
      payload.password,
    );
    yield put(
      authSignUpSuccess({
        displayName: _auth._user._user.displayName,
        token: _auth._user._user.refreshToken,
        email: _auth._user._user.email,
      }),
    );
  } catch (err) {
    if (
      !payload.userName.length ||
      !payload.email.length ||
      !payload.password.length
    ) {
      yield put(
        authSignUpError({
          errorMessage: 'Please fill Sign up for authorization',
        }),
      );
    } else {
      yield put(
        authSignUpError({
          errorMessage: err?.nativeErrorMessage,
        }),
      );
    }
  }
}

function* authentificationSignIn({payload}: any) {
  try {
    const {user} = yield call(signIn, payload.email, payload.password);

    yield put(
      authSignInSuccess({
        displayName: user._user.displayName,
        token: user._user.refreshToken,
        email: user._user.email,
        photoURL: user._user.photoURL,
      }),
    );
  } catch (err) {
    if (!payload.email.length || !payload.password.length) {
      yield put(
        authSignUpError({
          errorMessage: 'Please fill Sign In for authorization',
        }),
      );
    } else {
      yield put(
        authSignUpError({
          errorMessage: err?.nativeErrorMessage,
        }),
      );
    }
  }
}

function* loadUserAvatarSaga({payload}: any) {
  try {
    console.log(payload);
    yield call(updateUser, {
      photoURL: payload.newUserAvatar?.slice(7),
    });

    const user: FirebaseAuthTypes.UserInfo = getUser();

    if (user?.photoURL) {
      yield put(
        userLoadAvatarSuccess({
          newUserAvatar: user.photoURL,
        }),
      );
      yield put(setModalType({modalType: '', modalData: null}));
    }
  } catch (err) {
    console.dir(err);
  }
}

export default function* rootSaga() {
  yield all([
    takeEvery(actionsTypes.AUTHENTIFICATION_SIGN_UP, authentificationSignUp),
    takeEvery(actionsTypes.AUTHENTIFICATION_SIGN_IN, authentificationSignIn),
    takeEvery(actionsTypes.USER_LOAD_AVATAR, loadUserAvatarSaga),
  ]);
}
