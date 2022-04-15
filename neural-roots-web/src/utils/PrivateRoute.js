import React, { useContext } from 'react';
import { Route, Routes, Navigate, Link, useNavigate, Outlet, useLocation} from 'react-router-dom';
import AuthContext from '../context/AuthContext';
import LoginPage from '../pages/neural-roots-workspace/LoginPage';

// Referance : https://www.youtube.com/watch?v=0x8Dap2EIVE

const useAuth = () =>{
    //const user = {logIn : true};
    const {user} = useContext(AuthContext)
    console.log('useAuth : ',user)
    if(user != null){
        return true;
    }
    else{
        return false;
    };
};

// const PrivateRoute = () => {
//     let location = useLocation() 
//     const isAuth = useAuth()
//     console.log('is Auth ? : ', isAuth.logIn)
//     if(isAuth != null){
//         return <Outlet />
//     }
//     else{
//         return < Navigate to = "/login/" replace state ={{from : location}} />
//     } 
//     // const authenticated = false;
//     // console.log('Hit to Private route')
//     // let user = useContext(AuthContext)
//     // let navigate = useNavigate();
//     // console.log(user)
//     // return(
//     //     <Routes>
//     //         <Route {...rest}>{!user ? navigate('/login/') :   children}</Route>
//     //     </Routes>
        
//     // );
// };

const PrivateRoute = ({children, ...rest}) => {
    // let location = useLocation() 
    // const isAuth = useAuth()
    // console.log('is Auth ? : ', isAuth.logIn)
    // if(isAuth != null){
    //     return <Outlet />
    // }
    // else{
    //     return < Navigate to = "/login/" replace state ={{from : location}} />
    // } 
    console.log(useAuth())
    if(useAuth()){
        return <Outlet />
    }
    else{
        return < Navigate to = "/login/" />
    }
   
    // return(
    //     <Routes>
    //         <Route {...rest}> {!user ? navigate("/login/") : children}</Route>
    //     </Routes>
        
    // );
};
export default PrivateRoute;