import React from 'react'

export default function Projects() {
  return (
    <div>
        <div className="h-auto w-full bg-gray-900  flex items-center flex-col overflow-hidden" id="projects">
        <h3 className="text-white font-montserrat mt-20 mb-12 duration-500 text-center text-5xl font-bold element" >My&nbsp;<span className='text-blue-800'>Projects</span></h3>
        <div className="h-auto w-full flex gap-10 flex-row flex-wrap justify-center items-center mb-24 element">
        <div className="h-96 w-80 m-0  flex items-center justify-center rounded-3xl flex-col bg-gray-800">
          <div className="h-48 w-48   bg-transparent">
            <img className="h-full w-full object-cover rounded-2xl" src="/sci-calcu.PNG" alt="project1-image" id="image"/>  
          </div>
          <div className="w-auto mx-auto flex justify-center -mt-5 text-white bg-gray-800 rounded-t-lg p-2.5 font-montserrat font-semibold">Calculator</div>
          <div className="mt-5 mb-0 w-4/5 text-white text-center  break-all font-montserrat">Created a basic calculator.</div>
        </div>
        <div className="h-96 w-80  flex items-center justify-center rounded-3xl flex-col bg-gray-800">
          <div className="h-48 w-48   bg-transparent">
            <img className="h-full w-full object-cover rounded-2xl" src="/portfoliopic.PNG" alt="project1-image" id="image"/>  
          </div>
          <div className="w-auto mx-auto flex justify-center -mt-5 text-white bg-gray-800 rounded-t-lg p-2.5 font-montserrat font-semibold">Personal Portfolio</div>
          <div className="mt-5 mb-0 w-4/5 text-white text-center  break-all font-montserrat">Created a personal portfolio.</div>
        </div>
        <div className="h-96 w-80  flex items-center justify-center rounded-3xl flex-col bg-gray-800">
          <div className="h-48 w-48   bg-transparent">
            <img className="h-full w-full object-cover rounded-2xl" src="/deck.PNG" alt="project1-image" id="image"/>  
          </div>
          <div className="w-auto mx-auto flex justify-center -mt-5 text-white bg-gray-800 rounded-t-lg p-2.5 font-montserrat font-semibold">Deck Editor</div>
          <div className="mt-5 mb-0 w-4/5 text-white text-center  break-all font-montserrat">Created a deck editor for a group project.</div>
        </div>
        </div>
        </div>
    </div>
  )
}
