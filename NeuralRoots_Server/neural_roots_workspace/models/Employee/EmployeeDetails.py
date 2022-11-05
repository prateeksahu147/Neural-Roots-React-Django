from django.db import models
from django.contrib.auth.models import User
from ..Project.ProjectDetails import ProjectDetails


# Generate Auto Employee ID - https://stackoverflow.com/questions/52070462/django-generate-custom-id

class EmployeeDetails(models.Model):
    class Meta:
        db_table = 'WS_EmployeeDetails'

    EmployeeID = models.BigAutoField(primary_key=True, editable=False, unique=True)
    Username = models.ForeignKey(User, on_delete=models.CASCADE, null=False, unique=True)
    Status = models.CharField(max_length=1)
    FirstName = models.CharField(max_length=15)
    LastName = models.CharField(max_length=15)
    Email = models.EmailField()
    ContactNumber = models.BigIntegerField(max_length=15)
    Designation = models.CharField(max_length=20)
    EmploymentType = models.CharField(max_length=20)
    Country = models.CharField(max_length=15)
    State = models.CharField(max_length=20)
    City = models.CharField(max_length=15)
    Date = models.DateTimeField(auto_now=True)
    ProjectAllocation = models.BinaryField(max_length=1)
    ProjectCode = models.ForeignKey(ProjectDetails, on_delete=models.CASCADE)

    def __str__(self) -> str:
        return self.FirstName + ' ' + self.LastName
