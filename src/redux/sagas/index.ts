import { takeEvery, all } from 'redux-saga/effects';
import { ActionType } from 'redux/actions/actionType';
import { fetchMorePictures, fetchPictures } from './pictures';
import { fetchPictureDetails } from './details';


export default function* rootSaga() {
  yield all([
    takeEvery(ActionType.FetchPictures, fetchPictures),
    takeEvery(ActionType.FetchMore, fetchMorePictures),
    takeEvery(ActionType.FetchDetails, fetchPictureDetails)
  ]);
}