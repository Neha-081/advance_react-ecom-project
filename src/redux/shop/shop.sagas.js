//Reducers fire first, then sagas receive the action. From there, sagas can fire off new actions which in turn hit the reducers and other sagas as well!
//sagas  wants to run them all together in a way that does not block the execution.

//takeEvery-listens to every action of the specific type
//takeLatest-if fires multiple times then the last one will get most up to date data
import {takeLatest,call,put,all} from 'redux-saga/effects';
import ShopActionTypes from './shop.types';
import { firestore,convertCollectionsSnapshotToMap } from '../../firebase/firebase.utils';
import { fetchCollectionsSuccess,
fetchCollectionsFailure,
} from './shop.actions';


//yield-determine whether or not to cancel any of the previously started sagas from the other actions that came in
export function* fetchCollectionsAsync(){    //generator function
 
yield  console.log('i am fired');

try{
  const collectionRef=firestore.collection('collections');
 //similar to async away in the sense that when we set this new snapshot value equal to the yielded value of running collectionRef.get(). When this value comes back, it comes back in a promise form that gets resolved with the value of our collection reference, which is our snapshot in a constant instead of a callback.
  const snapshot=yield collectionRef.get()

  //call-t's a method that takes as its first argument, some function or method.And then the subsequent arguments will be the parameters that you passed into this function call, and because we're yielding this call, it allows, again, us to defer control at this point of the execution back to the saga middleware.
  const collectionMap=yield call(convertCollectionsSnapshotToMap,snapshot)
  
  //put-saga effect of creating functions
  yield put(fetchCollectionsSuccess(collectionMap))
}catch(error){
  yield put(fetchCollectionsFailure(error.message))
}
}

export function* fetchCollectionStart(){
    yield takeLatest(
        ShopActionTypes.FETCH_COLLECTIONS_START,
        fetchCollectionsAsync
        )
}

export function* shopSagas(){
  yield all([
    call(fetchCollectionStart)
  ])
}

//FLOW-> FETCH_COLLECTIONS_START action came in our saga that fetchCollectionStart was listening for this action
// the moment it heard it, if fired off our fetchCollectionsAsync generator functionthen (i am fired logged)