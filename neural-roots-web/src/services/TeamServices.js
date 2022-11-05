
//#region Get Team Member 
export default class TeamServices {

    async getTeamMember (authTokens ,username){
        var response = null
        try{
            response = await fetch('http://127.0.0.1:8000/workspace-api/employee-list/'+username, {
                method:'GET',
                headers:{
                    'Content-Type':'application/json',
                    'Authorization':'Bearer ' + String(authTokens.access)
                }
            })
        }
        catch(err) {
            response = null
        }
        return response
    }
    
}


//#endregion
