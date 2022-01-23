//Reducers fire first, then sagas receive the action. From there, sagas can fire off new actions which in turn hit the reducers and other sagas as well!
//sagas  wants to run them all together in a way that does not block the execution.

//listens to every action of the specific type
import {takeEvery} from 'redux-saga/effects';
import ShopActionTypes from './shop.types';


//yield-determine whether or not to cancel any of the previously started sagas from the other actions that came in
export function* fetchCollectionsAsync(){
  yield  console.log('i am fired');
}

export function* fetchCollectionStart(){
    yield takeEvery(
        ShopActionTypes.FETCH_COLLECTIONS_START,
        fetchCollectionsAsync
        )
}

//FLOW-> FETCH_COLLECTIONS_START action came in our saga that fetchCollectionStart was listening for this action
// the moment it heard it, if fired off our fetchCollectionsAsync generator functionthen (i am fired logged)