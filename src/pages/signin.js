import React from 'react'
import fire from './../firebase'
import provider from './../provider'

function SignIn (props) {

    const { user, setUser } = props

    function signInWithGoogle() {
        fire
        .auth()
        .signInWithPopup(provider).then(res => {
          console.log(res.user)
          setUser(res.user)
    
        }).catch(function(error) {
          // // Handle Errors here.
          // var errorCode = error.code;
          // var errorMessage = error.message;
          // // The email of the user's account used.
          // var email = error.email;
          // // The firebase.auth.AuthCredential type that was used.
          // var credential = error.credential;
          // // ...
          console.log(error)
        });
      }


    return (
        <div className="signForm">
            <img alt="Logo" src="./../logocoast-removebg-preview.png"/>
            <h1>Chat Hub</h1>
            <button onClick={() => signInWithGoogle()}>Logar com GMAIL</button>
        </div>
    )
}

export default SignIn

