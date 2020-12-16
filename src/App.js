import { React, useState, useEffect } from 'react'
import fire from './firebase'
import './App.css';
import Chat from './pages/chat'
import provider from './provider'


function App() {

  const [user,setUser] = useState('')


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

  function authStateObserver() {
      fire
      .auth()
      .onAuthStateChanged(user => {

        if(user){
          setUser(user)
        } else {
          setUser('')
        }
      })
  }

  const handleLogout = () => {
       
    fire.auth().signOut()
  }

  useEffect(() => {
    authStateObserver()
  },[]);

  return (
    <>
        {user ? (
            <div>
            <Chat user={user}/>
            <button type="button" onClick={() => handleLogout()}>Deslogar</button>
            </div>
        ):(
            <button type="button" onClick={() => signInWithGoogle()}>Logar</button>
        )}
    </>
  )
}

export default App;
