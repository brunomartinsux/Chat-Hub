import React from 'react'

function Chat (props) {

    const { user } = props

    return (
        <div>
            <img alt="profile-pic" src={user.photoURL}/>
            <h1>Bem vindo, {user.displayName}!</h1>
            <h2>Email: {user.email}</h2>
            <h2>UID: {user.uid}</h2>
        </div>
    )
}

export default Chat