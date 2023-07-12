import Login from '../Components/Login'
import Home from '../Components/Home'
import MyOrders from '../Components/MyOrders'
import Profile from '../Components/Profile'
import Signup from '../Components/Signup'
import Role from '../Components/Role'
import UploadProducts from '../Components/UploadProducts'
import SpecificProduct from '../Components/SpecificProduct'
import Cart from '../Components/Cart'
export const publicRoutes=[
 {
    path:"/",
    element:<Signup/>
 },
 {
    path:"/login",
    element:<Login/>
 },
 {
    path:"/*",
    element:<Login/>
 }
]
export const privateRoutes=[
    {
      path:"/home",
      element:<Home/>
    },
    {
      path:"/MyOrders",
      element:<MyOrders/>
    },
    {
        path:"/profile",
        element:<Profile/>
    },
    {
      path:"/role",
      element:<Role/>
    },
    {
      path:"/upload",
      element:<UploadProducts/>
    },
    {
      path:"/specific",
      element:<SpecificProduct/>
    },
    {
      path:"/cart",
      element:<Cart/>
    },
    {
      path:"/*",
      element:<Home/>
   }
]