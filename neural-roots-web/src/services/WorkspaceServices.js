
export default class WorkspaceServices{

    async getSidebarDataRequest(authTokens){
        var response = null
        try{
            response = await fetch('http://127.0.0.1:8000/api/all-routes/', {
                method:'GET',
                headers:{
                    'Content-Type':'application/json',
                    'Authorization':'Bearer ' + String(authTokens.access)
                }
            })
        }
        catch(err) {
            response = null
            console.error(err);
        }
        return response
        }
}
