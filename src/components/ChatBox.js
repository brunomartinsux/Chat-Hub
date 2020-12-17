import React from 'react'

function ChatBox (props) {

    const { user } = props

    return (
        <div className="chatbox-body">
            <div className="chat-header">
                <img className="profile-pic" src={user.photoURL}/>
                <h2>{user.displayName}</h2>
            </div>
        </div>
    )
}

export default  ChatBox 