import React, { useState } from 'react'
import Header from './Header'

function LoginPage() {
  const [Signinform ,setSigninform] = useState(true);
  const signupform = ()=>{
     setSigninform(!Signinform)
  }
  return (
   <div className='relative w-screen h-screen '>
   <Header/>
   <div>
    <img 
    src=' https://assets.nflxext.com/ffe/siteui/vlv3/258d0f77-2241-4282-b613-8354a7675d1a/web/US-en-20250721-TRIFECTA-perspective_6d968797-b773-4ec4-aa69-2a9c2e41ae94_small.jpg'
    alt='background'
    className='top-0 left-0 w-full h-full object-cover z-10'/>
   </div>
    <div className='  items-center justify-center max-h-screen flex flex-col bg-black '>
      <form className=' top-1/3 left-1/3 absolute flex items-center flex-col bg-opacity-80 bg-black
      rounded-md shadow-lg text-white' >
       <h1 className='font-bold p-3 m-4'>{Signinform ? "sign In" : "sign Up"}</h1>
       {!Signinform && <input 
      type='name'
      placeholder='Full name'
       className='text-center w-80 p-2 mb-3 rounded-lg bg-black focus:outline-none  '
     /> }
      <input
      type='email'
      placeholder='Email'
      className='text-center w-80 p-2 mb-4 rounded-lg  bg-slate-500 focus:outline-none  '
     /> 
     
      <input
      type='password'
      placeholder='password'
       className='text-center w-80 p-2 mb-3 rounded-lg  bg-slate-500 focus:outline-none  '
     /> 
       <button 
       type='submit'
       className='bg-red-700 p-2 m-3 w-80 rounded-lg mb-4'>
       {Signinform ? "signin":"signup"} 
       </button>
       <div>
        <p
        className='py-4 text-sm' onClick={signupform}
        >{Signinform ? "dont have a account ? Signup":"already user signin now" }</p>
        
      </div>
       </form>
       
    </div>
    </div>
    
  )
}

export default LoginPage
