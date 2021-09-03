import React from 'react'

const Modal = ({setIsModal, Template, heading }) => {
    return (
        <>
            <button onClick={() => setIsModal(false)} className="cursor-default bg-black opacity-50 fixed inset-0 z-50 h-full w-full" />
            <div className="bg-white rounded-md w-11/12 h-auto max-h-96 max-w-2xl z-50 fixed right-1/2 left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col justify-between shadow-5xl ">
                <div className="border-b py-8 px-6">
                <div className=" flex-none flex items-center justify-between ">
                    <div className="flex flex-row items-center space-x-4">
                    <img src="./assets/medium-avatar.png" alt="" className="rounded-xl object-cover w-auto h-auto flex-none" />
                        <h1 className="font-bold text-xl">{heading}</h1>
                        <span className="text-gray-500">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
</svg>
                        </span>
                    </div>
                    <button onClick={() => setIsModal(false)} className="text-gray-600 rounded p-2 hover:bg-gray-100 -mt-14 flex justify-center items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                </div>
                <div className="mt-5 flex space-x-2 items-center">
                    <button className="text-sm items-center flex space-x-2 py-0.5 px-2.5 border border-gray-400 rounded">
                        <span className="text-gray-600">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
</svg>
                        </span>
                        <span>Mute</span>
                    </button>
                    <button className="text-sm items-center flex space-x-2 py-0.5 px-2.5 border border-gray-400 rounded">
                        <span className="text-gray-600">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
</svg>
                        </span>
                        <span>Start a Call</span>
                    </button>
                </div>
                </div>
                <div className="overflow-auto h-auto px-6">
                    <Template />
                </div>
                <div className="border-t h-16 flex-none flex items-center justify-end px-6">
                    <button  onClick={() => setIsModal(false)} className="border border-gray-400 rounded w-24 p-1.5 hover:bg-gray-100">Close</button>
                </div>

            </div>
        </>
    )
}

export default Modal
