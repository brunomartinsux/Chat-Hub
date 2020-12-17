import { React, useState, useEffect } from 'react'
import fire from './firebase'
import './index.css';
import Chat from './pages/chat'
import SignIn from './pages/signin'


function App() {

  const [user,setUser] = useState('')

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

  useEffect(() => {
    authStateObserver()
  },[]);

  const handleLogout = () => {
       
    fire.auth().signOut()
  }

  return (
    <>
        {user ? (
            <div>
            <Chat user={user}/>
            <button type="button" onClick={() => handleLogout()}>Deslogar</button>
            </div>
        ):(
            <SignIn user={user} setUser={setUser}/>
        )}
    </>
  )
}

export default App;
