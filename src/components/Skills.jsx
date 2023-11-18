import React from 'react'

export default function Skills() {
  return (
    <div className='pb-24 bg-blue-600'>
        <div className="flex flex-col justify-center h-auto w-full  relative overflow-hidden">
            <h4 className="text-white font-montserrat mt-20 mb-16 flex justify-center text-5xl font-bold">My&nbsp;<span className='text-gray-950'>Skills</span></h4>
            <div className="h-auto w-full pt-10  flex justify-center flew-row element">
                <div className="flex items-center justify-center flex-col rounded-full bg-gray-800 h-32 w-32 mx-20">
                    <img className="h-3/6 w-3/5" src="/html.png" alt="html-icon"/>
                </div>
                <div className="flex items-center justify-center flex-col rounded-full bg-gray-800 h-32 w-32 mx-20">
                    <img className="h-3/6 w-3/5" src="/css.png" alt="css-icon"/>
                </div>
                <div className="flex items-center justify-center flex-col rounded-full bg-gray-800 h-32 w-32 mx-20">
                    <img className="h-3/6 w-3/5" src="/js.png" alt="javascript-icon"/>
                </div>
                
            </div>
        </div>
    </div>
  )
}
