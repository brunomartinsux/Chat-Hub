import React from 'react'
import SideBar from './../components/SideBar'
import ChatBox from './../components/ChatBox'

function Chat (props) {

    const { user } = props

    return (
        <div className='chatbody'>
            <SideBar />
            <ChatBox user={user}/>
        </div>
    )
}

export default Chat