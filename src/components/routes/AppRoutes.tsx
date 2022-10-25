import {Route,Routes } from "react-router-dom";
import Homepage from "../screens/Homepage/Homepage";
import Login from "../screens/UserLogin/Login/Login";
import Register from "../screens/UserLogin/Register/Register";

import { ROUTES } from "./routes";
export const AppRoutes=()=>{
    return <Routes>
    
        {ROUTES.map((route,key)=>(
            <Route path={route.path} element={route.element}  key={key}/>
        ))}
        {/* <Route element="/" path={<Homepage/>} exact={true}/>
        <Route element="/login" path={<Login/>} exact={true}/>
        <Route element="/register" path={<Register/>} exact={true}/>  */}
    </Routes>

}