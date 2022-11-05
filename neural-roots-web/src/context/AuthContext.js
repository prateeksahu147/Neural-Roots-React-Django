import {createContext, useState, useEffect,React} from 'react';
import jwt_decode from "jwt-decode";
import {useNavigate } from 'react-router-dom';

const AuthContext = createContext()

export default AuthContext;

export const AuthProvider = ({children}) => {
    
    // Hooks
    let [username , setUsername] = useState(null);
    let [authTokens, setAuthTokens] = useState(()=> localStorage.getItem('authTokens') ? JSON.parse(localStorage.getItem('authTokens')) : null)
    let [user, setUser] = useState(()=> localStorage.getItem('authTokens') ? jwt_decode(localStorage.getItem('authTokens')) : null)
    let [loading , setLoading ] = useState(true)
    const navigate = useNavigate()

    let loginUser = async (e) =>{

        e.preventDefault()
        let response = await fetch('http://127.0.0.1:8000/workspace-api/token/', {
            method : 'POST',
            headers :{
                'Content-Type':'application/json'
            },
            body: JSON.stringify({'username': e.target.username.value, 'password': e.target.password.value})
        })
        
        let data = await response.json()
        if(response.status == 200){
            setAuthTokens(data)
            setUser(jwt_decode(data.access))
            localStorage.setItem('authTokens', JSON.stringify(data))
            setUsername(e.target.username.value)
            navigate('/workspace')
        }
        else{
            alert('User not found');
        }
    }

    let logOutUser = () =>{
        setAuthTokens(null)
        setUser(null)
        //localStorage.removeItem('authTokens')
        navigate('/login/')
    }

    let updateTokens = async () =>{
        console.log('update tokens')
        let response = await fetch('http://127.0.0.1:8000/workspace-api/token/refresh/', {
            method : 'POST',
            headers :{
                'Content-Type':'application/json'
            },
            body: JSON.stringify({'refresh' : authTokens.refresh})
        })
        let data = await response.json()
        
        console.log('UPDATE TOKENS' , data)
        if(response.status == 200){
            setAuthTokens(data)
            setUser(jwt_decode(data.access))
            localStorage.setItem('authTokens', JSON.stringify(data))
        }
        else{
            console.log('in else part of update ')
            logOutUser()
        }
    }

    let contextData = {
        user : user,
        username : username,
        loginUser : loginUser,
        logOutUser : logOutUser, 
        authTokens : authTokens
    }

    useEffect(() => {
        let fourMinutes = 1000 * 60 * 4;
        let interval = setInterval(()=>{
            if(authTokens){
                updateTokens()
            }
        }, fourMinutes)
        return () => clearInterval(interval)
    }, [authTokens, loading]
    )

    console.log(user)
    return(
        <AuthContext.Provider value={contextData}>
            {children}
        </AuthContext.Provider>
    )
}

