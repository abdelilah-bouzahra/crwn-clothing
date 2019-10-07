import {all, call, put, takeLatest} from 'redux-saga/effects';

import ShopActionTypes from './shop.types';
import {convertCollectionsSnapshotToMap, firestore} from '../../firebase/firebase.utils';
import {fetchCollectionsFailure, fetchCollectionsSuccess} from './shop.actions';

export function* fetchCollectionsAsync() {
    try {
        const collectionRef = firestore.collection('collections');
        const snapshot = yield collectionRef.get();
        const collectionsMap = yield call(convertCollectionsSnapshotToMap, snapshot);
        yield put(fetchCollectionsSuccess(collectionsMap));
    } catch (error) {
        yield put(fetchCollectionsFailure(error.message));
    }
}

export function* fetchCollectionsStart() {
    yield takeLatest(ShopActionTypes.FETCH_COLLECTIONS_START, fetchCollectionsAsync);
}

export function* shopSagas() {
    yield all([
        call(fetchCollectionsStart)
    ]);
}