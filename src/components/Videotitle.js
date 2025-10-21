import React from 'react'

const Videotitle = ({original_title,overview}) => {
  return (
    <div className='pt-36'>
      <h1 className='text-6xl font-bold'>{original_title}</h1>
      <p className='py-6 w-1/4 text-xs'>{overview}</p>
      <div>
        <button className='bg-gray-500 text-black px-8 rounded-lg bg-opacity-50 m-2 '>PLAY</button>
        <button className='bg-gray-500 text-black px-8 rounded-lg bg-opacity-50 '> info</button>
      </div>
    </div>
  )
}

export default Videotitle
