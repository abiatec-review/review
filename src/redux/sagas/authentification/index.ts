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
  identifyAuthUserSuccess,
  userLoadAvatarSuccess,
} from '../../actions/authentification';
import {FirebaseAuthTypes} from '@react-native-firebase/auth';
import {setModalType} from '../../actions/modal';
import {firebaseAPI_Handler} from '../../../api/api';
import {getFaireBaseDataSuccess} from '../../actions/userDataFromFairebase';

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
        UID: _auth._user._user.uid,
      }),
    );
    yield firebaseAPI_Handler.setUserData(_auth._user._user.uid);
    const fairbaseData: {data: object} = yield firebaseAPI_Handler.getUserData(
      _auth._user._user.uid,
    );
    yield put(getFaireBaseDataSuccess({fairbaseData}));
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
        UID: user._user.uid,
      }),
    );
    const fairbaseData: {data: object} = yield firebaseAPI_Handler.getUserData(
      user._user.uid,
    );
    yield put(getFaireBaseDataSuccess({fairbaseData}));
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
    }
    yield put(setModalType({modalType: '', modalData: null}));
  } catch (err) {
    console.dir(err);
  }
}

function* identifayUser() {
  try {
    const user: FirebaseAuthTypes.UserInfo = yield getUser();
    yield put(
      identifyAuthUserSuccess({
        displayName: user._user.displayName,
        token: user._user.refreshToken,
        email: user._user.email,
        photoURL: user._user.photoURL,
        UID: user._user.uid,
      }),
    );

    const fairbaseData: {data: object} = yield firebaseAPI_Handler.getUserData(
      user._user.uid,
    );
    yield put(getFaireBaseDataSuccess({fairbaseData}));
  } catch (err) {
    console.dir(err);
  }
}

export default function* rootSaga() {
  yield all([
    takeEvery(actionsTypes.AUTHENTIFICATION_SIGN_UP, authentificationSignUp),
    takeEvery(actionsTypes.AUTHENTIFICATION_SIGN_IN, authentificationSignIn),
    takeEvery(actionsTypes.USER_LOAD_AVATAR, loadUserAvatarSaga),
    takeEvery(actionsTypes.AUTHENTIFICATION_IDENTIFY, identifayUser),
  ]);
}
