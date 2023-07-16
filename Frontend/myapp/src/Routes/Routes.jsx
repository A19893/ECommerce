import Login from '../Components/Login'
import Home from '../Components/Home'
import Profile from '../Components/Profile'
import Signup from '../Components/Signup'
import Role from '../Components/Role'
import UploadProducts from '../Components/UploadProducts'
import SpecificProduct from '../Components/SpecificProduct'
import Cart from '../Components/Cart'
import Address from '../Components/Address'
import BuyNow from '../Components/BuyNow'
import Confirm from '../Components/Confirm'
import Orders from '../Components/Orders'
import SpecificOrder from '../Components/SpecificOrder'
import Dashboard from '../Components/Dashboard'
import ViewProducts from '../Components/ViewProducts'
import UpdateProduct from '../Components/UpdateProduct'
import ViewOrders from '../Components/ViewOrders'
import UpdateOrder from '../Components/UpdateOrder'
import ViewUsers from '../Components/ViewUsers'
import ViewVendors from '../Components/ViewVendors'
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
      path:"/address",
      element:<Address/>
    },
    {
      path:"/buy",
      element:<BuyNow/>
    },
    {
      path:"/confirm",
      element:<Confirm/>
    },
    {
      path:'/orders',
      element:<Orders/>
    },
    {
      path:'/specificOrder',
      element:<SpecificOrder/>
    },
    {
      path:'/dashBoard',
      element:<Dashboard/>
    },
    {
      path:'/viewProducts',
      element:<ViewProducts/>
    },
    {
      path:'/updateProduct',
      element:<UpdateProduct/>
    },
    {
      path:'/viewOrders',
      element:<ViewOrders/>
    },
    {
      path:'/updateOrder',
      element:<UpdateOrder/>
    },
    {
      path:'/viewUsers',
      element:<ViewUsers/>
    },
    {
      path:'/viewVendors',
      element:<ViewVendors/>
    },
    {
      path:"/*",
      element:<Home/>
   }
]