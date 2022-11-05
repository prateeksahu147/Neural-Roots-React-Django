from ..data_access.SharedDb import SharedDb
from ...models.Employee.EmployeeDetails import EmployeeDetails
from django.contrib.auth.models import User
from ...models.Project.ProjectDetails import ProjectDetails
import typing

class TeamDb(SharedDb):
    def __init__(self) -> None:
        pass
    
    def getTeamMembers(self, username):
        try:
            user_id = SharedDb.getUserID(username=username)
            user_detail = EmployeeDetails.objects.filter(Username_id = user_id).get()
            project_code = user_detail.ProjectCode
            team_members = EmployeeDetails.objects.filter(ProjectCode =project_code)
        except EmployeeDetails.DoesNotExist:
            team_members = None
        return team_members
    
    def getProjectDetail(self, username):
        user_id = SharedDb.getUserID(username=username)
        user = self.getUserDetail(user_id)
        project_code = user.ProjectCode_id
        project_detail = ProjectDetails.objects.get(ProjectCode = project_code)
        return project_detail

    def getUserDetail(self, user_id) -> EmployeeDetails: 
        return EmployeeDetails.objects.filter(Username_id = user_id).get()
        
