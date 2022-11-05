from django.shortcuts import render
from django.http import Http404
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from rest_framework.permissions import IsAuthenticated
from ....models.Employee.EmployeeDetails import EmployeeDetails
from ...serializers.Employee.EmployeeSerializer import EmployeeListSerializer
import logging
from django.contrib.auth.models import User

class EmployeeList(APIView):
    logs = logging.getLogger()
    #permission_classes = [IsAuthenticated]

    def get(self,request ,username:str):
        project_id = self.get_employee_list_by_project_id(username)
        employee_list = EmployeeDetails.objects.filter(ProjectCode =project_id)
        employee_list_serializer = EmployeeListSerializer(employee_list, many=True)
        return Response(employee_list_serializer.data)
    

    def get_employee_list_by_project_id(self, username:str):
        username_id = User.objects.filter(username = username).get()
        employee_object = EmployeeDetails.objects.filter(Username_id = 1).get()
        try:
            if employee_object is not None:
                return employee_object.ProjectCode
        except EmployeeDetails.DoesNotExist:
            raise Http404

    @staticmethod
    def post(request):
        employee_serializer = EmployeeListSerializer(data=request.data)
        if employee_serializer.is_valid():
            employee_serializer.save()
            return Response(employee_serializer.data, status=status.HTTP_201_CREATED)
        return Response(employee_serializer.errors, status=status.HTTP_400_BAD_REQUEST)



# class EmployeeDetail(APIView):
#     # permission_classes =  [IsAuthenticated]
#     def get(self, request, username):
#         employee_detail = self.get_object(username=username)
#         employee_detail_serializer = EmployeeListSerializer(employee_detail, many=True)
#         return Response(employee_detail_serializer)
#
#     def get_object(self, username):
#         try:
#             return EmployeeDetails.objects.get(username=username)
#         except EmployeeDetails.DoesNotExist:
#             raise Http404
