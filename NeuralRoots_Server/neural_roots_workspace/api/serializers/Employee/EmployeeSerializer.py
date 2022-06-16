from dataclasses import fields
from rest_framework.serializers import ModelSerializer
from ....models.Employee.EmployeeDetails import EmployeeDetails

class EmployeeListSerializer(ModelSerializer):
    class Meta:
        model = EmployeeDetails
        fields = '__all__'
