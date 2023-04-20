import { all, call, put, takeEvery } from 'redux-saga/effects';
import { getUser, signIn, signUp, updateUser } from '../../../utils/firebase';
import { FirebaseAuthTypes } from '@react-native-firebase/auth';
import { firebaseAPI_Handler } from '../../../api/api';
import { GetFaireBaseDataSuccess } from 'src/types/types';
import {
  AuthenticationActionTypes,
  LoadAvatarActionTypes,
  SignInActionType,
  SignUpActionType,
} from '../action-types';
import {
  authSignInSuccess,
  authSignUpError,
  authSignUpSuccess,
  identifyAuthUserSuccess,
  userLoadAvatarSuccess,
} from '../actions';
import { getFaireBaseDataSuccess } from '../../userDataFromFirebase/actions';
import { setModalType } from '../../../redux/modals/actions';

function* authentificationSignUp({ payload }: SignUpActionType) {
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
    const fairbaseData: GetFaireBaseDataSuccess =
      yield firebaseAPI_Handler.getUserData(_auth._user._user.uid);
    yield put(getFaireBaseDataSuccess(fairbaseData));
  } catch (err) {
    const firebaseError = err as FirebaseAuthTypes.NativeFirebaseAuthError;
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
          errorMessage: firebaseError.nativeErrorMessage,
        }),
      );
    }
  }
}

function* authentificationSignIn({ payload }: SignInActionType) {
  try {
    const { user } = yield call(signIn, payload.email, payload.password);
    yield put(
      authSignInSuccess({
        displayName: user._user.displayName,
        token: user._user.refreshToken,
        email: user._user.email,
        photoURL: user._user.photoURL,
        UID: user._user.uid,
      }),
    );
    const fairbaseData: GetFaireBaseDataSuccess =
      yield firebaseAPI_Handler.getUserData(user._user.uid);
    yield put(getFaireBaseDataSuccess(fairbaseData));
  } catch (err) {
    const firebaseError = err as FirebaseAuthTypes.NativeFirebaseAuthError;
    if (!payload.email.length || !payload.password.length) {
      yield put(
        authSignUpError({
          errorMessage: 'Please fill Sign In for authorization',
        }),
      );
    } else {
      yield put(
        authSignUpError({
          errorMessage: firebaseError.nativeErrorMessage,
        }),
      );
    }
  }
}

function* loadUserAvatarSaga({ payload }: LoadAvatarActionTypes) {
  try {
    yield call(updateUser, {
      photoURL: payload.newUserAvatar?.slice(7),
    });

    const { currentUser } = yield getUser();

    if (currentUser?.photoURL) {
      yield put(
        userLoadAvatarSuccess({
          newUserAvatar: currentUser.photoURL,
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
    const { currentUser, token } = yield getUser();

    if (currentUser) {
      yield put(
        identifyAuthUserSuccess({
          displayName: currentUser.displayName,
          token: token.token,
          email: currentUser.email,
          photoURL: currentUser.photoURL,
          UID: currentUser.uid,
        }),
      );
    }
    const fairbaseData: GetFaireBaseDataSuccess =
      yield firebaseAPI_Handler.getUserData(currentUser.uid);

    yield put(getFaireBaseDataSuccess(fairbaseData));
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
