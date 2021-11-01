import React, {useState} from 'react';
import { getAuth, onAuthStateChanged, GoogleAuthProvider, signInWithPopup } from "firebase/auth";

import { initializeApp } from "firebase/app";
import { getFirestore, collection, query, orderBy, getDocs, limit } from "firebase/firestore";


// TODO: this needs to be cleared and added into a config file
const firebaseApp = initializeApp({
    
});

const auth = getAuth();
const provider = new GoogleAuthProvider()
const db = getFirestore();


export function useAuth() {
    const [uid, setUID] = useState(null);
    //console.log(uid)
    onAuthStateChanged(auth, (user) => {
        if (user) {
            // User is signed in, see docs for a list of available properties
            // https://firebase.google.com/docs/reference/js/firebase.User
            if (uid !== user.uid) {
                setUID(user.uid);
            }
        } else {
            if(uid) {
                setUID(null);
            }
        }
    });
    return uid
}

export function signInWithGoogle() {
    signInWithPopup(auth, provider)
    .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        // The signed-in user info.
        const user = result.user;
        console.log('Successfully signed in.')
    }).catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.email;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
        console.log('Error signing in user: ' + errorMessage)

        // ...
    });

}

export const getCheapestAxies = new Promise((resolve, reject) => {
    var data = []
    const q = query(collection(db, "on_sale"), orderBy("currentPriceUSD", "asc"), limit(100));

    getDocs(q).then((snapshot) => {
        snapshot.forEach((doc) => {
            // console.log(doc.data())
            data.push(doc.data())
            
        })
        resolve(data)
    }).catch((err) => {reject(err)})
})
    
    
    


