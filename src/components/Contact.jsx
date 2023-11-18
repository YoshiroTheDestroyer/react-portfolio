import React from 'react'

export default function Contact() {
  return (
    <div className=' py-32 bg-green-500' id='contacts'>
        <div className=' max-w-5xl mx-auto'>
            <h1 className='text-white text-5xl font-bold pb-10'>Contact</h1>
            <p className='text-white text-2xl font-semibold pb-5'>
                If you have any projects in mind, let's talk about it.
            </p>
            <div className='flex items-center gap-2'>
                <p className='text-gray-950 text-lg'>Hit me up at my</p>
                <a href="mailto:ralph_alexander15@yahoo.com" className='text-gray-950 underline text-lg'>Email</a>
            </div>
        </div>
    </div>
  )
}
