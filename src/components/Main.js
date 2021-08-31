import React, { useState } from 'react'
import Chat from './Chat'
import Sidebar from './Sidebar'

const Main = () => {
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);
    const [isMobile, setIsMobile] = useState(null);
    // useEffect(() => {
    //     window.addEventListener('resize', ()=> {
    //         window.innerWidth < 520 ? setIsDrawerOpen(false) : setIsDrawerOpen(true);
            
    //         setIsMobile(false) 

    //     })
    //     return window.removeEventListener('resize', () => {
    //         window.innerWidth < 520 ? setIsDrawerOpen(false) : setIsDrawerOpen(true);
    //     })
    // }, [])

    const clearOverlay = () => {
        setIsDrawerOpen(false);
        setIsMobile(false)
    }

    return (
        <div className="main flex flex-row h-screen relative overflow-hidden">
            {isMobile ? (<div onClick={clearOverlay} className="absolute sm:relative sm:hidden w-full h-full" />) : '' }
            {/* sidebar */}
            <Sidebar isDrawerOpen={isDrawerOpen} />
            {/* main chatroom */}
            <Chat isMobile={isMobile} setIsMobile={setIsMobile} isDrawerOpen={isDrawerOpen} setIsDrawerOpen={setIsDrawerOpen} />
        </div>
    )
}

export default Main
