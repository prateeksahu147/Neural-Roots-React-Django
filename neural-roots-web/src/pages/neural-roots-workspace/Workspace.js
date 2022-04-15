import React, {useState, useEffect, useContext} from "react";
import AuthContext from "../../context/AuthContext";

const Workspace = () => {
    let [notes, setNotes] = useState([])
    console.log('hit worrkspace')
    let {authTokens,logOutUser} = useContext(AuthContext)
    useEffect(()=>{
        getNotes()
    },[])

    let getNotes = async() =>{
        let response = await fetch('http://127.0.0.1:8000/api/notes/', {
            method:'GET',
            headers:{
                'Content-Type':'application/json',
                'Authorization':'Bearer ' + String(authTokens.access)
            }
        })
        let data = await response.json()

        if(response.status === 200){
            setNotes(data)
        }
        else if(response.statusText === 'Unauthorized'){
            logOutUser()
        }
        
    }

    // let getNotes = async()=> {
    //     let response = await fetch('http://127.0.0.1:8000/api/notes/', {
    //         method : 'GET',
    //         headers : {
    //             'Content-Type':'application/json',
    //             'Authorization' : 'Bearer' + String(authTokens.access)
    //         }
    //     })
    //     console.log(response)
    //     let data =await response.json()
    //     setNotes(data)
    // }

    return(
        <div>
        <h1>Workspace</h1>
        <ul>
            {notes.map(note => (
                <li key = {note.id}>{note.body}</li>
            ))}
        </ul>
        </div>
    );
};

export default Workspace;