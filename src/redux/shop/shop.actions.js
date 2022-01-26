import ShopActionTypes from "./shop.types";
import { firestore,convertCollectionsSnapshotToMap } from "../../firebase/firebase.utils";

export const fetchCollectionsStart=()=>({
    type:ShopActionTypes.FETCH_COLLECTIONS_START,
})

//after collection ref
export const fetchCollectionsSuccess=(collectionsMap)=>({
    type:ShopActionTypes.FETCH_COLLECTIONS_SUCCESS,
    payload:collectionsMap
})

export const fetchCollectionsFailure=(errorMessage)=>({
    type:ShopActionTypes.FETCH_COLLECTIONS_FAILURE,
    payload:errorMessage
})

export const fetchCollectionsStartAsync=()=>{
    return dispatch=>{
        const collectionRef=firestore.collection('collections');
        dispatch(fetchCollectionsStart())
//create the collection ref and then it's going to dispatch the action for collection start,
//  which will switch our our state is fetching to true. And then it's going to begin this asynchronous request
//  .It's going to go out, fetch the code right from our back end.

        collectionRef.get().then(snapshot=>{
            const collectionsMap= convertCollectionsSnapshotToMap(snapshot)
            dispatch(fetchCollectionsSuccess(collectionsMap))
        }).catch(error=>dispatch(fetchCollectionsFailure(error.message)))
    }
}