import React from 'react'
import Chat from './Chat'
import Sidebar from './Sidebar'

const Main = () => {
    return (
        <div className="main flex flex-row bg-pink-50 h-screen">
            {/* sidebar */}
            <Sidebar />
            {/* main chatroom */}
            <Chat />
        </div>
    )
}

export default Main
