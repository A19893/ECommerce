import React from 'react';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import { publicRoutes,privateRoutes } from './Routes/Routes';
import {useSelector} from 'react-redux'
const App = () => {
  const Auth=useSelector((state)=>state.authentication.isAuth)
  return (
    <BrowserRouter>
    <Routes>
      {
        publicRoutes.map((item)=>{
          return(
         Auth===false && <Route path={item.path} element={item.element}/>
          )
        })
      }
      {
        privateRoutes.map((item)=>{
          return(
         Auth && <Route path={item.path} element={item.element}/>
          )
        })
      }
    </Routes>
    </BrowserRouter>
  );
}

export default App;
