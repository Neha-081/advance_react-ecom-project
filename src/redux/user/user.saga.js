import { takeLatest,put,all,call } from "redux-saga/effects";
import UserActionTypes from "./user.types";
import { auth,googleProvider,createUserProfile,getCurrentUser } from "../../firebase/firebase.utils";
import { signInSuccess,signInFailure, signOutSuccess,signOutFailure, signUpFailure, signUpSuccess} from "./user.actions";


export function* getSnapshotFromUserAuth(userAuth,additionalData){
try{
    const userRef=yield call(createUserProfile,userAuth,additionalData)
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

//signout
export function* signOut(){
    try{
        yield auth.signOut()
        yield put(signOutSuccess())
    }catch(error){
        yield put(signOutFailure(error))
    }
}

export function* onSignOutStart(){
    yield takeLatest(UserActionTypes.SIGN_OUT_START,signOut)
}

//signUp
export function* signUp({payload:{email,password,displayName}}){
    try{
 //creating the user off with email and password, if this process succeeds and we get back the right object, we're then going to call sign ups success with the user and our additional data as the payload inside of an object.       
        const {user}=yield auth.createUserWithEmailAndPassword(
            email,
            password
            );
            yield put(signUpSuccess({user,additionalData:{displayName}}))
    }catch(error){
        yield put(signUpFailure(error))
    }
}

export function* onSignUpStart(){
yield takeLatest(UserActionTypes.SIGN_UP_START,signUp)
}

export function* signInAfterSignUp({payload:{user,additionalData}}){
yield getSnapshotFromUserAuth(user,additionalData)

}

export function* onSignUpSuccess(){
    yield takeLatest(UserActionTypes.SIGN_UP_SUCCESS,signInAfterSignUp)
}

export function* userSagas(){
    yield all([
        call(onGoogleSignInStart),
        call(onEmailSignInStart),
        call(onCheckUserSession),
        call(onSignOutStart),
        call(onSignUpStart),
        call(onSignUpSuccess)
    ])
}