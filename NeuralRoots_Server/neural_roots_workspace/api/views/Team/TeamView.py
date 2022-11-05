from typing import Any
from urllib import request
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
from ....models.Employee.EmployeeDetails import EmployeeDetails
from ....models.Project.ProjectDetails import ProjectDetails
from ...serializers.Employee.EmployeeSerializer import EmployeeListSerializer
from ...serializers.team_serializer.TeamSerializer import *
from ...data_access.TeamDb import TeamDb
from django.http import Http404
from ...data_constant.TeamConstant import TeamConstant
from rest_framework.exceptions import *
from rest_framework.views import exception_handler, APIView

@api_view(["GET"])
def getTeamMembers(request, username):
    """ Get Project Team Members """
    try:
        team_db = TeamDb()
        team_members = team_db.getTeamMembers(username=username)
        team_members_serializer = EmployeeListSerializer(team_members, many=True)
    except EmployeeDetails.DoesNotExist:
        team_members = Http404        
    return Response(team_members_serializer.data)

class ProjectDetail(APIView):
    def __init__(self) -> 'ProjectDetail':
        self.team_db = TeamDb()

    def get(self, request):
        username = request.query_params[TeamConstant.RequestParameter.username]
        project_detail = self.team_db.getProjectDetail(username=username)
        project_detail_serializer = ProjectDetailSerializer(project_detail, many=False)
        response = Response(project_detail_serializer.data, status=status.HTTP_200_OK) 
        return response


