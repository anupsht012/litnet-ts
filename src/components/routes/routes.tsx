import Homepage from "../screens/Homepage/Homepage";
import Review from "../screens/Review/Review";
import Login from "../screens/UserLogin/Login/Login";
import Register from "../screens/UserLogin/Register/Register";

export const ROUTES=[
   
    {path:"/*", element:<Homepage/>},
    {path:"/homepage", element:<Homepage/>},
    {path:"/login" ,element:<Login/>},
    {path:"/register" , element:<Register/>},
    {path:"/review" , element:<Review/>},
    // {path:"*" , element:<div className='page'>Page not found</div>}

]
        
