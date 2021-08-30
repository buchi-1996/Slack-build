import React from 'react'

const Chat = ({ isDrawerOpen, setIsDrawerOpen, isMobile, setIsMobile }) => {

    return (
        <div className="flex-1 h-full flex flex-col">
            {/* Chat Header  */}
            <div className="flex flex-row items-center justify-between  px-4 h-12 py-6 border-b">
                <div className="flex flex-row items-center">
                    <span onClick={() => { setIsDrawerOpen(!isDrawerOpen); setIsMobile(true) }} className={`${isDrawerOpen ? 'hidden' : 'block sm:hidden'} mr-4 hover:bg-gray-100 rounded-md p-1`}>
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
                        </svg>
                    </span>
                    <button className="flex items-center space-x-2 hover:bg-gray-100 rounded-md font-semibold py-1 px-1">
                        <div className="relative">
                            <img src="./assets/slack-avatar.png" alt="" className="rounded object-contain w-6 h-6 flex-none" />
                            <div className="absolute right-0 bottom-0 transform translate-y-1.5 translate-x-1.5 rounded-full border-3 border-white">
                                <div className="h-2.5 w-2.5 rounded-full  bg-white border-2 border-gray-500" />
                            </div>
                        </div>
                        <h4 className="font-bold">Andre Nonso</h4>
                        <span className="transform rotate-90">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                                <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd" />
                            </svg>
                        </span>
                    </button>
                </div>
                <button className="md:pr-2 hover:bg-gray-100 rounded-md p-2">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                </button>
            </div>
            {/* Chat Body */}
            <div className={`h-full px-5 ${isMobile ? 'overflow-hidden' : 'overflow-auto'}`}
            >

            </div>
            {/*ChatBox */}
            <div className="mx-5 border border-gray-500 rounded h-28 mb-6 box-border divide-y  flex flex-col overflow-hidden">
                <textarea name="" id="" rows="2" className="w-full  p-2 outline-none flex-1" placeholder="Send a message"></textarea>
                <div className="p-2 h-10 bg-gray-100 mt-auto">x x x x x</div>
            </div>
        </div>
    )
}

export default Chat
