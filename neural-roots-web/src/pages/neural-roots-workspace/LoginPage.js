import React , {useContext} from "react";
import { Navigate, useNavigate } from "react-router-dom";
import LoginComp from "../../components/neural-roots-workspace/LoginComp";
import AuthContext from "../../context/AuthContext";


const LoginPage = () => {
    const navigate = useNavigate()
    let {user} = useContext(AuthContext)
        if(user == null)
        {return(
            <div>
                <LoginComp />
            </div> 
            )}
        else{
            return < Navigate to = "/workspace/" />
        }
};
export default LoginPage;