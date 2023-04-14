import { all, call, put, takeEvery } from 'redux-saga/effects';
import { getUser, signIn, signUp, updateUser } from '../../../utils/firebase';
import { FirebaseAuthTypes } from '@react-native-firebase/auth';
import { setModalType } from '../../actions/modals/modal';
import { firebaseAPI_Handler } from '../../../api/api';
import { getFaireBaseDataSuccess } from '../../actions/userDataFromFairebase';
import {
  authSignInSuccess,
  authSignUpError,
  authSignUpSuccess,
  identifyAuthUserSuccess,
  userLoadAvatarSuccess,
} from '../../../redux/actions/authentication/actions';
import { AuthenticationActionTypes } from '../../actions/authentication/action-types';

function* authentificationSignUp({ payload }: any) {
  try {
    const { _auth } = yield call(
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
    const fairbaseData: { data: object } =
      yield firebaseAPI_Handler.getUserData(_auth._user._user.uid);
    yield put(getFaireBaseDataSuccess({ fairbaseData }));
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

function* authentificationSignIn({ payload }: any) {
  try {
    const { user } = yield call(signIn, payload.email, payload.password);
    console.log(11111);
    yield put(
      authSignInSuccess({
        displayName: user._user.displayName,
        token: user._user.refreshToken,
        email: user._user.email,
        photoURL: user._user.photoURL,
        UID: user._user.uid,
      }),
    );
    const fairbaseData: { data: object } =
      yield firebaseAPI_Handler.getUserData(user._user.uid);
    yield put(getFaireBaseDataSuccess({ fairbaseData }));
  } catch (err) {
    console.log(22222);
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

function* loadUserAvatarSaga({ payload }: any) {
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
    yield put(setModalType({ modalType: '', modalData: null }));
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

    const fairbaseData: { data: object } =
      yield firebaseAPI_Handler.getUserData(user._user.uid);

    yield put(getFaireBaseDataSuccess({ fairbaseData }));
  } catch (err) {
    console.dir(err);
  }
}

export default function* rootSaga() {
  yield all([
    takeEvery(
      AuthenticationActionTypes.AUTHENTICATION_SIGN_UP,
      authentificationSignUp,
    ),
    takeEvery(
      AuthenticationActionTypes.AUTHENTICATION_SIGN_IN,
      authentificationSignIn,
    ),
    takeEvery(AuthenticationActionTypes.USER_LOAD_AVATAR, loadUserAvatarSaga),
    takeEvery(AuthenticationActionTypes.AUTHENTICATION_IDENTIFY, identifayUser),
  ]);
}
