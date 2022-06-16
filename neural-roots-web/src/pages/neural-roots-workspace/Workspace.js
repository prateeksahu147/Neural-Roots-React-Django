import React, {useState, useEffect, useContext} from "react";
import AuthContext from "../../context/AuthContext";
import WorkspaceServices from "../../services/WorkspaceServices";
import { Outlet } from "react-router-dom";
import SideNavbar from "../../layout/neural-roots-workspace/SideNavbar";
import MinimizedNavbar from "../../layout/neural-roots-workspace/MinimizedNavbar";
import { Titlebar } from "../../layout/neural-roots-workspace/Titlebar";

const Workspace = () => 
{
    
    //#region : Define Workspace State
    //et [notes, setNotes] = useState([])
    let [sidebarData, setSidebarData] = useState([])
    //#endregion
    
    //#region : Initialization
    var workspaceServices = new WorkspaceServices() 
    //#endregion
    
    let {authTokens,logOutUser} = useContext(AuthContext)
    useEffect(()=>{
        getSidebarData()
    })

    // let getNotes = async() =>{
    //     let response = await fetch('http://127.0.0.1:8000/api/notes/', {
    //         method:'GET',
    //         headers:{
    //             'Content-Type':'application/json',
    //             'Authorization':'Bearer ' + String(authTokens.access)
    //         }
    //     })
    //     let data = await response.json()
    //     if(response.status === 200){
    //         setNotes(data)
    //     }
    //     else if(response.statusText === 'Unauthorized'){
    //         logOutUser()
    //     }        
    // }
    // Get Sidebar data 

    let  getSidebarData = async () => {
        try
        {
            let response = null
            response = await workspaceServices.getSidebarDataRequest(authTokens)
            if(response != null && response.status === 200){
                let data = await response.json()
                setSidebarData(data)
            }
            else{
                logOutUser()
            }
        }
        catch(err)
        {
            console.error(err);
        }
    }
    let title = "Dashboard"
    return(
            <div>
                {/* <SidebarComp props={sidebarData}/> */}
                <SideNavbar props={sidebarData} />
                <MinimizedNavbar props={sidebarData} />
                <Titlebar />
                <Outlet />
            </div>
            )
};

export default Workspace;