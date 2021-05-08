import React from 'react';
import firebase from './firebase'

export default function SignIn() {

    const signInWithGoogle=()=>{
        const provider = new firebase.auth.GoogleAuthProvider();
        firebase.auth().signInWithPopup(provider);
        console.log("Sign in with Google working")
    }

    return (
        <button className="sign-in" onClick={signInWithGoogle}>Sign In | Google</button>
    )
}

function SignOut() {
  return firebase.auth().currentUser && (
    <button className="sign-out" onClick={() => firebase.auth().signOut()}>Sign Out</button>
  )
}

export { SignOut };
