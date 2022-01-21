import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const config={
    apiKey: "AIzaSyBU6I6uCcPm9BAqfg6EA1x2hCbRpKEcEsQ",
    authDomain: "ecomm-react-92b7b.firebaseapp.com",
    projectId: "ecomm-react-92b7b",
    storageBucket: "ecomm-react-92b7b.appspot.com",
    messagingSenderId: "952293346794",
    appId: "1:952293346794:web:d5b0e84588ab4f96703693",
    measurementId: "G-4VQHJR7WJE"
  };
  firebase.initializeApp(config);

//Using the user reference, we would then call to get the snapshot object, because,
// even if we did not have an actual user object in the database, Firebase will always give us back a
// snapshot object because using it, we would check whether or not it exists or not.
export const createUserProfile=async(userAuth,additionalData)=>{
  if(!userAuth) return;
  const userRef=firestore.doc(`users/${userAuth.uid}`)
  const collectionRef=firestore.collection('users')

  const snapShot=await userRef.get()
  const collectionSnapShot=await collectionRef.get()
  console.log({collection:collectionSnapShot.docs.map(doc=>doc.data())}); //get the json object of all the users signup


  //Firebase will always give us back the reference object and the snapshot object, even if nothing exists there.

  if(!snapShot.exists){
    const {displayName,email}=userAuth;
    const createdAt=new Date();


// create a new document using this object with all these properties on it inside of our database.
    try{
    await userRef.set({
      displayName,
      email,
      createdAt,
      ...additionalData
    })
    }catch(error){
      console.log('error',error);

    }
  }
  return userRef;
}

export const addCollectionAndDocuments=async(collectionKey,obejctsToAdd)=>{
  const collectionRef=firestore.collection(collectionKey);   
// console.log(collectionRef);

  const batch=firestore.batch();  //add set object above
  obejctsToAdd.forEach(obj=>{
    const newDocRef=collectionRef.doc(obj.title)    //new document reference in this collection and randomly generate an ID.
   batch.set(newDocRef,obj)
  })

  return await batch.commit()   //returns a promise

}

  export const auth=firebase.auth();
  export const firestore=firebase.firestore();

  const provider=new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({promt:'select_account'});
  export const signInWithGoogle=()=>auth.signInWithPopup(provider);
  
  export default firebase;