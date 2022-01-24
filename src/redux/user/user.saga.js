import { takeLatest,put,all,call } from "redux-saga/effects";
import UserActionTypes from "./user.types";
import { auth,googleProvider,createUserProfile,getCurrentUser } from "../../firebase/firebase.utils";
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


export function* onEmailSignInStart(){
    yield takeLatest(UserActionTypes.EMAIL_SIGN_IN_START,signInWithEmail)
}


//userSession

export function* isUserAuthenticated(){
try{
const userAuth=yield getCurrentUser();
if(!userAuth) return;  //no session or user
yield getSnapshotFromUserAuth(userAuth)

}catch(error){
    yield put(signInFailure(error))
}
}

export function* onCheckUserSession(){
    yield takeLatest(UserActionTypes.CHECK_USER_SESSION,isUserAuthenticated)
}

export function* userSagas(){
    yield all([
        call(onGoogleSignInStart),
        call(onEmailSignInStart),
        call(isUserAuthenticated)
    ])
}