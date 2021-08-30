import React, { useState } from 'react'

const SidebarAccordion = ({heading, options}) => {
    const [isOpen, setIsOpen] = useState(false);
    console.log(options)
    return (
        <div className="accordion">
                    <div className="flex flex-row items-center cursor-pointer justify-between w-full px-3 py-0.5 mt-2 group text-light-purple-text">
                        <div onClick={e => setIsOpen(!isOpen)} className="flex-1 truncate flex flex-row items-center space-x-1">
                            <span className={`hover:bg-light-purple rounded p-0.5 transform ${isOpen ? 'rotate-90' : 'rotate-0'}`}>
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                    <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd" />
                                </svg>
                            </span>
                            <h4 className="truncate">{heading}</h4>
                        </div>
                        <button className="opacity-0 ml-4 group-hover:opacity-100 hover:bg-light-purple rounded p-0.5">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                            </svg>
                        </button>
                    </div>
                    <ul className={isOpen ? 'h-auto' : 'h-0 overflow-y-hidden'}>
                        {options.map(({text, icon, isAdmin}) => (<li className="flex flex-row items-center justify-between cursor-pointer group text-light-purple-text pl-7 p-3 py-0.5 hover:bg-dark-purple truncate">
                            <div className="flex flex-row items-center space-x-2 truncate">
                            <span className="text-light-purple-text flex-none">{icon}</span>
                            <h5 className="text-light-purple-text truncate font-medium">{text} <span className="ml-2">{isAdmin ? 'you' : ''}</span></h5>
                            </div>
                            {heading === "Direct messages" && (<button className={`${text === 'Add teammates' ? 'hidden': 'block'} opacity-0 ml-4 group-hover:opacity-100 hover:text-purple-300`}>
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
</svg>
                        </button>)}
                        </li>))}
                    </ul>
                </div>
    )
}

export default SidebarAccordion
