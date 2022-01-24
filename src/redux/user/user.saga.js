import { takeLatest,put,all,call } from "redux-saga/effects";
import UserActionTypes from "./user.types";
import { auth,googleProvider,createUserProfile } from "../../firebase/firebase.utils";
import { signInSuccess,signInFailure} from "./user.actions";


export function* getSnapshotFromUserAuth(userAuth){
try{
    const userRef=yield call(createUserProfile,userAuth)
const userSnapshot=yield userRef.get()
//put(), puts things back into our regular redux flow
yield put(signInSuccess({id:userSnapshot.id,...userSnapshot.data()}))

}catch(error){
yield put(signInFailure(error))
}
}

//googleSignIn
export function* signInWithGoogle(){
try{
const {user}=yield auth.signInWithPopup(googleProvider)
yield getSnapshotFromUserAuth(user)
}catch(error){
yield put(signInFailure(error))
}}

export function* onGoogleSignInStart(){
yield takeLatest(UserActionTypes.GOOGLE_SIGN_IN_START,signInWithGoogle)
}

//emailSignIn
export function* signInWithEmail({payload:{email,password}}){
try{
 const {user}=yield auth.signInWithEmailAndPassword(email,password);
 yield getSnapshotFromUserAuth(user)
}catch(error){
    put(signInFailure(error))
}
}

export function* onEmailSignIn(){
    yield takeLatest(UserActionTypes.EMAIL_SIGN_IN_START,signInWithEmail)
}

export function* userSagas(){
    yield all([
        call(onGoogleSignInStart),
        call(onEmailSignIn)
    ])
}