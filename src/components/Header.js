import React from 'react'

function Header() {
    return (
        <header className="flex flex-row items-center justify-between bg-dark-purple pr-4 py-1.5">
            <div className="md:w-1/5 flex justify-end pr-5 pl-4">
                <span>
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-purple-100" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                </span>
            </div>
            <div className="flex-1 flex flex-row items-center bg-light-purple relative rounded px-2 py-0.5">
                <input type="text" className="flex-1  rounded focus:outline-none bg-transparent text-sm placeholder-white font-medium" placeholder="Search Hiltop Web Solutions" />
                <span className="pl-1">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                </span>
            </div>
            <div className="flex flex-row items-center justify-between space-x-8 md:w-1/3.5 pl-5">
                <div>
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-purple-100" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                </div>
                <button className="relative">
                    <img src="./assets/slack-avatar.png" alt="" className="rounded object-contain w-7 h-auto"/>
                    <div className="w-4 h-4 rounded-full border-3 border-dark-purple absolute bottom-0 right-0 transform translate-x-1.5 translate-y-1.5">
                    <span className="h-full w-full block bg-green-500 rounded-full"></span>
                    </div>
                </button>
            </div>
        </header>
    )
}

export default Header
