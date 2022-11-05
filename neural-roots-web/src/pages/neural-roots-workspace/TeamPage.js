import React, { useContext, useEffect, useState } from "react";
import "../../styles/TeamStyle.css";
import AuthContext from "../../context/AuthContext";
import TeamServices from "../../services/TeamServices";
import TeamInfoComp from "../../components/neural-roots-workspace/TeamListComp";

const Team = () =>{

    var teamService = new TeamServices() 

    let [teamMemberList, setTeamMemberList] = useState([])
    let {authTokens, user} = useContext(AuthContext)

    useEffect(()=>{
        getTeamMember()
    })

    let  getTeamMember = async () => {
        try
        {
            let response = null
            response = await teamService.getTeamMember(authTokens, user.username)
            if(response != null && response.status === 200)
            {
                let data = await response.json()
                setTeamMemberList(data)
            }
        }
        catch(err)
        {
            console.error(err);
        }
    }
    return(
        <div className="content">
            <TeamInfoComp teamMemberList={ teamMemberList} />
        </div>
    )
}

export default Team