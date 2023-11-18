import React from 'react'

export default function Hero() {
  return (
    <div className='py-32 bg-green-500 '>
        <div className='mx-auto max-w-5xl'>
            <div className="flex justify-between flex-row items-center overflow-hidden w-full" id="home">
                <div className='flex flex-col gap-3'>
                    <h1 className='text-white bg-gray-800 px-7 py-7 text-3xl rounded-3xl'>Ralph Alexander</h1>
                    <h3 className='text-white text-center text-2xl uppercase pt-5'>Game Designer</h3>
                </div>
                <div>
                    <img className='max-w-[400px] max object-cover rounded-lg' src="/profile.jpeg" alt="avatar" />
                </div>
                
            </div>
        </div>
    </div>
  )
}

