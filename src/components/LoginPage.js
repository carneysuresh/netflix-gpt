import React from 'react'

function LoginPage() {
  return (
    <div className=' items-center justify-center max-h-screen flex flex-col '>
      <form className='flex items-center flex-col bg-opacity-80 bg-gray-900
      rounded-md shadow-lg text-white' >
        <label>Email</label>
      <input
      type='email'
      placeholder='Email'
      className='text-center w-80 p-3 mb-4 rounded-lg bg-gray-800 border-gray-900 focus:outline-none  '
     /> 
     <label>password</label>
      <input
      type='password'
      placeholder='password'
       className='text-center w-80 p-3 mb-4 rounded-lg bg-gray-800 border-gray-900 focus:outline-none  '
     /> 
       <button 
       type='submit'
       className='bg-lime-400'>
        Login
       </button>
       
       </form>
       <div>
        <p
        className='text-center mt-4 text-sm '
        >dont have a account {''}</p>
        <a href='/signuppage'> Signup</a>
      </div>
    </div>
    
    
  )
}

export default LoginPage
