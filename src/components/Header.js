import React, { useState } from 'react'

import { useNavigate } from 'react-router-dom';

import { signOut } from 'firebase/auth';
import { auth } from '../Utils/firebase';
import { useSelector } from 'react-redux';
import { useDispatch  } from 'react-redux'
import { useEffect } from 'react'
import {  onAuthStateChanged } from "firebase/auth";
import {addUser, removeUser} from "../Utils/userSlice";


const Header = () => {
  const dispatch = useDispatch();
  
 const navigate= useNavigate();
 const user = useSelector((store) => store.user);
  const handlesignout = () =>{
 signOut(auth).then(() => {
  navigate("/")
  // Sign-out successful
}).catch((error) => {
  // An error happened.
});


  }
   useEffect(() =>{
      onAuthStateChanged(auth, (user) => {
  if (user) {
    // User is signed in, see docs for a list of available properties
    // https://firebase.google.com/docs/reference/js/auth.user
    const {uid, email, displayname} = user;
    dispatch(addUser({uid: uid, email: email, displayname : displayname}))
    navigate("/browser")
  } else {
    // User is signed out
    dispatch(removeUser());
  }
});
    },[])
  
  return (
    <div className='w-full h-auto rounded-lg absolute  bg-gradient-to-b from-black flex justify-between ' >
     <img 
     className='w-40'
     src='https://help.nflxext.com/helpcenter/OneTrust/oneTrust_production_2025-07-14/consent/87b6a5c0-0104-4e96-a291-092c11350111/01938dc4-5e9f-7420-a5e4-86ff612f8e2a/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png' 
     alt='netflixlogo'/>
 
     
     {user && 
     <button onClick={handlesignout} 
     className='bg-red-700 rounded-md font-bold text-white '
     >Sign Out</button>}
    </div>
    // 'https://help.nflxext.com/helpcenter/OneTrust/oneTrust_production_2025-07-14/consent/87b6a5c0-0104-4e96-a291-092c11350111/01938dc4-5e9f-7420-a5e4-86ff612f8e2a/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png'

  
  )


}

// const Navigation = () =>{
  
// }
 
export default Header
