import React from 'react';
import SidebarAccordion from './SidebarAccordion';

const Sidebar = ({isDrawerOpen}) => {
    console.log(isDrawerOpen);

    

    return (
            <div style={{ minWidth: 230 }} className={` ${!isDrawerOpen ? '-translate-x-full sm:translate-x-0 absolute sm:relative duration-500 transition-all' : `translate-x-0 ${isDrawerOpen ? 'absolute sm:relative duration-200 transition-all' : 'relative' }`} flex flex-col min-h-full md:justify-between w-1/5 border-r bg-side-purple z-50  transform`}>
            <div className="flex flex-row items-center px-4 py-2 h-12 border-b border-light-purple">
                <h1 className="truncate text-xl font-bold flex-1 text-white">Hiltop Web Solutions</h1>
                <div className="flex flex-row items-center space-x-2">
                    <span>
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 text-white" viewBox="0 0 20 20" fill="currentColor">
                            <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" />
                        </svg>
                    </span>
                    <span className="flex flex-row items-center justify-center bg-white rounded-full h-9 w-9">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                        </svg>
                    </span>
                </div>
            </div>
            <div className="sidebar-scroll pt-4 pb-10 overflow-auto flex-1">
                {[
                    {
                        sidebarOption: 'Threads', num: '', icon: (<svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                        </svg>)
                    },
                    {
                        sidebarOption: 'Drafts', num: 3, icon: (<svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7v8a2 2 0 002 2h6M8 7V5a2 2 0 012-2h4.586a1 1 0 01.707.293l4.414 4.414a1 1 0 01.293.707V15a2 2 0 01-2 2h-2M8 7H6a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2v-2" />
                        </svg>)
                    },
                    {
                        sidebarOption: 'Mentions & reactions', num: '', icon: (<svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />
                        </svg>)
                    },
                    {
                        sidebarOption: 'Saved Items', num: '', icon: (<svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" />
                        </svg>)
                    },
                    {
                        sidebarOption: 'Slack Connect', num: '', icon: (<svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                        </svg>)
                    },
                ].map(({ sidebarOption, num, icon }) => (

                    <div className="flex flex-row items-center justify-between px-4 py-0.5 hover:bg-dark-purple cursor-pointer">
                        <div className="flex flex-row flex-1 max-w-full items-center space-x-2">
                            <span className="text-light-purple-text">{icon}</span>
                            <h4 className="text-light-purple-text font-medium truncate">{sidebarOption}</h4>
                        </div>
                        <div className="text-light-purple-text flex-none">
                            <p className="text-sm">{num}</p>
                        </div>
                    </div>
                ))}
                <div className="flex flex-row items-center justify-between px-4 py-0.5 cursor-pointer group">
                    <div className="flex flex-row flex-1 items-center space-x-2 max-w-full">
                        <span className="text-light-purple-text transition-all duration-100 ease-in  group-hover:text-white ">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
                            </svg>
                        </span>
                        <h4 className="text-light-purple-text font-medium truncate transition-all duration-100 ease-in  group-hover:text-white ">More</h4>
                    </div>
                </div>
                <SidebarAccordion heading='Channels' options={[{
                    text: 'all-hws-staff', icon: (<svg xmlns="http://www.w3.org/2000/svg" class="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                    </svg>)
                }, {
                    text: 'general', icon: (<svg xmlns="http://www.w3.org/2000/svg" class="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 20l4-16m2 16l4-16M6 9h14M4 15h14" />
                    </svg>)
                }, {
                    text: 'random', icon: (<svg xmlns="http://www.w3.org/2000/svg" class="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 20l4-16m2 16l4-16M6 9h14M4 15h14" />
                    </svg>)
                }, {
                    text: 'web projects', icon: (<svg xmlns="http://www.w3.org/2000/svg" class="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 20l4-16m2 16l4-16M6 9h14M4 15h14" />
                    </svg>)
                }, {
                    text: 'Add channels', icon: (<div className=" bg-light-purple rounded"><svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path fill-rule="evenodd" d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z" clip-rule="evenodd" />
                    </svg></div>)
                }]} />
                <SidebarAccordion heading='Direct messages' options={[{
                    text: 'Buchi', icon: (<div className="relative">
                        <img src="./assets/slack-avatar.png" alt="" className="rounded object-contain w-5 h-5 flex-none" />
                        <div className="w-3 h-3 rounded-full border-2 border-dark-purple absolute bottom-0 right-0 transform translate-x-1.5 translate-y-1">
                            <span className="h-full w-full block bg-green-500 rounded-full"></span>
                        </div>
                    </div>), isAdmin: true
                }, {
                    text: 'Andre Nonso', icon: (<div className="relative">
                        <img src="./assets/slack-avatar.png" alt="" className="rounded object-contain w-5 h-auto flex-none" />
                        <div className="w-3 h-3 rounded-full border-2 border-dark-purple absolute bottom-0 right-0 transform translate-x-1.5 translate-y-1">
                            <span className="h-full w-full block bg-green-500 rounded-full"></span>
                        </div>
                    </div>)
                }, {
                    text: 'Vivian Worlu', icon: (<div className="relative">
                        <img src="./assets/slack-avatar.png" alt="" className="rounded object-contain w-5 h-auto flex-none" />
                        <div className="w-3 h-3 rounded-full border-2 border-dark-purple absolute bottom-0 right-0 transform translate-x-1.5 translate-y-1">
                            <span className="h-full w-full block bg-green-500 rounded-full"></span>
                        </div>
                    </div>)
                }, {
                    text: 'Queen', icon: (<div className="relative">
                        <img src="./assets/slack-avatar.png" alt="" className="rounded object-contain w-5 h-auto flex-none" />
                        <div className="w-3 h-3 rounded-full border-2 border-dark-purple absolute bottom-0 right-0 transform translate-x-1.5 translate-y-1">
                            <span className="h-full w-full block bg-green-500 rounded-full"></span>
                        </div>
                    </div>)
                }, {
                    text: 'Add teammates', icon: (<div className="relative bg-light-purple rounded"><svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd" d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z" clip-rule="evenodd" />
                </svg></div>)
                }]} />
            </div>
            
        </div>
       
    )
}

export default Sidebar
