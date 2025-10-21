import React, { useRef, useState } from 'react'
import Header from './Header'
import { validate } from '../Utils/Validate';
import { createUserWithEmailAndPassword,signInWithEmailAndPassword } from "firebase/auth";
import { auth } from '../Utils/firebase';





function LoginPage() {
  const [Signinform ,setSigninform] = useState(true);
  const[ErrorMessage, setErrorMessage] = useState();
 
  const signupform = ()=>{
     setSigninform(!Signinform)

     
  }


 const email = useRef(null);
 const password = useRef(null);
 const name = useRef(null);

  const handleButton = () => {

    const message = validate(email.current.value,password.current.value);
    setErrorMessage(message)

    if(message) return ;
  
    if(!Signinform) { 
        createUserWithEmailAndPassword
        (auth, email.current.value, password.current.value)
  .then((userCredential) => { 
    // Signed up 
    const user = userCredential.user;

    
    // Navigate("/Browser")
    console.log(user)
   
    // ... 
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    setErrorMessage(errorCode + "" + errorMessage)
    // ..
  });

    } 
    else {
      //signin
      signInWithEmailAndPassword(auth, email.current.value, password.current.value)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;

    
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    setErrorMessage(errorCode+""+errorMessage)
  });

    }

  
    
    
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
      <form onSubmit={(e)=> e.preventDefault()}
      className=' top-1/3 left-1/3 absolute  items-center flex-col bg-opacity-80 bg-black box-border
      rounded-md shadow-lg text-white  w-100 inline-flex' >
       <h1 className='text-3xl font-bold mb-6'>{Signinform ? "sign In" : "sign Up"}</h1>
       {!Signinform && <input 
      type='name'
      ref={name}
      placeholder='Full name'
       className='text-center w-80 p-2 mb-3 rounded-lg bg-black focus:outline-none  '
     /> }
      <input
      ref={email}
      type='email'
      placeholder='Email'
      className='text-center w-80 p-2 mb-4 rounded-lg  bg-black focus:outline-none  '
     /> 
     
      <input
      ref={password}
      type='password'
      placeholder='password'
       className='text-center w-80 p-2 mb-3 rounded-lg  bg-black focus:outline-none  '
     /> 

     <p className='text-sm text-red-700 font-extrabold'>{ErrorMessage}</p>
       <button onClick={handleButton}
       type='submit'
       className='bg-red-700 p-2 m-3 w-50 h-13  rounded-lg mb-4'>
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
