
import Browser from './Browser'
import LoginPage from './LoginPage'
import { RouterProvider , createBrowserRouter} from 'react-router-dom'
import SignupPage from './SignupPage'




const Body = () => {
 

    const appRouter = createBrowserRouter([
 
   {
    path : "/",
    element : <LoginPage/>,
   

   },
   {
    path : "/Browser",
    element : <Browser/>,
    
   },
    {
    path : "/SignupPage",
    element : <SignupPage/>,
    
   }
    ]
    )
   
  return (
    <div>
     <RouterProvider router={appRouter} />
    </div>
  )
}

export default Body
