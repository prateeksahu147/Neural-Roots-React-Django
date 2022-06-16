from django.contrib import admin

# Register your models here.
from .models.Employee.EmployeeDetails import EmployeeDetails
from .models.Project.ProjectDetails import ProjectDetails
from .models.Todo.Todo import Note
from .models.Routes.WorkspaceRoutes import WorkspaceRoutes
admin.site.register(Note)
admin.site.register(EmployeeDetails)
admin.site.register(ProjectDetails)
admin.site.register(WorkspaceRoutes)